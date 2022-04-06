import React from 'react'
import { useNavigate } from "react-router-dom";

import './App.css';
import './generalStyling.css';

function PhoneCall() {


    let navigate = useNavigate();

    return (
        <div style={{ width: '100%' }}>
          {/* Should be blank with black background */}

            <button className='styledButton' onClick={() => navigate("/arriveOnScene")}>
              Head to the museum
            </button>

            <button className='styledButton buttonCenter'>
              Answer phone
            </button>
        </div>

    )
}

export default PhoneCall;