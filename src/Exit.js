import React, { useState, useEffect } from 'react'
import pic from './images/arriveonscene.png';
import { useNavigate } from "react-router-dom";
import Captions from './Captions';
import exitAudio from './audio/willard-exit.mp3';

import './App.css';
import './generalStyling.css';

function Exit() {

    let navigate = useNavigate();

    const [displayButton, setDisplayButton] = useState(false);
    const [startAudio1, setStartAudio1] = useState(false);

    let audio1 = new Audio(exitAudio)

    audio1.addEventListener("canplaythrough", event => {
        setStartAudio1(true)
        console.log("setStartAudio1")
    });

    useEffect(() => {
        setTimeout(() => setDisplayButton(true), 10000)
    }, [])

    return (
        <div style={{ width: '100%', backgroundColor: 'black'}}>

            {startAudio1 &&
                <div>

                    <div style={{ position: "relative" }} >
                        <img src={pic} width={"100%"} />
                    </div>

                    <div className={"caption-container"} style={{ position: "absolute", bottom: 10, left: 50 }}>
                        <Captions
                            text={[
                                "This is a tough one. Let's head back to the station to look into some suspects. Those paintings are going to disappear fast."
                            ]}
                            people={["Detective Willard"]}
                            timeoutDelays={[0, 10000]}
                            audio={audio1}
                            endTime={10000} />
                    </div>

                    <button className={`styledButton buttonCenter ${displayButton ? "buttonTransition" : "buttonHide"}`} onClick={() => navigate("/about")}>
                        Return to station
                    </button>
                </div>
            }
        </div>

    )
}

export default Exit;