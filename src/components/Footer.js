import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <motion.div 
          className="footer-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="footer-section">
            <h3>Let's Connect</h3>
            <p>Feel free to reach out for collaborations or just a friendly hello!</p>
            <div className="footer-social">
              <a href="https://github.com/manojmanu03" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/manoj-tb" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <nav className="footer-nav">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
          
          <div className="footer-section">
            <h3>Get In Touch</h3>
            <ul className="contact-list">
              <li className="contact-item">
                <span className="contact-icon"><FiMail /></span>
                <a href="mailto:manojtbmanu2@gmail.com">manojtbmanu2@gmail.com</a>
              </li>
              <li className="contact-item">
                <span className="contact-icon"><FiPhone /></span>
                <a href="tel:+918088028712">+91 80880 28712</a>
              </li>
              <li className="contact-item">
                <span className="contact-icon"><FiMapPin /></span>
                <span>Mysore, Karnataka</span>
              </li>
            </ul>
            <div className="contact-cta">
              <a className="btn" href="mailto:manojtbmanu2@gmail.com"><FiSend style={{marginRight: '6px'}}/>Email Me</a>
              <a className="btn btn-outline" href="#contact">Contact Form</a>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>
            © {currentYear} Manoj T B. Made with <FaHeart className="heart" /> using React
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
