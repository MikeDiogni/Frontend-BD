// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './Pages/Accueil/Accueil';
import Register from './Pages/Authentification/Register';
import Login from './Pages/Authentification/Login';
import Home from './Pages/Home/Home'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Accueil/>} />
        <Route path="/Register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path='/Home' element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;