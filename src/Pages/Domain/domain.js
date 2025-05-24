import React, { useState } from 'react';
import '../../Styles/Accueil.css';
import '../../Styles/domain.css';
import SignInModal from '../../Pages/Authentification/Login';
import SignupModal from '../../Pages/Authentification/Register';
import Header from '../../components/Header/Header'; // Import du Header
import Footer from '../../components/Footer/Footer'; // Import du Footer

// Composant Emoji accessible
const Emoji = ({ symbol, label }) => (
  <span role="img" aria-label={label || ""}>
    {symbol}
  </span>
);

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleOpenSignup = () => {
    setShowModal(false);
    setShowSignup(true);
  };

  return (
    <div className="App">
      <Header onSignInClick={() => setShowModal(true)} />
      
      {/* Contenu principal uniquement */}
      <section className="consult-section1">
        <div className="consult-container">
          <h2>Consult By Domains</h2>
          <p className="consult-subtitle">Here you get access to all our domains available</p>
        </div>
      </section> 
      
      <section className="consult-section">
        <div className="domain-filters">
          <div className="filter-group">
            <label>Faculty</label>
            <select>
              <option>Select Faculty</option>
              {/* Add actual faculty options here */}
            </select>
          </div>
          
          <div className="filter-group">
            <label>Department</label>
            <select>
              <option>Select Department</option>
              {/* Add actual department options here */}
            </select>
          </div>
        
          <div className="filter-group">
            <label>Level</label>
            <select>
              <option>Select Level</option>
              {/* Add actual level options here */}
            </select>
          </div>
          
          <div className="search-container">
            <div className="search-bar1">
              <input type="text" placeholder="search domain.." />
              <button className="search-domain-btn"><Emoji symbol="🔍" /></button>
            </div>
          </div>
        </div>
        
        <div className="pagination-controls">
          <button className="nav-btn prev-btn">Previous</button>
          <button className="nav-btn next-btn">Next</button>
        </div>
      </section>

      <Footer />

      {showModal && <SignInModal onClose={() => setShowModal(false)} onRegister={handleOpenSignup} />}
      {showSignup && <SignupModal onClose={() => setShowSignup(false)} />}
    </div>
  );
}

export default App;