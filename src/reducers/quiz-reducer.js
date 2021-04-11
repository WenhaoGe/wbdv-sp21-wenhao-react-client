const initialState = {
    quizzes: [],
    cdks:12,
    cnkd:100
}

const quizReducer = (state = initialState, action) => {

    switch (action.type) {
        case "GET_ALL_QUIZZES":
            console.log("in quiz reducer")
            return {
                ...state,
                quizzes: action.quizzes
            }
        default:
            return state
    }
}

export default quizReducer
