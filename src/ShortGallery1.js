import React, { useState, useEffect } from 'react'
import shortgallery1 from './images/shortgallery1.png';
import ImageMapper from 'react-img-mapper';
import myData from './imageMapLocations/Dutchroom1.json';
import ArtModal from './ArtModal';
import { useNavigate } from "react-router-dom";
import x from './images/x.png';
import jockey from './images/art/jockey.jpeg';
import procession from './images/art/Procession.jpeg';
import sortie from './images/art/leaving.jpeg';
import study1 from './images/art/study.jpeg';
import study2 from './images/art/study-2.jpeg'

import sea from './images/seascape-in-scene.png';
import rightArrow from './images/icons/right-arrow.png';



//TODO: redo this page 

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
        <div style={{ width: '100%' }}>

            {showJockeyModal ?
                <ArtModal
                    title={"Three Mounted Jockeys (Jockey à cheval)"}
                    info={["Black ink, white, flesh and rose washes, oil pigments on brown paper - 1885-1888 - Degas", "30.5 x 24 cm (12 x 9 7/16 in.)"]}
                    noteworthy={["Partially finished ink drawing with some touches of oil paint"]}
                    value={"Value: Collectively worth under $100,000"}
                    image={jockey}
                    closeFunction={setShowJockeyModal} />
                : null}

            {showProcessionModal ?
                <ArtModal
                    title={"Procession on a Road near Florence (Cortège sur une route aux environs de Florence)"}
                    info={["Pencil and sepia wash on paper - 1857-1860 - Degas", "15.6 x 20.6 cm (6 1/8 x 8 1/8 in.)"]}
                    noteworthy={["Depicts a carriage pulled by a pair of horses and a woman holding a large umbrella high above three women who seem to be dancing."]}
                    value={"Value: Collectively worth under $100,000"}
                    image={procession}
                    closeFunction={setShowProcessionModal} />
                : null}


            {showSortieModal ?
                <ArtModal
                    title={"Leaving the Paddock (La sortie du pesage)"}
                    info={["Watercolor and pencil on paper - 19th century - Degas", "10.5 x 16 cm (4 1/8 x 6 5/16 in.)"]}
                    noteworthy={["Depicts two horses and their jockeys lining up and being led into the track, surrounded by bystanders." , "Changes of position are visible from the pencil drawing."]}
                    value={"Value: Collectively worth under $100,000"}
                    image={sortie}
                    closeFunction={setShowSortieModal} />
                : null}

            {showStudy1Modal ?
                <ArtModal
                    title={"Study for the Programme de la soirée artistique du 15 juin 1884 (Galerie Ponsin) 1"}
                    info={["Black chalk on paper - 1884 - Degas", "24.6 x 31.4 cm (9 11/16 x 12 3/8 in.)"]}
                    noteworthy={["A square in the lower corner is left blank, presumably the space for information about the soiree"]}
                    value={"Value: Collectively worth under $100,000"}
                    image={study1}
                    closeFunction={setShowStudy1Modal} />
                : null}

            {showStudy2Modal ?
                <ArtModal
                    title={"Study for the Programme de la soirée artistique du 15 juin 1884 (Galerie Ponsin) 2"}
                    info={["Black chalk on paper - 1884 - Degas", "26.6 x 37.6 cm (10 1/2 x 14 13/16 in.)"]}
                    noteworthy={["A square in the lower corner is left blank, presumably the space for information about the soiree"]}
                    value={"Value: Collectively worth under $100,000"}
                    image={study2}
                    closeFunction={setShowStudy2Modal} />
                : null}


            {/* TODO: add new data to pull from */}
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
                    // TODO: replace
                    <img src={sea} width={window.innerWidth} style={{ pointerEvents: "none", zIndex: 1000, position: "absolute", top: 0 }} /> : null
                }

                {showProcession ?
                    // TODO: replace
                    <img src={sea} width={window.innerWidth} style={{ pointerEvents: "none", zIndex: 1000, position: "absolute", top: 0 }} /> : null
                }

                {showSortie ?
                    // TODO: replace
                    <img src={sea} width={window.innerWidth} style={{ pointerEvents: "none", zIndex: 1000, position: "absolute", top: 0 }} /> : null
                }

                {showStudy1 ?
                    // TODO: replace
                    <img src={sea} width={window.innerWidth} style={{ pointerEvents: "none", zIndex: 1000, position: "absolute", top: 0 }} /> : null
                }

                {showStudy2 ?
                    // TODO: replace
                    <img src={sea} width={window.innerWidth} style={{ pointerEvents: "none", zIndex: 1000, position: "absolute", top: 0 }} /> : null
                }
            </div>


            <img src={x} alt="map icon" className='mapButton' onClick={() => navigate("/map")} />

            <img src={rightArrow} alt="right arrow" className='rightArrow' onClick={() => navigate("/shortgallery2")} />
        </div>

    )
}

export default ShortGallery1;