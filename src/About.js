import React from 'react'
import { useNavigate } from "react-router-dom";
import leftArrow from './images/icons/left-arrow.png';
import rightArrow from './images/icons/right-arrow.png';

import './App.css';
import './generalStyling.css';

function About() {

  let navigate = useNavigate();

  return (
    <div style={{ width: '100%' }}>

      <img src={leftArrow} alt="left arrow" className='leftArrow' />
      <img src={rightArrow} alt="right arrow" className='rightArrow' />

      <button className='styledButton buttonCenter' onClick={() => {
        localStorage.clear()
        navigate("/")
      }}>
        Start over
      </button>
    </div>

  )
}

export default About;