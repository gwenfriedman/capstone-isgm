import React from 'react'
import witnesses from './images/Witnesses.png';
import { useNavigate } from "react-router-dom";
import x from './images/x.png';

import './App.css';
import './generalStyling.css';

function CourtyardWitnesses() {


  let navigate = useNavigate();

  return (
    <div style={{ width: '100%' }}>
        
      <div style={{ position: "relative" }} >
        <img src={witnesses} width={"100%"} />
      </div>

      <img src={x} alt="map icon" className='mapButton' onClick={() => navigate("/map")} />
    </div>

  )
}

export default CourtyardWitnesses;