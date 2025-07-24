import React from 'react';

const technicalSkills = [
  {
    category: 'Languages',
    skills: ['Python', 'C', 'C++', 'Java']
  },
  {
    category: 'Web Development',
    skills: ['HTML', 'CSS', 'JavaScript', 'Streamlit', 'Flask']
  },
  {
    category: 'Tools',
    skills: ['Git & GitHub', 'Postman', 'Docker', 'Excel']
  },
  {
    category: 'Cloud & APIs',
    skills: ['MongoDB Atlas', 'Google Cloud', 'Vision AI']
  },
  {
    category: 'Embedded',
    skills: ['Arduino', 'ESP32 Programming']
  },
  {
    category: 'Database',
    skills: ['MySQL', 'GraphDB', 'SQLite']
  }
];

const Skills = () => {
  const hobbies = [
    { icon: '', name: 'Listening to Songs', desc: 'Music is my creative escape.' },
    { icon: '', name: 'Badminton', desc: 'Love the energy and quick reflexes!' },
    { icon: '', name: 'Photography', desc: 'Capturing moments and landscapes.' },
  ];

  return (
    <div className="skills-page animated-section">
      <svg className="skills-shape" width="70" height="70" viewBox="0 0 70 70" fill="none"><rect x="10" y="10" width="50" height="50" rx="15" fill="#6a82fb22"><animate attributeName="y" values="10;20;10" dur="5s" repeatCount="indefinite"/></rect></svg>
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.2rem', justifyContent: 'center', marginBottom: '2rem' }}>
        {technicalSkills.map((group, idx) => (
          <div className="skills-category animated-card" key={idx} style={{ minWidth: '180px', background: 'linear-gradient(135deg, #e0fff4 60%, #ffe0e7 100%)', borderRadius: '14px', boxShadow: '0 2px 12px #ffd70022', padding: '1.2rem 2rem', textAlign: 'center', fontWeight: 600, color: '#007bff', fontSize: '1rem' }}>
            <h3 style={{ color: '#ff6a88', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{group.category}</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {group.skills.map((skill, sidx) => (
                <li key={sidx} style={{ color: '#007bff', fontWeight: 600, margin: '0.2rem 0' }}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <section className="hobbies-section animated-section">
        <h2 className="section-title">Hobbies & Interests</h2>
        <div className="hobbies-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center', marginTop: '1.5rem' }}>
          {hobbies.map((hobby, idx) => (
            <div className="hobby-card animated-card" key={idx} style={{ minWidth: '180px', background: 'linear-gradient(135deg, #e0fff4 60%, #ffe0e7 100%)', borderRadius: '14px', boxShadow: '0 2px 12px #6a82fb22', padding: '1.2rem 2rem', textAlign: 'center', fontWeight: 600, color: '#007bff', fontSize: '1rem', animationDelay: `${0.2 + idx * 0.12}s` }}>
              <span className="hobby-icon" role="img" aria-label={hobby.name} style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }}>{hobby.icon}</span>
              <span className="hobby-name" style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.2rem' }}>{hobby.name}</span>
              <span className="hobby-desc" style={{ color: '#6a82fb', fontSize: '0.98rem' }}>{hobby.desc}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};


export default Skills; 