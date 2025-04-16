import React, { useEffect } from 'react';
import './CaseStudy.css';
import { Link, useLocation } from 'react-router-dom';

const PortfolioCaseStudy = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Crafting My Portfolio | Dan Dougherty - UX Designer";
    
    // Function to handle scroll events for sticky header
    const handleScroll = () => {
      const header = document.querySelector('.case-study-header');
      if (header) {
        // Only add 'scrolled' class when scrolled past a certain point (10px)
        if (window.scrollY > 10) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial check (in case page loads already scrolled)
    handleScroll();
    
    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to check if a link should be marked as active
  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path === '/#case-studies' && location.hash === '#case-studies') return true;
    if (path === '/#contact' && location.hash === '#contact') return true;
    return false;
  };

  return (
    <div className="case-study-full">
      <header className="case-study-header">
        <Link to="/" className="logo">
          Dan Dougherty
        </Link>
        <nav className="case-study-nav">
          <Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link>
          <Link to="/#case-studies" className={isActive('/#case-studies') ? 'active' : ''}>Case Studies</Link>
          <Link to="/#contact" className={isActive('/#contact') ? 'active' : ''}>Contact</Link>
        </nav>
      </header>

      {/* Executive Summary */}
      <h1>Crafting My Portfolio: A Minimalistic, User-Centered Approach</h1>
      <div className="roles">
        <p><strong>Role:</strong> UX Designer & Front-End Developer</p>
        <p><strong>Timeline:</strong> Ongoing</p>
        <p><strong>Tools:</strong> React, HTML5, CSS3, JavaScript</p>
        <p><strong>Outcome:</strong> A professional, responsive portfolio designed to showcase UX and frontend skills, highlight curated case studies, and facilitate a seamless experience for hiring managers.</p>
      </div>


      {/* Overview */}
      <h2>Overview</h2>
      <p>
        My portfolio website serves as both a personal brand and a professional showcase. Each case study was selected to highlight different aspects of my expertise: in-depth UX work, leadership and collaboration, and frontend development. The goal was to create a minimalistic, responsive, and user-centered site that effectively conveys my skills in an accessible, distraction-free layout.
      </p>

      {/* Challenge and Solution */}
      <h2>Challenge</h2>
      <p>
        The main challenge was balancing comprehensive content with a clean, straightforward layout. The site needed to highlight my skills and case studies in a way that hiring managers could quickly scan without distractions. Ensuring accessibility, responsiveness across devices, and a professional appearance were also key priorities.
      </p>

      <h2>Solution</h2>
      <p>
        To achieve this, I took a minimalist approach, focusing on clean layouts, organized information, and responsive design. Key design choices included:
      </p>
      <ul>
        <li><strong>Split-Screen Layout:</strong> The homepage features a split-screen layout with a sticky sidebar that keeps essential information—skills, social links, resume—always within reach, enhancing ease of navigation without disrupting browsing flow.</li>
        <li><strong>Component-Based Structure:</strong> Built with React, the portfolio’s component structure supports easy updates and scalability, facilitating future additions like new case studies or features.</li>
        <li><strong>Clear Visual Hierarchy:</strong> Using clear typography and a cohesive color scheme, I guided users’ attention to important sections, enabling easy skimming while ensuring a professional and polished look.</li>
        <li><strong>Responsive Design:</strong> By utilizing CSS grid and media queries, the site adjusts seamlessly across desktops, tablets, and mobile devices, ensuring a consistent and accessible experience on any screen size.</li>
      </ul>

      {/* Design Rationale and Visual Choices */}
      <h2>Design Rationale</h2>
      <p>
        The portfolio’s color scheme is soft and neutral, with subtle accents to highlight key elements without overwhelming the user. This choice reflects my philosophy of user-centered experiences where content is the focus, rather than excessive design effects.
      </p>
      <p>
        Typography plays a critical role in establishing readability and professionalism. For body text, I chose <strong>Open Sans</strong>, known for clarity and legibility across devices, and <strong>Montserrat</strong> for headings, providing a modern, clean contrast.
      </p>
      <p>
        Consistent spacing, padding, and line heights contribute to an organized, easy-to-follow layout. These typographic and color choices reinforce my goal of providing a professional, distraction-free experience that prioritizes usability and visual clarity.
      </p>

      {/* Accessibility Considerations */}
      <h2>Accessibility Considerations</h2>
      <p>
        Ensuring accessibility was a top priority. I incorporated several features to make the portfolio accessible to a wider audience:
      </p>
      <ul>
        <li><strong>High Contrast Ratios:</strong> Text and background color contrast meets accessibility standards, supporting users with visual impairments.</li>
        <li><strong>Screen Reader Support:</strong> Using semantic HTML and appropriate ARIA labels, I ensured that screen readers can accurately interpret site content and structure.</li>
      </ul>
      <p>
        Adhering to Web Content Accessibility Guidelines (WCAG) demonstrates my commitment to creating inclusive, user-centered designs.
      </p>

      {/* SEO and Performance Optimization */}
      <h2>SEO and Performance Optimization</h2>
      <p>
        To improve visibility and performance, I implemented several optimizations:
      </p>
      <ul>
        <li><strong>SEO Foundations:</strong> I incorporated best practices, including meta tags, descriptions, and a structured header hierarchy, to increase search engine visibility and reach a broader audience.</li>
        <li><strong>Performance Enhancements:</strong> By compressing images and using lazy loading, I minimized loading times, ensuring a faster experience on both mobile and desktop.</li>
        <li><strong>Efficient Code Structure:</strong> Using React’s component architecture minimized code redundancy and reduced HTTP requests, resulting in a smooth, responsive user experience.</li>
      </ul>

      {/* Key Learnings */}
      <h2>Key Learnings</h2>
      <p>
        This project reinforced several important design and development principles:
      </p>
      <ul>
        <li><strong>Simplicity in Design:</strong> The minimalist design simplifies navigation and keeps the focus on content, which is essential for a professional portfolio where clarity is critical.</li>
        <li><strong>Iterative Process:</strong> Although user testing was not conducted, peer feedback was instrumental in refining the layout, visual hierarchy, and usability to align with hiring manager expectations.</li>
        <li><strong>React Flexibility:</strong> Building the portfolio with React allowed me to maintain design consistency across components, prepare for scalability, and simplify updates.</li>
        <li><strong>Accessibility & Performance:</strong> Prioritizing accessibility and performance from the start is essential for creating a professional, user-centered portfolio.</li>
      </ul>

      {/* Future Optimizations */}
      <h2>Next Steps</h2>
      <ul>
        <li><strong>Case Study Expansion:</strong> I plan to add more case studies to showcase a broader range of UX design skills and impact, catering further to hiring managers' interests.</li>
        <li><strong>SEO & Analytics Integration:</strong> Implementing advanced SEO techniques and adding analytics will help monitor engagement, providing insights for ongoing improvement.</li>
      </ul>

      {/* Back Button */}
      <Link to="/" className="back-button">
        &larr; Back to Home
      </Link>
    </div>
  );
};

export default PortfolioCaseStudy;
