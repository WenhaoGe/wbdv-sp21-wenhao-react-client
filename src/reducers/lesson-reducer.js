const initialState = {
    lessons: []
}

const lessonReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FIND_LESSONS":
            return {
                ...state,
                lessons: action.lessons
            }
        case "CREATE_LESSON":
            return {
                ...state,
                lessons: [
                    ...state.lessons,
                    action.lessons
                ]
            }
        case "UPDATE_LESSON":
            return {
                ...state,
                lessons: state.lessons.map(lesson => {
                    if (lesson._id === action.updateLesson._id) {
                        return action.updateLesson
                    } else {
                        return lesson
                    }
                })
            }
        case "DELETE_LESSON":
            return {
                ...state,
                lessons: state.lessons.filter(lesson => {
                    if (lesson._id !== action.lessonToDelete._id) {
                        return true;
                    } else {
                        return false;
                    }
                })
            }
        default:
            return state

    }
}

export default lessonReducer
