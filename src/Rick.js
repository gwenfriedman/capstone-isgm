import React from 'react'
import pic from './images/Rick.png';
import { useNavigate } from "react-router-dom";
import leftArrow from './images/icons/left-arrow.png';

import './App.css';
import './generalStyling.css';

function Rick() {


    let navigate = useNavigate();

    return (
        <div style={{ width: '100%' }}>

            <div style={{ position: "relative" }} >
                <img src={pic} width={"100%"} />
            </div>

            <img src={leftArrow} alt="left arrow" className='leftArrow' onClick={() => navigate("/guardLineup")} />
        </div>

    )
}

export default Rick;