import React, { useState, useEffect } from 'react'
import courtyard from './images/courtyard.png';
import ImageMapper from 'react-img-mapper';
import myData from './imageMapLocations/Courtyard.json';
import { useNavigate } from "react-router-dom";
import x from './images/icons/map.png';

import './App.css';
import './generalStyling.css';

function Courtyard() {

  const MAP = {
    name: 'my-map',
    areas: myData
  };

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const openPerson = (area) => {
    if (area.title === "witnesses") {
      navigate("/courtyardWitnesses")
    } else if (area.title === "fbi") {
      navigate("/courtyardFBI")
    } else if (area.title === "director") {
      navigate("/courtyardDirector")
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
        
      <div style={{ position: "relative" }} >
        <ImageMapper
          src={courtyard}
          width={screenWidth}
          map={MAP}
          responsive={true}
          parentWidth={window.innerWidth}
          onClick={(area) => openPerson(area)}
        />
      </div>

      <img src={x} alt="map icon" className='mapButton' onClick={() => navigate("/map")} />
    </div>

  )
}

export default Courtyard;