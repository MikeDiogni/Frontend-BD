import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Simulation de connexion
      if (email && password) {
        await new Promise(resolve => setTimeout(resolve, 500));
        navigate('/');
      } else {
        setError('Veuillez remplir tous les champs');
      }
    } catch (err) {
      setError('Une erreur est survenue');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.title}>Connexion</h2>
      {error && <p className={styles.error}>{error}</p>}
      
      <div className='connexion'>
        <img src="/login.png" alt="image de connexion" />
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            placeholder="Entrez votre email"
            required
          />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>Mot de passe</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            placeholder="Entrez votre mot de passe"
            required
          />
        </div>
        
        <button type="submit" className={styles.button}>Se connecter</button>
        <div className={styles.registerLink}>
          <span>Pas encore de compte ? </span>
          <a href="/register" className={styles.link}>S'inscrire</a>
        </div>
      </form>
    </div>
  );
};

export default Login;