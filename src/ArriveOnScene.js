import React, { useState, useEffect } from 'react'
import pic from './images/arriveonscene.png';
import { useNavigate } from "react-router-dom";
import Captions from './Captions';
import audio from './audio/intro/arrive-on-scene.mp3';

import './App.css';
import './generalStyling.css';

function ArriveOnScene() {

    let navigate = useNavigate();

    const [displayButton, setDisplayButton] = useState(false);

    const [startAudio, setStartAudio] = useState(false);

    let audio1 = new Audio(audio)

    audio1.addEventListener("canplaythrough", event => {
        setStartAudio(true)
        console.log("setStartAudio true")
    });

    useEffect(() => {
        setTimeout(() => setDisplayButton(true), 12000)
    }, [])

    return (
        <div style={{ width: '100%' }}>
            {startAudio &&
                <div>

                    <div style={{ position: "relative" }} >
                        <img src={pic} width={"100%"} />
                    </div>

                    <div className={"caption-container"} style={{ position: "absolute", bottom: 10, left: 50 }}>
                        <Captions text={[
                            "Hey, I’m Detective Willard, I just got here, I haven’t spoken to anyone yet but the chief of security is waiting for us inside."
                        ]}
                            people={["Detective Willard"]}
                            timeoutDelays={[0, 12000]}
                            audio={audio1}
                            endTime={12000} />
                    </div>

                    <button className={`styledButton buttonCenter ${displayButton ? "buttonTransition" : "buttonHide"}`} onClick={() => navigate("/insideOffice")}>
                        Enter the crime scene
                    </button>
                </div>
            }

        </div>


    )
}

export default ArriveOnScene;