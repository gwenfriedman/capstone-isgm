import React from 'react'
import pic from './images/guard-lineup.png';
import { useNavigate } from "react-router-dom";

import './App.css';
import './generalStyling.css';

function GuardLineup() {


  let navigate = useNavigate();

  function clickRandy() {
    localStorage.setItem("randy", "randy")
    navigate("/randy")
  }

  function clickRick() {
    localStorage.setItem("rick", "rick")
    navigate("/rick")
  }

  return (
    <div style={{ width: '100%' }}>

      <div style={{ position: "relative" }} >
        <img src={pic} width={"100%"} />
      </div>

      <div className='guard-buttons'>
        <button className='styledButton' onClick={() => clickRick()}>
          Rick
        </button>

        <button className='styledButton' onClick={() => clickRandy()}>
          Randy
        </button>
      </div>

      <button className={`styledButton buttonCenter ${(localStorage.getItem("randy") != null && localStorage.getItem("rick") != null) ? "buttonTransition" : "buttonHide"}`}
        onClick={() => navigate("/policeSketches")}>
        Work with the sketch artist
      </button>
    </div>

  )
}

export default GuardLineup;