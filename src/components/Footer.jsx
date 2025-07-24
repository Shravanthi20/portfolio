import React from "react";
import '../index.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Shravanthi. All rights reserved.
        {" | "}
        <a href="mailto:shravanthi.email@example.com">Contact</a>
        {" | "}
        <a href="https://github.com/Shravanthi20" target="_blank" rel="noopener noreferrer">GitHub</a>
        {" | "}
        <a href="https://linkedin.com/in/shravanthi20" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </p>
    </footer>
  );
};

export default Footer;