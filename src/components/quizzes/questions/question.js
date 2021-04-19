import React from 'react';

import TrueFalseQuestion from "./true-false-question";
import MultipleChoiceQuestion from "./multiple-choice-question";
import QuizzesService from "../../../services/quizzes-service"

const Question = ({question}) => {
    return(
        <div>
            {
                question.type === "TRUE_FALSE" &&
                <TrueFalseQuestion
                question={question}/>
            }
            {
                question.type === "MULTIPLE_CHOICE" &&
                <MultipleChoiceQuestion
                question={question}/>
            }

        </div>
    )
}

export default Question
