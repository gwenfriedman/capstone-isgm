import React from 'react'
import { useNavigate } from "react-router-dom";

import './App.css';
import './generalStyling.css';

function PoliceSketches() {


    let navigate = useNavigate();

    // TODO: add some kind of interaction here!, maybe just show the images as a placeholder?
    return (
        <div style={{ width: '100%' }}>

            <div style={{ position: "relative" }} >
                {/* <img src={pic} width={"100%"} /> */}
            </div>

            <button className='styledButton buttonCenter' onClick={() => navigate("/map")}>
              Explore the museum
            </button>

        </div>

    )
}

export default PoliceSketches;