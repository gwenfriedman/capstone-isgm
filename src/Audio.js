import React from 'react';
import { AudioCaptions, Caption } from 'unc-react-audio-captions';
import audio1 from './audio/test-audio.m4a'

import 'animate.css/animate.min.css';

import './App.css';


function Audio() {
    let captions;

    const handlerClick = () => {
      captions.playAudio();
    };
  
    const handlerClickP = () => {
      captions.pauseAudio();
    };
  
    return (
      <div className={"captions"} style={{height: 500}}>
          <button onClick={handlerClick}>Play</button>
        <button onClick={handlerClickP}>Pause</button>

        <h4 className={"speaker"}> Chief of Security </h4>
         <AudioCaptions className={"caption-block"} src={audio1} autoPlay={true} ref={ (el) => { captions = el; } }>
          <Caption start="0" end="4.2">
             I'm calling from the gardner museum
          </Caption>

          <Caption start="2.5" noDisplay>
              we’ve got big trouble
          </Caption>

          <Caption start="4.2" noDisplay>
              we’ve got big trouble!
          </Caption>
        </AudioCaptions>
      </div>
    );
  }

  export default Audio;
