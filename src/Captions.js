import React, { useState, useEffect } from 'react';
import './App.css';

function Captions(text, people, timeoutDelays, audio, endTime) {

  const [displayParagraph, setDisplayParagraph] = useState("");
  const [index, setIndex] = useState(0);
  const [speaker, setSpeaker] = useState("");

  const [displayCaptions, setDisplayCaptions] = useState(true);

  const changeParagraph = () => {
    setDisplayParagraph(text[index]);
    setSpeaker(people[index])
    setIndex(index + 1);
  }

  let audio2 = new Audio(audio)

  useEffect(() => {
    setTimeout(changeParagraph, timeoutDelays[index]);
  }, [index])

  useEffect(() => {
    audio2.play()
    setTimeout(() => setDisplayCaptions(false), endTime);
    return () => {
      audio2.pause()
      audio2.currentTime = 0
    }
  }, [])

  return (
    <div>
      {displayCaptions &&
        <div className={"caption-container"}>
          <h4 className={"speaker"}> {speaker} </h4>
          <div className={"caption-block"}>
            <p className={"caption-text"} >{displayParagraph}</p>
          </div>
        </div>
      }

      {/* TODO: restart button? */}
    </div>
  )
}

export default Captions;