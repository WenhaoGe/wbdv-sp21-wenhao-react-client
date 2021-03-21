const initialState = {
    widgets: [],
    cdc: 123,
    csdc: 0
}

const widgetReducer = (state = initialState, action) => {

    switch (action.type) {
        case "CREATE_WIDGET":
            console.log("create widget in reducer")
            return {
                ...state,
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }

        case "DELETE_WIDGET":
            return {
                ...state,
                widgets: state.widgets.filter(w => w.id !== action.widgetToDelete.id)
            }
        case "UPDATE_WIDGET":
            return {
                ...state,
                widgets: state.widgets.map(w => {
                    if (w.id == action.updateWidget.id) {
                        return action.updateWidget
                    } else {
                        return w
                    }
                })
            }
        case "FIND_ALL_WIDGETS_FOR_TOPIC":
            return {
                ...state,
                widgets: action.widgets
            }
        default:
            return state
    }
}

export default widgetReducer
