import React, { useState, useEffect } from 'react'
import shortgallery1 from './images/shortgallery1.png';
import ImageMapper from 'react-img-mapper';
import myData from './imageMapLocations/Dutchroom1.json';
import ArtModal from './ArtModal';
import { useNavigate } from "react-router-dom";
import x from './images/x.png';
import finial from './images/art/finial.jpg';

import sea from './images/seascape-in-scene.png';
import leftArrow from './images/icons/left-arrow.png';


import './App.css';
import './generalStyling.css';

//TODO: redo this page 

function ShortGallery2() {

    const MAP = {
        name: 'my-map',
        areas: myData
    };

    const [showFinial, setShowFinial] = useState(false);
    const [showFinialModal, setShowFinialModal] = useState(false);

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const enterArea = (area) => {
        if (area.title === "finial") {
            setShowFinial(true);
        }
    };

    const leaveArea = (area) => {
        if (area.title === "finial") {
            setShowFinial(false);
        }
    };

    const clickArea = (area) => {
        if (area.title === "finial") {
            setShowFinialModal(true);
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

            {showFinialModal ?
                <ArtModal
                    title={"Eagle Finial: Insignia of the First Regiment of Grenadiers of Foot of Napoleon's Imperial Guard"}
                    info={["Gilded bronze - 1813-1814 - Pierre-Philippe Thomire & Antoine-Denis Chaudet", "25.4 cm (10 in.)"]}
                    noteworthy={["The decorative top of a flagpole to which was attached a silk flag from Napoleon’s First Regiment of Imperial Guard."]}
                    value={"Value: Unknown"}
                    image={finial}
                    closeFunction={setShowFinialModal} />
                : null}


            {/* TODO: add new data to pull from */}
            <div style={{ position: "relative" }} className={showFinialModal ? "overlay" : ""}>
                <ImageMapper
                    src={shortgallery1}
                    width={screenWidth}
                    map={MAP}
                    responsive={true}
                    parentWidth={window.innerWidth}
                    onMouseEnter={area => enterArea(area)}
                    onMouseLeave={area => leaveArea(area)}

                    onMouseDown={area => clickArea(area)}
                />

                {showFinial ?
                    // TODO: replace
                    <img src={sea} width={window.innerWidth} style={{ pointerEvents: "none", zIndex: 1000, position: "absolute", top: 0 }} /> : null
                }
            </div>


            <img src={x} alt="map icon" className='mapButton' onClick={() => navigate("/map")} />

            <img src={leftArrow} alt="left arrow" className='leftArrow' onClick={() => navigate("/shortgallery1")} />
        </div>

    )
}

export default ShortGallery2;