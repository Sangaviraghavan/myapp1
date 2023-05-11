import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NoPage from './NoPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route>
      <Route index element={<App />} />
      <Route path="home" element={<App />} />
      <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);