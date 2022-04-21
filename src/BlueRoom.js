import React, { useState, useEffect } from 'react'
import blueroom from './images/blueroom1.png';
import ImageMapper from 'react-img-mapper';
import myData from './imageMapLocations/Blueroom.json';
import ArtModal from './ArtModal';
import { useNavigate } from "react-router-dom";
import x from './images/x.png';
import chezTortoni from './images/art/chez-tortoni.jpeg';
import Captions from './Captions';
import QuestionBlock from './QuestionBlock';
import steveIntro from './audio/steve/steve-intro.mp3';
import steve1 from './audio/steve/steve1.mp3';

import hover1 from './images/blueroom1a.png';

import './App.css';
import './generalStyling.css';

function BlueRoom() {

  const MAP = {
    name: 'my-map',
    areas: myData
  };

  const [showChezTortoni, setShowChezTortoni] = useState(false);
  const [showChezTortoniModal, setShowChezTortoniModal] = useState(false);

  const [showIntro, setShowIntro] = useState(true);
  const [showq1, setShowq1] = useState(false);
  const [showQuestions, setShowQuestions] = useState(false);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const openModal = (area) => {
    if (area.title === "chez") {
      setShowChezTortoniModal(true);
    }
  };

  const enterArea = (area) => {
    if (area.title === "chez") {
      setShowChezTortoni(true);
    }
  };

  const leaveArea = (area) => {
    if (area.title === "chez") {
      setShowChezTortoni(false);
    }
  };

  function clickedq1() {
    setShowq1(true)
    setShowIntro(false)
  }

  let navigate = useNavigate();

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth)
    }

    setTimeout(() => setShowQuestions(true), 4000)

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ width: '100%' }}>

      <img src={x} alt="map icon" className='mapButton' onClick={() => navigate("/map")} />

      {showChezTortoniModal ?
        <ArtModal
          title={"Chez Tortoni"}
          info={["Oil on canvas - 1875 - Manet", "26 x 34 cm (10 1/4 x 13 3/8 in.)"]}
          noteworthy={["The only artwork stolen from the first floor"]}
          value={"Value: Unknown"}
          image={chezTortoni}
          closeFunction={setShowChezTortoniModal} />
        : null}

      <div style={{ position: "relative", zIndex: 0 }} className={showChezTortoniModal ? "overlay" : ""}>
        <ImageMapper
          src={blueroom}
          width={screenWidth}
          map={MAP}
          responsive={true}
          parentWidth={window.innerWidth}
          onClick={(area) => openModal(area)}

          onMouseEnter={area => enterArea(area)}
          onMouseLeave={area => leaveArea(area)}
        />

        {showChezTortoni ?
          <img src={hover1} width={window.innerWidth} style={{ pointerEvents: "none", zIndex: 10, position: "absolute", top: 0, zIndex: 1 }} /> : null
        }
      </div>



      {showIntro &&
        <div className={"caption-container"} style={{ position: "absolute", bottom: 10, left: 50 }}>
          <Captions text={["Hey, I'm Steve Keller. How can I help?"]}
            people={["Security Expert"]}
            timeoutDelays={[0, 2000]}
            audio={steveIntro}
            endTime={2000} />
        </div>
      }

      {showq1 &&
        <div className={"caption-container"} style={{ position: "absolute", bottom: 10, left: 50 }}>
          <Captions text={[
            "Based on the motion detector print out,  At approximately 1:24AM the outside door to palace road opened.",
            "That appears to be when the thieves entered the museum. The next alarm occurs at 1:48am, approximately 24 minutes later.",
            "That’s an awful long time to linger in 1 location. At 1:48 you start to get a series of alarms on the second floor.",
            "The alarms occurred in the Dutch Room until 1:51 and then you start to see other alarms occurring.",
            "There was an alarm in the Italian room. Then it went to the little salon.",
            "There was an alarm in the dutch room again and in the second floor hallway. and then there were no further alarms for 4 minutes.",
            "Then there’s an alarm in the little salon again. That is curious to me. There seems to be a gap in the alarms from 2:15 - 2:23.",
            "A that's a period of approximately 8 minutes. At 2:28am there’s another 12 minute gap until 2:40am.",
            "It appears there were no alarms triggered on the first floor while the thieves were inside the museum.",
            "That includes in the Blue Room, the room we’re in now where the Chez Tortoni was taken from."
          ]}
            people={["Security Expert"]}
            timeoutDelays={[0, 7000, 10000, 9000, 7000, 5000, 9000, 12000, 11000, 4000, 8000]}
            audio={steve1}
            endTime={82000} />
        </div>
      }
            {showQuestions &&
            <div style={{ zIndex: 100}}>
        <QuestionBlock title={"What would you like to ask Steve?"}
          questions={[
            "What can you tell me"
          ]}
          functions={[
            clickedq1
          ]}
          blockId={"steve"}
          
        />
        </div>
      }
    </div>

  )
}

export default BlueRoom;