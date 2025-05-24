// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './Pages/Accueil/Accueil.js';
import Register from './Pages/Authentification/Register';
import Login from './Pages/Authentification/Login';
import Domain from './Pages/Domain/domain.js';
import Projects from './Pages/Projects/projects.js';
import Contact from './Pages/Contact/contact.js';
import  Home from './Pages/Home/Home.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Accueil/>} />
        <Route path='/dashboard' element={<Home/>} />
        <Route path="/Register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/domain" element={<Domain />} />
        <Route path="/projects" element={<Projects />} />
         <Route path="/contact" element={<Contact />} />
     
      </Routes>
    </Router>
    
  );
}

export default App;