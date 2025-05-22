import React, { useState } from 'react';
import '../../Styles/Register.css';

function SignupModal({ onClose }) {
  const [formData, setFormData] = useState({
   username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
     if (formData.password !== formData.confirmPassword) {
      alert("Les mots de passe ne correspondent pas !");
      return;
    }
    console.log('Données du formulaire:', formData);
    onClose(); // Ferme le popup après soumission
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img src="/logo.jpeg" alt="Logo" className="logo-img" />
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Inscription</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nom d'utilisateur</label>
            <input 
              type="text" 
              name="username" 
              required
              onChange={handleChange}
            />
          </div>
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
            <label>Mot de passe</label>
            <input 
              type="password" 
              name="password" 
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Confirmation du mot de passe</label>
            <input 
              type="password" 
              name="confirmPassword" 
              required
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="submit-btn">S'inscrire</button>
        </form>
      </div>
    </div>
  );
}

export default SignupModal;