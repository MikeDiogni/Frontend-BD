// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './Pages/Accueil/Accueil';
import Register from './Pages/Authentification/Register';
import Login from './Pages/Authentification/Login';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Accueil/>} />
        <Route path="/Register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;