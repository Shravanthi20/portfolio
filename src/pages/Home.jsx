import React from "react";
import ProjectCard from "../components/ProjectCard";
import profileImg from '../assets/profile.jpg';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-bg">
          {/* Animated SVG wave background */}
          <svg className="hero-shape" width="120" height="120" viewBox="0 0 120 120" fill="none"><circle cx="60" cy="60" r="60" fill="#ffd70033"><animate attributeName="cy" values="60;80;60" dur="4s" repeatCount="indefinite"/></circle></svg>
        </div>
        <div className="hero-content">
          <img src={profileImg} alt="Profile" className="profile-img hero-img" />
          <h1 className="hero-title">Hi, I'm Shravanthi S</h1>
          <p className="hero-subtitle">A motivated third-year B.Tech student in Computer Science at Amrita Vishwa Vidyapeetham, passionate about AI/ML, problem-solving, and full-stack development. Exploring real-world challenges through hackathons, internships, research, and innovative projects.</p>
          <div style={{ margin: '1.5rem 0', fontSize: '1.1rem', color: '#222', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem' }}>
            <span>📞 7708957333</span>
            <span>✉ <a href="mailto:satyanar061@gmail.com" style={{ color: '#007bff', textDecoration: 'none' }}>satyanar061@gmail.com</a></span>
            <span>🔗 <a href="https://linkedin.com/in/shravanthi-s" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>LinkedIn</a></span>
            <span>💻 <a href="https://github.com/Shravanthi20" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>GitHub</a></span>
          </div>
          <a href="/projects" className="hero-cta">View My Work</a>
        </div>
      </section>
      {/* Fun Fact Section */}
      <section className="fun-fact-section animated-section">
        <h2 className="section-title">Did You Know?</h2>
        <div style={{ background: 'linear-gradient(135deg, #e0fff4 60%, #ffe0e7 100%)', borderRadius: '14px', boxShadow: '0 2px 12px #ffd70022', padding: '2rem', textAlign: 'center', fontWeight: 600, color: '#007bff', fontSize: '1.2rem', margin: '2rem auto', maxWidth: '600px' }}>
          <span role="img" aria-label="lightbulb">💡</span> Did you know? The first computer bug was an actual moth found in a computer in 1947! Creativity and curiosity drive innovation—keep exploring and building.
        </div>
      </section>
    </div>
  );
};

export default Home;