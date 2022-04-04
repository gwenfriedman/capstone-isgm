import React, { useState, useEffect } from 'react'
import dutch1 from './images/dutchroom/dutch1.png';
import ImageMapper from 'react-img-mapper';
import myData from './imageMapLocations/Dutchroom1.json';
import ArtModal from './ArtModal';
import { useNavigate } from "react-router-dom";
import x from './images/x.png';
import selfPortrait from './images/art/self-portrait-not-stolen.jpeg';
import etching from './images/art/etching.jpg';
import leftArrow from './images/icons/left-arrow.png';
import rightArrow from './images/icons/right-arrow.png';

import hover1 from './images/dutchroom/Dutch1a.png';
import hover2 from './images/dutchroom/Dutch1b.png';

import './App.css';
import './generalStyling.css';

function DutchRoom1() {

  const MAP = {
    name: 'my-map',
    areas: myData
  };

  const [showEtching, setShowEtching] = useState(false);
  const [showEtchingModal, setShowEtchingModal] = useState(false);

  const [showSelfPortrait, setShowSelfPortrait] = useState(false);
  const [showSelfPortraitModal, setShowSelfPortraitModal] = useState(false);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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
    <div style={{ width: '100%' }}>

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
          <img src={hover2} width={window.innerWidth} style={{ pointerEvents: "none", zIndex: 1000, position: "absolute", top: 0, zIndex:1 }} /> : null
        }

        {showSelfPortrait ?
          <img src={hover1} width={window.innerWidth} style={{ pointerEvents: "none", zIndex: 1000, position: "absolute", top: 0, zIndex:1 }} /> : null
        }
      </div>

      <img src={x} alt="map icon" className='mapButton' onClick={() => navigate("/map")} />

      <img src={leftArrow} alt="left arrow" className='leftArrow' onClick={() => navigate("/dutchroom4")} />
      <img src={rightArrow} alt="right arrow" className='rightArrow' onClick={() => navigate("/dutchroom2")} />
    </div>

  )
}

export default DutchRoom1;