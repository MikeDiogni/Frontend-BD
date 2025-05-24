import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>GestionProjet</h3>
          <p className="description">
             GestionProjet is an online platform
              dedicated to the publication and 
              management of academic works, including theses, research projects, and end-of-semester works.</p>
        </div>

        <div className="footer-section">
          <h4>USEFUL LINKS</h4>
          <ul className="footer-links">
            <li><a href="#mentions">Home</a></li>
            <li><a href="#confidentialite">Domain</a></li>
            <li><a href="#plan">Projects</a></li>
            <li><a href="#glossaire">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>CONTACT US</h4>
          <p className="contact-info">BP: 96 Dschang</p>
          <p className="contact-info">PHONE: +237 23233451381</p>
           
        </div>

        <div className="footer-section">
          <h4>ADRESSE</h4>
          <address>
           EMAIL:@univ-dschang<br />
          </address>
        </div>
      </div>

      <div className="copyright">
        <p>
          ©copyright 2025 - Tous droits réservés | Ouest-Cameroun | Dschang
        </p>
      </div>
    </footer>
  );
}

export default Footer;