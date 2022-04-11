import React, { useState, useEffect } from 'react'
import home from './images/homescreen.png';
import introAudio from './audio/intro/intro.mp3';
import { useNavigate } from "react-router-dom";

import Captions from './Captions';

import './App.css';
import './generalStyling.css';

import 'animate.css/animate.min.css';

function Intro() {

  let navigate = useNavigate();
  const [displayButton, setDisplayButton] = useState(false);

  useEffect(() => {
    setTimeout(() => setDisplayButton(true), 70000)
  }, [])

  return (
    <div style={{ width: '100%' }}>


      {/* TODO: change image halfway through once I get them */}
      <div style={{ position: "relative" }} >
        <img src={home} width={"100%"} />
      </div>

      <div className={"caption-container"} style={{ position: "absolute", bottom: 10, left: 50 }}>
        {Captions(
          ["Boston Police, we got a report of a disturbance on the premises",
            "What’s the matter officer? Is there something wrong?",
            "Open the gate, we got a report of a disturbance on the premises",
            "We haven’t seen anything in here, but you’re welcome to come take a look",
            "Are you alone?",
            "No, my partner is doing rounds",
            "Get him down here",
            "What’s the matter?",
            "We have some questions",
            "uhh Randy can you get down here",
            "sure man, on my way",
            "Hey don’t I know you, don’t I recognize you? I think there’s a warrant out for your arrest. Can you step out from behind the desk? Up against the wall",
            "What’s going on here? Everything ok officers?",
            "Put him up against the wall, pat him down and handcuff him",
            "put it around his head. make sure his eyes are completely covered",
            "Don’t try anything funny and you won’t get hurt. Gentlemen, this is a robbery",
            ""

          ],
          ["Robber #1", "Rick", "Robber #2", "Rick", "Robber #2", "Rick", "Robber #2", "Rick",
            "Robber #2", "Rick", "Randy", "Robber #1", "Randy", "Robber #2", "Robber #1", "Robber #2"],
          [0, 6000, 3500, 4000, 8000, 3000, 3000, 2000, 1000, 2000, 7000, 3000, 13000, 2000, 3000, 5000, 9000],
          introAudio, 70000)}
      </div>


      <button className={`styledButton buttonCenter ${displayButton ? "buttonTransition" : "buttonHide"}`} onClick={() => navigate("/callToPolice")}>
        Skip ahead to the next morning
      </button>
    </div>

  )
}

export default Intro;