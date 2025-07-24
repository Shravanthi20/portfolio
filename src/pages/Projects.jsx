import React from 'react';
import contractSummariserImg from '../images/ContractSummariser.png';
import coloreImg from '../images/colour_home_page.png';
import vehicleImg from '../images/vehicle.png';
import placeholderImg from '../public/placeholder.svg';

const projects = [
  
  {
    title: 'Contract Summarizer',
    description: 'A Streamlit app that summarizes legal contracts using NLP for quick and easy understanding.',
    link: 'https://github.com/Shravanthi20/contract-summariser',
    image: contractSummariserImg
  },
  {
    title: 'COLORÉ',
    description: 'An App designed for users to get personalized wall color suggestions using Google Vision AI. Built using React, MongoDB, Flask and deployed on Google Cloud.',
    link: 'https://github.com/saravanapriyaa21/COLOR_ME',
    image: coloreImg
  },
  {
    title: 'Vehicle Parking Management Web App',
    description: 'Built using SQLite, that enables user to book desired parking spots online and manage their bookings efficiently.',
    link: '',
    image: vehicleImg
  },
  {
    title: 'TanglishMate – Colloquial Tamil Translator',
    description: 'Trained the LLM to respond to colloquial Tamil conversations. Model is available on Hugging Face.',
    link: 'Shrav20/colloquial_tamil_finetuned',
    image: placeholderImg
  },
  {
    title: 'Movie Recommendation System',
    description: 'A Netflix-like movie recommendation system based on MapReduce algorithm for making it scalable.',
    link: '',
    image: placeholderImg
  },
  {
    title: 'Medical Inventory Management System',
    description: 'Python & MySQL. Checks and updates inventory, stores stock data.',
    link: '',
    image: placeholderImg
  },
  {
    title: 'Online Grocery Store',
    description: 'HTML, CSS, JS, Electron JS. E-commerce web app to register users and order groceries.',
    link: '',
    image: placeholderImg
  }
];

const researchProjects = [
  {
    title: 'Research in Evolutionary Robotics',
    description: 'EvoGym-based morphology optimization using voxel matrices.',
    
  },
  {
    title: 'Research on Tamper-proof Project Management System',
    description: 'Blockchain + IPFS. Secure, immutable employee progress tracking.',
    
  },
  {
  title: 'Semantic Question Answering with Graph-RAG and TinyLLaMA',
  description: 'Graph-based Retrieval-Augmented Generation using RDF triples and TinyLLaMA for efficient, ontology-driven question answering in structured domains.',
  
  }
];

const Projects = () => (
  <div className="projects-page animated-section">
    <h2 className="section-title">Projects</h2>
    <div className="projects-list">
      {projects.filter(p => p.title !== 'Research in Evolutionary Robotics' && p.title !== 'Research on Tamper-proof Project Management System').map((project, idx) => (
        <div className="project-card animated-card" key={idx} style={{ animationDelay: `${0.2 + idx * 0.15}s` }}>
          <img src={project.image} alt={project.title} className="project-img" />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          )}
        </div>
      ))}
    </div>
    <section className="research-section animated-section">
      <h2 className="section-title">Research</h2>
      <div className="projects-list">
        {researchProjects.map((project, idx) => (
          <div className="project-card animated-card" key={idx} style={{ animationDelay: `${0.2 + idx * 0.15}s` }}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            
          </div>
        ))}
      </div>
    </section>
    <section className="achievements-section animated-section">
      <h2 className="section-title">Hackathons & Achievements</h2>
      <div className="achievements-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.2rem', justifyContent: 'center', marginTop: '1.5rem' }}>
        <div className="achievement-card animated-card" style={{ minWidth: '220px', background: 'linear-gradient(135deg, #e0fff4 60%, #ffe0e7 100%)', borderRadius: '14px', boxShadow: '0 2px 12px #ffd70022', padding: '1.2rem 2rem', textAlign: 'center', fontWeight: 600, color: '#007bff', fontSize: '1rem' }}>
          <span role="img" aria-label="flipkart">🚀</span> Participated in Flipkart Runway 2025
        </div>
        <div className="achievement-card animated-card" style={{ minWidth: '220px', background: 'linear-gradient(135deg, #e0fff4 60%, #ffe0e7 100%)', borderRadius: '14px', boxShadow: '0 2px 12px #ffd70022', padding: '1.2rem 2rem', textAlign: 'center', fontWeight: 600, color: '#007bff', fontSize: '1rem' }}>
          <span role="img" aria-label="cloud">☁️</span> Participated in Google Cloud AI in Action Hackathon 2025
        </div>
        <div className="achievement-card animated-card" style={{ minWidth: '220px', background: 'linear-gradient(135deg, #e0fff4 60%, #ffe0e7 100%)', borderRadius: '14px', boxShadow: '0 2px 12px #ffd70022', padding: '1.2rem 2rem', textAlign: 'center', fontWeight: 600, color: '#007bff', fontSize: '1rem' }}>
          <span role="img" aria-label="gujarat">🏆</span> Participated in Hack with Gujarat 2025
        </div>
        <div className="achievement-card animated-card" style={{ minWidth: '220px', background: 'linear-gradient(135deg, #e0fff4 60%, #ffe0e7 100%)', borderRadius: '14px', boxShadow: '0 2px 12px #ffd70022', padding: '1.2rem 2rem', textAlign: 'center', fontWeight: 600, color: '#007bff', fontSize: '1rem' }}>
          <span role="img" aria-label="winner">🥇</span> <strong>Winner</strong>, Smart India Hackathon 2024
        </div>
        <div className="achievement-card animated-card" style={{ minWidth: '220px', background: 'linear-gradient(135deg, #e0fff4 60%, #ffe0e7 100%)', borderRadius: '14px', boxShadow: '0 2px 12px #ffd70022', padding: '1.2rem 2rem', textAlign: 'center', fontWeight: 600, color: '#007bff', fontSize: '1rem' }}>
          <span role="img" aria-label="third">🥉</span> <strong>Third Place</strong>, Code for Good Bangalore, JPMC
        </div>
      </div>
    </section>
  </div>
);

export default Projects; 