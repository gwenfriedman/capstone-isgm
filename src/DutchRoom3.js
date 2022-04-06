import React, { useState, useEffect } from 'react'
import dutch3 from './images/dutchroom/dutch3.png';
import ImageMapper from 'react-img-mapper';
import myData from './imageMapLocations/Dutchroom3.json';
import ArtModal from './ArtModal';
import { useNavigate } from "react-router-dom";
import x from './images/x.png';

import hover1 from './images/dutchroom/dutch3a.png';
import hover2 from './images/dutchroom/dutch3b.png';
import hover3 from './images/dutchroom/dutch3c.png';

import seascape from './images/art/seascape.jpg';
import gu from './images/art/gu.jpeg';
import concert from './images/art/the-concert.jpeg';
import leftArrow from './images/icons/left-arrow.png';
import rightArrow from './images/icons/right-arrow.png';


import './App.css';
import './generalStyling.css';

function DutchRoom3() {

    const MAP = {
        name: 'my-map',
        areas: myData
    };

    const [showGu, setShowGu] = useState(false);
    const [showGuModal, setShowGuModal] = useState(false);

    const [showConcert, setShowConcert] = useState(false);
    const [showConcertModal, setShowConcertModal] = useState(false);

    const [showSeascape, setShowSeascape] = useState(false);
    const [showSeascapeModal, setShowSeascapeModal] = useState(false);

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const openModal = (area) => {
        if (area.title === "gu-frame") {
            setShowGuModal(true);
        } else if (area.title === "seascape-frame") {
            setShowSeascapeModal(true);
        } else if (area.title === "concert-frame") {
            setShowConcertModal(true);
        } else if (area.title === "gu") {
            setShowGuModal(true);
        } else if (area.title === "seascape") {
            setShowSeascapeModal(true);
        } else if (area.title === "concert") {
            setShowConcertModal(true);
        }
    };

    const enterArea = (area) => {
        if (area.title === "gu") {
            setShowGu(true);
        } else if (area.title === "seascape") {
            setShowSeascape(true);
        } else if (area.title === "concert") {
            setShowConcert(true);
        }
    };

    const leaveArea = (area) => {
        if (area.title === "gu") {
            setShowGu(false);
        } else if (area.title === "seascape") {
            setShowSeascape(false);
        } else if (area.title === "concert") {
            setShowConcert(false);
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

            {showGuModal ?
                <ArtModal
                    title={"Gu"}
                    info={["Bronze - 12th century BC - From China", "26.5 x 15.6 cm (10 7/16 x 6 1/8 in.)"]}
                    noteworthy={["Weighs 1.114 kg (2 lbs. 7 oz.)"]}
                    value={"Value: Several thousand dollars"}
                    image={gu}
                    closeFunction={setShowGuModal} />
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

            {showConcertModal ?
                <ArtModal
                    title={"The Concert"}
                    info={["Oil on Canvas - 1663-1666 - Vermeer", "72.5 x 64.7 cm (28 9/16 x 25 1/2 in.)"]}
                    noteworthy={["Considered the rarest and most valuable piece of the stolen art"]}
                    value={"Value: 250 - 400 million"}
                    image={concert}
                    closeFunction={setShowConcertModal} />
                : null}


            <div style={{ position: "relative" }} className={showGuModal || showSeascapeModal || showConcertModal ? "overlay" : ""}>
                <ImageMapper
                    src={dutch3}
                    width={screenWidth}
                    map={MAP}
                    responsive={true}
                    parentWidth={window.innerWidth}
                    onClick={(area) => openModal(area)}

                    onMouseEnter={area => enterArea(area)}
                    onMouseLeave={area => leaveArea(area)}
                />

                {showGu ?
                    <img src={hover2} width={window.innerWidth} style={{ pointerEvents: "none", zIndex: 1000, position: "absolute", top: 0, zIndex:1}} /> : null
                }

                {showSeascape ?
                    <img src={hover1} width={window.innerWidth} style={{ pointerEvents: "none", zIndex: 1000, position: "absolute", top: 0, zIndex:1}} /> : null
                }

                {showConcert ?
                    <img src={hover3} width={window.innerWidth} style={{ pointerEvents: "none", zIndex: 1000, position: "absolute", top: 0, zIndex:1}} /> : null
                }
            </div>

            <img src={x} alt="map icon" className='mapButton' onClick={() => navigate("/map")} />

            <img src={leftArrow} alt="left arrow" className='leftArrow' onClick={() => navigate("/dutchroom2")} />
            <img src={rightArrow} alt="right arrow" className='rightArrow' onClick={() => navigate("/dutchroom4")} />
        </div>

    )
}

export default DutchRoom3;