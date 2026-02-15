import React from "react";
import '../index.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p style={{ color: 'var(--text-muted)' }}>
        &copy; {new Date().getFullYear()} Shravanthi Satyanarayanan. All rights reserved.
      </p>
      <div className="social-links">
        <a href="mailto:satyanar061@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
        <a href="https://github.com/Shravanthi20" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/shravanthi-s" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;