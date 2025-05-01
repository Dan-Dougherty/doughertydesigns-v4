// MainContent.js

import React, { useState, useEffect } from 'react';
import './MainContent.css';
import { Link } from 'react-router-dom';
import { FaProjectDiagram, FaBriefcase, FaGraduationCap, FaLaptopCode } from 'react-icons/fa';

// Import images
import {
  VolunteerBadge,
  portfolioThumbnail,
  butchersUnionThumbnail,
  IIDPThumbnail,
  WestMichiganWebThumbnail,    
  BabyShowerThumbnail         
} from '../assets/images';

// Import Helmet
import { Helmet } from 'react-helmet-async';

const MainContent = () => {
  const [formStatus, setFormStatus] = useState({ message: '', type: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('/', {
        // Submitting to the root path for Netlify to handle
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setFormStatus({
          message: 'Thank you for your message! I will get back to you soon.',
          type: 'success',
        });
        form.reset();
      } else {
        setFormStatus({
          message: 'Oops! There was a problem submitting your form.',
          type: 'error',
        });
      }
    } catch (error) {
      setFormStatus({
        message: 'Oops! There was a problem submitting your form.',
        type: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Use Intersection Observer to add animation when sections come into view
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('in-view', entry.isIntersecting);
        });
      },
      { threshold: 0.1 } // 10% of section visible before triggering animation
    );

    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="main-content">
      {/* Helmet Meta Tags */}
      <Helmet>
        <title>Dan Dougherty | UX Designer</title>
        <meta
          name="description"
          content="Dan Dougherty is a UX Designer passionate about crafting intuitive and accessible digital experiences."
        />
        <meta
          name="keywords"
          content="UX Designer, User Experience, Accessibility, Web Design, Front-end Development"
        />
        <link rel="canonical" href="https://doughertydesigns.com" />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Dan Dougherty | UX Designer" />
        <meta
          property="og:description"
          content="Dan Dougherty is a UX Designer passionate about crafting intuitive and accessible digital experiences."
        />
        <meta
          property="og:image"
          content="https://doughertydesigns.com/assets/images/social-sharing.png"
        />
        <meta property="og:url" content="https://doughertydesigns.com" />
        <meta property="og:type" content="website" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:title" content="Dan Dougherty | UX Designer" />
        <meta
          name="twitter:description"
          content="Dan Dougherty is a UX Designer passionate about crafting intuitive and accessible digital experiences."
        />
        <meta
          name="twitter:image"
          content="https://doughertydesigns.com/assets/images/social-sharing.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'http://schema.org',
            '@type': 'Person',
            name: 'Dan Dougherty',
            jobTitle: 'UX Designer',
            url: 'https://doughertydesigns.com',
            sameAs: [
              'https://www.linkedin.com/in/daniel-joseph-dougherty',
            ],
          })}
        </script>
      </Helmet>
      {/* About Me Section */}
      <section id="about">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I’m Dan Dougherty, a UX Designer passionate about crafting
              intuitive and accessible digital experiences. With a background in
              customer service, I bring a deep understanding of user needs,
              blending empathy with user-centered design principles to tackle
              complex problems. My expertise spans user research, usability
              testing, and interaction design, with a commitment to staying at
              the forefront of UX trends. Outside of design, you’ll find me
              working on automotive projects—applying the same attention to
              detail and problem-solving skills to every challenge I take on.
            </p>

            <div className="about-cta">
              <Link to="/about" className="button">
                More About Me
              </Link>
              <a href="#contact" className="button secondary">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies">
        <h2>
          <FaProjectDiagram /> Case Studies
        </h2>
        <div className="case-studies-container">
          
          {/* IIDP Case Study Card */}
          <div className="case-study-card">
            <div className="case-study-image-container">
              <img
                src={IIDPThumbnail}
                alt="Screenshot of IIDP website redesign"
                className="case-study-image"
              />
            </div>
            <div className="case-study-content">
              <h3>Reinventing IIDP's Digital Presence</h3>
              <p>
                Led the UX design, WordPress development, and content creation for IIDP, transforming their outdated Wix site into a fully functional, mobile-responsive platform that increases donations and program visibility.
              </p>
              <div className="skills">
                <span>UX Strategy</span>
                <span>WordPress Development</span>
                <span>Responsive Design</span>
                <span>Content Creation</span>
                <span>Rapid Iteration</span>
              </div>
              <Link to="/case-studies/iidp" className="read-more">
                Read More
              </Link>
            </div>
          </div>
          
          {/* 48in48 Case Study */}
          <div className="case-study-card">
            <div className="case-study-image-container">
              <img
                src={VolunteerBadge}
                alt="Volunteer badge for 48in48 Global 2024 Event"
                className="case-study-image non-profit"
              />
            </div>
            <div className="case-study-content">
              <h3>Building an Impactful Website in 48 Hours</h3>
              <p>
                Led the UX design for a nonprofit’s website during a 48-hour
                volunteer event, collaborating with a cross-functional team to
                deliver a responsive and user-friendly site.
              </p>
              <div className="skills">
                <span>UX Leadership</span>
                <span>Content Strategy</span>
                <span>WordPress</span>
                <span>Responsive Design</span>
                <span>Design Brief</span>
                <span>Copywriting</span>
                {/* Add more skills as needed */}
              </div>
              <Link to="/case-studies/allintogether" className="read-more">
                Read More
              </Link>
            </div>
          </div>

          {/* Butcher's Union Case Study */}
          <div className="case-study-card">
            <div className="case-study-image-container">
              <img
                src={butchersUnionThumbnail}
                alt="Screenshot of Butcher's Union website redesign"
                className="case-study-image"
              />
            </div>
            <div className="case-study-content">
              <h3>Revitalizing Butcher's Union Online Presence</h3>
              <p>
                Led a comprehensive UX redesign for Butcher's Union, enhancing
                user experience and aligning the online presence with the
                restaurant's vibrant atmosphere.
              </p>
              <div className="skills">
                <span>User Research</span>
                <span>UX Design</span>
                <span>Prototyping</span>
                <span>Responsive Design</span>
                {/* Add more skills as needed */}
              </div>
              <Link to="/case-studies/butchers-union" className="read-more">
                Read More
              </Link>
            </div>
          </div>

          {/* Personal Portfolio Website Case Study */}
          <div className="case-study-card">
            <div className="case-study-image-container">
              <img
                src={portfolioThumbnail}
                alt="Screenshot of personal portfolio website"
                className="case-study-image"
              />
            </div>
            <div className="case-study-content">
              <h3>Crafting a Professional Portfolio</h3>
              <p>
                Designed and developed a modern, responsive portfolio website to
                effectively showcase my UX design and front-end development
                projects.
              </p>
              <div className="skills">
                <span>React</span>
                <span>HTML5</span>
                <span>CSS3</span>
                <span>JavaScript</span>
                <span>Responsive Design</span>
                {/* Add more skills as needed */}
              </div>
              <Link to="/case-studies/portfolio-website" className="read-more">
                Read More
              </Link>
            </div>
          </div>

          {/* Add more case study cards as needed */}
        </div>
      </section>

      {/* Development & Design Showcases */}
      <section id="dev-design">
        <h2>
          <FaLaptopCode /> Development & Design Showcases
        </h2>
        <div className="case-studies-container">
          {/* West Michigan Web freelance site */}
          <div className="case-study-card">
            <div className="case-study-image-container">
              <img
                src={WestMichiganWebThumbnail}
                alt="Screenshot of West Michigan Web site"
                className="case-study-image"
              />
            </div>
            <div className="case-study-content">
              <h3>West Michigan Web</h3>
              <p>
                Built a marketing website for my freelance business, West Michigan Web, using Astro.  
                I optimized performance by generating responsive hero-image variants, lazy-load­ing below-the-fold assets, and preloading critical fonts; implemented semantic HTML and high-contrast styling for accessibility; configured SEO-friendly meta tags, canonical URLs, and social-preview metadata; and set up Netlify Forms  to capture local small-business leads.
              </p>
              <div className="skills">
                <span>Astro</span>
                <span>Tailwind CSS</span>
                <span>Performance Optimization</span>
                <span>Accessibility</span>
                <span>Netlify Forms</span>
              </div>
              <a
                href="https://wmichiganweb.com"
                target="_blank"
                rel="noopener noreferrer"
                className="read-more"
              >
                Visit Live Site
              </a>
            </div>
          </div>

          {/* Baby Shower landing page */}
          <div className="case-study-card">
            <div className="case-study-image-container">
              <img
                src={BabyShowerThumbnail}
                alt="Screenshot of Dan & Laura’s baby shower landing page"
                className="case-study-image"
              />
            </div>
            <div className="case-study-content">
              <h3>Dan & Laura’s Baby Shower</h3>
              <p>
                Designed and launched a multipage baby-shower site in just 24 hours with Astro.  
                Features include a live countdown ticker to the event, an RSVP form powered by Netlify Forms + Zapier with duplicate-submission filtering, custom SVG icons, and thoughtful UX touches—like hover and focus states on buttons and cards and semantic markup for accessibility.
              </p>
              <div className="skills">
                <span>Astro</span>
                <span>JavaScript</span>
                <span>Netlify Forms</span>
                <span>Zapier</span>
                <span>Accessibility</span>
                <span>Responsive Design</span>
                <span>Tailwind CSS</span>
              </div>
              <a
                href="https://lauramaesbabyshower.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="read-more"
              >
                Visit Live Site
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Work Experience Section */}
      <section id="experience">
        <h2>
          <FaBriefcase /> Work Experience
        </h2>
        <div className="timeline">

          {/* Freelance UX Designer */}
          <div className="timeline-item">
            <div className="timeline-date">Jun 2024 – Present</div>
            <div className="timeline-content">
              <h3>Freelance UX Designer</h3>
              <p>
                <em>West Michigan Web</em>
              </p>
              <p>
                Redesigned Butcher’s Union website to boost engagement through user research,
                wireframing, and high-fidelity prototyping; partnered with clients to refine
                brand voice and usability via iterative design in Adobe XD and Creative Suite;
                and built & maintain my own freelance marketing site, West Michigan Web, using
                Astro—optimizing performance, accessibility, and SEO to showcase services and
                capture local leads.
              </p>
              <div className="skills">
                <span>User Research</span>
                <span>Wireframing</span>
                <span>Prototyping</span>
                <span>Adobe XD</span>
                <span>Adobe Creative Suite</span>
                <span>Iterative Design</span>
                <span>Astro</span>
                <span>Performance Optimization</span>
                <span>Accessibility</span>
                <span>SEO</span>
              </div>
            </div>
          </div>



          {/* Lead UX/UI Designer & WordPress Developer (Volunteer) – IIDP */}
          <div className="timeline-item">
              <div className="timeline-date">Mar 2025</div>
              <div className="timeline-content">
              <h3>Lead UX/UI Designer & WordPress Developer (Volunteer)</h3>
                <p>
                  <em>48in48 Website Sprint – International Institute of Diplomacy for PROMISES (IIDP)</em>
                </p>
                <p>
                  In a 48-hour volunteer sprint, I led a rapid kickoff workshop with IIDP’s founder to define objectives and map user flows for students, professionals, and donors; sketched hand-drawn wireframes for layout and hierarchy; refined and supplemented copy to ensure a cohesive narrative; then built eight mobile-first pages in WordPress using Beaver Builder with a WCAG 2.1 AA–ready design system and integrated donation & volunteer-signup modules.
                </p>
                <div className="skills">
                  <span>Project Leadership</span>
                  <span>Information Architecture</span>
                  <span>Wireframing</span>
                  <span>Content Strategy</span>
                  <span>WordPress Development</span>
                  <span>Beaver Builder</span>
                  <span>Accessibility Design</span>
                  <span>User Experience</span>
                </div>
            </div>
          </div>

          {/* Lead UX/UI Designer & Project Lead - 48in48 Non-Profit Website Build */}
          <div className="timeline-item">
            <div className="timeline-date">Oct 2024</div>
            <div className="timeline-content">
              <h3>Lead UX/UI Designer & Project Lead</h3>
              <p>
                <em>48in48 Non-Profit Website Build – All In Together</em>
              </p>
              <p>
                Led the design and development of a responsive, accessible
                website within 48 hours for a nonprofit. Drafted a streamlined
                project brief, aligning the team on goals and skipping
                traditional wireframes due to time constraints. Collaborated
                with the founder to reflect the mission, directing WordPress
                development and content strategy with Beaver Builder for smooth
                navigation and accessibility.
              </p>
              <div className="skills">
                <span>Project Leadership</span>
                <span>WordPress Development</span>
                <span>Accessibility Design</span>
                <span>Responsive Design</span>
                <span>Content Strategy</span>
                <span>User Experience</span>
              </div>
            </div>
          </div>

          

          {/* General Manager - 129 Hub */}
          <div className="timeline-item">
            <div className="timeline-date">Feb 2021 – May 2024</div>
            <div className="timeline-content">
              <h3>General Manager</h3>
              <p>
                <em>129 Hub</em>
              </p>
              <p>
                Oversaw daily operations, enhancing efficiency and customer
                satisfaction through streamlined workflows and strategic
                leadership. Managed staff development, fostering a collaborative
                environment, and drove business growth by refining service
                strategies.
              </p>
              <ul className="achievements">
                <li>
                  Created brand-consistent merchandise with Adobe Illustrator.
                </li>
                <li>
                  Trained and mentored a team of 10, promoting a high-performance
                  culture.
                </li>
              </ul>
              <div className="skills">
                <span>Leadership</span>
                <span>Team Management</span>
                <span>Business Growth Strategies</span>
                <span>Customer Satisfaction</span>
                <span>Problem-Solving</span>
                <span>Attention to Detail</span>
                <span>Adobe Illustrator</span>
                <span>Creative Design</span>
                <span>Brand Consistency</span>
                <span>Product Development</span>
              </div>
            </div>
          </div>

          {/* Add more timeline items as needed */}
        </div>
      </section>

      {/* Education Section */}
      <section id="education">
        <h2>
          <FaGraduationCap /> Education
        </h2>
        <div className="timeline">
          {/* CareerFoundry UX Design Certification */}
          <div className="timeline-item">
            <div className="timeline-date">Jun 2024</div>
            <div className="timeline-content">
              <h3>CareerFoundry - UX Design Program</h3>
              <p>
                <em>Certificate in UX Design</em>
              </p>
              <p>
                Completed an intensive UX program emphasizing user research,
                usability testing, wireframing, and prototyping. Developed HTML,
                CSS, and JavaScript skills, bridging design and development with
                a focus on accessibility and design thinking.
              </p>
              <div className="skills">
                <span>User Research</span>
                <span>Usability Testing</span>
                <span>Wireframing</span>
                <span>Prototyping</span>
                <span>HTML, CSS & JavaScript</span>
                <span>Design Thinking</span>
                <span>Accessibility</span>
              </div>
            </div>
          </div>

          {/* Grandville High School */}
          <div className="timeline-item">
            <div className="timeline-date">Graduated 2012</div>
            <div className="timeline-content">
              <h3>Grandville High School</h3>
              <p>
                <em>High School Diploma</em>
              </p>
              <p>
                Actively involved in Student Council and AV Club, where I
                developed strong collaboration and technical skills. Achieved
                All-American honors in diving and competed at the state level
                for two consecutive years.
              </p>

              <div className="skills">
                <span>Leadership</span>
                <span>Team Collaboration</span>
                <span>Technical Skills</span>
                <span>Commitment</span>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="certifications">
          <h3>Certifications</h3>
          <div className="certification-list">
            <div className="certification-item">
              <p>Frontend Development for Designers - CareerFoundry</p>
            </div>
            <div className="certification-item">
              <p>Prompt Engineering for Everyone - IBM Skills Network</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Me Section */}
      <section id="contact">
        <h2>Contact Me</h2>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="contact-form"
          onSubmit={handleSubmit}
        >
          {/* Hidden input for Netlify */}
          <input type="hidden" name="form-name" value="contact" />

          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="button submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send'}
          </button>

          {formStatus.message && (
            <p className={`form-status ${formStatus.type}`} role="alert">
              {formStatus.message}
            </p>
          )}
        </form>
      </section>
    </div>
  );
};

export default MainContent;
