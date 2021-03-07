const initialState = {
    modules: [
        {title: 'CS5500', _id: '222'},
        {title: 'CS5500', _id: '111'},
        {title: 'CS5610', _id: '333'},
    ],
    ascd:111,
    cjdhcdc:56788
}

const moduleReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_MODULE":
            return {
                ...state,
                modules: [
                    ...state.modules,
                    action.module
                ]
            }
        case "FIND_MODULES_FOR_COURSE":
            return {
                ...state,
                modules: action.modules
            }

        case "UPDATE_MODULE":
            return {
                ...state,
                modules: state.modules.map(module => {
                    if (module._id == action.updateModule._id) {
                        return action.updateModule
                    } else {
                        return module
                    }
                })
            }
        case "DELETE_MODULE":
            return {
                ...state,
                modules: state.modules.filter(module => {
                    if (module._id !== action.moduleToDelete._id) {
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

