import React, { useState, useEffect } from 'react'
import fbi from './images/baker.jpg';
import { useNavigate } from "react-router-dom";
import QuestionBlock from './QuestionBlock';
import Captions from './Captions';
import intro from './audio/baker/baker-intro.mp3';
import baker1 from './audio/baker/baker1.mp3';
import baker2 from './audio/baker/baker2.mp3';
import baker3 from './audio/baker/baker3.mp3';
import baker4 from './audio/baker/baker4.mp3';

import './App.css';
import './generalStyling.css';

function CourtyardFBI() {

  let navigate = useNavigate();
  const [showIntro, setShowIntro] = useState(true);
  const [showq1, setShowq1] = useState(false);
  const [showq2, setShowq2] = useState(false);
  const [showq3, setShowq3] = useState(false);
  const [showq4, setShowq4] = useState(false);
  const [showQuestions, setShowQuestions] = useState(false);


  useEffect(() => {
    setTimeout(() => setShowQuestions(true), 5000)
  }, [])

  function clickedq1() {
    setShowq1(true)
    setShowq2(false)
    setShowq3(false)
    setShowq4(false)
    setShowIntro(false)
  }

  function clickedq2() {
    setShowq1(false)
    setShowq2(true)
    setShowq3(false)
    setShowq4(false)
    setShowIntro(false)
  }

  function clickedq3() {
    setShowq1(false)
    setShowq2(false)
    setShowq3(true)
    setShowq4(false)
    setShowIntro(false)
  }

  function clickedq4() {
    setShowq1(false)
    setShowq2(false)
    setShowq3(false)
    setShowq4(true)
    setShowIntro(false)
  }

  return (
    <div style={{ width: '100%' }}>

      <div style={{ position: "relative" }} >
        <img src={fbi} width={"100%"} />
      </div>

      {showIntro &&
        <div className={"caption-container"} style={{ position: "absolute", bottom: 10, left: 50 }}>
          <Captions text={["Hey, I'm Agent Baker. Let's work together to get this solved."]}
            people={["FBI Agent: Baker"]}
            timeoutDelays={[0, 5000]}
            audio={intro}
            endTime={5000} />
        </div>
      }

      {showq1 &&
        <div className={"caption-container"} style={{ position: "absolute", bottom: 10, left: 50 }}>
          <Captions text={[
            "The paintings themselves, everybody knows about them, so you can’t sell them on the market, at least not the open market",
            "They could have been hired to steal what they took. They’re not something you can show off because they are so well known.",
            "but if this is the case, the thieves should cash in as soon as they see the high reward for returning the paintings.",
            "They’re going to set who hired them up and get their reward.",
            "When you analyze the 13 things that we stolen it seems like they had either cased the place",
            "or were given specific information about what to look for, you know, what’s on our shopping list.",
            "They did not take the most valuable pieces. they left the most expensive painting untouched.",
            "It’s especially confusing why they would take the finial off the napoleonic flag.",
            "They’re in a museum with priceless pieces of art, why waste precious time with this finial that is essentially worthless?",
            "The chinese artifact is old and somewhat valuable, but not even close to some of the items of art just in that room.",
            "Was it a diversion? Art is easy to smuggle and use as an international currency"
          ]}
            people={["FBI Agent: Baker", "FBI Agent: Baker", "FBI Agent: Baker", "FBI Agent: Baker", "FBI Agent: Baker",
              "FBI Agent: Baker", "FBI Agent: Baker", "FBI Agent: Baker", "FBI Agent: Baker", "FBI Agent: Baker", "FBI Agent: Baker"]}
            timeoutDelays={[0, 7000, 5000, 5000, 4000, 5000, 5000, 6000, 4000, 8000, 7000, 8000]}
            audio={baker1}
            endTime={63000} />
        </div>
      }

      {showq2 &&
        <div className={"caption-container"} style={{ position: "absolute", bottom: 10, left: 50 }}>
          <Captions text={[
            "Number 1 you have to look at the inner circle” how did they know where the tunnels and VHS tapes were?",
            "How did they know the guards would open the door? The fact that this worked as planned,",
            "it’s really hard for me to believe they didn’t have some knowledge that they were getting in.",
            "This is not a crime of opportunity. These guys were not dressing up for Halloween in policemen’s uniforms saying",
            "“gee I have an idea. let’s go rob the Isabella Stewart Gardner Museum“",
            "You know, this, this was planned out. We have to think about the motive behind the theft.",
            "The thieves can’t just sell the paintings to anyone. They could be using the art as collateral to buy drugs",
            "or they could planning to use it as a get out of jail free card. It can be used as a bargaining chip, you know.",
            "It’s strange that they taped all around Rick’s heard. Why not just tape around his eyes?",
            "Why weren’t they killed? dead men tell no tales"
          ]}
            people={["FBI Agent: Baker", "FBI Agent: Baker", "FBI Agent: Baker", "FBI Agent: Baker", "FBI Agent: Baker", "FBI Agent: Baker",
              "FBI Agent: Baker", "FBI Agent: Baker", "FBI Agent: Baker", "FBI Agent: Baker"]}
            timeoutDelays={[0, 6000, 5000, 5000, 7000, 4000, 7000, 5000, 7000, 6000, 5000]}
            audio={baker2}
            endTime={57000} />
        </div>
      }

      {showq3 &&
        <div className={"caption-container"} style={{ position: "absolute", bottom: 10, left: 50 }}>
          <Captions text={[
            "The rembrandt self-portrait is the size of a postage stamp, and the frame isn’t much bigger",
            "and yet somebody wasted time unscrewing that and then taking apart the whole frame to take only the etching.",
            "If you’re carrying out the biggest heist in history and you don’t know if the police are coming",
            "and you have limited time to get the most valuable artwork. Are you going to waste your time",
            "with an etching that isn’t even that expensive? and waste precious moments unscrewing the frame.",
            "They were in the museum for 81 minutes, they must have known the police weren’t coming."
          ]}
            people={["FBI Agent: Baker", "FBI Agent: Baker", "FBI Agent: Baker", "FBI Agent: Baker", "FBI Agent: Baker", "FBI Agent: Baker"]}
            timeoutDelays={[0, 6000, 6000, 5000, 6000, 6000, 6000]}
            audio={baker3}
            endTime={35000} />
        </div>
      }

      {showq4 &&
        <div className={"caption-container"} style={{ position: "absolute", bottom: 10, left: 50 }}>
          <Captions text={[
            "Within the art thief world, the Isabella Stewart Gardner Museum was known as an easy score",
            "St Patrick’s day in Boston is a drinking day, you know. Boston has its parade on Sunday, not the 17th.",
            "The parade is in South Boston and it attracts an enormous police presence. Leaving the area near the museum quiet."
          ]}
            people={["FBI Agent: Baker", "FBI Agent: Baker", "FBI Agent: Baker"]}
            timeoutDelays={[0, 5000, 7000, 9000]}
            audio={baker4}
            endTime={20000} />
        </div>
      }

      {showQuestions &&
        <QuestionBlock title={"What would you like to ask FBI Agent Baker?"}
          questions={[
            "What do you think the thieves are doing with the paintings?",
            "How would you profile the thieves?",
            "Is there anything unusual about this robbery?",
            "Why this museum? Why now?"
          ]}
          functions={[
            clickedq1, clickedq2, clickedq3, clickedq4
          ]}
          blockId={"fbi"}
        />
      }

      <div className='back' onClick={() => navigate("/courtyard")}>
        <p> return to courtyard </p>
      </div>
    </div>

  )
}

export default CourtyardFBI;