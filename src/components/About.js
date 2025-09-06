import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaServer, FaRocket } from 'react-icons/fa';
import { FiZap, FiAward, FiGlobe } from 'react-icons/fi';
import './About.css';

const About = () => {
  const metrics = [
    { value: '10+', label: 'Projects' },
    { value: '5+', label: 'Workshops' },
    { value: '4+', label: 'Teams' },
  ];

  const features = [
    { icon: <FiZap />, title: 'Performance-first', description: 'Optimized, responsive UIs with clean, accessible code.' },
    { icon: <FiGlobe />, title: 'End-to-end', description: 'From APIs to deployments on Render/Vercel with CI-ready setup.' },
  ];
  const services = [
    {
      icon: <FaCode />,
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces with React, Vue, and modern CSS frameworks.'
    },
    {
      icon: <FaServer />,
      title: 'Backend Development',
      description: 'Building robust server-side applications with Node.js, Python, and database management.'
    },
    {
      icon: <FaLaptopCode />,
      title: 'Full Stack Solutions',
      description: 'End-to-end web application development from concept to deployment.'
    }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="about-grid">
          {/* Left: Bio Card */}
          <motion.div
            className="about-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="about-head">
              <span className="eyebrow"><FaRocket /> Full‑Stack Engineer</span>
              <h3 className="about-title">Turning ideas into fast, elegant web apps.</h3>
              <p className="about-sub">
                I design and build responsive, accessible interfaces and solid backends. My focus is clean UX,
                performance, and maintainable architecture.
              </p>
            </div>

            <div className="metric-row">
              {metrics.map((m) => (
                <div className="metric" key={m.label}>
                  <strong>{m.value}</strong>
                  <span>{m.label}</span>
                </div>
              ))}
            </div>

            <div className="about-actions">
              <a className="btn" href="https://drive.google.com/file/d/1ZxVrjXWSWPhzhUs5PpOURla9jK3vSrEc/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Download CV</a>
              <a className="btn btn-outline" href="#contact">Contact Me</a>
            </div>
          </motion.div>

          {/* Right: Feature/Service Cards */}
          <motion.div 
            className="about-aside"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="features">
              {features.map((f, idx) => (
                <div className="feature" key={idx}>
                  <span className="feature-icon">{f.icon}</span>
                  <div>
                    <h4>{f.title}</h4>
                    <p>{f.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="services-grid">
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  className="service-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                >
                  <div className="service-icon">
                    {service.icon}
                  </div>
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
