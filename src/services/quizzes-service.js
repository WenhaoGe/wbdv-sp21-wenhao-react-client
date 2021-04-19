const QUIZ_URL = "http://localhost:3000/api/quizzes";

export const submitQuiz = (quizId, questions) => {
    console.info(JSON.stringify(questions))

    return fetch(`${QUIZ_URL}/${quizId}/attempts`, {
        method: 'POST',
        body: JSON.stringify(questions),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
        .then(result => console.log(result))
}

const api = {submitQuiz}

export default api

