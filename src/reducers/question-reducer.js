const initialState = {
    questions: [],
    ccdc:123,
    cnklc:10
}

const questionReducer = (state = initialState, action) => {

    switch (action.type) {

        case "CREATE_QUESTION":
            console.log("Question reducer: Create question")
            return {
                ...state,
                questions: [
                    ...state.questions,
                    action.questions
                ]
            }
        case "FIND_ALL_QUESTIONS_FOR_QUIZ":
            return {
                ...state,
                questions: action.questions
            }
        default:
            return state
    }
}

export default questionReducer
