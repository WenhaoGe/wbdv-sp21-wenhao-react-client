import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from 'react-router-dom'
import lessonService from "../../services/lesson-service"

const LessonTabs = ({
    lessons = [],
    findLessonsForModule,
    createLessonForModule,
    updateLesson,
    deleteLesson
  }) => {
    const {layout, courseId, moduleId, lessonId} = useParams()

    // if moduleId is changed, trigger this useEffect
    useEffect(() => {

        console.log("LOAD LESSONS FOR MODULE: " + moduleId)
        if (moduleId !== "undefined" && typeof moduleId !== "undefined") {
            findLessonsForModule(moduleId)
        }

    }, [moduleId])
    return (
        <div>

            <h2>Lessons</h2>

            <ul className="nav nav-pills">
                {
                    lessons.map(lesson =>
                        <li className="nav-item" key={lesson._id}>
                            <EditableItem
                                to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
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
                lesson: lessons
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
