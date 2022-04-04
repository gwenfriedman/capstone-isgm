import React from 'react';
import map from './images/map.png'
import mapText from './images/mapText.png'

import ImageMapper from 'react-img-mapper';
import { useNavigate } from "react-router-dom";

function Map() {


  //TODO: fix colors!

  var mapData = [
    {
      "id": "dutchroom1",
      "title": "dutchroom1",
      "shape": "rect",
      "name": "dutchroom1",

      "strokeColor": "black",

      "coords": [
        1138,860,1666,1596
      ],
      "preFillColor": localStorage.getItem("dutchroom1") == null ? '#CD8B76' : '#ff000080',
      "fillColor": localStorage.getItem("dutchroom1") == null ? '#CD8B76' : '#ff000080'
    },
    {
      "id": "shortgallery1",
      "title": "shortgallery1",
      "shape": "rect",
      "name": "shortgallery1",

      "strokeColor": "black",

      "coords": [
        3074,1956,3678,2116
      ],
      "preFillColor": localStorage.getItem("shortgallery1") == null ? '#FF2D00' : '#ff000080',
      "fillColor": localStorage.getItem("shortgallery1") == null ? '#FF2D00' : '#ff000080'
    },
    {
      "id": "office",
      "title": "office",
      "shape": "rect",
      "name": "office",

      "strokeColor": "black",

      "coords": [
        2026,2251,2429,2480
      ],
      "preFillColor": localStorage.getItem("office") == null ? '#FF2D00' : '#ff000080',
      "fillColor": localStorage.getItem("office") == null ? '#FF2D00' : '#ff000080'
    },
    {
      "id": "courtyard",
      "title": "courtyard",
      "shape": "rect",
      "name": "courtyard",

      "strokeColor": "black",

      "coords": [
        4830,1866,5941,2588
      ],
      "preFillColor": localStorage.getItem("courtyard") == null ? '#FF2D00' : '#ff000080',
      "fillColor": localStorage.getItem("courtyard") == null ? '#FF2D00' : '#ff000080'
    },
    {
      "id": "blueroom",
      "title": "blueRoom",
      "shape": "rect",
      "name": "blueRoom",

      "strokeColor": "black",

      "coords": [
        6288,2397,6655,2820
      ],
      "preFillColor": localStorage.getItem("blueroom") == null ? '#FF2D00' : '#ff000080',
      "fillColor": localStorage.getItem("blueroom") == null ? '#FF2D00' : '#ff000080'
    }
  ]
  let navigate = useNavigate();

  const MAP = {
    name: 'my-map',
    areas: mapData
  };

  function clickRoom(room) {
    localStorage.setItem(room.id, room.id)
    navigate(`/${room.id}`)
    console.log(localStorage, room, localStorage.getItem("dutchroom1"))
  }

  return (
    <div style={{ position: "relative" }}>

      <div style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}>
        <ImageMapper src={map}
          map={MAP} responsive={true} parentWidth={window.innerWidth}
          onClick={(area) => clickRoom(area)} stayMultiHighlighted={true}
          lineWidth={0} />
      </div>

      <img
        src={mapText}
        alt="text for map"
        width={window.innerWidth}
        style={{ position: "relative", top: 0, left: 0, zIndex: 2, pointerEvents: 'none' }}
      />

      <button onClick={() => { localStorage.clear() }}> Clear </button>

    </div>
  )
}

export default Map;