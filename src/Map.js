import React, { useState, useEffect } from 'react';
import map from './images/map-final.png';
import mapText from './images/map-text-final.png';
import x from './images/icons/black-x.png';

import ImageMapper from 'react-img-mapper';
import { useNavigate } from "react-router-dom";

import './App.css';

function Map() {

  var mapData = [
    {
      "id": "dutchroom1",
      "title": "dutchroom1",
      "shape": "rect",
      "name": "dutchroom1",

      "strokeColor": "black",

      "coords": [
        513, 323, 766, 668
      ],
      "preFillColor": localStorage.getItem("dutchroom1") == null ? '#cd8b76' : '#CD8B764D',
      "fillColor": localStorage.getItem("dutchroom1") == null ? '#cd8b76' : '#CD8B764D'
    },
    {
      "id": "shortgallery1",
      "title": "shortgallery1",
      "shape": "rect",
      "name": "shortgallery1",

      "strokeColor": "black",

      "coords": [
        1409, 820, 1678, 899
      ],
      "preFillColor": localStorage.getItem("shortgallery1") == null ? '#CC5500' : '#CC55004D',
      "fillColor": localStorage.getItem("shortgallery1") == null ? '#CC5500' : '#CC55004D'
    },
    {
      "id": "office",
      "title": "office",
      "shape": "rect",
      "name": "office",

      "strokeColor": "black",

      "coords": [
        1988, 655, 2153, 731
      ],
      "preFillColor": localStorage.getItem("office") == null ? '#180FD3' : '#180FD34D',
      "fillColor": localStorage.getItem("office") == null ? '#180FD3' : '#180FD34D'
    },
    {
      "id": "courtyard",
      "title": "courtyard",
      "shape": "rect",
      "name": "courtyard",

      "strokeColor": "black",

      "coords": [
        2197, 766, 2720, 1127
      ],
      "preFillColor": localStorage.getItem("courtyard") == null ? '#EDAC1B' : '#EDAC1B4D',
      "fillColor": localStorage.getItem("courtyard") == null ? '#EDAC1B' : '#EDAC1B4D'
    },
    {
      "id": "blueroom",
      "title": "blueRoom",
      "shape": "rect",
      "name": "blueRoom",

      "strokeColor": "black",

      "coords": [
        2868, 1029, 3039, 1219
      ],
      "preFillColor": localStorage.getItem("blueroom") == null ? '#8BAAAD' : '#8BAAAD4D',
      "fillColor": localStorage.getItem("blueroom") == null ? '#8BAAAD' : '#8BAAAD4D'
    }
  ]
  let navigate = useNavigate();

  const MAP = {
    name: 'my-map',
    areas: mapData
  };

  const [showExit, setShowExit] = useState(false);
  const [showExitModal, setShowExitModal] = useState(false);

  function clickRoom(room) {
    localStorage.setItem(room.id, room.id)
    navigate(`/${room.id}`)
  }

  useEffect(() => {
    if (localStorage.getItem("blueroom") != null && localStorage.getItem("courtyard") != null && localStorage.getItem("office") != null
      && localStorage.getItem("shortgallery1") != null && localStorage.getItem("dutchroom1") != null) {
      setShowExit(true)
    }
  }, [])

  return (
    <div style={{ position: "relative" }}>

      <div style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }} className={showExit || showExitModal ? "overlay" : ""}>
        <ImageMapper src={map}
          map={MAP} responsive={true} parentWidth={window.innerWidth}
          onClick={(area) => clickRoom(area)} stayMultiHighlighted={true}
          lineWidth={0} />

        {!showExit &&
          <button className='styledButton exit-button-2' onClick={() => setShowExitModal(true)}>
            Exit
          </button>
        }
      </div>

      <img
        src={mapText}
        alt="text for map"
        width={window.innerWidth}
        style={{ position: "relative", top: 0, left: 0, zIndex: 2, pointerEvents: 'none' }}
      />

      {showExit &&
        <button className='styledButton buttonCenter exitButton' onClick={() => navigate("/exit")}>
          Exit
        </button>
      }

      {showExitModal &&
        <div className='exit-modal'>
          <h3> Are you sure you want to exit? </h3>
          <img src={x} alt='close' className='exit-closeButton' onClick={() => setShowExitModal(false)} />
          <p> You have not explored: </p>

          {localStorage.getItem("dutchroom1") == null &&
            <p>• the dutch room</p>
          }
          {localStorage.getItem("shortgallery1") == null &&
            <p>• the short gallery</p>
          }
          {localStorage.getItem("office") == null &&
            <p>• the office</p>
          }
          {localStorage.getItem("courtyard") == null &&
            <p>• the courtyard</p>
          }
          {localStorage.getItem("blueroom") == null &&
            <p>• the short gallery</p>
          }
          
          <div className='button-group'>
            <button className='styledButton' onClick={() => navigate("/exit")}>
              Exit the experience
            </button>
            <button className='styledButton' onClick={() => setShowExitModal(false)}>
              Continue exploring
            </button>
          </div>
        </div>
      }

    </div>
  )
}

export default Map;