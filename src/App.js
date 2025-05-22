import { Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage'
import ProjectPage from './Pages/ProjectPage'
import DomainPage from './Pages/DomainPage'

import HeaderPage from './Pages/HeaderPage';
import FooterPage from './Pages/FooterPage';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/header" element={<HeaderPage />} />
        <Route path="/footer" element={<FooterPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/domain" element={<DomainPage />} />
      </Routes>
    </div>
  );
}

export default App;