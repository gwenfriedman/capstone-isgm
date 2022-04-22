import React, { useState, useEffect } from 'react'
import witnesses from './images/witnesses.png';
import { useNavigate } from "react-router-dom";
import x from './images/icons/map.png';
import leftArrow from './images/icons/left-arrow.png';
import QuestionBlock from './QuestionBlock';
import Captions from './Captions';
import audio from './audio/witnesses/witnesses.mp3';
import intro from './audio/witnesses/witness-intro.mp3';
import nancy from './audio/witnesses/nancy.mp3';


import './App.css';
import './generalStyling.css';

function CourtyardWitnesses() {

  let navigate = useNavigate();
  const [showIntro, setShowIntro] = useState(true);
  const [showq1, setShowq1] = useState(false);
  const [showq2, setShowq2] = useState(false);
  const [showQuestions, setShowQuestions] = useState(false);


  useEffect(() => {
    setTimeout(() => setShowQuestions(true), 4000)
  }, [])

  function clickedq1() {
    setShowq1(true)
    setShowq2(false)
    setShowIntro(false)
  }

  function clickedq2() {
    setShowq1(false)
    setShowq2(true)
    setShowIntro(false)
  }

  return (
    <div style={{ width: '100%' }}>

      <div style={{ position: "relative" }} >
        <img src={witnesses} width={"100%"} />
      </div>

      {showQuestions &&
        <QuestionBlock title={"What would you like to ask FBI Agent Baker?"}
          questions={[
            "What did you see the night of the robbery?",
            "Do the police sketches look like the men you saw?"
          ]}
          functions={[
            clickedq1, clickedq2
          ]}
          blockId={"witnesses"}
        />
      }

      {showIntro &&
        <div className={"caption-container"} style={{ position: "absolute", bottom: 10, left: 50 }}>
          <Captions text={["Hey, I'm Nancy", "and my name's Justin. How can we help?"]}
            people={["Witness: Nancy", "Witness: Justin"]}
            timeoutDelays={[0, 2000, 2000]}
            audio={intro}
            endTime={4000} />
        </div>
      }

      {showq1 &&
        <div className={"caption-container"} style={{ position: "absolute", bottom: 10, left: 50 }}>
          <Captions text={[
            "We were out with friends and it was around maybe 12:45 in the morning and we were walking down Palace Road.",
            "Umm it was really quiet and really dark. I asked my friend Justin “hey can you give me a piggy back ride”",
            "and I jumped on his back. We just started walking down the street",
            "we were goofing around. We had had a couple beers. and I noticed that this car, it looked like a dodge daytona",
            "had its running lights on parked right next to the Isabella Stewart Gardner museum. We walked up behind it.",
            "We got up close to it while walking by and we saw two men sitting in the front seat. There was a glare from a street lamp, but I could see the shoulder of a policeman’s uniform."
          ]}
            people={["Witness: Nancy", "Witness: Nancy", "Witness: Nancy", "Witness: Justin", "Witness: Justin", "Witness: Justin"]}
            timeoutDelays={[0, 8000, 8000, 5000, 8000, 6000, 12000]}
            audio={audio}
            endTime={47000} />
        </div>
      }


      {showq2 &&
        <div className={"caption-container"} style={{ position: "absolute", bottom: 10, left: 50 }}>
          <Captions text={[
            "No, neither of those look like the guys I got a really good look at"
          ]}
            people={["Witness: Nancy"]}
            timeoutDelays={[0, 4000]}
            audio={nancy}
            endTime={4000} />
        </div>
      }

      <img src={x} alt="map icon" className='mapButton' onClick={() => navigate("/map")} />
      <img src={leftArrow} alt="left arrow" className='leftArrow' onClick={() => navigate("/courtyard")} />
    </div>

  )
}

export default CourtyardWitnesses;