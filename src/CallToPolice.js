import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Captions from './Captions';
import policeCallAudio from './audio/intro/call-to-police.mp3';

import './App.css';
import './generalStyling.css';

function CallToPolice() {


    let navigate = useNavigate();

    const [displayButton, setDisplayButton] = useState(false);
    const [startAudio, setStartAudio] = useState(false);

    let audio1 = new Audio(policeCallAudio)

    audio1.addEventListener("canplaythrough", event => {
        setStartAudio(true)
        console.log("setStartAudio true")
    });

    useEffect(() => {
        setTimeout(() => setDisplayButton(true), 13000)
    }, [])

    return (
        <div style={{ backgroundColor: "black" }}>
            {startAudio &&
                <div>
                    <style>{'body { background-color: black; }'}</style>

                    <div className={"caption-container"} style={{ position: "absolute", bottom: 10, left: 50 }}>
                        <Captions
                            text={[
                                "911 what’s your emergency?",
                                "I'm calling from the Gardner Museum, we’ve got big trouble. we’ve got big trouble over here!",
                                "I’m sending units now"
                            ]}
                            people={["911 Operator", "Chief of Security: Charles Heidorn", "911 Operator"]}
                            timeoutDelays={[0, 6000, 3500, 4000]}
                            audio={audio1}
                            endTime={13000} />
                    </div>

                    <button className={`styledButton buttonCenter ${displayButton ? "buttonTransition" : "buttonHide"}`} onClick={() => navigate("/instructions")}>
                        Start the exploration
                    </button>
                </div>
            }
        </div>

    )
}

export default CallToPolice;