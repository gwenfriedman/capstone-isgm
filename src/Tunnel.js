import React, { useState, useEffect } from 'react';
import { ReactFlashlight } from "react-flashlight";
import tunnelImg from './images/tunnel.png'
import { useNavigate } from "react-router-dom";
import Captions from './Captions';
import audio from './audio/intro/tunnel.mp3';

function Tunnel() {

  const [displayButton, setDisplayButton] = useState(false);

  useEffect(() => {
    setTimeout(() => setDisplayButton(true), 4000)
  }, [])

  let navigate = useNavigate();

  return (

    <div>
      <ReactFlashlight>
        <div>
          <img style={{ width: "100vw" }} src={tunnelImg} alt="guard in tunnel" />
        </div>
      </ReactFlashlight>

      {/* TODO: only show once user hovers over rick */}
      <div className={"caption-container"} style={{ position: "absolute", bottom: 10, left: 50 }}>
        {Captions(
          [
            "Oh my god, they’re alive. Help me untie them"
          ],
          ["Detective Willard"],
          [0, 4000],
          audio, 4000)}
      </div>

      <button className={`styledButton buttonCenter ${displayButton ? "buttonTransition" : "buttonHide"}`} onClick={() => navigate("/guardLineup")}>
        Help untie the guards
      </button>
    </div>
  )
}

export default Tunnel;