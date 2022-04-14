import React, { useState, useEffect } from 'react'
import pic from './images/office-charles.png';
import { useNavigate } from "react-router-dom";
import Captions from './Captions';
import audio from './audio/intro/inside-office.mp3';

import './App.css';
import './generalStyling.css';

function InsideOffice() {

    let navigate = useNavigate();

    const [displayButton, setDisplayButton] = useState(false);

    useEffect(() => {
        setTimeout(() => setDisplayButton(true), 47000)
    }, [])

    return (
        <div style={{ width: '100%' }}>

            <div style={{ position: "relative" }} >
                <img src={pic} width={"100%"} />
            </div>

            <div className={"caption-container"} style={{ position: "absolute", bottom: 10, left: 50 }}>
                <Captions
                    text={[
                        "Detectives, thanks for coming so quickly. I’m Charles, the chief of security. We just got inside. Something is wrong",
                        "I haven’t looked around the rest of the museum but I could tell something wasn’t right the moment I got here so I called you right away.",
                        "There should have been two guards on duty but no one responded when the day shift tried to buzz in this morning.",
                        "The office has clearly been broken into and the guards are gone.",
                        "Do you have any idea where the guards could be?",
                        "We haven’t looked yet, they could be in any of the galleries, the courtyard, the tunnels, and we don’t even know if they’re here",
                        "Let’s start with the tunnels. Can you point us in the right direction?"
                    ]}
                    people={["Chief of Security", "Chief of Security", "Chief of Security", "Chief of Security", "Detective Willard", "Chief of Security", "Detective Willard"]}
                    timeoutDelays={[0, 11000, 10000, 8000, 4000, 4500, 7000, 3000]}
                    audio={audio} endTime={47000} />
            </div>

            <button className={`styledButton buttonCenter ${displayButton ? "buttonTransition" : "buttonHide"}`} onClick={() => navigate("/tunnel")}>
                Head to tunnels
            </button>
        </div>

    )
}

export default InsideOffice;