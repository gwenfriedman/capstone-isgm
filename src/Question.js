import React from 'react'
import './Questions.css';


const Question = props => {
    
    function clickQueston(q, id) {
        props.clickFunction()
        localStorage.setItem(props.questionId + id, id)
    }

    return (
        <div className={`question ${localStorage.getItem(props.questionId + props.id) ? "clicked" : ""}`} onClick={(q) => clickQueston(q, props.id)}>
            <p> {props.text} </p>
        </div>
    )
}

export default Question