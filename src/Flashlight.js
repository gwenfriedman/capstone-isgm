import React from 'react';
import { ReactFlashlight } from "react-flashlight";
import tunnelImg from './images/tunnel.png'
import audio1 from './audio/test-audio.m4a'


function Flashlight() {

  let sound = new Audio(audio1)

  setTimeout(() => { sound.play() }, 1000);

  //TODO: does this page need a prompt of what to do?

  return (

    <ReactFlashlight>
      <div>
        <img style={{ width: "100vw" }} src={tunnelImg} alt="guard in tunnel" />
      </div>
    </ReactFlashlight>
  )
}

export default Flashlight;