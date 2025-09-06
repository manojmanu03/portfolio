import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaPython, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiMongodb, SiFlask, SiRender, SiBootstrap, SiScikitlearn, SiMysql, SiPhp, SiNumpy } from 'react-icons/si';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 0,
      title: 'GMEBH – Hostel Management System',
      description:
        'Built and deployed a live hostel management system used by students and hostel administration in Bogadi, Mysuru. Implemented authentication, room allocation, library management (book issue & overdue reminders), placed-student records, query & feedback system with instant resolution, and roommate details management. Utilized Flask + MongoDB for a scalable backend and deployed on Render for reliable cloud hosting.',
      image: '/gmebh.png',
      technologies: [
        { name: 'Flask', icon: <SiFlask /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'HTML5', icon: <FaHtml5 /> },
        { name: 'CSS3', icon: <FaCss3Alt /> },
        { name: 'JavaScript', icon: <FaJs /> },
        { name: 'Render', icon: <SiRender /> }
      ],
      github: 'https://github.com/gmehostel-hub/GMEBH_website',
      live: 'https://www.gmebh.info',
      featured: true
    },
    {
      id: 2,
      title: 'HomeX – Real Estate Management System',
      description:
        'Web-based real estate management system with role-based authentication for property owners and buyers. Implemented advanced property filtering and search, responsive Bootstrap frontend, and MySQL-backed secure data storage for seamless interactions between stakeholders.',
      image: '/homex.png',
      technologies: [
        { name: 'HTML5', icon: <FaHtml5 /> },
        { name: 'CSS3', icon: <FaCss3Alt /> },
        { name: 'JavaScript', icon: <FaJs /> },
        { name: 'PHP', icon: <SiPhp /> },
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'Bootstrap', icon: <SiBootstrap /> }
      ],
      github: 'https://github.com/manojmanu03/HomeX',
      live: 'https://github.com/manojmanu03/HomeX',
      featured: true
    },
    {
      id: 1,
      title: 'CampusFit – Placement Readiness Predictor',
      description:
        'ML-powered web app to evaluate students’ placement readiness based on academic performance and skill metrics. Integrated classification models (~85% accuracy) to predict outcomes and provide personalized improvement suggestions. Flask-based backend with MySQL integration for efficient data storage and retrieval. Built a responsive frontend using HTML, CSS, and JavaScript.',
      image: '/campusfit.png',
      technologies: [
        { name: 'Python', icon: <FaPython /> },
        { name: 'Flask', icon: <SiFlask /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'HTML5', icon: <FaHtml5 /> },
        { name: 'CSS3', icon: <FaCss3Alt /> },
        { name: 'JavaScript', icon: <FaJs /> }
      ],
      github: 'https://github.com/manojmanu03/CampusFit',
      live: 'https://github.com/manojmanu03/CampusFit',
      featured: true
    },
    {
      id: 3,
      title: 'URLShield – Phishing URL Detector',
      description:
        'Machine learning-based web app to detect phishing URLs in real time using structural features and SSL/TLS checks. Implemented a Random Forest Classifier with multi-feature analysis (domain age, protocol type, TLD verification). Flask + Bootstrap frontend for seamless user interaction and instant feedback on suspicious links.',
      image: '/urlshield.png',
      technologies: [
        { name: 'Python', icon: <FaPython /> },
        { name: 'Flask', icon: <SiFlask /> },
        { name: 'scikit-learn', icon: <SiScikitlearn /> },
        { name: 'HTML5', icon: <FaHtml5 /> },
        { name: 'CSS3', icon: <FaCss3Alt /> },
        { name: 'JavaScript', icon: <FaJs /> },
        { name: 'Bootstrap', icon: <SiBootstrap /> }
      ],
      github: 'https://github.com/manojmanu03/Phishing_URL_detector',
      live: 'https://github.com/manojmanu03/Phishing_URL_detector',
      featured: true
    },
    {
      id: 8,
      title: 'Digit Recognition From Image',
      description:
        'Handwritten digit recognition tool implemented from scratch in Python using NumPy. Two-layer neural network with 784 input neurons (28×28), one hidden layer of 10 neurons, and a 10-class output layer (0–9). Trained on MNIST to deepen understanding of neural network internals without high-level frameworks.',
      image: '/images/projects/digit-recognition.png',
      technologies: [
        { name: 'Python', icon: <FaPython /> },
        { name: 'NumPy', icon: <SiNumpy /> }
      ],
      github: 'https://github.com/manojmanu03/Digit_Recognition_From_Image',
      live: 'https://github.com/manojmanu03/Digit_Recognition_From_Image',
      featured: true
    }
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="project-img"
                  loading="lazy"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaGithub />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="tech-item">
                      {tech.icon}
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="projects-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>Want to see more of my work?</p>
          <a href="https://github.com/manojmanu03" target="_blank" rel="noopener noreferrer" className="btn">
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
