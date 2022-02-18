import React from 'react';
import map from './images/map.png'
import mapText from './images/mapText.png'

import ImageMapper from 'react-img-mapper';
import { useNavigate } from "react-router-dom";

function Map(){

 var mapData = [
    {
      "id": "dutchRoom",
      "title": "dutchRoom",
      "shape": "rect",
      "name": "dutchRoom",
      
      "strokeColor": "black",
    
      "coords": [
        724,1263,293,703
      ],
      "preFillColor": localStorage.getItem("dutchRoom") == null ? '#FF2D00' : '#ff000080',
      "fillColor": localStorage.getItem("dutchRoom") == null ? '#FF2D00' : '#ff000080'
    }
]
    let navigate = useNavigate();

    const MAP = {
        name: 'my-map',
        areas: mapData    
      };

      function clickRoom(room) {
          localStorage.setItem(room.id, room.id)
          navigate("/audio")
      }

    return(
          <div style={{position:"relative", top: 0, left: 0}}>
              

            <div style={{position:"absolute", top: 0, left: 0, zIndex: 1}}>
              <ImageMapper src={map} width={window.innerWidth} 
          map={MAP} responsive={true} parentWidth={window.innerWidth} 
          onClick={(area) => clickRoom(area)} stayMultiHighlighted={true} 
            lineWidth={0}/>
            </div>

            {/* <img src={mapText} width={window.innerWidth} style={{position:"relative", top: 0, left: 0, zIndex: 2, pointerEvents:'none'}}/> */}

        <button onClick={() => {localStorage.clear()}}> Clear </button>

          </div>

          
    )
}

export default Map;