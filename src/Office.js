import React, { useState, useEffect } from 'react'
import office from './images/office.png';
import ImageMapper from 'react-img-mapper';
import myData from './imageMapLocations/Office.json';
import ArtModal from './ArtModal';
import { useNavigate } from "react-router-dom";
import x from './images/icons/map.png';
import chezTortoni from './images/art/chez-tortoni.jpeg';
import printout from './images/print-out.jpeg';
import missing from './images/missing.png';
import EvidenceModal from './EvidenceModal';

import './App.css';
import './generalStyling.css';

function Office() {

  const MAP = {
    name: 'my-map',
    areas: myData
  };

  const [showChezTortoniModal, setShowChezTortoniModal] = useState(false);
  const [showVHSModal, setShowVHSModal] = useState(false);
  const [showPrintoutModal, setShowPrintoutModal] = useState(false);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const openModal = (area) => {
    if (area.title === "frame") {
      setShowChezTortoniModal(true);
    } else if (area.title === "printout") {
      setShowPrintoutModal(true);
    } else if (area.title === "vhs") {
      setShowVHSModal(true);
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

      {showChezTortoniModal ?
        <ArtModal
          title={"Chez Tortoni"}
          info={["Oil on canvas - 1875 - Manet", "26 x 34 cm (10 1/4 x 13 3/8 in.)"]}
          noteworthy={["The only artwork stolen from the first floor"]}
          value={"Value: Unknown"}
          image={chezTortoni}
          name={"chez"}
          closeFunction={setShowChezTortoniModal} />
        : null}

      {showVHSModal ?
        <EvidenceModal
          title={"Security Footage"}
          image={missing}
          note={"The secruity footage was stolen."}
          closeFunction={setShowVHSModal} />
        : null}

      {showPrintoutModal ?
        <EvidenceModal
          title={"Motion Detector Printout"}
          image={printout}
          note={"The motion detector printout was stolen, but a copy was recoverable on the harddrive."}
          closeFunction={setShowPrintoutModal} />
        : null}

      <div style={{ position: "relative" }} className={showChezTortoniModal || showPrintoutModal || showVHSModal ? "overlay" : ""}>
        <ImageMapper
          src={office}
          width={screenWidth}
          map={MAP}
          responsive={true}
          parentWidth={window.innerWidth}
          onClick={(area) => openModal(area)}
        />
      </div>

      <img src={x} alt="map icon" className='mapButton' onClick={() => navigate("/map")} />
    </div>

  )
}

export default Office;