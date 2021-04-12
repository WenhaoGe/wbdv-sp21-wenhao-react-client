const QUIZ_URL = "http://localhost:3000/api/quizzes";

export const getQuestionsForQuiz = (quizId) =>
    fetch(`${QUIZ_URL}/${quizId}/questions`).then(response => response.json())

const api = {getQuestionsForQuiz}

export default api

