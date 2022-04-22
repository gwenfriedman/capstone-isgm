import React, { useState, useEffect } from 'react'
import homescreen from './images/homescreen.png';
import intro1 from './images/intro1.png';
import intro2 from './images/intro2.png';
import introAudio from './audio/intro/intro.mp3';
import { useNavigate } from "react-router-dom";

import Captions from './Captions';

import './App.css';
import './generalStyling.css';

import 'animate.css/animate.min.css';

function Intro() {

  let navigate = useNavigate();
  const [displayButton, setDisplayButton] = useState(false);
  const [bgImage, setBgImage] = useState(homescreen);

  useEffect(() => {
    setTimeout(() => setDisplayButton(true), 70000)
    setTimeout(() => setBgImage(intro1), 20000)
    setTimeout(() => setBgImage(intro2), 52000)
  }, [])

  return (
    <div style={{ width: '100%' }}>


      {/* TODO: change image halfway through once I get them */}
      <div style={{ position: "relative" }} >
        <img src={bgImage} width={"100%"} />
      </div>

      <div className={"caption-container"} style={{ position: "absolute", bottom: 10, left: 50 }}>
        <Captions
          text={["Boston Police, we got a report here of a disturbance on the premises",
            "What’s the matter officer? Is there something wrong?",
            "Open the gate, we got a report of a disturbance on the premises",
            "We haven’t seen anything in here, but you’re welcome to come take a look",
            "Are you alone?",
            "No, my partner is doing rounds",
            "Get him down here",
            "What’s the matter?",
            "We have some questions",
            "uhh Randy can you get down here?",
            "sure uhh, on my way down",
            "Hey don’t I know you, don’t I recognize that face? I think there’s a warrant out for your arrest. Can you step out from behind the desk please sir? Up against that wall",
            "What’s going on here? Is everything okay?",
            "Put him up against the wall",
            "Put it around his head. Make sure the eyes are completely covered.",
            "Don’t try anything funny and you won’t get hurt. Gentlemen, this is a robbery"
          ]}
          people={["Robber #1", "Rick", "Robber #2", "Rick", "Robber #2", "Rick", "Robber #2", "Rick",
            "Robber #2", "Rick", "Randy", "Robber #1", "Randy", "Robber #2", "Robber #1", "Robber #2"]}
          timeoutDelays={[0, 6000, 3500, 4000, 8000, 3000, 3000, 2000, 1000, 1500, 7000, 3000, 13000, 2000, 2500, 4500, 9000]}
          audio={introAudio} 
          endTime={70000} />
      </div>


      <button className={`styledButton buttonCenter ${displayButton ? "buttonTransition" : "buttonHide"}`} onClick={() => navigate("/callToPolice")}>
        Skip ahead to the next morning
      </button>
    </div>

  )
}

export default Intro;