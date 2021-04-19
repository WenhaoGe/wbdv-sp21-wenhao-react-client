import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import {Link, useParams} from 'react-router-dom';
import quizService from "../../services/quiz-service"

const QuizzesList = () => {

    const {courseId} = useParams();
    const [quizzes, setQuizzes] = useState([])

    useEffect(() => {
        quizService.getAllQuizzes()
            .then((quizzes) => {
                setQuizzes(quizzes)
            })
    }, [])


    console.log(quizzes)

    return (

        <div>
            <h2>Quizzes</h2>
            <div className="list-group">
                {
                    quizzes.map((quiz) => {
                        return (
                            <Link
                                to={`/courses/${courseId}/quizzes/${quiz._id}`}
                                className="list-group-item">
                                {quiz.title}
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default QuizzesList;


// const stpm = (state) => ({
//     quizzes: state.quizReducer.quizzes
// })
//
// const dtpm = (dispatch) => ({
//
//     findAllQuizzes: () => {
//         quizService.getAllQuizzes()
//             .then((quizzes) => dispatch({type: "GET_ALL_QUIZZES", quizzes: quizzes}))
//     }
// })
//
//
// export default  connect(stpm, dtpm)(QuizzesList)
