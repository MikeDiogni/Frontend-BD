import React, { useState } from 'react';
import '../../Styles/Accueil.css';
import SignInModal from '../../Pages/Authentification/Login';
import SignupModal from '../../Pages/Authentification/Register';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

// Composant Emoji accessible
const Emoji = ({ symbol, label }) => (
  <span role="img" aria-label={label || ""}>
    {symbol}
  </span>
);

function Accueil() {
  const [showModal, setShowModal] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleOpenSignup = () => {
    setShowModal(false);
    setShowSignup(true);
  };

  return (
    <div className="App">
      <Header onSignInClick={() => setShowModal(true)} />
      
      {/* Contenu principal reste dans Accueil.js */}
      <section className="hero">
        <div className="hero-content">
          <div className="text-container">
            <h1>Welcome To GestionProjet</h1>
              <div className="text-container1"></div>
            <p>GestionProjet facilitates academic research by providing access to previous academic projects and enhancing collaboration among researchers</p>
          </div>
          <div className="image-carousel">
           <img src="/images/im1.jpeg" alt="im" 
                    className="carousel-image" />
                
            
            
          </div>
        </div>
      </section>
      
      <main className="content">
        <section className="domains-section">
          <div className="domains-container">
            <h2 className="domains-title">Academic Project Domains</h2>
            <p className="domains-subtitle">Explore our different project categories</p>
            
            <div className="domains-grid">
              {[
                { icon: '🔬', title: 'Fundamental Sciences', topics: ['Quantum Physics', 'Organic Chemistry', 'Applied Mathematics', 'Molecular Biology'] },
                { icon: '💻', title: 'Computer Science', topics: ['Artificial Intelligence', 'Cybersecurity', 'Web Development', 'Database Systems'] },
                { icon: '🏛️', title: 'Social Sciences', topics: ['Behavioral Economics', 'Cognitive Psychology', 'Urban Sociology', 'International Relations'] },
                { icon: '⚕️', title: 'Health Sciences', topics: ['Preventive Medicine', 'Neuroscience', 'Public Health', 'Pharmacology'] },
              ].map((domain, index) => (
                <div className="domain-card" key={index}>
                  <div className="domain-icon"><Emoji symbol={domain.icon} /></div>
                  <h3>{domain.title}</h3>
                  <ul className="domain-topics">
                    {domain.topics.map((topic, idx) => <li key={idx}>{topic}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="doc-cta-section">
          <div className="doc-cta-container">
            <div className="doc-cta-content">
              <h2 className="doc-cta-title">Optimize Your Document Management Today</h2>
              <p className="doc-cta-description">
                Our platform <span className="doc-highlight">simplifies digital archiving</span> with:
              </p>
              <ul className="doc-cta-features">
                <li className="doc-feature-item">
                  <span className="doc-feature-icon">📁</span> Secure file upload
                </li>
                <li className="doc-feature-item">
                  <span className="doc-feature-icon">🔒</span> Encrypted storage
                </li>
                <li className="doc-feature-item">
                  <span className="doc-feature-icon">⚡</span> Ultra-fast access
                </li>
              </ul>
            </div>
            
            <div className="doc-cta-action">
              <div className="doc-cta-buttons">
                <button className="doc-cta-primary">
                  <span className="doc-btn-icon">📤</span> Start Uploading
                </button>
                <button className="doc-cta-secondary">
                  <span className="doc-btn-icon">👀</span> See How It Works
                </button>
              </div>
              <div className="doc-cta-stats">
                <div className="stat-item">
                  <div className="stat-number">10,000+</div>
                  <div className="stat-label">Documents Managed</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">99.9%</div>
                  <div className="stat-label">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {showModal && <SignInModal onClose={() => setShowModal(false)} onRegister={handleOpenSignup} />}
      {showSignup && <SignupModal onClose={() => setShowSignup(false)} />}
    </div>
  );
}

export default Accueil;