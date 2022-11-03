import React, { useState, useEffect } from 'react'
import dutch4 from './images/dutchroom/dutch4.png';
import ImageMapper from 'react-img-mapper';
import myData from './imageMapLocations/Dutchroom4.json';
import ArtModal from './ArtModal';
import { useNavigate } from "react-router-dom";
import x from './images/icons/map.png';
import obelisk from './images/art/landscape.jpeg';

import leftArrow from './images/icons/left-arrow.png';
import rightArrow from './images/icons/right-arrow.png';

import hover from './images/dutchroom/dutch4a.png';


import './App.css';
import './generalStyling.css';

function DutchRoom4() {

    const MAP = {
        name: 'my-map',
        areas: myData
    };

    const [showObelisk, setShowObelisk] = useState(false);
    const [showObeliskModal, setShowObeliskModal] = useState(false);

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const openModal = (area) => {
        if (area.title === "obelisk-frame") {
            setShowObeliskModal(true);
        } else if (area.title === "obelisk") {
            setShowObeliskModal(true);
        }
    };

    const enterArea = (area) => {
        if (area.title === "obelisk") {
            setShowObelisk(true);
        }
    };

    const leaveArea = (area) => {
        if (area.title === "obelisk") {
            setShowObelisk(false);
        }
    };

    let navigate = useNavigate();

    useEffect(() => {
        function handleResize() {
            setScreenWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div style={{ width: '100%', backgroundColor: "white"}}>

            {showObeliskModal ?
                <ArtModal
                    title={"Landscape with an Obelisk"}
                    info={["Oil on oak panel - 1638 - Flinck", "54.5 x 71 cm (21 7/16 x 27 15/16 in.)"]}
                    noteworthy={["Was formerly thought to be created by to Rembrandt, but was actually created by his pupil Flinck"]}
                    value={"Value: $10 million"}
                    image={obelisk}
                    closeFunction={setShowObeliskModal}
                    name={"obelisk"}/>
                : null}

            <div style={{ position: "relative" }} className={showObeliskModal ? "overlay" : ""}>
                <ImageMapper
                    src={dutch4}
                    width={screenWidth}
                    map={MAP}
                    responsive={true}
                    parentWidth={window.innerWidth}
                    onClick={(area) => openModal(area)}

                    onMouseEnter={area => enterArea(area)}
                    onMouseLeave={area => leaveArea(area)}
                />

                {showObelisk ?
                    <img src={hover} width={window.innerWidth} style={{ pointerEvents: "none", zIndex: 1000, position: "absolute", top: 0, zIndex:1}} /> : null
                }
            </div>

            <img src={x} alt="map icon" className='mapButton' onClick={() => navigate("/map")} />

            <img src={leftArrow} alt="left arrow" className='leftArrow' onClick={() => navigate("/dutchroom3")} />
            <img src={rightArrow} alt="right arrow" className='rightArrow' onClick={() => navigate("/dutchroom1")} />
        </div>
    )
}

export default DutchRoom4;