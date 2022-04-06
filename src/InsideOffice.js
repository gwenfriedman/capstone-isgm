import React from 'react'
import pic from './images/arriveonscene.png';
import { useNavigate } from "react-router-dom";

import './App.css';
import './generalStyling.css';

function InsideOffice() {


    let navigate = useNavigate();

    return (
        <div style={{ width: '100%' }}>

            <div style={{ position: "relative" }} >
                <img src={pic} width={"100%"} />
            </div>

            <button className='styledButton buttonCenter' onClick={() => navigate("/tunnel")}>
              Head to tunnels
            </button>
        </div>

    )
}

export default InsideOffice;