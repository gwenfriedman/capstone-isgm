import React, { useState, useEffect } from 'react'
import pic from './images/rick.png';
import { useNavigate } from "react-router-dom";
import Captions from './Captions';
import intro from './audio/rick/rick-intro.mp3';
import rick2 from './audio/rick/rick2.mp3';
import rick3 from './audio/rick/rick3.mp3';
import rick4 from './audio/rick/rick4.mp3';
import QuestionBlock from './QuestionBlock';

import './App.css';
import './generalStyling.css';

function Rick() {
    let navigate = useNavigate();

    const [showIntro, setShowIntro] = useState(true);
    const [showq1, setShowq1] = useState(false);
    const [showq2, setShowq2] = useState(false);
    const [showq3, setShowq3] = useState(false);
    const [showQuestions, setShowQuestions] = useState(false);

    const [startAudio1, setStartAudio1] = useState(false);
    const [startAudio2, setStartAudio2] = useState(false);
    const [startAudio3, setStartAudio3] = useState(false);
    const [startAudio4, setStartAudio4] = useState(false);

    let audio1 = new Audio(intro)
    let audio2 = new Audio(rick2)
    let audio3 = new Audio(rick3)
    let audio4 = new Audio(rick4)

    audio1.addEventListener("canplaythrough", event => {
        setStartAudio1(true)
        console.log("setStartAudio1")
    });

    audio2.addEventListener("canplaythrough", event => {
        setStartAudio2(true)
        console.log("setStartAudio2")
    });

    audio3.addEventListener("canplaythrough", event => {
        setStartAudio3(true)
        console.log("setStartAudio3")
    });

    audio4.addEventListener("canplaythrough", event => {
        setStartAudio4(true)
        console.log("setStartAudio4")
    });

    useEffect(() => {
        setTimeout(() => setShowQuestions(true), 13000)
    }, [])

    function clickedq1() {
        setShowq1(true)
        setShowq2(false)
        setShowq3(false)
        setShowIntro(false)
    }

    function clickedq2() {
        setShowq1(false)
        setShowq2(true)
        setShowq3(false)
        setShowIntro(false)
    }

    function clickedq3() {
        setShowq1(false)
        setShowq2(false)
        setShowq3(true)
        setShowIntro(false)
    }

    return (
        <div style={{ width: '100%', backgroundColor: 'black'}}>

            {(startAudio1 && startAudio2 && startAudio3 && startAudio4) &&
                <div>

                    <div style={{ position: "relative" }} >
                        <img src={pic} width={"100%"} />
                    </div>

                    {showIntro &&
                        <div className={"caption-container"} style={{ position: "absolute", bottom: 10, left: 50 }}>
                            <Captions text={[
                                "Please state your name for the record",
                                "Um yeah, my name is Richard Abath. I’m so glad to be alive right now. I didn’t know how or when anyone would find us."]}
                                people={["Detective Willard", "Rick"]}
                                timeoutDelays={[0, 3000, 10000]}
                                audio={audio1}
                                endTime={13000} />
                        </div>
                    }

                    {showq1 &&
                        <div className={"caption-container"} style={{ position: "absolute", bottom: 10, left: 50 }}>
                            <Captions text={[
                                "Yeah, of course. So I was doing rounds and I heard a fire alarm go off at around 12:45am-ish. I shut it off. After that I went down and relieved Randy from his desk.",
                                "I saw on the security camera what looked like two police officers standing outside.",
                                "They came to the door and rang the bell and they said uhh Boston Police we’ve got a report of a disturbance on the premises. You know, I buzzed them in.",
                                "Then, They asked me if I was alone and I said that no, my partner was off doing rounds. They said get him down here.",
                                "The cop turned to me and said “Don’t I know you? Don’t I recognize you? I think there’s a warrant out for your arrest. Can you step out from behind the desk?",
                                "The guy who was dealing with me was taller and skinny. He was wearing like gold framed round glasses and had a mustache.",
                                "It looked really greasy. It was probably a fake mustache. And he handcuffed me. Cuffed Randy.",
                                "and very dramatically said “gentlemen this is a robbery”. They had us away from the desk and we couldn’t get behind it to press the button to alert the police.",
                                "After they handcuffed me they taped around my whole face, around my head and hair, over my eyes, and my hands were bound",
                                "They brought us blindfolded down to the tunnels. I have no idea how they knew how to get down here, but they did.",
                                "And they handcuffed me to the electrical box for hours. At first I was panicking, and then I started singing 'I Shall Be Released' by Bob Dylan.",
                                "I don't know how long I was singing that damn song for, but it was quite a bit of time."
                            ]}
                                people={["Rick", "Rick", "Rick", "Rick", "Rick", "Rick", "Rick", "Rick", "Rick", "Rick", "Rick", "Rick"]}
                                timeoutDelays={[0, 14000, 6000, 10000, 8000, 10500, 8000, 8000, 9000, 9000, 8000, 9000, 10000]}
                                audio={audio2}
                                endTime={109000} />
                        </div>
                    }

                    {showq2 &&
                        <div className={"caption-container"} style={{ position: "absolute", bottom: 10, left: 50 }}>
                            <Captions text={[
                                "Well I’m the guy that opened up the door. They’re obviously going to be looking at me",
                                "Plus, I put in my 2 weeks notice a few days ago because I want more time to you know, devote to my music. I know that’s going to be a bad look."]}
                                people={["Rick", "Rick"]}
                                timeoutDelays={[0, 5000, 10000]}
                                audio={audio3}
                                endTime={15000} />
                        </div>
                    }

                    {showq3 &&
                        <div className={"caption-container"} style={{ position: "absolute", bottom: 10, left: 50 }}>
                            <Captions text={[
                                "I talk about the security system sucking and us being in danger all the time.",
                                "We're all bitching about the security in this place. All the guards knew there was only 1 alarm.",
                                "I don’t know how the robbers knew so much about the museum’s security"]}
                                people={["Rick", "Rick", "Rick"]}
                                timeoutDelays={[0, 5000, 5000, 5000]}
                                audio={audio4}
                                endTime={14000} />
                        </div>
                    }

                    {showQuestions &&
                        <QuestionBlock title={"What would you like to ask Richard?"}
                            questions={[
                                "Can you walk us through what happened?",
                                "Do you think any museum employees could be in on this?",
                                "How were the robbers able to pull this off without notifying the police?"
                            ]}
                            functions={[
                                clickedq1, clickedq2, clickedq3
                            ]}
                            blockId={"rick"}
                        />
                    }

                    <div className='back' onClick={() => navigate("/guardLineup")}>
                        <p> return to guard lineup </p>
                    </div>

                </div>
            }
        </div>

    )
}

export default Rick;