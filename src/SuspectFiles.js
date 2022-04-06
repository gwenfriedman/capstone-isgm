import React from 'react'
import pic from './images/arriveonscene.png';
import { useNavigate } from "react-router-dom";
import leftArrow from './images/icons/left-arrow.png';
import rightArrow from './images/icons/right-arrow.png';

import './App.css';
import './generalStyling.css';

function SuspectFiles() {

  let navigate = useNavigate();

  return (
    <div style={{ width: '100%' }}>

      <div style={{ position: "relative" }} >
        {/* <img src={pic} width={"100%"} /> */}
      </div>

      <img src={leftArrow} alt="left arrow" className='leftArrow' />
      <img src={rightArrow} alt="right arrow" className='rightArrow' />

      <button className='styledButton buttonCenter' onClick={() => navigate("/about")}>
        Exit the experience
      </button>
    </div>

  )
}

export default SuspectFiles;