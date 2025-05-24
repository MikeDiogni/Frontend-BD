import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import styles from './contact.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SignInModal from '../../Pages/Authentification/Login';
import SignupModal from '../../Pages/Authentification/Register';

const Contact = () => {
  const [contactType, setContactType] = useState('email');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [problem, setProblem] = useState('');
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

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

  // Fonction pour ouvrir le modal de connexion
  const handleSignInClick = () => {
    setShowModal(true);
  };
  
  const [showSignup, setShowSignup] = useState(false);

  const handleOpenSignup = () => {
    setShowModal(false);
    setShowSignup(true);
  };
  return (
    <div className={styles.contactpage}>
      <Header onSignInClick={handleSignInClick} /> {/* Passer la fonction ici */}

      <section className="consult-section1">
        <div className="consult-container">
          <h2>Contact</h2>
          <p className="consult-subtitle">You can easily get in touch with us through these contacts and address</p>
        </div>
      </section>
      <div className={styles.leftside}>
        <div className={styles.contactAndSocialContainer}>
          <div className={styles.contacttype}>
            <div className={styles.socialMediaItem}>
              <img
                src="/images/Gmail.png" 
                alt="Email"
                className={contactType === 'email' ? styles.active : ''}
                onClick={() => handleContactTypeChange('email')}
              />
              <span className={styles.socialText}>Contactez le service via Email</span>
            </div>
            <div className={styles.socialMediaItem}>
              <img
                src="/images/message.png" 
                alt="Message"
                className={contactType === 'message' ? styles.active : ''}
                onClick={() => handleContactTypeChange('message')}
              />
              <span className={styles.socialText}>Contactez le service via SMS</span>
            </div>
          </div>
          <div className={styles.socialMediaContainer}>
            <div className={styles.socialMediaItem}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="/images/facebook.png" alt="Facebook" className={styles.socialIcon} />
              </a>
              <span className={styles.socialText}>Suivez-nous sur Facebook</span>
            </div>
            <div className={styles.socialMediaItem}>
              <a href="https://twitter.com/votreprofil" target="_blank" rel="noopener noreferrer">
                <img src="/images/twitter.png" alt="Twitter" className={styles.socialIcon} />
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
       
      <Footer />
      {showModal && <SignInModal onClose={() => setShowModal(false)} onRegister={handleOpenSignup} />}
      {showSignup && <SignupModal onClose={() => setShowSignup(false)} />}
    </div>
  );
};

export default Contact;