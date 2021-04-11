const QUIZ_URL = "http://localhost:3000/api/quizzes"

export const getAllQuizzes = () =>
    fetch(`${QUIZ_URL}`).then(response => response.json())


const api = {getAllQuizzes}

export default api

