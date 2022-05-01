import React, { useState, useEffect } from 'react'
import dutch1 from './images/dutchroom/dutch1.png';
import ImageMapper from 'react-img-mapper';
import myData from './imageMapLocations/Dutchroom1.json';
import ArtModal from './ArtModal';
import { useNavigate } from "react-router-dom";
import x from './images/icons/map.png';
import selfPortrait from './images/art/self-portrait-not-stolen.jpeg';
import etching from './images/art/etching.jpg';
import leftArrow from './images/icons/left-arrow.png';
import rightArrow from './images/icons/right-arrow.png';
import QuestionBlock from './QuestionBlock';
import Captions from './Captions';
import intro from './audio/georgia/georgia-intro.mp3';
import georgia1 from './audio/georgia/georgia1.mp3';
import georgia2 from './audio/georgia/georgia2.mp3';
import georgia3 from './audio/georgia/georgia3.mp3';

import hover1 from './images/dutchroom/dutch1a.png';
import hover2 from './images/dutchroom/dutch1b.png';

import './App.css';
import './generalStyling.css';

function DutchRoom1() {

  const MAP = {
    name: 'my-map',
    areas: myData
  };

  const [showIntro, setShowIntro] = useState(true);
  const [showq1, setShowq1] = useState(false);
  const [showq2, setShowq2] = useState(false);
  const [showq3, setShowq3] = useState(false);
  const [showQuestions, setShowQuestions] = useState(false);

  const [showEtching, setShowEtching] = useState(false);
  const [showEtchingModal, setShowEtchingModal] = useState(false);

  const [showSelfPortrait, setShowSelfPortrait] = useState(false);
  const [showSelfPortraitModal, setShowSelfPortraitModal] = useState(false);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const [startAudio1, setStartAudio1] = useState(false);
  const [startAudio2, setStartAudio2] = useState(false);
  const [startAudio3, setStartAudio3] = useState(false);
  const [startAudio4, setStartAudio4] = useState(false);

  let audio1 = new Audio(intro)
  let audio2 = new Audio(georgia1)
  let audio3 = new Audio(georgia2)
  let audio4 = new Audio(georgia3)

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
    setTimeout(() => setShowQuestions(true), 4000)
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

  const openModal = (area) => {
    if (area.title === "etching-frame") {
      setShowEtchingModal(true);
    } else if (area.title === "self-portrait-frame") {
      setShowSelfPortraitModal(true);
    } else if (area.title === "etching") {
      setShowEtchingModal(true);
    } else if (area.title === "self-portrait") {
      setShowSelfPortraitModal(true);
    }
  };

  const enterArea = (area) => {
    if (area.title === "etching") {
      setShowEtching(true);
    } else if (area.title === "self-portrait") {
      setShowSelfPortrait(true);
    }
  };

  const leaveArea = (area) => {
    if (area.title === "etching") {
      setShowEtching(false);
    } else if (area.title === "self-portrait") {
      setShowSelfPortrait(false);
    }
  };

  let navigate = useNavigate();

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ width: '100%', backgroundColor: 'black'}}>

      {(startAudio1 && startAudio2 && startAudio3 && startAudio4) &&
        <div>

          {showEtchingModal ?
            <ArtModal
              title={"Portrait of the Artist as a Young Man"}
              info={["Etching - 1633 - Rembrandt", "4.5 x 5 cm (1 3/4 x 1 15/16 in.)"]}
              noteworthy={["Purchased by Isabella Stewart Gardner for $120 on 18 March 1886 through the art dealer Frederick Keppel and Co., New York."]}
              value={"Value: Unknown"}
              image={etching}
              closeFunction={setShowEtchingModal} />
            : null}


          {showSelfPortraitModal ?
            <ArtModal
              title={"Self-portrait"}
              info={["Oil on oak panel - 1629 - Rembrandt", "89.7 x 73.5 cm (35 5/16 x 28 15/16 in.)"]}
              noteworthy={["This was not stolen. The thieves removed it from the wall, but ultimately left it behind. The thieves may have considered it too large to transport, potentially because it was painted on wood, not more durable canvas."]}
              value={"Value: Unknown"}
              image={selfPortrait}
              closeFunction={setShowSelfPortraitModal} />
            : null}

          <div style={{ position: "relative" }} className={showEtchingModal || showSelfPortraitModal ? "overlay" : ""}>

            <ImageMapper
              src={dutch1}
              width={screenWidth}
              map={MAP}
              responsive={true}
              parentWidth={window.innerWidth}
              onClick={(area) => openModal(area)}

              onMouseEnter={area => enterArea(area)}
              onMouseLeave={area => leaveArea(area)}
            />

            {showEtching ?
              <img src={hover2} width={window.innerWidth} style={{ pointerEvents: "none", zIndex: 1000, position: "absolute", top: 0, zIndex: 1 }} /> : null
            }

            {showSelfPortrait ?
              <img src={hover1} width={window.innerWidth} style={{ pointerEvents: "none", zIndex: 1000, position: "absolute", top: 0, zIndex: 1 }} /> : null
            }
          </div>

          {showIntro &&
            <div className={"caption-container"} style={{ position: "absolute", bottom: 10, left: 50 }}>
              <Captions text={["Hello, I'm Georgia. I'm happy to answer any questions."]}
                people={["Conservationalist: Georgia"]}
                timeoutDelays={[0, 4000]}
                audio={audio1}
                endTime={4000} />
            </div>
          }

          {showq1 &&
            <div className={"caption-container"} style={{ position: "absolute", bottom: 10, left: 50 }}>
              <Captions text={[
                "The paintings weren’t unscrewed from the back, they were cut out. Why would they do that?",
                "It’s not like cutting a piece of paper. The paintings are not just one canvas.",
                "You can’t cut them out and roll them up like a set of blueprints.",
                "It will be time consuming and difficult to cut them all out.",
                "It’s incomprehensible to me that even if you wanted to steal art you would treat it that way."
              ]}
                people={["Conservationalist: Georgia", "Conservationalist: Georgia", "Conservationalist: Georgia", "Conservationalist: Georgia", "Conservationalist: Georgia"]}
                timeoutDelays={[0, 4000, 4000, 4000, 3000, 5000]}
                audio={audio2}
                endTime={20000} />
            </div>
          }

          {showq2 &&
            <div className={"caption-container"} style={{ position: "absolute", bottom: 10, left: 50 }}>
              <Captions text={[
                "13 pieces were stolen. What was stolen? Well in this room, the Dutch Room, a Rembrandt Self Portrait Etching",
                "A Lady and Gentleman in Black, The Storm on the Sea of Galilee, an ancient chinese beaker, The Obelisk, and The Concert were taken",
                "The Rembrandt self portrait was also off the wall, but not stolen. The chez tortoni was stolen from the blue room.",
                "5 pieces by Degas and a gold eagle finial were stolen from the Short Gallery. The ballpark figure on cost is about $200 million."

              ]}
                people={["Conservationalist: Georgia", "Conservationalist: Georgia", "Conservationalist: Georgia", "Conservationalist: Georgia"]}
                timeoutDelays={[0, 6000, 6000, 5000, 8000]}
                audio={audio3}
                endTime={26000} />
            </div>
          }

          {showq3 &&
            <div className={"caption-container"} style={{ position: "absolute", bottom: 10, left: 50 }}>
              <Captions text={[
                "There is a secret panel that was slightly ajar. Only employees knew about the door there"
              ]}
                people={["Conservationalist: Georgia"]}
                timeoutDelays={[0, 4000]}
                audio={audio4}
                endTime={4000} />
            </div>
          }

          {showQuestions &&
            <QuestionBlock title={"What would you like to ask Georgia, an art conservationalist?"}
              questions={[
                "Is there anything you can tell me about how the paintings were stolen?",
                "How many pieces were stolen?",
                "Is there anything out of place other than the stolen pieces of art?"
              ]}
              functions={[
                clickedq1, clickedq2, clickedq3
              ]}
              blockId={"georgia"}
            />
          }

          <img src={x} alt="map icon" className='mapButton' onClick={() => navigate("/map")} />

          <img src={leftArrow} alt="left arrow" className='leftArrow' onClick={() => navigate("/dutchroom4")} />
          <img src={rightArrow} alt="right arrow" className='rightArrow' onClick={() => navigate("/dutchroom2")} />

        </div>
      }
    </div>

  )
}

export default DutchRoom1;