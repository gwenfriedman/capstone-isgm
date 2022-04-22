import React from 'react'
import Question from './Question';
import './Questions.css';

const QuestionBlock = props => {
    const questions = props.questions.map((q, i) =>
        <Question text={q} id={i} clickFunction={props.functions[i]} questionId={props.blockId} />
    );

    return (
        <div className={`question-block ${props.blockId == "anne" || props.blockId == "fbi" ? "anne" : ""}`}>
            <h3> {props.title} </h3>
            {questions}
        </div>
    )
}

export default QuestionBlock