import React, { useState, useEffect } from 'react'
import dutch2 from './images/dutch2.png';
import ImageMapper from 'react-img-mapper';
import myData from './imageMapLocations/Dutchroom2.json';
import ArtModal from './ArtModal';
import { useNavigate } from "react-router-dom";
import x from './images/x.png';

import sea from './images/seascape-in-scene.png';
import seascape from './images/art/seascape.jpg';
import ladyAndGent from './images/art/lady+gentleman.jpeg';
import leftArrow from './images/icons/left-arrow.png';
import rightArrow from './images/icons/right-arrow.png';


import './App.css';
import './generalStyling.css';

function DutchRoom3() {


    //TODO: replace all of this!

    const MAP = {
        name: 'my-map',
        areas: myData
    };

    const [showLadyAndGent, setShowLadyAndGent] = useState(false);
    const [showLadyAndGentModal, setShowLadyAndGentModal] = useState(false);

    const [showSeascape, setShowSeascape] = useState(false);
    const [showSeascapeModal, setShowSeascapeModal] = useState(false);

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const openModal = (area) => {
        if (area.title === "ladyAndGent-frame") {
            setShowLadyAndGentModal(true);
        } else if (area.title === "seascape-frame") {
            setShowSeascapeModal(true);
        } else if (area.title === "ladyAndGent") {
            setShowLadyAndGentModal(true);
        } else if (area.title === "seascape") {
            setShowSeascapeModal(true);
        }
    };

    const enterArea = (area) => {
        if (area.title === "ladyAndGent") {
            setShowLadyAndGent(true);
        } else if (area.title === "seascape") {
            setShowSeascape(true);
        }
    };

    const leaveArea = (area) => {
        if (area.title === "ladyAndGent") {
            setShowLadyAndGent(false);
        } else if (area.title === "seascape") {
            setShowSeascape(false);
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
        <div style={{ width: '100%' }}>

            {showLadyAndGentModal ?
                <ArtModal
                    title={"A Lady and Gentleman in Black"}
                    info={["Oil on canvas - 1633 - Rembrandt", "131.6 x 109 cm (51 13/16 x 42 15/16 in.)"]}
                    noteworthy={["Rembrandt originally painted a child leaning on the seated lady's leg. Art historians speculate that the child died young and that the couple asked for the image to be painted out so as not to bring back painful memories."]}
                    value={"Value: Unknown"}
                    image={ladyAndGent}
                    closeFunction={setShowLadyAndGentModal} />
                : null}


            {showSeascapeModal ?
                <ArtModal
                    title={"The Storm on the Sea of Galilee"}
                    info={["Oil on Canvas - 1633 - Rembrandt", "160 x 128 cm (63 x 50 3/8 in.)"]}
                    noteworthy={["Brutally cut from frame", "Rembrandt's only seascape"]}
                    value={"Worth $100 million"}
                    image={seascape}
                    closeFunction={setShowSeascapeModal} />
                : null}


            <div style={{ position: "relative" }} className={showLadyAndGentModal || showSeascapeModal ? "overlay" : ""}>
                <ImageMapper
                    src={dutch2}
                    width={screenWidth}
                    map={MAP}
                    responsive={true}
                    parentWidth={window.innerWidth}
                    onClick={(area) => openModal(area)}

                    onMouseEnter={area => enterArea(area)}
                    onMouseLeave={area => leaveArea(area)}
                />

                {showLadyAndGent ?
                    // TODO: replace
                    <img src={sea} width={window.innerWidth} style={{ pointerEvents: "none", zIndex: 1000, position: "absolute", top: 0 }} /> : null
                }

                {showSeascape ?
                    // TODO: replace
                    <img src={sea} width={window.innerWidth} style={{ pointerEvents: "none", zIndex: 1000, position: "absolute", top: 0 }} /> : null
                }
            </div>

            <img src={x} alt="map icon" className='mapButton' onClick={() => navigate("/map")} />

            <img src={leftArrow} alt="left arrow" className='leftArrow' onClick={() => navigate("/dutchroom2")} />
            <img src={rightArrow} alt="right arrow" className='rightArrow' onClick={() => navigate("/dutchroom4")} />
        </div>

    )
}

export default DutchRoom3;