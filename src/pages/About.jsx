import React from "react";
import profileImg from '../assets/profile.jpg';

const timeline = [
  { year: "2025", title: "Research Intern", place: "AgroSSUP, Sony", desc: "Designed ontology-driven QA system using RDF/TTL knowledge graphs. Built polyhouse dataset and fine-tuned transformer models for SPARQL generation." },
  { year: "2025", title: "Open Source Contributor", place: "GirlScript Summer of Code", desc: "Built backend features in Flask for auth & dashboards. Implemented resume parsing APIs reducing manual screening by 70%." },
  { year: "2023–2027", title: "B.Tech, Computer Science & Engineering", place: "Amrita Vishwa Vidyapeetham", desc: "CGPA: 8.77 / 10.0. Third-year undergrad proficient in SQL, data analysis, and backend development." },
  { year: "2024", title: "Diploma in Data Science and Applications", place: "IIT Madras", desc: "Foundations of Data Science. Top Grade in Data Structures and Algorithms (Python)." },
  { year: "2024", title: "Foundations of Data Science", place: "IIT Madras", desc: "Completed foundational coursework in data science." },
  { year: "2023", title: "High School Certificate, CBSE", place: "Suguna International School", desc: "9.62/10" },
];

const certifications = [
  { name: "SAWIT GenAI Hackathon Winner (TanglishMate)", org: "SAWIT", year: "2025" },
  { name: "Finalist — Code for Good", org: "JP Morgan Chase", year: "2024" },
  { name: "Contributor — Social Winter of Code", org: "SWoC", year: "2025" },
  { name: "Postman API Fundamentals Student Expert", org: "Postman", year: "2024" },
  { name: "Google Cloud Study Jam – Intro to GenAI", org: "Google Cloud", year: "2024" },
  { name: "Gemini + Streamlit App Workshop", org: "Google/Streamlit", year: "2024" },
  { name: "School Topper", org: "Suguna International School", year: "2023", extra: "Score: 481/500" },
];

const About = () => {
  return (
    <div className="about-page">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <img src={profileImg} alt="Profile" className="hero-img" style={{ width: '140px', height: '140px', margin: '0 0 1rem 0' }} />
        <h1 className="hero-title" style={{ fontSize: '2.5rem' }}>About <span className="gradient-text">Me</span></h1>
      </div>

      <div className="glass-panel" style={{ padding: '2rem', marginBottom: '3rem' }}>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-muted)', textAlign: 'center' }}>
          Third-year Computer Science undergraduate with strong proficiency in SQL, data analysis, and data-backed backend development. <br />
          Passionate and experienced in working with real-world datasets, defining indicators, building dashboards, and developing end-to-end systems.
        </p>

        <div style={{ marginTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
          <h2 style={{ color: 'var(--text-main)', marginBottom: '1rem' }}>Background</h2>
          <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-muted)' }}>
            <li style={{ marginBottom: '0.8rem' }}>🎓 <strong>B.Tech CSE</strong> @ Amrita Vishwa Vidyapeetham (8.77/10)</li>
            <li style={{ marginBottom: '0.8rem' }}>📊 <strong>Diploma in Data Science</strong> @ IIT Madras</li>
            <li>🏫 <strong>High School</strong> @ Suguna International School (9.62/10)</li>
          </ul>
        </div>
      </div>

      <section className="timeline-section">
        <h2 style={{ color: 'var(--text-main)', textAlign: 'center', marginBottom: '2rem' }}>Experience & Timeline</h2>
        <ul className="timeline-list">
          {timeline.map((item, idx) => (
            <li className="timeline-item" key={idx}>
              <div className="timeline-dot"></div>
              <div className="timeline-content" style={{ background: 'transparent', boxShadow: 'none', padding: 0 }}>
                <span className="timeline-year">{item.year}</span>
                <h3 style={{ color: 'var(--text-main)', margin: '0.2rem 0', fontSize: '1.2rem' }}>{item.title}</h3>
                <span style={{ color: 'var(--primary)', fontWeight: 600 }}>{item.place}</span>
                <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="glass-panel" style={{ padding: '2rem' }}>
        <h2 style={{ color: 'var(--text-main)', textAlign: 'center', marginBottom: '2rem' }}>Certifications & Awards</h2>
        <div className="skills-list">
          {certifications.map((cert, idx) => (
            <div key={idx} style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', padding: '1rem', borderRadius: '12px', textAlign: 'center', minWidth: '200px' }}>
              <strong style={{ color: 'var(--text-main)', display: 'block' }}>{cert.name}</strong>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{cert.org} | {cert.year}</span>
              {cert.extra && <div style={{ color: 'var(--accent)', fontSize: '0.85rem', marginTop: '0.3rem' }}>{cert.extra}</div>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;