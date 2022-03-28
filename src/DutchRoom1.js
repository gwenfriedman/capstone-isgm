import React, { useState, useEffect } from 'react'
import dutch1 from './images/DutchRoom1.png';
import ImageMapper from 'react-img-mapper';
import myData from './imageMapLocations/Dutchroom1.json';
import ArtModal from './ArtModal';
import { useNavigate } from "react-router-dom";
import x from './images/x.png';
import sea from './images/seascape-in-scene.png';
import seascape from './images/art/seascape.jpg';
import etching from './images/art/etching.jpg';
import leftArrow from './images/icons/left-arrow.png';
import rightArrow from './images/icons/right-arrow.png';

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
        //   TODO: replace info
        <ArtModal
          title={"The Storm on the Sea of Galilee"}
          info={["Oil on Canvas - 1633 - Rembrandt", "160 x 128 cm (63 x 50 3/8 in.)"]}
          noteworthy={["Brutally cut from frame", "Rembrandt's only seascape"]}
          value={"Value: $100 million"}
          image={seascape}
          closeFunction={setShowSelfPortraitModal} />
        : null}

      {/* TODO: add arrows! */}

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
          // TODO: replace
          <img src={sea} width={window.innerWidth} style={{ pointerEvents: "none", zIndex: 1000, position: "absolute", top: 0 }} /> : null
        }

        {showSelfPortrait ?
          // TODO: replace
          <img src={sea} width={window.innerWidth} style={{ pointerEvents: "none", zIndex: 1000, position: "absolute", top: 0 }} /> : null
        }
      </div>

      <img src={x} alt="map icon" className='mapButton' onClick={() => navigate("/map")} />

      <img src={leftArrow} alt="left arrow" className='leftArrow' onClick={() => navigate("/dutchroom4")} />
      <img src={rightArrow} alt="right arrow" className='rightArrow' onClick={() => navigate("/dutchroom2")} />
    </div>

  )
}

export default DutchRoom1;