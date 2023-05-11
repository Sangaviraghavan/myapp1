import React from "react"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieBox = ({ title, poster_path, vote_average, release_date, overview }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (

            <div className="col-lg-6 col-xl-3 col-sm-12 align-self-stretch">
                <Card className="h-100">
                    <Card.Img variant="top" src={API_IMG + poster_path} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Button variant="primary" onClick={handleShow}>view More</Button>
                    </Card.Body>
                </Card>
            <Modal aria-labelledby="contained-modal-title-vcenter"
      centered show={show} onHide={handleClose}>
                <Modal.Header closeButton className="border-0">
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img className="modal-img mb-3" src={API_IMG+poster_path}></img>
                    <h2 className="fs-4 mb-0">imdb: {vote_average}</h2>
                    <h3 className="fs-4 mb-4">Release Date: {release_date}</h3>
                    <p className="fw-bold mb-0">overview</p>
                    <p className="small-text mb-0">{overview}</p>
                </Modal.Body>
                <Modal.Footer className="border-0">
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            
            </div>

    )
}

export default MovieBox;