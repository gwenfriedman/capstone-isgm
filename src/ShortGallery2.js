import React, { useState, useEffect } from 'react'
import shortgallery2 from './images/short/short2.png';
import ImageMapper from 'react-img-mapper';
import myData from './imageMapLocations/ShortGallery2.json';
import ArtModal from './ArtModal';
import { useNavigate } from "react-router-dom";
import x from './images/icons/map.png';
import finial from './images/art/finial.jpg';

import leftArrow from './images/icons/left-arrow.png';

import './App.css';
import './generalStyling.css';

import hover from './images/short/short2a.png';


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
        <div style={{ width: '100%', backgroundColor: "white"}}>

            {showFinialModal ?
                <ArtModal
                    title={"Eagle Finial: Insignia of the First Regiment of Grenadiers of Foot of Napoleon's Imperial Guard"}
                    info={["Gilded bronze - 1813-1814 - Pierre-Philippe Thomire & Antoine-Denis Chaudet", "25.4 cm (10 in.)"]}
                    noteworthy={["The decorative top of a flagpole to which was attached a silk flag from Napoleon’s First Regiment of Imperial Guard."]}
                    value={"Value: Unknown"}
                    image={finial}
                    closeFunction={setShowFinialModal}
                    name={"chez"}/>
                : null}

            <div style={{ position: "relative" }} className={showFinialModal ? "overlay" : ""}>
                <ImageMapper
                    src={shortgallery2}
                    width={screenWidth}
                    map={MAP}
                    responsive={true}
                    parentWidth={window.innerWidth}
                    onMouseEnter={area => enterArea(area)}
                    onMouseLeave={area => leaveArea(area)}

                    onMouseDown={area => clickArea(area)}
                />

                {showFinial ?
                    <img src={hover} width={window.innerWidth} style={{ pointerEvents: "none", zIndex: 1000, position: "absolute", top: 0, zIndex: 1 }} /> : null
                }
            </div>


            <img src={x} alt="map icon" className='mapButton' onClick={() => navigate("/map")} />

            <img src={leftArrow} alt="left arrow" className='leftArrow' onClick={() => navigate("/shortgallery1")} />
        </div>

    )
}

export default ShortGallery2;