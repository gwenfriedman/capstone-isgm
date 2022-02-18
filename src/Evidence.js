import React, { useState } from 'react'
import bgImg from './images/evidence-bg.png'
import ImageMapper from 'react-img-mapper';
import myData from './dutch1-areas.json';
import ArtModal from './ArtModal';

import './App.css';

function Evidence(){

      const MAP = {
        name: 'my-map',
        areas: myData
      };

      const [showFirstModal, setShowFirstModal] = useState(false);
      const [showSecondModal, setShowSecondModal] = useState(false);
      const openModal = ( area ) => {
        if(area.title == "frame1") {
          setShowFirstModal(true);
          setShowSecondModal(false);
        } else if(area.title == "frame2") {
          setShowSecondModal(true);
          setShowFirstModal(false);
        }
        };

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


          {showSecondModal ? 
          <div style={{position:"absolute", backgroundColor:"white", color:"black", width: "200px", margin:"auto", zIndex:"2"}}> 
           <h1> Evidence Info </h1>
           <h1> Second Modal </h1>
           <button onClick={() => setShowSecondModal(false)}> close modal </button>
          </div>
           : null}


          <ImageMapper src={bgImg} width={window.innerWidth} 
          map={MAP} responsive={true} parentWidth={window.innerWidth} 
          onClick={(area) => openModal(area)}/>
        </div>

    )
}

export default Evidence;