import React, { useState, useEffect } from 'react'
import witnesses from './images/witnesses.png';
import { useNavigate } from "react-router-dom";
import x from './images/x.png';
import leftArrow from './images/icons/left-arrow.png';
import QuestionBlock from './QuestionBlock';
import Captions from './Captions';

import './App.css';
import './generalStyling.css';

function CourtyardWitnesses() {

  let navigate = useNavigate();
  const [showIntro, setShowIntro] = useState(true);
  const [showq1, setShowq1] = useState(false);
  const [showq2, setShowq2] = useState(false);
  const [showQuestions, setShowQuestions] = useState(false);


  useEffect(() => {
    setTimeout(() => setShowQuestions(true), 7000)
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

      <img src={x} alt="map icon" className='mapButton' onClick={() => navigate("/map")} />
      <img src={leftArrow} alt="left arrow" className='leftArrow' onClick={() => navigate("/courtyard")} />
    </div>

  )
}

export default CourtyardWitnesses;