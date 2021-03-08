import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from 'react-router-dom'
import lessonService from "../../services/lesson-service"

const LessonTabs = ({
    lessons = [
        {_id: "123", title: "Lesson A"},
        {_id: "222", title: "Lesson B"},
        {_id: "333", title: "Lesson C"}
    ],
    findLessonsForModule,
    createLessonForModule,
    updateLesson,
    deleteLesson
  }) => {
    const {courseId, moduleId, lessonId} = useParams()

    // if moduleId is changed, trigger this useEffect
    useEffect(() => {

        if (moduleId !== "undefined" && typeof moduleId !== "undefined") {
            findLessonsForModule(moduleId)
        }

    }, [moduleId])
    return (
        <div>
            <h2>Lessons {lessons.length}</h2>
            <ul>
                <li>course ID: {courseId}</li>
                <li>module ID: {moduleId}</li>
                <li>Lesson ID: {lessonId}</li>
            </ul>

            {
                JSON.stringify(lessons)
            }
            <ul className="nav nav-tabs">
                {
                    lessons.map(lesson =>
                        <li className="nav-item">
                            <EditableItem
                                // to={`/courses/editor/${courseId}/${moduleId}/${lesson._id}`}
                                item={lesson}
                                updateItem={updateLesson}
                                deleteItem={deleteLesson}
                            />
                        </li>
                    )
                }
                <li>
                    <i onClick={() => createLessonForModule(moduleId)} className="fas fa-plus"></i>
                </li>
            </ul>
        </div>
    )
}


const stpm = (state) => ({
    lessons: state.lessonReducer.lessons
})

const dtpm = (dispatch) => ({

    findLessonsForModule: (moduleId) => {
        console.log("LOAD LESSONS FOR MODULE:")
        console.log(moduleId)
        lessonService.findLessonsForModule(moduleId)
            .then(lessons => dispatch({
                type: "FIND_LESSONS",
                lessons: lessons
            }))
    },

    createLessonForModule: (moduleId) => {
        console.log("CREATE LESSON FOR MODULE: " + moduleId)
        lessonService.createLesson(moduleId, {title: "New Lesson"})
            .then(lesson => dispatch({
                type: "CREATE_LESSON",
                lesson
            }))
    },

    updateLesson: (newItem) => {
        lessonService.updateLesson(newItem._id, newItem).then(
            status => dispatch({type: "UPDATE_LESSON", updateLesson: newItem})
        )
    },

    deleteLesson: (lessonToDelete) => {
        lessonService.deleteLesson(lessonToDelete._id)
            .then(status => dispatch({type: "DELETE_LESSON", lessonToDelete: lessonToDelete}))
    }


})

export default connect(stpm, dtpm)(LessonTabs)
