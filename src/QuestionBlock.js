import React from 'react'
import Question from './Question';
import './Questions.css';

const QuestionBlock = props => {
    const questions = props.questions.map((q, i) =>
        <Question text={q} id={i} />
    );

    return (
        <div className={"question-block"}>
            <h3> {props.title} </h3>
            {questions}
        </div>
    )
}

export default QuestionBlock