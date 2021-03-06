import React, { useState, useEffect } from 'react';
import { ReactFlashlight } from "react-flashlight";
import tunnelImg from './images/tunnel.png'
import { useNavigate } from "react-router-dom";
import Captions from './Captions';
import audio from './audio/intro/tunnel.mp3';

function Tunnel() {

  const [displayButton, setDisplayButton] = useState(false);
  const [showCaption, setShowCaption] = useState(false);

  const [startAudio, setStartAudio] = useState(false);

  let audio1 = new Audio(audio)

  audio1.addEventListener("canplaythrough", event => {
    setStartAudio(true)
    console.log("setStartAudio true")
  });

  useEffect(() => {
    setTimeout(() => setDisplayButton(true), 7000)
    setTimeout(() => setShowCaption(true), 3000)
  }, [])

  let navigate = useNavigate();

  return (

    <div style={{backgroundColor: 'black'}} className='tunnel-page'>

      {startAudio &&
        <div>
          <ReactFlashlight className='tunnel-page' showCursor="true">
            <div>
              <img style={{ width: "100vw" }} src={tunnelImg} alt="guard in tunnel" />
            </div>
          </ReactFlashlight>


          {showCaption &&
            <div className={"caption-container"} style={{ position: "absolute", bottom: 10, left: 50 }}>
              <Captions
                text={[
                  "Oh my god, they’re alive. Help me untie them"
                ]}
                people={["Detective Willard"]}
                timeoutDelays={[0, 4000]}
                audio={audio1}
                endTime={4000} />
            </div>
          }

          <button className={`styledButton buttonBottom ${displayButton ? "buttonTransition" : "buttonHide"}`} onClick={() => navigate("/guardLineup")}>
            Help untie the guards
          </button>
        </div>
      }
    </div>
  )
}

export default Tunnel;