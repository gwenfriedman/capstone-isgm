import React from 'react'
import fbi from './images/baker.png';
import { useNavigate } from "react-router-dom";
import x from './images/x.png';
import leftArrow from './images/icons/left-arrow.png';

import './App.css';
import './generalStyling.css';

function CourtyardFBI() {


  let navigate = useNavigate();

  return (
    <div style={{ width: '100%' }}>
        
      <div style={{ position: "relative" }} >
        <img src={fbi} width={"100%"} />
      </div>

      <img src={x} alt="map icon" className='mapButton' onClick={() => navigate("/map")} />

      <img src={leftArrow} alt="left arrow" className='leftArrow' onClick={() => navigate("/courtyard")} />
    </div>

  )
}

export default CourtyardFBI;