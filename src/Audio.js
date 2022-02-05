import React from 'react';
import { AudioCaptions, Caption } from 'unc-react-audio-captions';
import audio1 from './audio/test-audio.m4a'

import 'animate.css/animate.min.css';


function Audio() {
    let captions;

    const handlerClick = () => {
      captions.playAudio();
    };
  
    const handlerClickP = () => {
      captions.pauseAudio();
    };
  
    return (
      <div>
          <button onClick={handlerClick}>Play</button>
        <button onClick={handlerClickP}>Pause</button>

         <AudioCaptions src={audio1} ref={ (el) => { captions = el; } }>
          <Caption start="0">
              <h2> I'm calling from the gardner museum </h2>
          </Caption>

          <Caption start="2.5" noDisplay>
              <h2> we’ve got big trouble </h2>
          </Caption>

          <Caption start="4.2" noDisplay>
              <h2> we’ve got big trouble! </h2>
          </Caption>
        </AudioCaptions>
      </div>
    );
  }

  export default Audio;
