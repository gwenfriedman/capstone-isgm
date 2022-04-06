import React from 'react'
import { useNavigate } from "react-router-dom";

import './App.css';
import './generalStyling.css';

function CallToPolice() {


    let navigate = useNavigate();

    return (
        <div style={{ width: '100%'}}>

            <button className='styledButton buttonCenter' onClick={() => navigate("/phoneCall")}>
              Switch to your point of view
            </button>
        </div>

    )
}

export default CallToPolice;