import './App.css';
import Home from './Home';
import Tunnel from './Tunnel';
import Dutchroom1 from './DutchRoom1';
import Dutchroom2 from './DutchRoom2';
import Dutchroom3 from './DutchRoom3';
import Dutchroom4 from './DutchRoom4';
import Blueroom from './BlueRoom';
import ShortGallery1 from './ShortGallery1';
import ShortGallery2 from './ShortGallery2';
import Courtyard from './Courtyard';
import CourtyardWitnesses from './Courtyard-witnesses';
import Map from './Map'
import { Route, Routes, useLocation, Outlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import CourtyardFBI from './Courtyard-FBI';
import CourtyardDirector from './CourtyardDirector';
import About from './About';
import Intro from './Intro';
import CallToPolice from './CallToPolice';
import PhoneCall from './PhoneCall';
import ArriveOnScene from './ArriveOnScene';
import InsideOffice from './InsideOffice';
import GuardLineup from './GuardLineUp';
import Rick from './Rick';
import Randy from './Randy';
import PoliceSketches from './PoliceSketches';
import Office from './Office';
import Instructions from './Instructions';
import Exit from './Exit';
import React from 'react'

function App() {

  const location = useLocation();
  const Wrapper = () => {
    return (
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={{
          initial: { opacity: 0 },
          in: { opacity: 1 },
          out: { opacity: 0 }
        }}
        transition={{
          type: "Spring",
          damping: 10,
          stiffness: 50
        }}
      >
        <Outlet />
      </motion.div>
    );
  };

  return (
    <div style={{ color: "white", backgroundColor: "black", height: "100vh"}}>

      {/* Screen size warning */}
      <div className={"screenSizeWarning"}>
        <h1> Please switch to a device with a larger screen </h1>
      </div>

      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname} forceRefresh={true}>
          <Route element={<Wrapper />}>

            <Route path="/" element={<Home />} />
            <Route exact path="/tunnel" element={<Tunnel />} />
            <Route exact path="/dutchroom1" element={<Dutchroom1 />} />
            <Route exact path="/dutchroom2" element={<Dutchroom2 />} />
            <Route exact path="/dutchroom3" element={<Dutchroom3 />} />
            <Route exact path="/dutchroom4" element={<Dutchroom4 />} />
            <Route exact path="/blueroom" element={<Blueroom />} />
            <Route exact path="/shortgallery1" element={<ShortGallery1 />} />
            <Route exact path="/shortgallery2" element={<ShortGallery2 />} />
            <Route exact path="/map" element={<Map />} />
            <Route exact path="/courtyard" element={<Courtyard />} />
            <Route exact path="/courtyardWitnesses" element={<CourtyardWitnesses />} />
            <Route exact path="/courtyardFBI" element={<CourtyardFBI />} />
            <Route exact path="/courtyardDirector" element={<CourtyardDirector />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/intro" element={<Intro />} />
            <Route exact path="/callToPolice" element={<CallToPolice />} />
            <Route exact path="/instructions" element={<Instructions />} />
            <Route exact path="/phoneCall" element={<PhoneCall />} />
            <Route exact path="/arriveOnScene" element={<ArriveOnScene />} />
            <Route exact path="/insideOffice" element={<InsideOffice />} />
            <Route exact path="/guardLineup" element={<GuardLineup />} />
            <Route exact path="/rick" element={<Rick />} />
            <Route exact path="/randy" element={<Randy />} />
            <Route exact path="/policeSketches" element={<PoliceSketches />} />
            <Route exact path="/office" element={<Office />} />
            <Route exact path="/exit" element={<Exit />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
