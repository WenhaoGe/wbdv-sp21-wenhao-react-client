import React, {useState, useEffect} from 'react'
import {connect} from "react-redux"
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom"
import widgetService, {createWidget, deleteWidget} from "../../services/widget-service"

const WidgeList = ({
    createWidget,
    deleteWidget,
    updateWidget,
   }) => {

    const {topicId} = useParams()
    const [widgets, setWidgets] = useState([])
    const [widget, setWidget] = useState({})

    useEffect(() => {
        widgetService.findWidgetsForTopic(topicId)
            .then(widgets => setWidget(widgets))
    }, [topicId])

}

const stpm = (state) => ({
    widgets: state.widgetReducer.widgets
})

const dtpm = (dispatch) => ({

    createWidget: (tid) => {
        widgetService.createWidget(tid)
            .then(widget => dispatch({type: "CREATE_WIDGET", widget: widget}))
    },

    deleteWidget: (widgetToDelete) => {
        widgetService.deleteWidget(widgetToDelete._id)
            .then(status => dispatch({type: "DELETE_WIDGET", widgetToDelete: widgetToDelete}))
    },

    updateWidget: (newItem) => {
        widgetService.updateWidget(newItem._id, newItem)
            .then()
    }
})

export default connect(stpm, dtpm)(WidgeList)
