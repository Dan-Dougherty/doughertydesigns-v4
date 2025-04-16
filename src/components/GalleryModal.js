// Enhanced GalleryModal.js with advanced zoom and pan functionality
import React, { useState, useEffect, useRef } from 'react';
import Modal from 'react-modal';
import './GalleryModal.css';

// Set the app element for accessibility
Modal.setAppElement('#root');

const GalleryModal = ({ isOpen, onRequestClose, gallery, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [transform, setTransform] = useState({
    scale: 1,
    translateX: 0,
    translateY: 0,
  });
  const imageContainerRef = useRef(null);
  const imageRef = useRef(null);
  const isDraggingRef = useRef(false);
  const lastPositionRef = useRef({ x: 0, y: 0 });

  // Navigation functions
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? gallery.length - 1 : prevIndex - 1
    );
    resetZoom();
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === gallery.length - 1 ? 0 : prevIndex + 1
    );
    resetZoom();
  };

  // Reset zoom state
  const resetZoom = () => {
    setIsZoomed(false);
    setTransform({
      scale: 1,
      translateX: 0,
      translateY: 0,
    });
  };

  // Handle zoom on image click
  const handleZoom = (e) => {
    if (!imageRef.current) return;

    // If already zoomed and not dragging, reset zoom
    if (isZoomed && !isDraggingRef.current) {
      resetZoom();
      return;
    }

    // If we're currently dragging, don't do anything on click
    if (isDraggingRef.current) {
      return;
    }

    // Get the click position relative to the image
    const rect = imageRef.current.getBoundingClientRect();
    const offsetX = (e.clientX - rect.left) / rect.width;
    const offsetY = (e.clientY - rect.top) / rect.height;

    // Set zoom state
    setIsZoomed(true);
    
    // Calculate the translation needed to center on the clicked point
    // The formula needs to account for the difference between the clicked point and the center
    setTransform({
      scale: 2.5, // Zoom level
      // Move the point we clicked to the center of the viewport
      translateX: (0.5 - offsetX) * rect.width,
      translateY: (0.5 - offsetY) * rect.height,
    });
  };

  // Handle mouse down for dragging
  const handleMouseDown = (e) => {
    if (!isZoomed) return;
    
    isDraggingRef.current = true;
    lastPositionRef.current = { x: e.clientX, y: e.clientY };
    
    // Prevent default to stop text selection during drag
    e.preventDefault();
  };

  // Handle mouse move for panning
  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) return;
    
    const deltaX = e.clientX - lastPositionRef.current.x;
    const deltaY = e.clientY - lastPositionRef.current.y;
    
    setTransform(prev => ({
      ...prev,
      translateX: prev.translateX + deltaX / prev.scale,
      translateY: prev.translateY + deltaY / prev.scale,
    }));
    
    lastPositionRef.current = { x: e.clientX, y: e.clientY };
  };

  // Handle mouse up to end dragging without resetting zoom
  const handleMouseUp = (e) => {
    // If we were dragging, prevent the click event from firing
    if (isDraggingRef.current) {
      e.stopPropagation();
      isDraggingRef.current = false;
    }
  };

  // Handle touch events for mobile
  const handleTouchStart = (e) => {
    if (!isZoomed) return;
    
    isDraggingRef.current = true;
    lastPositionRef.current = { 
      x: e.touches[0].clientX, 
      y: e.touches[0].clientY 
    };
    
    // Prevent default to stop scrolling during drag
    e.preventDefault();
  };

  const handleTouchMove = (e) => {
    if (!isDraggingRef.current) return;
    
    const deltaX = e.touches[0].clientX - lastPositionRef.current.x;
    const deltaY = e.touches[0].clientY - lastPositionRef.current.y;
    
    setTransform(prev => ({
      ...prev,
      translateX: prev.translateX + deltaX / prev.scale,
      translateY: prev.translateY + deltaY / prev.scale,
    }));
    
    lastPositionRef.current = { 
      x: e.touches[0].clientX, 
      y: e.touches[0].clientY 
    };
    
    // Prevent default to stop scrolling during drag
    e.preventDefault();
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          handlePrev();
          break;
        case 'ArrowRight':
          handleNext();
          break;
        case 'Escape':
          if (isZoomed) {
            resetZoom();
          } else {
            onRequestClose();
          }
          break;
        default:
          break;
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isZoomed, onRequestClose]);

  // Add and remove event listeners for mouse move and up
  useEffect(() => {
    const imageElement = imageRef.current;
    
    // Track how far we've moved during a drag operation
    let hasMoved = false;
    const moveThreshold = 5; // Pixels of movement to consider it a drag
    
    // Enhanced move handler that tracks movement
    const enhancedMouseMove = (e) => {
      if (!isDraggingRef.current) return;
      
      const deltaX = Math.abs(e.clientX - lastPositionRef.current.x);
      const deltaY = Math.abs(e.clientY - lastPositionRef.current.y);
      
      // If we've moved more than the threshold, mark as moved
      if (deltaX > moveThreshold || deltaY > moveThreshold) {
        hasMoved = true;
      }
      
      handleMouseMove(e);
    };
    
    // Enhanced up handler that only resets if we haven't moved
    const enhancedMouseUp = (e) => {
      if (isDraggingRef.current) {
        // If this was just a click (no significant movement)
        if (!hasMoved) {
          // Allow click to be processed, which will reset zoom
          handleMouseUp(e);
        } else {
          // It was a drag, so prevent click from resetting zoom
          e.stopPropagation();
          isDraggingRef.current = false;
        }
        
        // Reset for next interaction
        hasMoved = false;
      }
    };
    
    document.addEventListener('mousemove', enhancedMouseMove);
    document.addEventListener('mouseup', enhancedMouseUp);
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      document.removeEventListener('mousemove', enhancedMouseMove);
      document.removeEventListener('mouseup', enhancedMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  // Reset to first image when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
      resetZoom();
    }
  }, [isOpen]);

  // If no gallery or empty gallery, return null
  if (!gallery || gallery.length === 0) return null;

  // Image transform style
  const imageStyle = {
    transform: `scale(${transform.scale}) translate(${transform.translateX}px, ${transform.translateY}px)`,
    cursor: isZoomed ? 'move' : 'zoom-in',
    transition: isDraggingRef.current ? 'none' : 'transform 0.3s ease',
  };
    
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => {
        if (isZoomed) {
          resetZoom();
        } else {
          onRequestClose();
        }
      }}
      contentLabel={title}
      className="gallery-modal"
      overlayClassName="gallery-overlay"
    >
      <div className="gallery-header">
        <h2>{title}</h2>
        <button className="gallery-close" onClick={onRequestClose}>
          &times;
        </button>
      </div>
      
      <div className="gallery-content">
        <button 
          className="gallery-nav prev" 
          onClick={handlePrev}
          aria-label="Previous image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
          </svg>
        </button>
        
        <div 
          className="gallery-image-container" 
          ref={imageContainerRef}
        >
          <img
            ref={imageRef}
            src={gallery[currentIndex]}
            alt={`${title} - Image ${currentIndex + 1}`}
            className="gallery-image"
            style={imageStyle}
            onClick={handleZoom}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            draggable="false"
          />
        </div>
        
        <button 
          className="gallery-nav next" 
          onClick={handleNext}
          aria-label="Next image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
          </svg>
        </button>
        
        <div className="gallery-image-count">
          {currentIndex + 1} / {gallery.length}
        </div>
      </div>
      
      <div className="gallery-dots">
        {gallery.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => {
              setCurrentIndex(index);
              resetZoom();
            }}
            aria-label={`Go to image ${index + 1}`}
          ></span>
        ))}
      </div>
      
      <div className="gallery-counter">
        <p>{isZoomed ? "Drag to pan • Click to reset zoom" : "Click image to zoom • Use arrow keys to navigate"}</p>
      </div>
    </Modal>
  );
};

export default GalleryModal;