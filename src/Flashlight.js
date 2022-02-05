import React from 'react';
import { ReactFlashlight } from "react-flashlight";
import tunnelImg from './images/tunnel.png'

function Flashlight(){
    return(
        <ReactFlashlight>
          <div>
            <img style={{height: "100vh", width: "100vw"}} src={tunnelImg}/>
          </div>
        </ReactFlashlight>
    )
}

export default Flashlight;