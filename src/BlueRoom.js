import React, { useState, useEffect } from 'react'
import blueroom from './images/blueroom1.png';
import ImageMapper from 'react-img-mapper';
import myData from './imageMapLocations/Blueroom.json';
import ArtModal from './ArtModal';
import { useNavigate } from "react-router-dom";
import x from './images/x.png';
import chezTortoni from './images/art/chez-tortoni.jpeg';

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

      {showChezTortoniModal ?
        <ArtModal
          title={"Chez Tortoni"}
          info={["Oil on canvas - 1875 - Manet", "26 x 34 cm (10 1/4 x 13 3/8 in.)"]}
          noteworthy={["The only artwork stolen from the first floor"]}
          value={"Value: Unknown"}
          image={chezTortoni}
          closeFunction={setShowChezTortoniModal} />
        : null}
        
      <div style={{ position: "relative" }} className={showChezTortoniModal ? "overlay" : ""}>
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
          <img src={hover1} width={window.innerWidth} style={{ pointerEvents: "none", zIndex: 1000, position: "absolute", top: 0, zIndex:1 }} /> : null
        }
      </div>

      <img src={x} alt="map icon" className='mapButton' onClick={() => navigate("/map")} />
    </div>

  )
}

export default BlueRoom;