import React, { useState, useEffect } from 'react'
import shortgallery1 from './images/short/short1.png';
import ImageMapper from 'react-img-mapper';
import myData from './imageMapLocations/ShortGallery1.json';
import ArtModal from './ArtModal';
import { useNavigate } from "react-router-dom";
import x from './images/icons/map.png';
import jockey from './images/art/jockey.jpeg';
import procession from './images/art/procession.jpeg';
import sortie from './images/art/leaving.jpeg';
import study1 from './images/art/study.jpeg';
import study2 from './images/art/study-2.jpeg'

import rightArrow from './images/icons/right-arrow.png';

import hover1 from './images/short/short1a.png';
import hover2 from './images/short/short1b.png';
import hover3 from './images/short/short1c.png';
import hover4 from './images/short/short1d.png';
import hover5 from './images/short/short1e.png';


import './App.css';
import './generalStyling.css';

function ShortGallery1() {

    const MAP = {
        name: 'my-map',
        areas: myData
    };

    const [showJockey, setShowJockey] = useState(false);
    const [showJockeyModal, setShowJockeyModal] = useState(false);

    const [showProcession, setShowProcession] = useState(false);
    const [showProcessionModal, setShowProcessionModal] = useState(false);

    const [showSortie, setShowSortie] = useState(false);
    const [showSortieModal, setShowSortieModal] = useState(false);

    const [showStudy1, setShowStudy1] = useState(false);
    const [showStudy1Modal, setShowStudy1Modal] = useState(false);

    const [showStudy2, setShowStudy2] = useState(false);
    const [showStudy2Modal, setShowStudy2Modal] = useState(false);

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const enterArea = (area) => {
        if (area.title === "jockey") {
            setShowJockey(true);
        }
        else if (area.title === "procession") {
            setShowProcession(true);
        }
        else if (area.title === "sortie") {
            setShowSortie(true);
        }
        else if (area.title === "study1") {
            setShowStudy1(true);
        }
        else if (area.title === "study2") {
            setShowStudy2(true);
        }
    };

    const leaveArea = (area) => {
        if (area.title === "jockey") {
            setShowJockey(false);
        }
        else if (area.title === "procession") {
            setShowProcession(false);
        }
        else if (area.title === "sortie") {
            setShowSortie(false);
        }
        else if (area.title === "study1") {
            setShowStudy1(false);
        }
        else if (area.title === "study2") {
            setShowStudy2(false);
        }
    };

    const openModal = (area) => {
        if (area.title === "jockey") {
            setShowJockeyModal(true);
        }
        else if (area.title === "procession") {
            setShowProcessionModal(true);
        }

        else if (area.title === "sortie") {
            setShowSortieModal(true);
        }
        else if (area.title === "study1") {
            setShowStudy1Modal(true);
        }
        else if (area.title === "study2") {
            setShowStudy2Modal(true);
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
        <div style={{ width: '100%', backgroundColor: "white" }}>

            {showJockeyModal ?
                <ArtModal
                    title={"Three Mounted Jockeys"}
                    info={["Black ink, white, flesh and rose washes, oil pigments on brown paper - 1885-1888 - Degas", "30.5 x 24 cm (12 x 9 7/16 in.)"]}
                    noteworthy={["Partially finished ink drawing with some touches of oil paint"]}
                    value={"Value: Collectively worth under $100,000"}
                    image={jockey}
                    closeFunction={setShowJockeyModal}
                    name={"short"}/>
                : null}

            {showProcessionModal ?
                <ArtModal
                    title={"Procession on a Road near Florence"}
                    info={["Pencil and sepia wash on paper - 1857-1860 - Degas", "15.6 x 20.6 cm (6 1/8 x 8 1/8 in.)"]}
                    value={"Value: Collectively worth under $100,000"}
                    image={procession}
                    closeFunction={setShowProcessionModal}
                    name={"short"}/>
                : null}


            {showSortieModal ?
                <ArtModal
                    title={"Leaving the Paddock"}
                    info={["Watercolor and pencil on paper - 19th century - Degas", "10.5 x 16 cm (4 1/8 x 6 5/16 in.)"]}
                    value={"Value: Collectively worth under $100,000"}
                    image={sortie}
                    name={"short"}
                    closeFunction={setShowSortieModal} />
                : null}

            {showStudy1Modal ?
                <ArtModal
                    title={"Study for the Programme de la soirée artistique du 15 juin 1884 1"}
                    info={["Black chalk on paper - 1884 - Degas", "24.6 x 31.4 cm (9 11/16 x 12 3/8 in.)"]}
                    value={"Value: Collectively worth under $100,000"}
                    image={study1}
                    name={"short"}
                    closeFunction={setShowStudy1Modal} />
                : null}

            {showStudy2Modal ?
                <ArtModal
                    title={"Study for the Programme de la soirée artistique du 15 juin 1884 2"}
                    info={["Black chalk on paper - 1884 - Degas", "26.6 x 37.6 cm (10 1/2 x 14 13/16 in.)"]}
                    value={"Value: Collectively worth under $100,000"}
                    image={study2}
                    name={"short"}
                    closeFunction={setShowStudy2Modal} />
                : null}

            <div style={{ position: "relative" }} className={showJockeyModal || showSortieModal || showProcessionModal || showStudy1Modal || showStudy2Modal ? "overlay" : ""}>
                <ImageMapper
                    src={shortgallery1}
                    width={screenWidth}
                    map={MAP}
                    responsive={true}
                    parentWidth={window.innerWidth}
                    onClick={(area) => openModal(area)}

                    onMouseEnter={area => enterArea(area)}
                    onMouseLeave={area => leaveArea(area)}

                />

                {showJockey ?
                    <img src={hover1} width={window.innerWidth} style={{ pointerEvents: "none", zIndex: 1000, position: "absolute", top: 0, zIndex: 1 }} /> : null
                }

                {showProcession ?
                    <img src={hover5} width={window.innerWidth} style={{ pointerEvents: "none", zIndex: 1000, position: "absolute", top: 0, zIndex: 1 }} /> : null
                }

                {showSortie ?
                    <img src={hover4} width={window.innerWidth} style={{ pointerEvents: "none", zIndex: 1000, position: "absolute", top: 0, zIndex: 1 }} /> : null
                }

                {showStudy1 ?
                    <img src={hover3} width={window.innerWidth} style={{ pointerEvents: "none", zIndex: 1000, position: "absolute", top: 0, zIndex: 1}} /> : null
                }

                {showStudy2 ?
                    <img src={hover2} width={window.innerWidth} style={{ pointerEvents: "none", zIndex: 1000, position: "absolute", top: 0, zIndex: 1 }} /> : null
                }
            </div>


            <img src={x} alt="map icon" className='mapButton' onClick={() => navigate("/map")} />

            <img src={rightArrow} alt="right arrow" className='rightArrow' onClick={() => navigate("/shortgallery2")} />
        </div>

    )
}

export default ShortGallery1;