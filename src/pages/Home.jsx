
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import profileImg from '../assets/profile.jpg';

const roles = ["Full Stack Developer", "AI/ML Enthusiast", "Data Scientist", "Problem Solver"];

const Home = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[currentRole];

      if (isDeleting) {
        setDisplayText(prev => prev.substring(0, prev.length - 1));
      } else {
        setDisplayText(prev => fullText.substring(0, prev.length + 1));
      }

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentRole(prev => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRole]);

  return (
    <div className="home-page">
      <section className="hero-section">
        <img src={profileImg} alt="Shravanthi S" className="hero-img" />
        <h1 className="hero-title">
          Hi, I'm <span className="gradient-text">Shravanthi S</span>
        </h1>
        <h2 className="hero-subtitle" style={{ minHeight: '1.5em', fontSize: '1.5rem', color: '#a5b4fc', fontWeight: 600 }}>
          {displayText}<span className="cursor">|</span>
        </h2>
        <p className="hero-subtitle" style={{ marginTop: '1rem', maxWidth: '700px' }}>
          A motivated third-year B.Tech student in Computer Science at Amrita Vishwa Vidyapeetham.
          Passionate about building scalable systems and exploring the frontiers of AI/ML.
        </p>

        <div style={{ marginTop: '2rem' }}>
          <Link to="/projects" className="btn-primary" style={{ marginRight: '1rem' }}>View My Work</Link>

        </div>

        <div style={{ marginTop: '3rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        </div>
      </section>

      <section className="glass-panel" style={{ padding: '2rem', textAlign: 'center', marginTop: '2rem' }}>
        <h2 style={{ color: 'var(--text-main)', marginBottom: '1.5rem' }}>Coding <span className="gradient-text">Activity</span></h2>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
          <img
            src="https://awesome-github-stats.azurewebsites.net/user-stats/Shravanthi20?theme=github-dark&cardType=github"
            alt="GitHub Stats"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          <img
            src="https://leetcard.jacoblin.cool/satyanar061?theme=dark&font=Josefin%20Slab&ext=heatmap"
            alt="LeetCode Stats"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          <img
            src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Shravanthi20&theme=radical"
            alt="Profile Details"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      </section>
    </div>
  );
};

export default Home;