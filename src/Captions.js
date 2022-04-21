import React, { useState, useEffect } from 'react';
import './App.css';

function Captions({ text, people, timeoutDelays, audio, endTime }) {

  const [displayCaptions, setDisplayCaptions] = useState(true);
  const [index, setIndex] = useState(0);
  const [displayParagraph, setDisplayParagraph] = useState("");
  const [speaker, setSpeaker] = useState("");

  let audio2 = new Audio(audio)

  useEffect(() => {
    setTimeout(changeParagraph, timeoutDelays[index]);
  }, [index])

  useEffect(() => {
    audio2.volume = 1
    audio2.play()
    setTimeout(() => setDisplayCaptions(false), endTime);
    return () => {
      audio2.pause()
      audio2.currentTime = 0
      audio2.remove()
    }
  }, [])


  function changeParagraph() {
    setDisplayParagraph(text[index]);
    setSpeaker(people[index])
    setIndex(index + 1)
  }
  return (
    <div>
      {displayCaptions == true ?
        <div className={"caption-container"}>
          <h4 className={"speaker"}> {speaker} </h4>
          <div className={"caption-block"}>
            <p className={"caption-text"} >{displayParagraph}</p>
          </div>
        </div>
        :
        <div/>
      }
    </div>
  )
}

export default Captions;