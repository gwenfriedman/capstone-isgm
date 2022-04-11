import React, { useState, useEffect } from 'react'
import pic from './images/randy.png';
import { useNavigate } from "react-router-dom";
import leftArrow from './images/icons/left-arrow.png';
import Captions from './Captions';
import QuestionBlock from './QuestionBlock';
import randyIntro from './audio/randy/randy-intro.mp3';
import randy1 from './audio/randy/randy1.mp3';
import randy2 from './audio/randy/randy2.mp3';

import './App.css';
import './generalStyling.css';

function Randy() {
    let navigate = useNavigate();

    const [showIntro, setShowIntro] = useState(true);
    const [showq1, setShowq1] = useState(false);
    const [showq2, setShowq2] = useState(false);
    const [showQuestions, setShowQuestions] = useState(false);

    useEffect(() => {
        setTimeout(() => setShowQuestions(true), 4000)
    }, [])


    function clickedq1() {
        setShowq1(true)
        setShowq2(false)
        setShowIntro(false)
    }

    function clickedq2() {
        setShowq1(false)
        setShowq2(true)
        setShowIntro(false)
    }

    return (
        <div style={{ width: '100%' }}>

            <div style={{ position: "relative" }} >
                <img src={pic} width={"100%"} />
            </div>


            {/* TODO: replace with clip with willard */}
            {showIntro &&
                <div className={"caption-container"} style={{ position: "absolute", bottom: 10, left: 50 }}>
                    <Captions text={["My name is Randy"]}
                        people={["Rick"]}
                        timeoutDelays={[0, 3000]}
                        audio={randyIntro}
                        endTime={3000} />
                </div>
            }

            {showq1 &&
                <div className={"caption-container"} style={{ position: "absolute", bottom: 10, left: 50 }}>
                    <Captions text={[
                        "I don’t even know what happened. Richard called me back down to the desk and",
                        "the next thing I knew these so-called police officers told us they were robbing the museum",
                        "They brought us down to these tunnels without asking for directions. I thought that was weird because only the guards know about the tunnels",
                        "One of the robbers handcuffed me to a sink. He was real calm and real nice about it and he also said several times 'Sorry to have to do this'",
                        "He said 'get comfortable you're going to be here all night. We're not going to hurt you, just keep your mouth shut.”",
                        "I even asked him to loosen my handcuffs because they were uncomfortable and he did.",
                        "The robbers came and checked on us after a while to make sure we were okay"
                    ]}
                        people={["Randy"]}
                        timeoutDelays={[0, 5000, 5000, 9000, 11000, 6000, 6000, 8000]}
                        audio={randy1}
                        endTime={48000} />
                </div>
            }

            {showq2 &&
                <div className={"caption-container"} style={{ position: "absolute", bottom: 10, left: 50 }}>
                    <Captions text={[
                        "Well I did see Richard opening a door to outside about 10 minutes before the robbers brought us down here, right when I was starting my rounds",
                        "I’ve never worked this shift before. I thought it would be chill. I even brought my trombone to practice.",
                        "I thought the courtyard would have a nice reverb to it. I guess I was wrong about that",
                        "I took Joe Mulvey’s shift since he called in sick. He does that pretty frequently. He likes the job, but he doesn’t need to job like me.",
                        "If it had rained a lot and it was treacherous to get out to his car he would call in sick. I only had a couple hours notice."
                    ]}
                        people={["Randy"]}
                        timeoutDelays={[0, 10000, 9000, 6000, 10000, 12000]}
                        audio={randy2}
                        endTime={47000} />
                </div>
            }

            {showQuestions &&
                <QuestionBlock title={"What would you like to ask Randy?"}
                    questions={[
                        "Can you tell us about what happened?",
                        "Did anything out of the ordinary happen before the robbery?",
                    ]}
                    functions={[
                        clickedq1, clickedq2
                    ]}
                    blockId={"randy"}
                />
            }

            <img src={leftArrow} alt="left arrow" className='leftArrow' onClick={() => navigate("/guardLineup")} />
        </div>

    )
}

export default Randy;