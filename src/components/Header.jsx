
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },

];

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAlternateTheme, setIsAlternateTheme] = useState(false);

  const toggleTheme = () => {
    setIsAlternateTheme(!isAlternateTheme);
    document.body.classList.toggle('light-theme');
  };

  return (
    <header className="header">
      <nav className="navbar glass-panel">
        <Link to="/" className="navbar-logo">
          <span className="gradient-text">Shravanthi S</span>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={toggleTheme}
            style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '1.5rem', padding: '0.2rem', lineHeight: 1 }}
            title={isAlternateTheme ? "Switch to Dark Mode" : "Switch to Light Mode"}
          >
            {isAlternateTheme ? '🌙' : '☀️'}
          </button>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        <ul className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
          {navLinks.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={location.pathname === link.to ? "active" : ""}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;