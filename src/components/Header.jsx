import React from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const location = useLocation();
  return (
    <header className="header" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Animated SVG wave background */}
      <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }} viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#6a82fb" fillOpacity="0.18">
          <animate attributeName="d" dur="8s" repeatCount="indefinite"
            values="M0,40 Q360,80 720,40 T1440,40 V120 H0 Z;
                    M0,60 Q360,20 720,60 T1440,60 V120 H0 Z;
                    M0,40 Q360,80 720,40 T1440,40 V120 H0 Z" />
        </path>
        <path fill="#ffd700" fillOpacity="0.10">
          <animate attributeName="d" dur="10s" repeatCount="indefinite"
            values="M0,60 Q360,20 720,60 T1440,60 V120 H0 Z;
                    M0,40 Q360,80 720,40 T1440,40 V120 H0 Z;
                    M0,60 Q360,20 720,60 T1440,60 V120 H0 Z" />
        </path>
      </svg>
      {/* Navbar content */}
      <nav className="navbar" style={{ position: 'relative', zIndex: 1 }}>
        <div className="navbar-logo">
          <span className="navbar-title" style={{ fontWeight: 900, letterSpacing: '2px', fontSize: '1.5rem', color: '#222' }}>My Portfolio</span>
        </div>
        <ul className="navbar-links">
          {navLinks.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={
                  location.pathname === link.to ? "active" : undefined
                }
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