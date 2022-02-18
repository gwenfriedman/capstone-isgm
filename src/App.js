import './App.css';
import Home from './Home';
import Flashlight from './Flashlight';
import Audio from './Audio';
import Evidence from './Evidence';
import ImageTransition from'./ImageTransition';
import ImageTransition2 from './ImageTransition2';
import Map from './Map'
import {Route, Routes, useLocation, Outlet} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

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
    <div style={{backgroundColor: "black", color: "white"}}>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname} forceRefresh={true}>
          <Route element={<Wrapper />}>
            
            {/* on leave pause audio?? */}
            <Route path="/" element={<Home />}/>
            <Route exact path="/flashlight" element={<Flashlight />}/>
            <Route exact path="/audio" element={<Audio />}/>
            <Route exact path="/evidence" element={<Evidence />}/>
            <Route path="/transition" element={<ImageTransition />}/>
            <Route exact path="/transition2" element={<ImageTransition2 />}/>
            <Route exact path="/map" element={<Map />}/>
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
