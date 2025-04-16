// IIDPCaseStudy.js with unified thumbnail style for all images

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './CaseStudy.css';

// Existing image imports – update with your actual asset paths
import IIDPBefore from '../assets/images/IIDP_before.png';
import IIDPWireframe1 from '../assets/images/IIDP_wireframe1.png';
import IIDPWireframe2 from '../assets/images/IIDP_wireframe2.png';

// Import before/after images for key pages – update paths accordingly
import IIDPHomeBefore from '../assets/images/IIDP_home_before.png';
import IIDPHomeAfter from '../assets/images/IIDP_home_after.png';
import IIDPProgramBefore from '../assets/images/IIDP_program_before.png';
import IIDPProgramAfter from '../assets/images/IIDP_program_after.png';
import IIDPContactBefore from '../assets/images/IIDP_contact_before.png';
import IIDPContactAfter from '../assets/images/IIDP_contact_after.png';
import IIDPAboutBefore from '../assets/images/IIDP_about_before.png';
import IIDPAboutAfter from '../assets/images/IIDP_about_after.png';
import IIDPGetInvolvedAfter from '../assets/images/IIDP_getinvolved_after.png';
import IIDPGetInvolvedBefore from '../assets/images/IIDP_getinvolved_before.png';

// Import the modal components for full-size views
import BeforeAfterModal from './BeforeAfterModal';
import GalleryModal from './GalleryModal';

// UNIFIED IMAGE COMPONENTS WITH CONSISTENT THUMBNAIL STYLE

// 1. GALLERY THUMBNAIL COMPONENT
// Use this for images that should open a gallery/carousel on click
const GalleryThumbnail = ({ src, alt, caption, onClick, galleryTitle, galleryImages }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(galleryTitle, galleryImages);
    }
  };

  return (
    <div 
      className="cs-thumbnail cs-gallery-trigger"
      onClick={handleClick}
      role="button"
      aria-label={`View ${alt} in gallery`}
      tabIndex="0"
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
    >
      <div className="cs-thumbnail-image-wrapper">
        <img 
          src={src} 
          alt={alt}
          loading="lazy"
        />
      </div>
      <div className="cs-thumbnail-caption">{caption}</div>
    </div>
  );
};

// 2. COMPARISON THUMBNAIL COMPONENT
// Use this for images that should open a before/after comparison on click
const ComparisonThumbnail = ({ src, alt, caption, onClick, pageName, beforeImage, afterImage }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(pageName, beforeImage, afterImage);
    }
  };

  return (
    <div 
      className="cs-thumbnail cs-compare-trigger"
      onClick={handleClick}
      role="button"
      aria-label={`View ${pageName} before and after comparison`}
      tabIndex="0"
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
    >
      <div className="cs-thumbnail-image-wrapper">
        <img 
          src={src} 
          alt={alt}
          loading="lazy"
        />
      </div>
      <div className="cs-thumbnail-caption">{caption}</div>
    </div>
  );
};

// 3. THUMBNAIL GRID COMPONENT
// Use this for the thumbnail grid section
const ThumbnailGrid = ({ thumbnails }) => {
  return (
    <div className="cs-thumbnails-container">
      {thumbnails.map((thumb, index) => (
        <div 
          key={index}
          className="cs-thumbnail cs-compare-trigger"
          onClick={() => thumb.onClick(thumb.pageName, thumb.beforeImage, thumb.afterImage)}
          role="button"
          aria-label={`View ${thumb.pageName} before and after comparison`}
          tabIndex="0"
          onKeyDown={(e) => e.key === 'Enter' && thumb.onClick(thumb.pageName, thumb.beforeImage, thumb.afterImage)}
        >
          <div className="cs-thumbnail-image-wrapper">
            <img 
              src={thumb.src} 
              alt={thumb.alt}
              loading="lazy"
            />
          </div>
          <div className="cs-thumbnail-caption">{thumb.caption}</div>
        </div>
      ))}
    </div>
  );
};

