import { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Home.module.css';

function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <Header />

      {/* Section Hero (bannière principale) */}
      <section className="hero">
        <div className="hero-content">
          <div className="text-container" id='/'>
            <h1>Welcome To GestionProjet</h1>
            <p>GestionProjet facilitates academic research by providing access to previous academic projects and enhancing collaboration among researchers</p>
          </div>
          <div className="search-container">
            <div className="search-bar">
              <input type="text" placeholder="Rechercher des projets..." />
              <button className="search-button">🔍</button>
            </div>
          </div>
        </div>
      </section>
      
      <main className="content">
        <section className="domains-section">
          <div className="domains-container">
            <h2 className="domains-title">Academic Project Domains</h2>
            <p className="domains-subtitle">Explore our different project categories</p>
      
            <div className="domains-grid">
              {/* Domain 1 */}
              <div className="domain-card">
                <div className="domain-icon">🔬</div>
                <h3>Fundamental Sciences</h3>
                <ul className="domain-topics">
                  <li>Quantum Physics</li>
                  <li>Organic Chemistry</li>
                  <li>Applied Mathematics</li>
                  <li>Molecular Biology</li>
                </ul>
              </div>

              {/* Domain 2 */}
              <div className="domain-card">
                <div className="domain-icon">💻</div>
                <h3>Computer Science</h3>
                <ul className="domain-topics">
                  <li>Artificial Intelligence</li>
                  <li>Cybersecurity</li>
                  <li>Web Development</li>
                  <li>Database Systems</li>
                </ul>
              </div>

              {/* Domain 3 */}
              <div className="domain-card">
                <div className="domain-icon">🏛️</div>
                <h3>Social Sciences</h3>
                <ul className="domain-topics">
                  <li>Behavioral Economics</li>
                  <li>Cognitive Psychology</li>
                  <li>Urban Sociology</li>
                  <li>International Relations</li>
                </ul>
              </div>

              {/* Domain 4 */}
              <div className="domain-card">
                <div className="domain-icon">⚕️</div>
                <h3>Health Sciences</h3>
                <ul className="domain-topics">
                  <li>Preventive Medicine</li>
                  <li>Neuroscience</li>
                  <li>Public Health</li>
                  <li>Pharmacology</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

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

      <Footer />
    </div>
  );
}

export default Home;