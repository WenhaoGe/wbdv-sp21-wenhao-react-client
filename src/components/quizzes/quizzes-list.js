import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import {Link, useParams} from 'react-router-dom';
import quizService from "../../services/quiz-service"

const QuizzesList = ({
     quizzes = [],
     findAllQuizzes
     }) => {

    const {courseId} = useParams();
    // const [quizzes, setQuizzes] = useState([])
    useEffect(() => {
        findAllQuizzes()
    }, [])

    console.log(quizzes)

    // useEffect(() => {
    //     fetch("https://localhost:3000/api/quizzes")
    //         .then(response => response.json())
    //         .then((quizzes) => {
    //             setQuizzes(quizzes)
    //         })
    // }, [])
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

const stpm = (state) => ({
    quizzes: state.quizReducer.quizzes
})

const dtpm = (dispatch) => ({

    findAllQuizzes: () => {
        quizService.getAllQuizzes()
            .then((quizzes) => dispatch({type: "GET_ALL_QUIZZES", quizzes: quizzes}))
    }
})


export default  connect(stpm, dtpm)(QuizzesList)
