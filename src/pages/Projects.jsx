import React, { useState } from 'react';
import contractSummariserImg from '../assets/ContractSummariser.png';
import coloreImg from '../assets/colour_home_page.png';
import vehicleImg from '../assets/vehicle.png';
import placeholderImg from '../assets/placeholder.svg';

const projects = [
  {
    title: 'Contract Summarizer',
    description: 'A Streamlit app that summarizes legal contracts using NLP for quick and easy understanding.',
    link: 'https://github.com/Shravanthi20/contract-summariser',
    image: contractSummariserImg,
    category: 'AI/ML'
  },
  {
    title: 'ParkEase — Vehicle Parking System',
    description: 'Real-time slot availability, billing workflows, and RBAC-based authentication. Deployed on Render.',
    link: 'https://github.com/Shravanthi20/vehicle-parking-app',
    image: vehicleImg,
    category: 'Web Dev'
  },
  {
    title: 'COLORÉ',
    description: 'An App designed for users to get personalized wall color suggestions using Google Vision AI. Built using React, MongoDB, Flask and deployed on Google Cloud.',
    link: 'https://github.com/saravanapriyaa21/COLOR_ME',
    image: coloreImg,
    category: 'Web Dev'
  },
  {
    title: 'Monetra — Personal Finance Tracker',
    description: 'REST APIs for transactions/reports with JWT-based auth. PDF/CSV ingestion for bank statements. React dashboards for expense analysis.',
    link: 'https://github.com/Shravanthi20/FinanceTracker',
    image: placeholderImg,
    category: 'Web Dev'
  },
  {
    title: 'Secure Idea Vault',
    description: 'Secure platform for encrypted idea submission. NIST SP 800-63-2 compliant auth, AES encryption, and RSA key exchange.',
    link: 'https://github.com/Shravanthi20/secure-idea-vault',
    image: placeholderImg,
    category: 'Web Dev'
  },
  {
    title: 'Internship Allocation Engine',
    description: 'Skill-based allocation logic and validation pipelines. LLM-based ranking model for candidate shortlisting.',
    link: 'https://github.com/Shravanthi20/RKIVE-Frontend',
    image: placeholderImg,
    category: 'AI/ML'
  },
  {
    title: 'Interactive Story Builder for Autism Kids',
    description: 'React-based interactive storytelling platform with accessible UI tailored for autistic children.',
    link: 'https://github.com/Shravanthi20/Interactive-Story-Builder',
    image: placeholderImg,
    category: 'Web Dev'
  },
  {
    title: 'NFHS-5 District-Level Health Inequality Analysis',
    description: 'Tableau/Python analysis of India’s National Family Health Survey. Key indicators: literacy, institutional delivery, child health.',
    link: 'https://public.tableau.com/views/DataVisCaseStudy/Story1',
    image: placeholderImg,
    category: 'Data Science'
  },
  {
    title: 'TanglishMate – Colloquial Tamil Translator',
    description: 'Trained LLM to respond to colloquial Tamil conversations. Winner — Sawit GenAI Hackathon 2025.',
    link: 'https://huggingface.co/Shrav20/colloquial_tamil_finetuned',
    image: placeholderImg,
    category: 'AI/ML'
  },
  {
    title: 'Movie Recommendation System',
    description: 'A Netflix-like movie recommendation system based on MapReduce algorithm for making it scalable.',
    link: '',
    image: placeholderImg,
    category: 'AI/ML'
  },
  {
    title: 'Medical Inventory Management System',
    description: 'Python & MySQL. Checks and updates inventory, stores stock data.',
    link: '',
    image: placeholderImg,
    category: 'Web Dev'
  },
  {
    title: 'Online Grocery Store',
    description: 'HTML, CSS, JS, Electron JS. E-commerce web app to register users and order groceries.',
    link: '',
    image: placeholderImg,
    category: 'Web Dev'
  },
  {
    title: 'Blockchain-Based Academic & Employee Evaluation Framework',
    description: 'Proposed a tamper-proof evaluation framework using permissioned blockchain and IPFS. Published in Springer Nature 2025.',
    link: '',
    image: placeholderImg,
    category: 'Research'
  },
  {
    title: 'Semantic Question Answering with Graph-RAG',
    description: 'Ontology-driven QA system using RDF knowledge graphs and embedding-based retrieval. (AgroSSUP Research Intern work).',
    link: '',
    image: placeholderImg,
    category: 'Research'
  },
  {
    title: 'Research in Evolutionary Robotics',
    description: 'EvoGym-based morphology optimization using voxel matrices.',
    link: '',
    image: placeholderImg,
    category: 'Research'
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Web Dev', 'AI/ML', 'Data Science', 'Research'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <div className="projects-page">
      <h2 className="hero-title" style={{ textAlign: 'center', fontSize: '2.5rem' }}>Projects & Research</h2>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`btn-primary ${filter === cat ? '' : 'outline'}`}
            style={{
              background: filter === cat ? undefined : 'transparent',
              border: filter === cat ? 'none' : '1px solid var(--primary)',
              color: filter === cat ? 'white' : 'var(--text-main)'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-list">
        {filteredProjects.map((project, idx) => (
          <div className="project-card" key={idx}>
            {project.image !== placeholderImg && (
              <div style={{ height: '160px', overflow: 'hidden' }}>
                <img src={project.image} alt={project.title} className="project-img" style={{ transition: 'transform 0.5s' }} />
              </div>
            )}
            <div className="project-content">
              <span style={{ fontSize: '0.8rem', color: 'var(--secondary)', textTransform: 'uppercase', fontWeight: 700 }}>{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}>View Project</a>
              )}
            </div>
          </div>
        ))}
      </div>

      <section className="glass-panel" style={{ marginTop: '4rem', padding: '2rem' }}>
        <h2 style={{ color: 'var(--text-main)', textAlign: 'center', marginBottom: '1.5rem' }}>Achievements & Hackathons</h2>
        <div className="skills-list">
          <li className="glass-panel">🏆 Winner, Sawit GenAI Hackathon 2025</li>
          <li className="glass-panel">🏅 Finalist, JP Morgan Chase Code for Good 2024</li>
          <li className="glass-panel">🤝 Contributor, Social Winter of Code</li>
          <li className="glass-panel">📚 Top Grade in DSA, IIT Madras Diploma</li>
          <li className="glass-panel">🚀 Flipkart Runway 2025 Participant</li>
          <li className="glass-panel">☁️ Google Cloud AI in Action Hackathon</li>
        </div>
      </section>
    </div>
  );
};

export default Projects;