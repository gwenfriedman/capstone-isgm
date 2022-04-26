import React, { useEffect } from 'react'
import home from './images/homescreen.png';
import { useNavigate } from "react-router-dom";
import bgMusic from './audio/bg_music.mp3';
import frame from './images/frame-home.png';

import './App.css';
import './generalStyling.css';

function Home() {


    let navigate = useNavigate();

    let sound = new Audio(bgMusic)

    useEffect(() => {
        window.addEventListener("mousemove", function () {
            sound.volume = 0.2
            sound.play()
            sound.loop = true
        })
        localStorage.clear()
    }, [])

    return (
        <div style={{ width: '100%' }}>

            <div style={{ position: "relative" }} >
                <img src={home} width={"100%"} />
            </div>


            <img className={"home-frame"} src={frame} width="650px" />


            <p className='text-block'>
            Enter the scene as a boston police detective, look for clues, talk to those involved and
                experts, and try to solve the mystery.
                
            </p>

            <button className='styledButton buttonCenter' onClick={() => navigate("/intro")}>
            Start the experience
            </button>


            <p className='sub-block'>
            A mostly true account of the Isabella Stewart Gardner Museum art heist crime scene.
            </p>

            <a className='about-button' onClick={() => navigate("/about")}>
                About this project
            </a>
        </div>

    )
}

export default Home;