import React, {useEffect} from 'react'
import {connect, Provider} from "react-redux";
import moduleService from "../../services/module-service";
import {useParams} from "react-router-dom";
import EditableItem from "../editable-item";

const ModuleList = (
    {
        modules = [],
        createModule,
        updateModule,
        deleteModule,
        findModulesFourCourse
    }) => {
    const {layout, courseId, moduleId} = useParams();
    useEffect(() => {
        findModulesFourCourse(courseId)
    }, [])
    return (<div>
        <h2>Module List</h2>
        <ul className="list-group">
            {
                modules.map(module =>
                    <li>
                        <EditableItem
                            to={`/courses/${layout}/edit/${courseId}/modules/${module._id}`}
                            deleteItem={deleteModule}
                            updateItem={updateModule}
                            item={module}/>
                    </li>
                )
            }
            <li className="list-group-item">
                <i onClick={() => createModule(courseId)} className="fas fa-plus fa-2x"></i>
            </li>
        </ul>
    </div>)
}

const stpm = (state) => ({
    modules: state.moduleReducer.modules
})

const dtpm = (dispatch) => ({
    createModule: (courseId) => {
        moduleService.createModule(courseId, {title: "New Module"})
            .then(module => dispatch({type: "CREATE_MODULE", module: module}))
    },

    updateModule: (newModule) => {
        moduleService.updateModule(newModule._id, newModule)
            .then(status => dispatch({type: "UPDATE_MODULE", updateModule: newModule}))
    },

    deleteModule: (module_to_delete) => {
        moduleService.deleteModule(module_to_delete._id)
            .then(status => dispatch({type: "DELETE_MODULE", moduleToDelete: module_to_delete}))
    },

    findModulesForCourses: (courseId) => {
        moduleService.findModulesForCourse(courseId)
            .then(modules => dispatch({
                type: "FIND_MODULES_FOR_COURSES",
                modules: modules
        }))
    }

})



