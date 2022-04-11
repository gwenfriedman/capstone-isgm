import React, { useState, useEffect } from 'react'
import pic from './images/rick.png';
import { useNavigate } from "react-router-dom";
import leftArrow from './images/icons/left-arrow.png';
import Captions from './Captions';
import intro from './audio/rick/rick-intro.mp3';
import rick1 from './audio/rick/rick1.mp3';
import rick2 from './audio/rick/rick2.mp3';
import rick3 from './audio/rick/rick3.mp3';
import rick4 from './audio/rick/rick4.mp3';
import QuestionBlock from './QuestionBlock';

import './App.css';
import './generalStyling.css';

function Rick() {


    let navigate = useNavigate();

    return (
        <div style={{ width: '100%' }}>

            <div style={{ position: "relative" }} >
                <img src={pic} width={"100%"} />
            </div>

            {/* TODO: how to change this based on the question? maybe add 4 and change them out on click?*/}
            <div className={"caption-container"} style={{ position: "absolute", bottom: 10, left: 50 }}>
                {Captions(
                    [
                        "My name is Richard Abath"
                    ],
                    ["Rick"],
                    [0, 4000],
                    intro, 4000)}
            </div>


            {/* TODO: add onclick to this! */}
            <QuestionBlock title={"What would you like to ask Richard?"}
                questions={[
                    "Can you walk us through what happened?",
                    "Do you think any museum employees could be in on this?",
                    "How were the robbers able to pull this off without triggering any alarms that notify the police?"
                ]}
            />

            <img src={leftArrow} alt="left arrow" className='leftArrow' onClick={() => navigate("/guardLineup")} />
        </div>

    )
}

export default Rick;