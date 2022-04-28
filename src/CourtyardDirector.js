import React, { useState, useEffect } from 'react'
import anne from './images/anne.jpg';
import { useNavigate } from "react-router-dom";
import QuestionBlock from './QuestionBlock';
import Captions from './Captions';
import intro from './audio/anne/anne-intro.mp3';
import anne1 from './audio/anne/anne1.mp3';
import anne2 from './audio/anne/anne2.mp3';
import anne3 from './audio/anne/anne3.mp3';

import './App.css';
import './generalStyling.css';

function CourtyardDirector() {

  const [showIntro, setShowIntro] = useState(true);
  const [showq1, setShowq1] = useState(false);
  const [showq2, setShowq2] = useState(false);
  const [showq3, setShowq3] = useState(false);
  const [showQuestions, setShowQuestions] = useState(false);

  const [startAudio1, setStartAudio1] = useState(false);
  const [startAudio2, setStartAudio2] = useState(false);
  const [startAudio3, setStartAudio3] = useState(false);
  const [startAudio4, setStartAudio4] = useState(false);

  let audio1 = new Audio(intro)
  let audio2 = new Audio(anne1)
  let audio3 = new Audio(anne2)
  let audio4 = new Audio(anne3)

  audio1.addEventListener("canplaythrough", event => {
    setStartAudio1(true)
    console.log("setStartAudio1")
  });

  audio2.addEventListener("canplaythrough", event => {
    setStartAudio2(true)
    console.log("setStartAudio2")
  });

  audio3.addEventListener("canplaythrough", event => {
    setStartAudio3(true)
    console.log("setStartAudio3")
  });

  audio4.addEventListener("canplaythrough", event => {
    setStartAudio4(true)
    console.log("setStartAudio4")
  });

  useEffect(() => {
    setTimeout(() => setShowQuestions(true), 7000)
  }, [])

  function clickedq1() {
    setShowq1(true)
    setShowq2(false)
    setShowq3(false)
    setShowIntro(false)
  }

  function clickedq2() {
    setShowq1(false)
    setShowq2(true)
    setShowq3(false)
    setShowIntro(false)
  }

  function clickedq3() {
    setShowq1(false)
    setShowq2(false)
    setShowq3(true)
    setShowIntro(false)
  }


  let navigate = useNavigate();

  return (
    <div style={{ width: '100%' }}>

      {(startAudio1 && startAudio2 && startAudio3 && startAudio4) &&
        <div>

          <div style={{ position: "relative" }} >
            <img src={anne} width={"100%"} />
          </div>

          {showIntro &&
            <div className={"caption-container"} style={{ position: "absolute", bottom: 10, left: 50 }}>
              <Captions text={["Hello there. I'm Anne Hawley, the director of the museum. What do you need?"]}
                people={["Museum Director: Anne Hawley"]}
                timeoutDelays={[0, 7000]}
                audio={audio1}
                endTime={7000} />
            </div>
          }

          {showq1 &&
            <div className={"caption-container"} style={{ position: "absolute", bottom: 10, left: 50 }}>
              <Captions text={[
                "Oh, oh my goodness. Well when the FBI let me into the galleries this morning it was actually horrifying. It was just horrifying",
                "It feels like a death in the family. Really, I feel totally numb. Numb is the word.",
                "I just don't know what we're going to do now. We do need to get those paintings back. We need to get them back quickly",
                "When Isabella died she left her infamous will, you know. She said that if anything were permanently changed",
                "that the collection should be crated and shipped to Paris for auction.",
                "and Harvard University would get the proceeds."
              ]}
                people={["Museum Director: Anne Hawley", "Museum Director: Anne Hawley", "Museum Director: Anne Hawley",
                  "Museum Director: Anne Hawley", "Museum Director: Anne Hawley", "Museum Director: Anne Hawley"]}
                timeoutDelays={[0, 9000, 7000, 7000, 8000, 5000, 4000]}
                audio={audio2}
                endTime={40000} />
            </div>
          }

          {showq2 &&
            <div className={"caption-container"} style={{ position: "absolute", bottom: 10, left: 50 }}>
              <Captions text={[
                "We’re offering a 1 million dollar reward.",
                "It's really unusual, but I'm so grateful that Sotheby's and Christie's auction houses, they came together to make this possible",
                "You know, the museum's concern is really to get the art back. It's really part of our heritage.",
                "and it's been plundered. The FBI told us a reward would be very helpful to the investigation.",
                "and it seems like a million dollars is the magic number, so that's what we've done.",
                "I really just have to operate under the assumption that the paintings will be returned.",
                "We are a world class musuem, they have to be."
              ]}
                people={["Museum Director: Anne Hawley", "Museum Director: Anne Hawley", "Museum Director: Anne Hawley", "Museum Director: Anne Hawley",
                  "Museum Director: Anne Hawley", "Museum Director: Anne Hawley", "Museum Director: Anne Hawley"]}
                timeoutDelays={[0, 3000, 10000, 6000, 6000, 6000, 4000, 4000]}
                audio={audio3}
                endTime={41000} />
            </div>
          }

          {showq3 &&
            <div className={"caption-container"} style={{ position: "absolute", bottom: 10, left: 50 }}>
              <Captions text={[
                "The collection was insured for everything but unfortunately not for theft.",
                "We have been focused on installing a climate control system. The building is almost 100 years old, you know.",
                "This was really the priority. When it rains clouds form inside the museum because of the moisture.",
                "Oh and a sewer pipe backed up into one of the galleries. Sewage was coming in the middle of the gallery.",
                "We don't have time to worry about theft"
              ]}
                people={["Museum Director: Anne Hawley", "Museum Director: Anne Hawley", "Museum Director: Anne Hawley", "Museum Director: Anne Hawley", "Museum Director: Anne Hawley"]}
                timeoutDelays={[0, 5000, 7000, 7000, 7000, 4000]}
                audio={audio4}
                endTime={29000} />
            </div>
          }


          {showQuestions &&
            <QuestionBlock title={"What would you like to ask Anne?"}
              questions={[
                "How is the museum responding to this robbery?",
                "Does the museum have the finances to offer a reward for the return of the pieces?",
                "What insurance policies do you have for the museum?"
              ]}
              functions={[
                clickedq1, clickedq2, clickedq3
              ]}
              blockId={"anne"}
            />
          }

          <div className='back' onClick={() => navigate("/courtyard")}>
            <p> return to courtyard </p>
          </div>

        </div>
      }
    </div>

  )
}

export default CourtyardDirector;