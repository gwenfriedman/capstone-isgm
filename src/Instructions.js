import React from 'react'
import { useNavigate } from "react-router-dom";
import frame from './images/instructions-frame.png';

import './App.css';
import './generalStyling.css';

function Instructions() {


  let navigate = useNavigate();

  return (
    <div style={{ width: '100%', backgroundColor: "black", height: "100vh", paddingTop: "50px" }}>

      <img className={"home-frame instructions-frame"} src={frame} width="550px" />

      <div className='instruction-content'>
        <p>
          Instructions <br /> <br />
          It’s March of 1990, the Isabella Stewart Gardner Museum has just been robbed.
          Enter the scene as a Boston detective as one of the first on the scene. <br /> <br />

          1. Talk to experts and witnesses to learn more about the robbers and art. <br />
          2. Explore the rooms and discover the missing paintings<br />
          3. Gather evidence to learn more about the crime<br />

        </p>

        <button className='styledButton instruction-button' onClick={() => navigate("/phoneCall")}>
          Let's go!
        </button>
      </div>

    </div>

  )
}

export default Instructions;