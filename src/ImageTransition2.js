import React from 'react';
// import dutchRoom from './images/evidence-bg.png'
import courtyard from './image/courtyard.png'
import {Link} from "react-router-dom";

function ImageTransition(){
    return(
        <div>
            <Link to="/transition" style={{position: "absolute", backgroundColor: "white"}}> back </Link>
            <img style={{height: "100vh", width: "100vw"}} src={courtyard} alt="dutch room"/>
        </div>
    )
}

export default ImageTransition;