const IIDPCaseStudy = () => {
  // State for before/after modal (for sections like the "Before & After Visuals")
  const [modalData, setModalData] = useState({
    isOpen: false,
    pageName: '',
    beforeImage: '',
    afterImage: '',
  });

  // State for gallery modal (for wireframes)
  const [galleryModal, setGalleryModal] = useState({
    isOpen: false,
    gallery: [],
    title: '',
  });

  useEffect(() => {
    document.title = "IIDP Case Study | Dan Dougherty - UX Designer";
  }, []);

  // Function to open the before/after modal (for thumbnails section)
  const openBeforeAfterModal = (pageName, beforeImage, afterImage) => {
    setModalData({
      isOpen: true,
      pageName,
      beforeImage,
      afterImage,
    });
  };

  const closeBeforeAfterModal = () => {
    setModalData(prev => ({ ...prev, isOpen: false }));
  };

  // Function to open gallery modal (for wireframes)
  const openGalleryModal = (title, galleryArray) => {
    setGalleryModal({
      isOpen: true,
      gallery: galleryArray,
      title,
    });
  };

  const closeGalleryModal = () => {
    setGalleryModal(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="case-study-full">
      <Helmet>
        <title>IIDP Case Study | Dan Dougherty - UX Designer</title>
        <meta
          name="description"
          content="Case study for International Institute of Diplomacy for PROMISES (IIDP) project during a 48in48 Volunteer Website Sprint."
        />
      </Helmet>

      {/* Header Section */}
      <header className="case-study-header">
        <Link to="/" className="logo">Dan Dougherty</Link>
        <nav className="case-study-nav">
          <Link to="/">Home</Link>
          <Link to="/#case-studies">Case Studies</Link>
          <Link to="/#contact">Contact</Link>
        </nav>
      </header>

      {/* Executive Summary */}
      <h1>Case Study: International Institute of Diplomacy for PROMISES (IIDP)</h1>
      <div className="roles" id="executive-summary">
        <p>
          <strong>Event:</strong> 48in48 Volunteer Website Sprint (48 hours from kickoff to handoff)
        </p>
        <p>
          <strong>Nonprofit:</strong> IIDP – dedicated to breaking cycles of intergenerational incarceration by providing educational and entrepreneurial support.
        </p>
        <p>
          <strong>Team:</strong> 1 Project Manager, 1 UX Designer (also handling WordPress Development &amp; Content Creation)
        </p>
        <p>
          <strong>Outcome:</strong> A fully functional, mobile-responsive WordPress website that highlights IIDP's mission, programs, and donation pathways.
        </p>
        <p>
          <strong>My Roles &amp; Contributions:</strong>
        </p>
        <ul>
          <li><strong>UX Design:</strong> Led strategy, architecture, wireframes, and overall user experience.</li>
          <li><strong>WordPress Development:</strong> Built the site using Beaver Builder with a mobile-first approach.</li>
          <li><strong>Content Creation:</strong> Wrote and curated copy to ensure a consistent tone and hierarchy.</li>
        </ul>
      </div>

      {/* Problem Definition & Context */}
      <section id="problem-definition">
        <h2>Problem Definition &amp; Context</h2>
        <div className="side-by-side">
          <div className="side-text">
            <p>
              IIDP's existing website on Wix was incomplete, hard to navigate, and did not effectively encourage donations.
              The 48-hour sprint provided an opportunity to deliver a professional, fully functional site despite significant constraints:
            </p>
            <ul>
              <li><strong>Strict Deadline:</strong> Only 48 hours from kickoff to handoff.</li>
              <li><strong>Missing Roles:</strong> No dedicated WordPress developer or content writer; I assumed these roles alongside UX design.</li>
              <li><strong>User-Centric Goal:</strong> Increase donations and provide clear, scannable program information for multiple audience segments.</li>
            </ul>
          </div>
          <div className="side-image">
            <GalleryThumbnail 
              src={IIDPBefore}
              alt="IIDP Old Wix Site"
              caption="Before: IIDP's old Wix site"
              onClick={openGalleryModal}
              galleryTitle="Problem Context"
              galleryImages={[IIDPHomeBefore, IIDPAboutBefore, IIDPProgramBefore, ]}
            />
          </div>
        </div>
      </section>

      {/* Research & Insights */}
      <section id="research-insights">
        <h2>Research &amp; Insights</h2>
        <h3>Audience Segments</h3>
        <ul>
          <li><strong>Students (16–25):</strong> Need scholarships and mentorship; prefer mobile-friendly experiences.</li>
          <li><strong>Young Professionals (25–35):</strong> Seek volunteering and clear "Get Involved" CTAs.</li>
          <li><strong>Supporters &amp; Donors (30–45+):</strong> Need transparency and an easy donation process.</li>
        </ul>
        <h3>Key Takeaways</h3>
        <ul>
          <li>The site must clearly showcase IIDP's programs and funnel donors to a simple, trustworthy donation flow.</li>
          <li>A mobile-first design is essential.</li>
          <li>Limited testing meant relying on stakeholder feedback and best practices.</li>
        </ul>
      </section>

      {/* UX Strategy & Design Process */}
      <section id="ux-strategy">
        <h2>UX Strategy &amp; Design Process</h2>
        <h3>UX Strategy Document Highlights</h3>
        <ul>
          <li><strong>Color Palette:</strong> Green for growth/professionalism, Cream and Gold for warmth/impact.</li>
          <li><strong>Typography &amp; Components:</strong> Prioritized readability and consistent CTAs.</li>
          <li><strong>Information Architecture:</strong> An 8-page structure (Home, About, Programs, Get Involved, etc.).</li>
          <li><strong>Success Metrics:</strong> Fully functional donation flow, basic contact form, and mobile responsiveness.</li>
        </ul>
        <h3>Information Architecture &amp; Wireframes</h3>
        <div className="side-by-side">
          <div className="side-image">
            <GalleryThumbnail 
              src={IIDPWireframe1}
              alt="Wireframe Preview"
              caption="Wireframe snapshots – click to view full gallery"
              onClick={openGalleryModal}
              galleryTitle="Wireframes"
              galleryImages={[IIDPWireframe1, IIDPWireframe2]}
            />
          </div>
          <div className="side-text">
            <p>
              I sketched a sitemap and mapped user flows for each audience segment.
              Quick hand-drawn wireframes for core pages helped establish layout, content blocks, and CTA placement.
            </p>
          </div>
        </div>
        <h3>Building in WordPress (Beaver Builder)</h3>
        <div className="side-by-side">
          <div className="side-text">
            <p>
              I rapidly built the site using a base WordPress theme and Beaver Builder,
              incorporating the brand colors and consistent button styles defined in the UX Strategy Document.
              The design was responsive with essential breakpoint testing due to time constraints.
            </p>
            <h3>Content Creation</h3>
            <p>
              I collaborated with the project manager to utilize stakeholder-provided text and supplemented missing information with AI-generated copy,
              ensuring a clear, approachable voice throughout the site.
            </p>
          </div>
          <div className="side-image">
            <ComparisonThumbnail 
              src={IIDPHomeAfter}
              alt="Before: Wix Site Preview"
              caption="Before/After: Transition from Wix to WordPress"
              onClick={openBeforeAfterModal}
              pageName="Building in WordPress"
              beforeImage={IIDPHomeBefore}
              afterImage={IIDPHomeAfter}
            />
          </div>
        </div>
      </section>

      {/* The Final Solution & Outcome */}
      <section id="final-solution">
        <h2>The Final Solution &amp; Outcome</h2>
        <div className="side-by-side">
          <div className="side-image">
          <GalleryThumbnail 
              src={IIDPProgramAfter}
              alt="IIDP Final Site Preview"
              caption="IIDP Final Site Design"
              onClick={openGalleryModal}
              galleryTitle="IIDP Website Build"
              galleryImages={[IIDPHomeAfter, IIDPAboutAfter, IIDPProgramAfter, IIDPGetInvolvedAfter, IIDPContactAfter,]}
            />
          </div>
          <div className="side-text">
      <ul>
        <li>
          <strong>Prominent Donation Paths:</strong> Integrated buttons across the site to facilitate a seamless donation process.
        </li>
        <li>
          <strong>Clear Navigation:</strong> Designed an 8-page structure with mobile-friendly menus ensuring easy access to key information.
        </li>
        <li>
          <strong>Program &amp; Impact Highlights:</strong> Created dedicated pages to showcase IIDP's initiatives and their impact, driving transparency and trust.
        </li>
        <li>
          <strong>Contact &amp; Volunteer Engagement:</strong> Implemented a basic contact form and volunteer signup flow to encourage user interaction and support.
        </li>
      </ul>
    </div>
        </div>
      </section>

      {/* Before & After Visuals Section */}
      <section id="before-after">
        <h2>Before &amp; After Visuals</h2>
        <p>Click on a thumbnail below to view an interactive comparison of the key pages.</p>
        
        <ThumbnailGrid thumbnails={[
          {
            src: IIDPHomeAfter,
            alt: "Homepage After Implementation",
            caption: "Homepage",
            onClick: openBeforeAfterModal,
            pageName: "Homepage",
            beforeImage: IIDPHomeBefore,
            afterImage: IIDPHomeAfter
          },
          {
            src: IIDPAboutAfter,
            alt: "Homepage After Implementation",
            caption: "About Us",
            onClick: openBeforeAfterModal,
            pageName: "About Us",
            beforeImage: IIDPAboutBefore,
            afterImage: IIDPAboutAfter
          },
          {
            src: IIDPProgramAfter,
            alt: "Programs Page After Implementation",
            caption: "Programs",
            onClick: openBeforeAfterModal,
            pageName: "Programs",
            beforeImage: IIDPProgramBefore,
            afterImage: IIDPProgramAfter
          },
          {
            src: IIDPContactAfter,
            alt: "Contact Page After Implementation",
            caption: "Contact",
            onClick: openBeforeAfterModal,
            pageName: "Contact",
            beforeImage: IIDPContactBefore,
            afterImage: IIDPContactAfter
          }
        ]} />
      </section>

      {/* Reflections & Lessons Learned */}
      <section id="reflections">
        <h2>Reflections &amp; Lessons Learned</h2>
        <ul>
          <li><strong>Strategic Planning Under Pressure:</strong> The UX Strategy Document was vital for focusing on must-have features.</li>
          <li><strong>Prioritization:</strong> Emphasizing IA, critical design decisions, and donation flow helped meet the tight deadline.</li>
          <li><strong>Rapid Iterations:</strong> Hand-drawn wireframes enabled quick transitions to a functional design.</li>
          <li><strong>Future Opportunities:</strong> Deeper user testing and enhanced micro-interactions can further refine the experience.</li>
        </ul>
        <p>
          Key Takeaway: Despite constraints, the project delivered a professional, user-centered website that positions IIDP for increased donations and program growth.
        </p>
      </section>

      {/* Back to Home */}
      <Link to="/" className="back-button">&larr; Back to Home</Link>

      {/* Modals */}
      <BeforeAfterModal
        isOpen={modalData.isOpen}
        onRequestClose={closeBeforeAfterModal}
        beforeImage={modalData.beforeImage}
        afterImage={modalData.afterImage}
        pageName={modalData.pageName}
      />
      
      <GalleryModal
        isOpen={galleryModal.isOpen}
        onRequestClose={closeGalleryModal}
        gallery={galleryModal.gallery}
        title={galleryModal.title}
      />
    </div>
  );
};

export default IIDPCaseStudy;