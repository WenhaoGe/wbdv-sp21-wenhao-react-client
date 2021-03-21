const TOPICS_URL = "http://localhost:8080/api/topics"
const WIDGETS_URL = "http://localhost:8080/api/widgets"

export const createWidget = (tid) =>
    fetch(`${TOPICS_URL}/${tid}/widgets`, {
        method: "POST",
        body: JSON.stringify({type: "HEADING", size: 1, text: "New Widget"}),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

export const findWidgetsForTopic = (tid) =>
    fetch(`${TOPICS_URL}/${tid}/widgets`).then(response => response.json())

export const updateWidget = (wid, widget) =>
    fetch(`${WIDGETS_URL}/${wid}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

export const deleteWidget = (wid) =>
    fetch(`${WIDGETS_URL}/${wid}`, {
        method: "DELETE"
    }).then(response => response.json())

const api = {
    createWidget, findWidgetsForTopic, updateWidget, deleteWidget
}

export default api
