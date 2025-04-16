import React, { useEffect } from 'react';
import './CaseStudy.css';
import { Link } from 'react-router-dom';
import NonProfitDesktop from '../assets/videos/NonProfitDesktop.mp4';
import NonProfitMobile from '../assets/videos/NonProfitMobile.mp4';

const AllInTogether = () => {
  useEffect(() => {
    document.title = "All In Together Case Study | Dan Dougherty - UX Designer";
  }, []);

  return (
    <div className="case-study-full">
      <header className="case-study-header">
        <Link to="/" className="logo">Dan Dougherty</Link>
        <nav className="case-study-nav">
          <Link to="/">Home</Link>
          <Link to="/#case-studies">Case Studies</Link>
          <Link to="/#contact">Contact</Link>
        </nav>
      </header>

      {/* Executive Summary */}
      <h1>All In Together: Building a Nonprofit Website in 48 Hours</h1>
        <div className="roles">
          <p><strong>Role:</strong> Lead UX Designer</p>
          <p><strong>Timeline:</strong> 48 Hours</p>
          <p><strong>Team:</strong> Project Manager, WordPress Designer (novice), Content Manager, Myself</p>
          <p><strong>Tools:</strong> Beaver Builder (WordPress), Design Brief, Copywriting, Custom CSS, AI-based Content Assistance</p>
          <p><strong>Outcome:</strong> Launched a responsive, user-centered website that supports community engagement, event promotion, and donations for a new nonprofit startup.</p>
        </div>


      {/* Challenge and Solution */}
      <h2>Challenge</h2>
      <p>
        All In Together, a newly established nonprofit, needed a functional website built in just 48 hours during the 48in48 volunteer event. With no prior online presence, our team had to build the site from scratch based solely on insights from the nonprofit’s founder. The design needed to align with the nonprofit's mission to engage the community, promote events, and encourage donations, all while accommodating tight resource and time constraints.
      </p>
      <p>
        Key challenges included:
      </p>
      <ul>
        <li><strong>Time Constraints:</strong> The 48-hour timeframe required quick prioritization and an efficient workflow to ensure key functionalities were ready for launch.</li>
        <li><strong>Limited User Data:</strong> As a new organization, All In Together had no user base or prior site data, so the founder’s vision served as our primary input for defining user needs.</li>
        <li><strong>Team Skill Levels:</strong> The WordPress developer was relatively new to the platform, requiring additional support and guidance on UX best practices. I also assumed a hands-on role in development to maintain design fidelity.</li>
      </ul>

      <h2>Solution</h2>
      <p>
        As the Lead UX Designer, I developed a structured <strong>design brief</strong> that detailed objectives, user personas, and a content strategy. Since no user data was available, the design aligned with the founder’s vision and focused on the nonprofit’s main goals:
      </p>
      <ul>
        <li><strong>User Personas:</strong> Community members seeking event information and donors motivated to support the organization’s mission.</li>
        <li><strong>Goals:</strong> Facilitate donations, simplify event registration, and create an inviting digital space that reflects the nonprofit's commitment to inclusivity.</li>
      </ul>
      <p>
        Working closely with the project manager, content manager, and novice WordPress developer, I ensured the site adhered to responsive design principles and optimized navigation. I contributed significantly to development by implementing custom CSS, troubleshooting layout issues, and guiding the WordPress developer on UX best practices, ensuring a consistent user experience. Additionally, when the founder was unable to provide complete content, I generated supplementary copy using an AI language model, tailoring the content to align with the nonprofit’s mission.
      </p>

      {/* Screen Recordings Section */}
      <h2>Final Website: Desktop & Mobile Experience</h2>
      <p>
        Below are screen recordings showcasing the final design for the All In Together website, illustrating responsive design principles on both desktop and mobile devices.
      </p>

      <div className="video-container">
        {/* Desktop Version */}
        <div className="desktop-only">
          <h3>Desktop Version</h3>
          <video controls className="responsive-video" aria-label="Non-Profit Website Desktop Screen Recording">
            <source src={NonProfitDesktop} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Mobile Version */}
        <div className="mobile-video-wrapper">
          <h3>Mobile Version</h3>
          <video controls className="responsive-video mobile-video" aria-label="Non-Profit Website Mobile Screen Recording">
            <source src={NonProfitMobile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Key Contributions */}
      <h2>Key Contributions</h2>
      <ul>
        <li><strong>Design Brief Development:</strong> Established a clear design brief outlining audience needs, site goals, and prioritized features to guide the team under the 48-hour deadline.</li>
        <li><strong>Collaboration & Leadership:</strong> Coordinated with the project manager to ensure alignment and facilitated team communication to streamline workflows and address challenges effectively.</li>
        <li><strong>WordPress Development & Support:</strong> Guided the WordPress developer and implemented custom CSS to overcome platform limitations, achieving a polished, user-friendly design.</li>
        <li><strong>Content Strategy & Copywriting:</strong> Collaborated with the content manager and used AI to generate additional copy, ensuring that the site’s content was complete, engaging, and aligned with the nonprofit’s mission.</li>
      </ul>

      {/* Design Process */}
      <h2>Design Process</h2>
      <p>
        Due to the unique constraints, I implemented a streamlined but strategic UX process:
      </p>
      <ol>
        <li><strong>Founder Consultation:</strong> Engaged with the nonprofit founder to translate her vision into a structured design strategy focused on community engagement and donation facilitation.</li>
        <li><strong>Design Brief & Content Planning:</strong> Created a targeted brief and content outline to prioritize key areas and align team efforts under tight deadlines.</li>
        <li><strong>Responsive Design Implementation:</strong> Utilized Beaver Builder for rapid layout construction and custom CSS to maintain visual consistency and support accessibility across devices.</li>
        <li><strong>Collaborative Copywriting:</strong> Generated copy with the content manager, using AI assistance for areas lacking stakeholder-provided content to ensure a comprehensive and mission-aligned user experience.</li>
      </ol>

      {/* Outcome */}
      <h2>Outcome</h2>
      <p>
        The team successfully launched a responsive website that reflected the nonprofit’s mission, promoted events, and supported donations, all within the 48-hour timeframe. The founder praised the site’s intuitive design and modern aesthetic. While no post-launch analytics are available, the site was structured for future updates and growth, ensuring it can evolve as the nonprofit expands its reach and initiatives.
      </p>

      {/* Key Learnings */}
      <h2>Key Learnings</h2>
      <p>
        This experience provided valuable lessons in adaptability, teamwork, and efficiency:
      </p>
      <ul>
        <li><strong>Strategic Prioritization:</strong> Working within a 48-hour window underscored the importance of focusing on high-impact features to meet user needs and organizational goals effectively.</li>
        <li><strong>Cross-Functional Collaboration:</strong> Facilitating team alignment with a novice WordPress developer and content manager was critical in overcoming technical and content challenges efficiently.</li>
        <li><strong>Process Flexibility:</strong> Adapting my typical UX process, I used AI for content creation and focused on a rapid design-deployment workflow, ensuring the nonprofit’s goals were met within constraints.</li>
      </ul>

      {/* Next Steps */}
      <h2>Next Steps</h2>
      <ul>
        <li><strong>Usability Testing:</strong> Conduct post-launch usability testing to gather user feedback and refine site features for enhanced user experience.</li>
        <li><strong>Content Updates:</strong> Partner with the nonprofit to regularly update content in response to community engagement, adding new events and success stories to keep the site dynamic.</li>
        <li><strong>SEO Optimization:</strong> Implement SEO strategies to improve search visibility, driving traffic and supporting the nonprofit’s growth in community awareness and donations.</li>
      </ul>

      {/* Back Button */}
      <Link to="/" className="back-button">
        &larr; Back to Home
      </Link>
    </div>
  );
};

export default AllInTogether;
