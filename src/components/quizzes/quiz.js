import React, {useState, useEffect} from "react"

import {useParams} from 'react-router-dom'
import {connect} from "react-redux"
import Question from "./questions/question";
import questionService from "../../services/question-service"

const Quiz = ({
    questions = [],
    findQuestionsForQuiz
    }) => {

    const {courseId, quizId} = useParams()
    // const [questions, setQuestions] = useState([])
    useEffect(() => {
        findQuestionsForQuiz(quizId)
    }, [quizId])

    return(
        <div>
            <h2>Quiz {quizId}</h2>
            <ul>
                {
                    questions.map(question =>
                    <li>
                        <Question question={question}/>
                    </li>)
                }
            </ul>
        </div>
    )
}

const stpm = (state) => ({
    questions: state.questionReducer.questions
})

const dtpm = (dispatch) => ({

    findQuestionsForQuiz: (quizId) => {
        questionService.getQuestionsForQuiz(quizId).then(question =>
                         dispatch({type: "FIND_ALL_QUESTIONS_FOR_QUIZ", questions: question}))
    }
})

export default connect(stpm, dtpm)(Quiz)
