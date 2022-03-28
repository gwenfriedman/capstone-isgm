import React from 'react'
import './Questions.css';


const Question = props => {

    function clickQueston(q, id) {
        localStorage.setItem("fbi" + id, id)

        if (!localStorage.getItem("fbi" + props.id)) {
            //play audio
            //start subtitles
        }
    }

    return (
        <div className={`question ${localStorage.getItem("fbi" + props.id) ? "clicked" : ""}`} onClick={(q) => clickQueston(q, props.id)}>
            <p> {props.text} </p>
        </div>
    )
}

export default Question