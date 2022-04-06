import React from 'react';
import { ReactFlashlight } from "react-flashlight";
import tunnelImg from './images/Tunnel.png'
import audio1 from './audio/test-audio.m4a'
import { useNavigate } from "react-router-dom";


function Tunnel() {

  let sound = new Audio(audio1)

  setTimeout(() => { sound.play() }, 1000);

  let navigate = useNavigate();

  return (

    <div>
    <ReactFlashlight>
      <div>
        <img style={{ width: "100vw" }} src={tunnelImg} alt="guard in tunnel" />
      </div>
    </ReactFlashlight>
    
    <button className='styledButton buttonCenter' onClick={() => navigate("/guardLineup")}>
      Help untie the guards
    </button>
    </div>
  )
}

export default Tunnel;