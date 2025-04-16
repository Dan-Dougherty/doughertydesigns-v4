import React, { useEffect } from 'react';
import './AboutMe.css';
import { Link } from 'react-router-dom';
import { FaCat, FaCar, FaGamepad, FaHiking } from 'react-icons/fa';
import { AboutPhoto } from '../assets/images';

const AboutMe = () => {
  useEffect(() => {
    document.title = 'About Me | Dan Dougherty - UX Designer';
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="about-me-full">
      {/* Header Navigation */}
      <header className="about-me-header">
        <Link to="/" className="logo">Dan Dougherty</Link>
        <nav className="about-me-nav">
          <Link to="/">Home</Link>
          <Link to="/#case-studies">Case Studies</Link>
          <Link to="/#contact">Contact</Link>
        </nav>
      </header>

      {/* Introduction Section */}
      <section className="fade-in-section introduction-section">
        <div className="introduction-container">
          <div className="introduction-image">
            <img src={AboutPhoto} alt="Dan Dougherty" />
          </div>
          <div className="introduction-text">
            <h1>Designing with Purpose and Passion</h1>
            <p>
              Hello! I'm <strong>Dan Dougherty</strong>, a UX Designer fueled by creativity and a drive to craft intuitive, user-centric experiences. I believe that great design marries functionality with aesthetics, creating solutions that are both beautiful and purposeful.
            </p>
            <p>
              From initial sketches to high-fidelity prototypes, I approach every project with energy and innovation, always aiming to exceed user expectations. When I'm not immersed in design, you might find me fine-tuning an engine, where attention to detail is key, or exploring mountain trails, fueled by a love for discovery—both of which mirror my dedication to problem-solving and adventure.
            </p>
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
        <section className="fade-in-section fun-facts">
        <h2>More Than Just a Designer</h2>
        <div className="fun-facts-icons">
            <div className="fun-fact">
            <FaCat className="icon" aria-hidden="true" />
            <p><strong>Cat Dad</strong><br />Always up for a cuddle and quality time with my cats.</p>
            </div>
            <div className="fun-fact">
            <FaCar className="icon" aria-hidden="true" />
            <p><strong>Car Enthusiast</strong><br />Passionate about building engines and upgrading the performance of my cars.</p>
            </div>
            <div className="fun-fact">
            <FaGamepad className="icon" aria-hidden="true" />
            <p><strong>Gamer</strong><br />Enjoy winding down at the end of the day with some FPS or MMORPG's.</p>
            </div>
            <div className="fun-fact">
            <FaHiking className="icon" aria-hidden="true" />
            <p><strong>Hiker</strong><br />Love exploring new trails and being in nature.</p>
            </div>
        </div>
        </section>



      {/* Unique Attributes Section */}
        <section className="fade-in-section">
        <h2>What Sets Me Apart</h2>
        <div className="attributes">
            <div className="attribute">
            <h3>Creative Problem Solver</h3>
            <p>
                With a strong foundation in customer service, I have developed an acute sense of empathy and an ability to understand user pain points deeply. I approach design challenges with practical, user-centered solutions, focusing on creating intuitive experiences that address real user needs.
            </p>
            </div>
            <div className="attribute">
            <h3>Collaborative Team Player</h3>
            <p>
                I thrive in collaborative settings, knowing that diverse perspectives drive innovation. I believe in fostering open communication and building strong relationships with team members, stakeholders, and users alike. This approach, demonstrated in my recent 48in48 nonprofit project, has prepared me to actively contribute and adapt to fast-paced teams.
            </p>
            </div>
            <div className="attribute">
            <h3>Lifelong Learner</h3>
            <p>
                Staying current with industry trends and technologies is a core part of my professional development. I continually seek out resources and training on emerging UX methods, ensuring I bring relevant insights to every project. This dedication helps me anticipate design challenges and deliver user-friendly, forward-thinking solutions.
            </p>
            </div>
        </div>
        </section>


      {/* Skills & Tools Section */}
        <section className="fade-in-section">
        <h2>Skills That Deliver Impact</h2>
        <div className="skills-tools">
            <div className="skills-category">
            <h3>UX/UI Design Skills</h3>
            <ul>
                <li><strong>Wireframing & Prototyping:</strong> Skilled in creating interactive prototypes using Adobe XD and Figma to visualize user-centered design solutions.</li>
                <li><strong>User Research:</strong> Experienced in conducting interviews, surveys, and usability tests to gather actionable insights for informed design decisions.</li>
                <li><strong>Information Architecture:</strong> Skilled in structuring content to improve navigation and enhance accessibility for intuitive user experiences.</li>
                <li><strong>Usability Testing:</strong> Familiar with A/B testing and heuristic evaluations to iteratively refine and enhance user experiences.</li>
                <li><strong>Responsive & Accessible Design:</strong> Design interfaces that provide consistent and inclusive experiences across devices and user needs.</li>
            </ul>
            </div>
            <div className="skills-category">
            <h3>Frontend Development</h3>
            <ul>
                <li><strong>HTML, CSS, & JavaScript:</strong> Building responsive and engaging interfaces that bring design concepts to life.</li>
                <li><strong>React:</strong> Develop dynamic user interfaces to improve user interaction and engagement.</li>
            </ul>
            </div>
            <div className="skills-category">
            <h3>Tools & Technologies</h3>
            <ul>
                <li><strong>Design Tools and Prototyping:</strong> Experienced with Adobe XD, Figma, Adobe Illustrator, and Photoshop.</li>
                <li><strong>Collaboration:</strong> Experienced with Slack and Trello for efficient team communication and project management.</li>
            </ul>
            </div>
        </div>
        </section>


      {/* Back to Home Button */}
      <Link to="/" className="back-button">
        &larr; Back to Home
      </Link>
    </div>
  );
};

export default AboutMe;
