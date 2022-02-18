import React from 'react';
import tunnelImg from './images/tunnel.png';
import { Link } from "react-router-dom";


function ImageTransition(){
    return(
        <div>
            <Link to="/transition2" style={{position: "absolute", backgroundColor: "white"}}> next </Link>
            <img style={{height: "100vh", width: "100vw"}} src={tunnelImg}/>
            
        </div>
    )
}

export default ImageTransition;