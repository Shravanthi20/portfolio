import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page animated-section">
      <svg className="contact-shape" width="70" height="70" viewBox="0 0 70 70" fill="none"><circle cx="35" cy="35" r="30" fill="#ffd70033"><animate attributeName="r" values="30;35;30" dur="5s" repeatCount="indefinite"/></circle></svg>
      <h2 className="section-title">Contact</h2>
      <div style={{ margin: '1rem 0', fontSize: '1.1rem', color: '#222', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.3rem' }}>
        <span>📞 7708957333</span>
        <span>✉ <a href="mailto:satyanar061@gmail.com" style={{ color: '#007bff', textDecoration: 'none' }}>satyanar061@gmail.com</a></span>
        <span>🔗 <a href="https://linkedin.com/in/shravanthi-s" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>LinkedIn</a></span>
        <span>💻 <a href="https://github.com/Shravanthi20" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>GitHub</a></span>
      </div>
      {submitted ? (
        <p className="contact-thankyou animated-fade">Thank you for reaching out!</p>
      ) : (
        <form className="contact-form animated-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required />
          <button type="submit">Send</button>
        </form>
      )}
    </div>
  );
};

export default Contact; 