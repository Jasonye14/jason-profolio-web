import React from 'react';
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ background: 'rgb(15,24,42)', padding: '10px', textAlign: 'center', height: '80px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '5px' }}>
        <a href="https://www.linkedin.com/in/jasonye0104" target="_blank" rel="noreferrer" style={{ margin: '0 15px', color: '#ffffff' }}>
          <FaLinkedin size={30} />
        </a>
        <a href="mailto:Jasonye0104@gmail.com" target="_blank" rel="noreferrer" style={{ margin: '0 15px', color: '#ffffff' }}>
          <FaEnvelope size={30} />
        </a>
        <a href="https://github.com/Jasonye14" target="_blank" rel="noreferrer" style={{ margin: '0 15px', color: '#ffffff' }}>
          <FaGithub size={30} />
        </a>
      </div>
      <p style={{ margin: '12px 0', fontSize: '12px', color: '#ffffff' }}>&copy; {new Date().getFullYear()} Jason Ye</p>
    </footer>
  );
};

export default Footer;
