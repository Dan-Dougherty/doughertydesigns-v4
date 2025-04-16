// Sidebar.js

import React from 'react';
import './Sidebar.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import resumePDF from '../assets/Daniel Dougherty UX Resume ATS 2024.pdf';

const Sidebar = () => {
  const skills = [
    'User Research',
    'Usability Testing',
    'Interaction Design',
    'Wireframing & Prototyping',
    'Accessibility',
    'User Journey Mapping',
    'Information Architecture',
    'Front-End Development',
    'Data-Driven Design',
    'Design Systems',
    'Collaboration & Communication',
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/daniel-joseph-dougherty',
    },
    {
      icon: <FaGithub />,
      name: 'GitHub',
      url: 'https://github.com/Dan-Dougherty',
    },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <h1 className="name">Dan Dougherty</h1>
        <p className="title">UX Designer</p>

        {/* Contact Information Section */}
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:dougherty.ux@gmail.com">
              dougherty.ux@gmail.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong> (616) 295-1419
          </p>
          <p>
            <strong>Location:</strong> Grand Rapids, Michigan
          </p>
          <a
            href={resumePDF}
            target="_blank"
            rel="noopener noreferrer"
            className="view-resume"
          >
            View Resume
          </a>
        </div>

        {/* Social Links Section */}
        <div className="social-links-inline">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Skills Section */}
        <div className="skills">
          <h2>Skills</h2>
          <ul className="skills-list">
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
