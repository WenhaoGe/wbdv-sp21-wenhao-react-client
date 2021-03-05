const MODULES_URL = "https://wbdv-generic-server.herokuapp.com/api/001300169/modules"
const LESSON_URL = "https://wbdv-generic-server.herokuapp.com/api/001300169/lessons"

const createLesson = (moduleId, lesson) =>
    fetch(`${MODULES_URL}/${moduleId}/lessons`, {
        method: 'POST',
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application.json'
        }
    }).then(response => response.json())

const findLessonsForModule = (moduleId) =>
    fetch(`${MODULES_URL}/${moduleId}/lessons`).then(response => response.json())

const updateLesson = (lessonId, lesson) =>
    fetch(`${LESSON_URL}/${lessonId}`, {
        method: 'PUT',
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

const deleteLesson = (lessonId) =>
    fetch(`${LESSON_URL}/${lessonId}`, {
        method: 'DELETE'
    }).then(response => response.json())

const api = {
    createLesson, findLessonsForModule, updateLesson, deleteLesson
}

export default api
