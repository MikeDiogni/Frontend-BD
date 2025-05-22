import { useState } from 'react';
import './SignInModal.css';

function SignInModal({ onClose }) {
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
    // Ici vous ajouterez plus tard la logique d'envoi au backend
    console.log('Données du formulaire:', formData);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img src="/logo.jpeg" alt="Logo" className="logo-img" />
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
          <button type="submit" className="submit-btn">Sign Up</button>
        </form>
        <div className="login-redirect">
          Already have an account? <a href="#login">Create Your Account</a>
        </div>
      </div>
    </div>
  );
}

export default SignInModal;