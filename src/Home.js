import React from 'react'
import home from './images/homescreen.png';
import { useNavigate } from "react-router-dom";

import './App.css';
import './generalStyling.css';

function Home() {


    let navigate = useNavigate();

    return (
        <div style={{ width: '100%' }}>

            <div style={{ position: "relative" }} >
                <img src={home} width={"100%"} />
            </div>

            <p className='text-block'>
            A mostly true account of the Isabella Stewart Gardner Museum art heist crime scene. <br/>
Enter the scene as a boston police detective, look for clues, talk to those involved and experts, and try to solve the mystery.
            </p>


            <button className='styledButton buttonCenter' onClick={() => navigate("/intro")}>
                Start the experience
            </button>

            <button className='secondaryButton' onClick={() => navigate("/about")}>
                About this project
            </button>
        </div>

    )
}

export default Home;