import React, { useState } from 'react'
import bgImg from './images/evidence-bg.png'
import ImageMapper from 'react-img-mapper';
import myData from './dutch1-areas.json';
import ArtModal from './ArtModal';
import { useNavigate } from "react-router-dom";
import x from './images/x.png'
import sea from './images/seascape-in-scene.png'


import './App.css';

function Evidence(){

      const MAP = {
        name: 'my-map',
        areas: myData
      };

      const [showFirstModal, setShowFirstModal] = useState(false);
      const [showSecondModal, setShowSecondModal] = useState(false);
      const [showSeascape, setShowSeascape] = useState(false);
      const openModal = ( area ) => {
        if(area.title === "frame1") {
          setShowFirstModal(true);
          setShowSecondModal(false);
        } else if(area.title === "frame2") {
          setShowSecondModal(true);
          setShowFirstModal(false);
        }
        };

      const enterArea = ( area ) => {
        if(area.title === "seascape") {
          setShowSeascape(true);
        }
        };

      const leaveArea = ( area ) => {
        if(area.title === "seascape") {
          setShowSeascape(false);
        }
        };

      let navigate = useNavigate();

    return(
        <div style={{width: '100%'}}>

          {showFirstModal ? 
          <ArtModal 
            title={"The Storm on the Sea of Galilee"} 
            info={["Oil on Canvas - 1633 - Rembrandt", "160 x 128 cm (63 x 50 3/8 in.)"]} 
            noteworthy={["Brutally cut from frame", "Rembrandt's only seascape"]}
            value={"Worth $100 million"}
            closeFunction={setShowFirstModal} /> 
           : null}


          {/* TODO: set background to grey when modal is open */}
          {showSecondModal ? 
          <div style={{position:"absolute", backgroundColor:"white", color:"black", width: "200px", margin:"auto", zIndex:"2"}}> 
           <h1> Evidence Info </h1>
           <h1> Second Modal </h1>
           <button onClick={() => setShowSecondModal(false)}> close modal </button>
          </div>
           : null}

          <div style={{position: "relative"}} >
            <ImageMapper src={bgImg} width={window.innerWidth} 
            map={MAP} responsive={true} parentWidth={window.innerWidth} 
            onClick={(area) => openModal(area)}

            onMouseEnter={area => enterArea(area)}
            onMouseLeave={area => leaveArea(area)}
            />

            {showSeascape ?
                <img src={sea} width={window.innerWidth} style={{pointerEvents: "none", zIndex:1000, position: "absolute", top: 0}}/> : null
                }
              </div>

        <img src={x} alt="map icon" className='mapButton' onClick={() => navigate("/map")}/>
        </div>

    )
}

export default Evidence;