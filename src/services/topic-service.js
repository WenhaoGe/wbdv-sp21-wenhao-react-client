const TOPICS_URL = "https://wbdv-generic-server.herokuapp.com/api/001300169/topics"
const LESSONS_URL = "https://wbdv-generic-server.herokuapp.com/api/001300169/lessons"


const createTopic = (lessonId, topic) =>
    fetch(`${LESSONS_URL}/${lessonId}/topics`, {
        method: 'POST',
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

const findTopicsForLesson = (lessonId) =>
    fetch(`${LESSONS_URL}/${lessonId}/topics`).then(response => response.json())

const updateTopic = (topicId, topic) =>
    fetch(`${TOPICS_URL}/${topicId}`, {
        method: 'PUT',
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

const deleteTopic = (topicId) =>
    fetch(`${TOPICS_URL}/${topicId}`, {
        method: 'DELETE'
    }).then(response => response.json())


const api = {
    createTopic, findTopicsForLesson, updateTopic, deleteTopic
}

export default api
