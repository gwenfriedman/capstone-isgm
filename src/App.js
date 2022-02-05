import './App.css';
import Home from './Home';
import Flashlight from './Flashlight';
import Audio from './Audio';
import Evidence from './Evidence';
import {Route, Routes} from "react-router-dom";


function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/flashlight" element={<Flashlight />}/>
        <Route exact path="/audio" element={<Audio />}/>
        <Route exact path="/evidence" element={<Evidence />}/>
      </Routes>
    </div>
  );
}

export default App;
