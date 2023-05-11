import { useEffect, useState } from 'react';
import './App.css';
import MovieBox from './MovieBox';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=bcc4ff10c2939665232d75d8bf0ec093";
const API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&query";

function App() {

  const [movies, setMovies] = useState([]);
  const [query , setQuery] = useState('');

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
        console.log(data);
        setMovies(data.results);
      })
  }, []);

  const searchMovie = async(e)=>{
    e.preventDefault();
    console.log("Searching");
    try{
      const url = `https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results)
    }

    catch(e){
      console.log(e);
    }
  }

  const changeHandler = (e) =>{
    setQuery(e.target.value);
  }

  return (
    <>
      <Navbar bg="dark" expand="lg" className='mb-5'>
        <Container className='text-white d-flex justify-content-between'>
          <Navbar.Brand href="/home" className='text-white'>Movie DB</Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link href="/home" className='text-white'>Home</Nav.Link>
          </Nav>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className=' flex-grow-0'>
            <Form className="d-flex" onSubmit={searchMovie}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                name='query'
                value={query} 
                onChange={changeHandler}
              />
              <Button type='submit' variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="App container">
        {movies.length > 0 ? (
                <div>
                <div className='row text-center g-5'>
                  {movies.map((movieReq) => <MovieBox key={movieReq.id} {...movieReq} />)}
                </div>
              </div>
        ) : (
          <h2 className='no'>
            No Movies Are There
          </h2>
        )}
      </div>
    </>
  );
}

export default App;
