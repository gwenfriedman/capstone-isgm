import React, { useState } from 'react'
import { AudioCaptions, Caption } from 'unc-react-audio-captions';
import audio1 from './audio/test-audio.m4a'
import play from './images/play.png'
import pause from './images/pause.png'

import 'animate.css/animate.min.css';

import './App.css';
import QuestionBlock from './QuestionBlock';

function Audio() {
  let captions;

  const [isPlaying, setIsPlaying] = useState(true);


  //TODO: at the end this should switch back to play
  const toggleAudio = () => {
    if (isPlaying) {
      captions.pauseAudio();
      setIsPlaying(false)
    } else {
      captions.playAudio();
      setIsPlaying(true)
    }
  }
  return (
    <div className={"captions"} style={{ height: 500 }}>

      <div className={"caption-container"}>
        <div>
          <h4 className={"speaker"}> Chief of Security </h4>
          <AudioCaptions className={"caption-block"} src={audio1} autoPlay ref={(el) => { captions = el; }}>
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

        <button className="captionButton" onClick={toggleAudio}>
          <img alt="play/pause" className="captionImage" src=
            {isPlaying ?
              pause :
              play}
          />
        </button>
      </div>

      <button className='styledButton'> Enter the crime scene </button>

      <QuestionBlock title={"What would you like to ask the FBI agent?"}
        questions={[
          "What do you think the thieves are doing with the paintings?",
          "How would you profile the thieves?",
          "Is there anything unusual about this robbery?",
          "Why this museum? Why now?"
        ]}
      />
    </div>
  );
}

export default Audio;
