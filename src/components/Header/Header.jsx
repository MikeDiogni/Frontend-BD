import { Link } from 'react-router-dom';
; // Assurez-vous d'importer le CSS correspondant

function Header() {
  return (
    <header className="header">
      <div className="logo-container"> 
        <img src="/logo.jpeg" alt="Logo" className="logo-img" />
        <div className="logo">GestionProjet</div>
      </div>
      <nav className="nav">
        <ul>
          <Link to="/">Home</Link>
          <Link to="/domain">Domain</Link>
          <Link to="/project">Projects</Link>
          <Link to="/contact">Contact</Link>
          <li>
            <Link to="/login"> Sign In</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;