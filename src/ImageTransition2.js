import React from 'react';
// import dutchRoom from './images/evidence-bg.png'
import courtyard from './images/courtyard.png'
import {Link} from "react-router-dom";

function ImageTransition(){
    return(
        <div>
            <Link to="/transition" style={{position: "absolute", backgroundColor: "white"}}> back </Link>
            <img style={{width: "100vw"}} src={courtyard} alt="dutch room"/>
        </div>
    )
}

export default ImageTransition;