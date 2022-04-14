import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import call from './audio/intro/phone-call.mp3';
import ringing from './audio/intro/ringing.mp3';
import Captions from './Captions';

import './App.css';
import './generalStyling.css';

function PhoneCall() {

  let ring = new Audio(ringing)

  let navigate = useNavigate();

  const [displayButton, setDisplayButton] = useState(false);
  const [answerPhone, setAnswerPhone] = useState(false);

  useEffect(() => {
    ring.play()
    setTimeout(() => setDisplayButton(true), 13000)
  }, [])

  const buttonClicked = () => {
    setAnswerPhone(true)

    ring.pause()

    setTimeout(() => setDisplayButton(true), 13000)
  }

  return (
    <div style={{ width: '100%' }}>
      <style>{'body { background-color: black; }'}</style>

      {answerPhone &&
        <div className={"caption-container"} style={{ position: "absolute", bottom: 10, left: 50 }}>
          <Captions
            text={[
              "You need to get to the Isabella Stuart Gardner Museum immediately. There’s been a robbery. I’m sending another detective to meet you at the scene."
            ]}
            people={["Police Chief"]}
            timeoutDelays={[0, 10000]}
            audio={call}
            endTime={10000} />
        </div>
      }

      <button className={`styledButton buttonCenter ${displayButton ? "buttonTransition" : "buttonHide"}`} onClick={() => navigate("/arriveOnScene")}>
        Head to the museum
      </button>

      <button className={`styledButton buttonCenter ${answerPhone ? "buttonHide" : "buttonTransition"}`} onClick={() => buttonClicked()}>
        Answer phone
      </button>
    </div>

  )
}

export default PhoneCall;