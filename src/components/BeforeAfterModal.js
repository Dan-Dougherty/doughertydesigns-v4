// Fixed BeforeAfterModal.js
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import ReactCompareImage from 'react-compare-image';
import './BeforeAfterModal.css';

// Set the app element for accessibility
Modal.setAppElement('#root');

const BeforeAfterModal = ({ isOpen, onRequestClose, beforeImage, afterImage, pageName }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  
  // Handle slider position change
  const handleSliderChange = (e) => {
    const value = Number(e.target.value);
    setSliderPosition(value);

  // Update CSS variable for slider background
    const sliderInput = document.querySelector('.slider-input');
    if (sliderInput) {
      sliderInput.style.setProperty('--slider-position', `${value}%`);
    }
  };
  
  // Reset slider position when modal opens
  useEffect(() => {
    if (isOpen) {
      setSliderPosition(50);

      // Reset CSS variable
      setTimeout(() => {
        const sliderInput = document.querySelector('.slider-input');
        if (sliderInput) {
          sliderInput.style.setProperty('--slider-position', '50%');
        }
      }, 100);
    }
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={`${pageName} Before & After`}
      className="before-after-modal"
      overlayClassName="before-after-overlay"
    >
      <div className="modal-header">
        <h2>{pageName} - Before &amp; After</h2>
        <button className="modal-close" onClick={onRequestClose}>
          &times;
        </button>
      </div>
      
      <div className="compare-container">
        <div className="comparison-slider">
          <ReactCompareImage
            leftImage={beforeImage}
            rightImage={afterImage}
            sliderPositionPercentage={sliderPosition / 100}
            sliderLineWidth={3}
            sliderLineColor="#0073b1"
            handle={
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  border: '3px solid #fff',
                  borderRadius: '50%',
                  backgroundColor: '#0073b1',
                  cursor: 'ew-resize',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  boxShadow: '0 0 10px rgba(0,0,0,0.5)'
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 5L3 10L8 15M16 5L21 10L16 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            }
            leftImageCss={{
              height: 'auto',
              maxHeight: '70vh',
              objectFit: 'contain'
            }}
            rightImageCss={{
              height: 'auto',
              maxHeight: '70vh',
              objectFit: 'contain'
            }}
            onSliderPositionChange={(position) => {
              const value = position * 100;
              setSliderPosition(value);
              
              // Update CSS variable for slider background
              const sliderInput = document.querySelector('.slider-input');
              if (sliderInput) {
                sliderInput.style.setProperty('--slider-position', `${value}%`);
              }
            }}
          />
        </div>
        
        <div className="slider-controls">
          <span className="slider-label">Before</span>
          <div className="slider-wrapper">
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={handleSliderChange}
              className="slider-input"
            />
          </div>
          <span className="slider-label">After</span>
        </div>
      </div>
    </Modal>
  );
};

export default BeforeAfterModal;