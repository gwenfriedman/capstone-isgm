import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import call from './audio/intro/phone-call.mp3';
import ringing from './audio/intro/ringing.mp3';
import Captions from './Captions';
import ImageMapper from 'react-img-mapper';
import myData from './imageMapLocations/Phone.json';
import phone from './images/call-to-user.png';

import './App.css';
import './generalStyling.css';

function PhoneCall() {

  let ringAudio = new Audio(ringing)

  const MAP = {
    name: 'my-map',
    areas: myData
  };

  let navigate = useNavigate();

  const [displayButton, setDisplayButton] = useState(false);
  const [answerPhone, setAnswerPhone] = useState(false);
  const [showText, setShowText] = useState(true);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const [startAudio1, setStartAudio1] = useState(false);

  let audio1 = new Audio(call)

  audio1.addEventListener("canplaythrough", event => {
    setStartAudio1(true)
    console.log("setStartAudio1")
  });

  useEffect(() => {
    console.log("ring.play")
    ringAudio.play()
    ringAudio.loop = true

    function handleResize() {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      ringAudio.pause()
      ringAudio.remove()
    };

  }, [])

  const buttonClicked = (area) => {
    if (area.title === "phone") {

      // todo: why will this not pause?
      ringAudio.pause()
      ringAudio.remove()
      console.log("stop ringing")
      setAnswerPhone(true)
      setTimeout(() => setDisplayButton(true), 8000)
      setShowText(false)
    }
  }

  return (
    <div style={{ width: '100%' }}>

      {(startAudio1) &&
        <div>

          <button className={`styledButton buttonCenter ${displayButton ? "buttonTransition" : "buttonHide"}`} onClick={() => navigate("/arriveOnScene")}>
            Head to the museum
          </button>

          <ImageMapper
            src={phone}
            width={screenWidth}
            map={MAP}
            responsive={true}
            parentWidth={window.innerWidth}
            onClick={(area) => buttonClicked(area)}
          />

          {showText &&
            <p className='phone-text'> click to answer </p>
          }

          {answerPhone &&
            <div className={"caption-container"} style={{ position: "absolute", bottom: 10, left: 50 }}>
              <Captions
                text={[
                  "I need you to get to the Isabella Stewart Gardner Museum. We just got a call about a robbery. I’m sending another detective to meet you at the scene."
                ]}
                people={["Police Chief"]}
                timeoutDelays={[0, 8000]}
                audio={audio1}
                endTime={8000} />
            </div>
          }
        </div>
      }
    </div>
  )
}

export default PhoneCall;