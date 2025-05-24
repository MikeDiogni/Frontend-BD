import React from 'react';
import './Header.css';

const Emoji = ({ symbol, label }) => (
  <span role="img" aria-label={label || ""}>
    {symbol}
  </span>
);

function Header({ onSignInClick }) {
  return (
    <header className="header">
      <div className="icon1"> 
        <img src="/logo.jpeg" alt="Logo" className="logo-img" />
        <div className="nom-logo">GestionProjet</div>
      </div>

      <div className="search-container">
        <div className="search-bar">
          <input type="text" placeholder="Rechercher des projets..." />
          <button className="search-button"><Emoji symbol="🔍" /></button>
        </div>
      </div>
      
      <nav className="nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/domain">Domain</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/contact">Contact</a></li>
          <li>
            <a
              href="#signin"
              className="signin-btn"
              onClick={(e) => {
                e.preventDefault();
                onSignInClick();
              }}
            >

              Sign In
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;