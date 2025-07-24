import React from "react";
import profileImg from '../images/profile.jpg';

const timeline = [
  { year: "2023–2027", title: "B.Tech, Computer Science & Engineering", place: "Amrita Vishwa Vidyapeetham", desc: "CGPA: 8.69/10. Currently a motivated third-year student with a strong passion for AI/ML, problem-solving, and full-stack development. Actively exploring real-world challenges through hackathons, internships, research, and innovative projects." },
  { year: "2024 (in progress)", title: "Diploma in Data Science and Applications", place: "IIT Madras", desc: "Currently pursuing the diploma program." },
  { year: "2024", title: "Foundations of Data Science", place: "IIT Madras", desc: "Completed foundational coursework in data science." },
  { year: "2023", title: "High School Certificate, CBSE", place: "Suguna International School", desc: "9.64/10" },
];

const certifications = [
  { name: "SAWIT GenAI Hackathon Winner (TanglishMate)", org: "SAWIT", year: "2024" },
  { name: "School Topper", org: "Suguna International School", year: "2023", extra: "Score: 482/500" },
  { name: "Postman API Fundamentals Student Expert", org: "Postman", year: "2024" },
  { name: "Google Cloud Study Jam – Intro to GenAI", org: "Google Cloud", year: "2024" },
  { name: "Gemini + Streamlit App Workshop", org: "Google/Streamlit", year: "2024" },
];

const About = () => {
  return (
    <div className="about-page animated-section">
      <svg className="about-shape" width="80" height="80" viewBox="0 0 80 80" fill="none"><rect x="10" y="10" width="60" height="60" rx="18" fill="#6a82fb22"><animate attributeName="x" values="10;20;10" dur="5s" repeatCount="indefinite"/></rect></svg>
      <img src={profileImg} alt="Profile" className="profile-img about-img" />
      <h1 className="about-title">About Me</h1>
      <div className="about-card">
        <p>
          A motivated third-year B.Tech student in Computer Science at Amrita Vishwa Vidyapeetham with a strong passion for AI/ML, problem-solving, and full-stack development. Actively exploring real-world challenges through hackathons, internships, research, and innovative projects.
        </p>
        <h2 className="about-subtitle">Background</h2>
        <p>
          B.Tech, Computer Science & Engineering, Amrita Vishwa Vidyapeetham (2023–2027), CGPA: 8.69/10<br/>
          Diploma in Data Science and Applications (in progress), IIT Madras<br/>
          Foundations of Data Science, IIT Madras, 2024<br/>
          High School Certificate, CBSE, Suguna International School, 2023, 9.64/10
        </p>
        <h2 className="about-subtitle">Contact</h2>
        <p>
          Feel free to reach out to me via email at <a href="mailto:satyanar061@gmail.com">satyanar061@gmail.com</a>.
        </p>
        <div style={{ margin: '1rem 0', fontSize: '1.1rem', color: '#222', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.3rem' }}>
          <span>📞 7708957333</span>
          <span>✉ <a href="mailto:satyanar061@gmail.com" style={{ color: '#007bff', textDecoration: 'none' }}>satyanar061@gmail.com</a></span>
          <span>🔗 <a href="https://linkedin.com/in/shravanthi-s" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>LinkedIn</a></span>
          <span>💻 <a href="https://github.com/Shravanthi20" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>GitHub</a></span>
        </div>
      </div>
      {/* Timeline / Experience Section */}
      <section className="timeline-section animated-section" style={{ borderBottom: '2px dashed #e0e7ff', paddingBottom: '2rem', marginBottom: '2rem' }}>
        <h2 className="section-title">Experience & Education</h2>
        <ul className="timeline-list">
          {timeline.map((item, idx) => (
            <li className="timeline-item" key={idx} style={{ animationDelay: `${0.2 + idx * 0.15}s` }}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-year">{item.year}</span>
                <h3 className="timeline-title">{item.title}</h3>
                <span className="timeline-place">{item.place}</span>
                <p className="timeline-desc">{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
      {/* Certifications & Awards Section */}
      <section className="certifications-section animated-section" style={{ borderBottom: '2px dashed #e0e7ff', paddingBottom: '2rem', marginBottom: '2rem' }}>
        <h2 className="section-title">Certifications & Awards</h2>
        <div className="certifications-list">
          {certifications.map((cert, idx) => (
            <div className="cert-card animated-card" key={idx} style={{ position: 'relative', minWidth: '180px', background: 'linear-gradient(135deg, #e0fff4 60%, #ffe0e7 100%)', borderRadius: '14px', boxShadow: '0 2px 12px #ffd70022', padding: '1.2rem 2rem', textAlign: 'center', fontWeight: 600, color: '#007bff', fontSize: '1rem', margin: '0.5rem' }}>
              <span style={{ position: 'absolute', top: '10px', right: '10px', fontSize: '1.3rem' }} role="img" aria-label="award">🏅</span>
              <span className="cert-name">{cert.name}</span>
              <span className="cert-org">{cert.org}</span>
              <span className="cert-year">{cert.year}</span>
              {cert.extra && <span className="cert-extra" style={{ display: 'block', color: '#ff6a88', fontWeight: 700 }}>{cert.extra}</span>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;