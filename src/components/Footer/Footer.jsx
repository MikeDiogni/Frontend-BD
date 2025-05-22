

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>GestionProjet</h3>
          <p className="description">
            Il a pour objectif de permettre aux utilisateurs de soumettre
            et de téléverser des documents dans un système de gestion de documents en ligne.
          </p>
        </div>

        <div className="footer-section">
          <h4>INFORMATIONS</h4>
          <ul className="footer-links">
            <li><a href="#mentions">Mentions légales</a></li>
            <li><a href="#confidentialite">Politique de confidentialité</a></li>
            <li><a href="#plan">Plan du site</a></li>
            <li><a href="#glossaire">Glossaire SEO</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>CONTACT</h4>
          <p className="contact-info">876756474</p>
          <p className="contact-info">adriene@gmail.com</p>
        </div>

        <div className="footer-section">
          <h4>ADRESSE</h4>
          <address>
            Mme. Adriene<br />
            #########<br />
          </address>
        </div>
      </div>

      <div className="copyright">
        <p>
          © 2025 - Tous droits réservés | Ouest-Cameroun | Dschang
        </p>
      </div>
    </footer>
  );
}

export default Footer;