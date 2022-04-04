import React from 'react'
import fbi from './images/Baker.png';
import { useNavigate } from "react-router-dom";
import x from './images/x.png';

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
    </div>

  )
}

export default CourtyardFBI;