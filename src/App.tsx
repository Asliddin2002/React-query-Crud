import React from 'react';
import './App.css';
import {Routes, Route } from 'react-router-dom';
import BooksList from './Components/BooksList.';
import CreateBook from './Components/CreateBook';
import UpdateBook from './Components/UpdateBook';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path = "/" element = {<BooksList/>}/>
        <Route path = "/create-book" element = {<CreateBook/>}/>
        <Route path = "/update-book" element = {<UpdateBook/>}/>
    </Routes>
    </>
    
    
  );
}

export default App;
