import React, { useState } from 'react';
import '../../Styles/Login.css';

function SignInModal({ onClose, onRegister }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Données du formulaire:', formData);
    onClose(); // Ferme le popup après soumission
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img src="/logo.jpeg" alt="Logo" className="logo-img" />
        {/* Bouton de fermeture - UN SEUL suffit */}
        <button className="close-button" onClick={onClose}>×</button>
        
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
              name="email" 
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              name="password" 
              required
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="submit-btn">Sign In</button>
        </form>
        <div className="login-redirect">
          Don't have an account? <a href="#register"onClick={onRegister}>Create Your Account</a>
        </div>
      </div>
    </div>
  );
}

export default SignInModal;