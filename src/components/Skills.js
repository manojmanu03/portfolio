import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaDocker, FaJava, FaGithub, FaFilePdf, FaFileWord } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiBootstrap, SiC, SiCplusplus } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'C', icon: <SiC />, level: 70 },
        { name: 'C++', icon: <SiCplusplus />, level: 75 },
        { name: 'Python', icon: <FaPython />, level: 80 },
        { name: 'Java', icon: <FaJava />, level: 70 },
        { name: 'JavaScript', icon: <FaJs />, level: 85 }
      ]
    },
    {
      title: 'Web Technologies',
      skills: [
        { name: 'HTML5', icon: <FaHtml5 />, level: 90 },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 85 },
        { name: 'Bootstrap', icon: <SiBootstrap />, level: 80 },
        { name: 'React', icon: <FaReact />, level: 85 },
        { name: 'Node.js', icon: <FaNodeJs />, level: 80 }
      ]
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, level: 85 },
        { name: 'GitHub', icon: <FaGithub />, level: 85 },
        { name: 'Docker', icon: <FaDocker />, level: 70 },
        { name: 'PyPDF', icon: <FaFilePdf />, level: 65 },
        { name: 'Docx2txt', icon: <FaFileWord />, level: 65 }

      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MySQL', icon: <SiMysql />, level: 75 },
        { name: 'MongoDB', icon: <SiMongodb />, level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills & Technologies
        </motion.h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={category.title}
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <div className="skill-info">
                      <div className="skill-icon">
                        {skill.icon}
                      </div>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
