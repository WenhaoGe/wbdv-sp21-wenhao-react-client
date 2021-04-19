const QUIZ_URL = "http://localhost:3000/api/quizzes";

export const getQuestionsForQuiz = (quizId) =>
    fetch(`${QUIZ_URL}/${quizId}/questions`).then(response => {

        if (response.ok) {
            console.log(response.clone().json())
            return response.clone().json()
        }

    })

const api = {getQuestionsForQuiz}

export default api

