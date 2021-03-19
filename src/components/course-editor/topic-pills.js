import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from 'react-router-dom'
import topicService from "../../services/topic-service"

const TopicPills = ({
    topics = [
        {_id: "222", title: "Topic 1"},
        {_id: "111", title: "Topic 2"},
        {_id: "333", title: "Topic 3"}
    ],
    findTopicsForLesson,
    createTopicsForLesson,
    updateTopic,
    deleteTopic
}) => {

    const {layout, courseId, moduleId, lessonId, topicId} = useParams()
    useEffect(() => {
        if (moduleId !== "undefined" && typeof moduleId !== "undefined" &&
            lessonId !== "undefined" && typeof lessonId !== "undefined") {
            console.log("lesson ID: ", lessonId)
            findTopicsForLesson(lessonId)
        }
    }, [lessonId])

    return (

        <div>

            <ul className="nav nav-pills">
                {
                    topics.map(topic =>
                        <li className="nav nav-item" key={topic._id}>
                                <EditableItem
                                    // to={`/courses/editor/${courseId}/${moduleId}/${lessonId}/${topic._id}`}
                                    to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                                    item={topic}
                                    updateItem={updateTopic}
                                    deleteItem={deleteTopic}/>
                        </li>)
                }
                <li>
                    <i onClick={() => createTopicsForLesson(lessonId)} className="fas fa-plus"></i>
                </li>
            </ul>
        </div>
    )

}

const stpm = (state) => ({

    topics: state.topicReducer.topics

})

const dtpm = (dispatch) => ({

    findTopicsForLesson: (lessonId) => {
        console.log("LOAD LESSONS FOR MODULE:")
        console.log(lessonId)
        topicService.findTopicsForLesson(lessonId)
            .then(topics => dispatch({type: "FIND_TOPICS_FOR_LESSON", topics: topics}))
    },

    createTopicsForLesson: (lessonId) => {
        console.log("CREATE TOPICS FOR LESSON")
        console.log(lessonId)
        topicService.createTopic(lessonId, {title: "New Topic"})
            .then(topic => dispatch({type: "CREATE_TOPIC", topics: topic}))
    },

    updateTopic: (newItem) => {
        topicService.updateTopic(newItem._id, newItem)
            .then(status => dispatch({type: "UPDATE_TOPIC", updateTopic: newItem}))
    },

    deleteTopic: (topicToDelete) => {
        topicService.deleteTopic(topicToDelete._id)
            .then(status => dispatch({type: "DELETE_TOPIC", topicToDelete: topicToDelete}))
    }

})

export default connect(stpm, dtpm)(TopicPills)

