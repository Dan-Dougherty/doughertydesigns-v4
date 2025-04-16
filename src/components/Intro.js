import React from 'react';
import './Intro.css';
import catGif from '../assets/cat_running.gif';

const Intro = () => {
  return (
    <div className="intro-container">
      <div className="intro-text">
        <h1>Dan Dougherty</h1>
        <h2>UX Designer</h2>
      </div>
      <div className="cat">
        <img src={catGif} alt="Running cat" className="cat-gif" />
      </div>
      <div className="ball"></div>
      <div className="ground"></div>
    </div>
  );
};

export default Intro;
