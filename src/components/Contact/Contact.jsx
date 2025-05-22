import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import styles from './Contact.module.css';
import Header from '../Header';
import Footer from '../Footer';

const Contact = () => {
  const [contactType, setContactType] = useState('email');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [problem, setProblem] = useState('');
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState(null);

  const handleContactTypeChange = (type) => {
    setContactType(type);
  };

  const validateForm = () => {
    if (!name || !lastName || !problem) {
      setError('Veuillez remplir tous les champs');
      return false;
    }
    if (contactType === 'email' && !email) {
      setError('Veuillez entrer une adresse email valide');
      return false;
    }
    if (contactType === 'message' && !phone) {
      setError('Veuillez entrer un numéro de téléphone valide');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const message = {
        name,
        lastName,
        contact: contactType === 'email' ? email : phone,
        problem,
      };
      fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setMessageSent(true);
          setName('');
          setLastName('');
          setEmail('');
          setPhone('');
          setProblem('');
        })
        .catch((error) => {
          setError('Erreur lors de l\'envoi du message');
          console.error(error);
        });
    }
  };

  return (
    <div>
        <Header/>
    <div className={styles.contactpage}>
        
      <div className={styles.leftside}>
        <div className={styles.contactAndSocialContainer}>
          <div className={styles.contacttype}>
          <div className={styles.socialMediaItem}>
            <img
              src="email.png" // Remplacez par le chemin de votre image
              alt="Email"
              className={contactType === 'email' ? styles.active : ''}
              onClick={() => handleContactTypeChange('email')}
            />
            <span className={styles.socialText}>Contactez le service via Email</span>
            </div>
            <div className={styles.socialMediaItem}>
            <img
              src="message.png" // Remplacez par le chemin de votre image
              alt="Message"
              className={contactType === 'message' ? styles.active : ''}
              onClick={() => handleContactTypeChange('message')}
            />
            <span className={styles.socialText}>Contactez le service via SMS </span>
            </div>
          </div>
          <div className={styles.socialMediaContainer}>
            <div className={styles.socialMediaItem}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="facebook.png" alt="Facebook" className={styles.socialIcon} />
                </a>
                <span className={styles.socialText}>Suivez-nous sur Facebook</span>
              
            </div>
            
            <div className={styles.socialMediaItem}>
            <a href="https://twitter.com/votreprofil" target="_blank" rel="noopener noreferrer">
              <img src="twitter.png" alt="Twitter" className={styles.socialIcon} />
              </a>
              <span className={styles.socialText}>Suivez-nous sur Twitter</span>
              
            </div>
          </div>
        </div>
        {messageSent ? (
          <p>Message envoyé avec succès !</p>
        ) : (
          <form className={styles.contactform} onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nom"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Prénom"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {contactType === 'email' ? (
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Adresse email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            ) : (
              <PhoneInput
                country={'cm'}
                value={phone}
                onChange={(phone) => setPhone(phone)}
              />
            )}
            <textarea
              id="problem"
              name="problem"
              placeholder="Décrivez votre problème"
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
            ></textarea>
            {error && <p className={styles.error}>{error}</p>}
            <button className={styles.envoyer} type="submit">Envoyer</button>
          </form>
        )}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Contact;