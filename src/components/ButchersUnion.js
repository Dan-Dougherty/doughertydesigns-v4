import React, { useEffect } from 'react';
import './CaseStudy.css';
import { Link, useLocation } from 'react-router-dom';
import ButchersUnionVideo from '../assets/videos/butchers-union-desktop-screen-recording.mp4';
import ButchersUnionVideoMobile from '../assets/videos/butchers-union-mobile-screen-recording.mp4';

const ButchersUnion = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Butcher's Union Case Study | Dan Dougherty - UX Designer";

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
      <h1>Butcher's Union: Enhancing the Digital Dining Experience</h1>
      <div className="roles">
        <p><strong>Role:</strong> UX Designer</p>
        <p><strong>Timeline:</strong> 6 weeks</p>
        <p><strong>Tools:</strong> Adobe XD, Adobe Illustrator</p>
        <p><strong>Outcome:</strong> A mobile-first redesign aligning with Butcher's Union's brand and enhancing user experience.</p>
      </div>


      {/* Challenge and Solution */}
      <h2 id="challenge">Challenge</h2>
      <p>
        The Butcher's Union website had several usability issues, particularly around navigation and mobile responsiveness. Users frequently expressed frustration due to broken desktop navigation, low text visibility, and an unoptimized layout. Research and initial user tests showed these main pain points:
      </p>
      <ul>
        <li>Desktop navigation disappeared when leaving the homepage, causing users to feel “stuck” on certain pages.</li>
        <li>Text was difficult to read on mobile due to poor padding and margins, resulting in user frustration.</li>
        <li>Navigation between multiple menus (eat, brunch, happy hour, whiskey, drink) felt cluttered, making it challenging to find key information.</li>
      </ul>
      <p>
        Additionally, a heuristic evaluation confirmed inconsistencies in text color, spacing, and overall layout, which made the design feel outdated and cluttered.
      </p>

      <h2 id="solution">Solution</h2>
      <p>
        As the sole UX Designer, I undertook a comprehensive mobile-first redesign to resolve these issues. The process began with research analysis, ideation sketches, and a prioritization exercise where I ranked user pain points based on urgency and potential impact on user satisfaction, within the project’s six-week timeframe.
      </p>
      <p>
        This solution included:
      </p>
      <ul>
      <li><strong>Global & Sticky Navigation:</strong> Implemented a global navigation bar accessible on all pages, ensuring users could navigate seamlessly throughout the site. Additionally, a sticky navigation feature keeps the menu visible as users scroll, preventing them from losing their place.</li>
      <li><strong>Improved Readability:</strong> Enhanced padding, margins, contrast, and font sizes to ensure readability on desktop and mobile devices.</li>
      <li><strong>Streamlined User Flow:</strong> Condensed menu sections to reduce visual clutter and ease access to key information.</li>
      </ul>

      {/* Key Contributions */}
      <h2 id="contributions">Key Contributions</h2>
      <ul>
        <li><strong>Research:</strong> Conducted user surveys and heuristic evaluations to identify primary user frustrations like broken navigation and readability issues. Competitive analysis revealed best practices—such as sticky navigation, brand consistency, and cohesive menu layouts—which informed my use of cohesive colors, high-quality imagery, and an organized menu flow to better reflect the brand’s ambiance and improve usability.</li>
        <li><strong>Wireframing and Prototyping:</strong> Developed wireframes to address layout and flow issues, followed by high-fidelity prototypes in Adobe XD. This included rapid ideation sketches for potential layouts, helping me prioritize and refine core features.</li>
        <li><strong>Visual Design:</strong> Applied a modern aesthetic with cohesive branding, using deep blue and gold tones to reflect the restaurant ambiance and enhance readability across devices. I ensured critical actions, like accessing menus or reservations, were prominent and accessible.</li>
      </ul>

      {/* Screen Recordings Section */}
      <h2>Current Website Overview</h2>
      <p>
        To illustrate the usability challenges, here are screen recordings showing the initial issues on both desktop and mobile devices.
      </p>
      <div className="video-container">
        <div className="desktop-only">
          <h3>Desktop View:</h3>
          <video controls className="responsive-video" aria-label="Butcher's Union Current Desktop Website">
            <source src={ButchersUnionVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="mobile-video-wrapper">
          <h3>Mobile View:</h3>
          <video controls className="responsive-video mobile-video" aria-label="Butcher's Union Current Mobile Website">
            <source src={ButchersUnionVideoMobile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Wireframes and Prototypes */}
      <h2>Wireframes & Prototypes</h2>
      <p>
        I developed low-fidelity wireframes to outline the improved structure, then moved to high-fidelity prototypes for final visual alignment. Interactive prototypes are linked below:
      </p>
      <div className="prototype-buttons">
        <div className="desktop-only">
          <a href="https://xd.adobe.com/view/25475c4f-a78b-4078-85b5-1b9a53fcb221-7014/?fullscreen" target="_blank" rel="noopener noreferrer" className="prototype-button">View Desktop Prototype</a>
        </div>
        <a href="https://xd.adobe.com/view/61bb4dfd-067e-49fd-a678-7a90ad81ee76-34e8/?fullscreen" target="_blank" rel="noopener noreferrer" className="prototype-button">View Mobile Prototype</a>
      </div>

      {/* Usability Testing Feedback */}
      <h2 id="feedback">Usability Testing Feedback</h2>
      <p>
        User testing on the redesigned site revealed that users found the layout intuitive and visually engaging. Key improvements noted included enhanced readability, streamlined menu access, consistent sticky navigation, and an overall restructured layout that made browsing easier and more enjoyable.
      </p>


      {/* Visual Design */}
      <h2 id="design">Visual Design</h2>
      <ul>
        <li><strong>Colors:</strong> Deep blue (#02318B) and gold (#FFD700) were chosen to reflect the ambiance and upscale nature of Butcher's Union.</li>
        <li><strong>Typography:</strong> The combination of Playfair Display for headings and Roboto for body text ensured readability and elegance.</li>
        <li><strong>Visual Hierarchy:</strong> Key actions like accessing menus and reservations were prioritized, ensuring ease of navigation across mobile and desktop views.</li>
        <li><strong>Imagery:</strong> High-quality images were used to emphasize the restaurant's vibrant atmosphere, enhancing visual storytelling.</li>
      </ul>

      {/* Expected Impact */}
      <h2 id="impact">Expected Impact</h2>
      <p>I hypothesize the following outcomes:</p>
      <ul>
        <li>Improved mobile usability, enhancing user satisfaction and readability.</li>
        <li>Streamlined navigation expected to reduce bounce rates and increase time spent on pages.</li>
        <li>Increased online reservations, as the user journey was optimized to guide users quickly to this action.</li>
      </ul>

      {/* Key Learnings */}
      <h2 id="learnings">Key Learnings</h2>
      <p>
        This project reinforced the importance of mobile-first, user-centered design. I learned the necessity of simplifying visual elements on mobile based on user feedback, guiding a more minimal, user-focused layout. Iterative testing and communication with stakeholders were also crucial for aligning design and business goals.
      </p>

      {/* Next Steps */}
      <h2 id="next-steps">Next Steps</h2>
      <ul>
        <li><strong>Implementation:</strong> Collaborate with developers to ensure design fidelity during site development.</li>
        <li><strong>Post-Launch Testing:</strong> Conduct usability testing to gather feedback and optimize further.</li>
        <li><strong>Analytics Integration:</strong> Add Google Analytics for tracking user engagement and measuring success metrics.</li>
      </ul>

      {/* Back to Home Button */}
      <div className="button-container">
        <Link to="/" className="back-button">
          &larr; Back to Home
        </Link>
      </div>

    </div>
  );
};

export default ButchersUnion;
