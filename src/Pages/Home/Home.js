import React, { useState, useEffect } from 'react';
import '../../Styles/dashboard.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Recherche..."
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        🔍
      </button>
    </div>
  );
};

const UploadModal = ({ show, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    field: '',
    class: '',
    description: '',
    file: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, file: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>Nouveau Projet</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Titre du projet</label>
            <input 
              type="text" 
              name="title" 
              value={formData.title} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Filière</label>
            <select name="field" value={formData.field} onChange={handleChange} required>
              <option value="">Sélectionnez une filière</option>
              <option value="Informatique">Informatique</option>
              <option value="Mathématiques">Mathématiques</option>
              <option value="Physique">Physique</option>
              <option value="Chimie">Chimie</option>
            </select>
          </div>
          <div className="form-group">
            <label>Classe</label>
            <input 
              type="text" 
              name="class" 
              value={formData.class} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea 
              name="description" 
              value={formData.description} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Document</label>
            <input 
              type="file" 
              onChange={handleFileChange} 
              required 
            />
          </div>
          <button type="submit" className="submit-btn">Soumettre</button>
        </form>
      </div>
    </div>
  );
};

const Sidebar = ({ username }) => {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des projets:", error);
      }
    };

    fetchProjects();
  }, []);

  const toggleProjects = () => {
    setIsProjectsOpen(!isProjectsOpen);
  };

  return (
    <div className="sidebar">
      <h2 onClick={toggleProjects} style={{ cursor: 'pointer' }}>
        Mes Projets
      </h2>
      {isProjectsOpen && (
        <ul className="project-list">
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <li key={index}>{project.name}</li>
            ))
          ) : (
            <li>Aucun projet disponible</li>
          )}
        </ul>
      )}
      <ul className="vertical-menu">
        <li>Profil</li>
        <li>Paramètres</li>
      </ul>
    </div>
  );
};

const Header = ({ onSearch, username }) => {
  return (
    <div className='header2'>
      <div className='icon2'>
        <img src="/logo.jpeg" alt="Logo" className="logo-img" />
      </div>
      <div className='search'>
        <SearchBar onSearch={onSearch} />
      </div>
      <div className="user-section">
        <div className="user-label">User <span className="user-name">{username}</span></div>
      </div>
    </div>
  );
};

const CombinedDashboard = ({ onSearch }) => {
  const [username, setUsername] = useState('ADRIENE BEI');
  const [showUploadModal, setShowUploadModal] = useState(false);

  // Récupérer le nom d'utilisateur depuis l'API ou le contexte
  useEffect(() => {
    // Exemple: Récupération depuis une API
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/user');
        const data = await response.json();
        setUsername(data.username || 'ADRIENE BEI');
      } catch (error) {
        console.error("Erreur lors de la récupération des données utilisateur:", error);
      }
    };
    
    fetchUserData();
  }, []);

  const handleUploadSubmit = (projectData) => {
    // Ici vous pouvez envoyer les données à votre API
    console.log("Données du projet à soumettre:", projectData);
    // Exemple d'envoi:
    // const formData = new FormData();
    // formData.append('title', projectData.title);
    // formData.append('file', projectData.file);
    // ... etc ...
    // fetch('/api/projects', { method: 'POST', body: formData });
  };

  return (
    <div className="combined-container">
      <Sidebar username={username} />
      <Header onSearch={onSearch} username={username} />
      <div className="main-content">
        <div className="content-wrapper">
          <h1>{username} Bienvenue dans votre espace personnel</h1>
          <p>Vous pouvez télécharger un projet en cliquant sur le bouton ci-dessous.</p>
          <button 
            className="upload-btn" 
            onClick={() => setShowUploadModal(true)}
          >
            + UPLOAD
          </button>
        </div>
        <footer className="dashboard-footer">
          © Copyright <strong>GestionProjet</strong>. All Rights Reserved
        </footer>
      </div>
      
      <UploadModal 
        show={showUploadModal} 
        onClose={() => setShowUploadModal(false)} 
        onSubmit={handleUploadSubmit}
      />
    </div>
  );
};

export default CombinedDashboard;