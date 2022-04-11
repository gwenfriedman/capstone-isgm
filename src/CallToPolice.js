import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Captions from './Captions';
import policeCallAudio from './audio/intro/call-to-police.mp3';

import './App.css';
import './generalStyling.css';

function CallToPolice() {


    let navigate = useNavigate();

    const [displayButton, setDisplayButton] = useState(false);

    useEffect(() => {
        setTimeout(() => setDisplayButton(true), 13000)
    }, [])

    return (
        <div style={{ backgroundColor: "black" }}>
            <style>{'body { background-color: black; }'}</style>

            <div className={"caption-container"} style={{ position: "absolute", bottom: 10, left: 50 }}>
                {Captions(
                    [
                        "911 what’s your emergency?",
                        "I'm calling from the Gardner Museum, we’ve got big trouble. we’ve got big trouble!",
                        "I’m sending units now"
                    ],
                    ["911 Operator", "Chief of Security", "911 Operator"],
                    [0, 6000, 3500, 4000],
                    policeCallAudio, 13000)}
            </div>

            <button className={`styledButton buttonCenter ${displayButton ? "buttonTransition" : "buttonHide"}`} onClick={() => navigate("/phoneCall")}>
                Switch to your point of view
            </button>
        </div>

    )
}

export default CallToPolice;