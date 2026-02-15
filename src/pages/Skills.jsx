import React from 'react';

const technicalSkills = [
  {
    category: 'Languages',
    skills: ['C', 'C++', 'Python', 'Java', 'JavaScript', 'SQL']
  },
  {
    category: 'Web Development',
    skills: ['HTML', 'CSS', 'Streamlit']
  },
  {
    category: 'Frameworks',
    skills: ['React', 'Node.js', 'Express.js', 'Flask', 'FastAPI']
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite', 'GraphDB']
  },
  {
    category: 'Data & Visualization',
    skills: ['Tableau', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'GeoPandas']
  },
  {
    category: 'Cloud & APIs',
    skills: ['MongoDB Atlas', 'Google Cloud', 'Vision AI']
  },
  {
    category: 'Core',
    skills: ['Data Structures and Algorithms', 'DBMS', 'Operating Systems', 'Computer Networks', 'Linux']
  },
  {
    category: 'Embedded',
    skills: ['Arduino', 'ESP32 Programming']
  },
  {
    category: 'Tools',
    skills: ['Git & GitHub', 'Postman', 'Docker', 'Excel']
  }
];

const Skills = () => {
  const hobbies = [
    { icon: '🎧', name: 'Listening to Songs', desc: 'Music is my creative escape.' },
    { icon: '🏸', name: 'Badminton', desc: 'Love the energy and quick reflexes!' },
    { icon: '📸', name: 'Photography', desc: 'Capturing moments and landscapes.' },
  ];

  return (
    <div className="skills-page">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="hero-title">My <span className="gradient-text">Skills</span></h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>A snapshot of my technical expertise and interests.</p>
      </div>

      <div className="skills-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
        {technicalSkills.map((group, idx) => (
          <div className="glass-panel" key={idx} style={{ padding: '1.5rem', transition: 'transform 0.2s', cursor: 'default' }}>
            <h3 style={{ color: 'var(--text-main)', marginBottom: '1rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>{group.category}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {group.skills.map((skill, sidx) => (
                <span key={sidx} style={{ background: 'rgba(99, 102, 241, 0.1)', color: 'var(--primary)', padding: '0.4rem 0.8rem', borderRadius: '4px', fontSize: '0.9rem', fontWeight: 500 }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <section>
        <h2 className="hero-title" style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '2rem' }}>Hobbies & Interests</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
          {hobbies.map((hobby, idx) => (
            <div className="glass-panel" key={idx} style={{ padding: '2rem', textAlign: 'center', minWidth: '220px', maxWidth: '300px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{hobby.icon}</div>
              <h3 style={{ color: 'var(--text-main)', marginBottom: '0.5rem' }}>{hobby.name}</h3>
              <p style={{ color: 'var(--text-muted)' }}>{hobby.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills; 