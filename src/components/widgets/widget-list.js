import React, {useState, useEffect} from 'react'
import {connect} from "react-redux"
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom"
import widgetService from "../../services/widget-service"
import ListWidget from "./list-widget";
import ImageWidget from "./image-widget";

const WidgeList = ({
    widgets = [],
    createWidget,
    deleteWidget,
    updateWidget,
    findWidgetForTopic
   }) => {

    const {topicId} = useParams()

    useEffect(() => {
        findWidgetForTopic(topicId)
    }, [topicId])

    return (
        <div>
            <i onClick={() => createWidget(topicId)} className="fas fa-plus float-right fa-2x"></i>
            <h2>
                Widgets List
            </h2>
            <ul className="list-group">
                {
                    widgets.map(_widget =>

                        <li key={_widget.id} className="list-group-item">
                            {_widget.id}
                            {
                                _widget.type === "HEADING" &&
                                <HeadingWidget
                                    widget={_widget}
                                    deleteWidget={deleteWidget}
                                    updateWidget={updateWidget}
                                />
                            }
                            {
                                _widget.type === "PARAGRAPH" &&
                                <ParagraphWidget
                                    widget={_widget}
                                    deleteWidget={deleteWidget}
                                    updateWidget={updateWidget}
                                />
                            }
                            {
                                _widget.type === "LIST" &&
                                <ListWidget
                                    widget={_widget}
                                    deleteWidget={deleteWidget}
                                    updateWidget={updateWidget}/>
                            }
                            {
                                _widget.type === "IMAGE" &&
                                <ImageWidget
                                    widget={_widget}
                                    deleteWidget={deleteWidget}
                                    updateWidget={updateWidget}/>
                            }
                        </li>
                    )
                }
            </ul>
        </div>
    )

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

        widgetService.deleteWidget(widgetToDelete.id)
            .then(status => dispatch({type: "DELETE_WIDGET", widgetToDelete: widgetToDelete}))
    },

    updateWidget: (newItem) => {
        widgetService.updateWidget(newItem.id, newItem)
            .then(status => dispatch({type: "UPDATE_WIDGET", updateWidget: newItem}))
    },

    findWidgetForTopic: (tid) => {

        widgetService.findWidgetsForTopic(tid)
            .then(widget => dispatch({type: "FIND_ALL_WIDGETS_FOR_TOPIC", widgets: widget}))
    }
})

export default connect(stpm, dtpm)(WidgeList)
