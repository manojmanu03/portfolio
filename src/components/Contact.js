import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_4wrqpzg';
    const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_replace_me';
    const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'public_replace_me';

    // Helpful debug in development only
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.log('EmailJS config', { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY });
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY || TEMPLATE_ID.includes('replace_me') || PUBLIC_KEY.includes('replace_me')) {
      setStatus({ type: 'error', message: 'Email service not configured yet. Please set your EmailJS Template ID and Public Key.' });
      return;
    }

    try {
      setStatus({ type: 'loading', message: 'Sending your message…' });
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          // Preferred keys (match our template guidance)
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          // Back-compat keys in case your EmailJS template uses different variable names
          name: formData.name,
          email: formData.email,
          title: formData.subject,
          reply_to: formData.email
        },
        { publicKey: PUBLIC_KEY }
      );
      setStatus({ type: 'success', message: 'Thanks! Your message has been sent.' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      const reason = err?.text || err?.message || 'Unknown error';
      setStatus({ type: 'error', message: `Sorry, there was an issue sending your message. Reason: ${reason}` });
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'manojtbmanu2@gmail.com',
      link: 'mailto:manojtbmanu2@gmail.com'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+91 80880 28712',
      link: 'tel:+918088028712'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Mysore, Karnataka',
      link: null
    }
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>
        
        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Let's Work Together</h3>
            <p>
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, I'll try my best 
              to get back to you!
            </p>
            <p>
              Let’s connect! I enjoy collaborating on innovative projects and sharing ideas. 
              If you’re looking for a dedicated developer or just want to chat tech, feel free to reach out.
            </p>
            <p>
              Always open to learning, networking, and exploring new challenges. 
              Drop me a message and I’ll get back as soon as possible!
            </p>
            
          </motion.div>
          
          <motion.form 
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <motion.button 
              type="submit"
              className="btn submit-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPaperPlane />
              Send Message
            </motion.button>

            {/* Inline status message */}
            {status.message && (
              <p className={`form-status ${status.type}`}>{status.message}</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
