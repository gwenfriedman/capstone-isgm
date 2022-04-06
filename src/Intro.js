import React from 'react'
import home from './images/homescreen.png';
import { useNavigate } from "react-router-dom";

import './App.css';
import './generalStyling.css';

function Intro() {


    let navigate = useNavigate();

    return (
        <div style={{ width: '100%' }}>

            <div style={{ position: "relative" }} >
                <img src={home} width={"100%"} />
            </div>

            <button className='styledButton buttonCenter' onClick={() => navigate("/callToPolice")}>
            Skip ahead to the next morning
            </button>
        </div>

    )
}

export default Intro;