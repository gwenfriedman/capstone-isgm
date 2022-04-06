import React from 'react'
import pic from './images/guard-lineup.png';
import { useNavigate } from "react-router-dom";

import './App.css';
import './generalStyling.css';

function GuardLineup() {


    let navigate = useNavigate();

    return (
        <div style={{ width: '100%' }}>

            <div style={{ position: "relative" }} >
                <img src={pic} width={"100%"} />
            </div>

            <button className='styledButton' onClick={() => navigate("/rick")}>
              Rick
            </button>

            <button className='styledButton' onClick={() => navigate("/randy")}>
              Randy
            </button>

            <button className='styledButton' onClick={() => navigate("/policeSketches")}>
              Work with the sketch artist
            </button>
        </div>

    )
}

export default GuardLineup;