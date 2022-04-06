import React from 'react'
import pic from './images/ArriveOnScene.png';
import { useNavigate } from "react-router-dom";

import './App.css';
import './generalStyling.css';

function Exit() {

    let navigate = useNavigate();

    return (
        <div style={{ width: '100%' }}>

            <div style={{ position: "relative" }} >
                <img src={pic} width={"100%"} />
            </div>

            <button className='styledButton buttonCenter' onClick={() => navigate("/suspectFiles")}>
              Return to station
            </button>
        </div>

    )
}

export default Exit;