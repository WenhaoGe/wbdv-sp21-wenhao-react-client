import React, {useState, useEffect} from "react"
import {useParams} from 'react-router-dom'
import {connect} from "react-redux"
import Question from "./questions/question";
import questionService from "../../services/question-service"
import QuizzesService from "../../services/quizzes-service";

const Quiz = () => {

    const {courseId, quizId} = useParams()
    const [submitted, setSubmit] = useState(false)
    console.log("courseId", courseId)
    console.log("quizId", quizId)

    const [questions, setQuestions] = useState([])
    useEffect(() => {
        questionService.getQuestionsForQuiz(quizId)
            .then(questions => setQuestions(questions))
    }, [])

    return(
        <div>
            <h2>Quiz {quizId}</h2>
            <ul>
                {
                    questions.map(question =>
                    <li>
                        <Question question={question}/>
                        {question.answer}
                    </li>)
                }

            </ul>
            <button onClick={() => {
                QuizzesService.submitQuiz(quizId, questions)
                setSubmit(true)
            }}>
                Submit
            </button>
            <br/>
            <br/>
            {
                submitted &&
                <div className="row">
                    <h6 style={{ color: 'green' }}>Quiz is submitted</h6>
                    <i className="fas fa-check"></i>
                </div>
            }

            <br/>

        </div>
    );
}

export default Quiz;

// const stpm = (state) => ({
//     questions: state.questionReducer.questions
// })
//
// const dtpm = (dispatch) => ({
//
//     findQuestionsForQuiz: (quizId) => {
//         questionService.getQuestionsForQuiz(quizId).then(question =>
//                          dispatch({type: "FIND_ALL_QUESTIONS_FOR_QUIZ", questions: question}))
//     }
// })

// export default connect(stpm, dtpm)(Quiz)
