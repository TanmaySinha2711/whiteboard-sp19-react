import React from 'react'
import {connect} from 'react-redux'
import WidgetList from '../components/widget-list'
import CourseService from "../services/course-service";

const stateToPropertyMapper = (state, previewWidgets) => ({
    previewWidgets: previewWidgets.previewWidgets,
    widgets: state.widgets
})

const dispatchToPropertyMapper = dispatch => ({
    findAllWidgets: () =>
        dispatch({
            type:'FIND_ALL_WIDGETS'
        }),
    loadWidgets: topicId => {
        let widgets = (new CourseService()).findWidgetsByTopic(topicId)
        console.log(topicId)
        dispatch({
            type: 'LOAD_WIDGETS',
            widgets: widgets
        })
    },
    deleteWidget: widget =>
        dispatch({
            type: 'DELETE_WIDGET',
            widget: widget
        }),
    addWidget: () =>
        dispatch({
            type: 'ADD_WIDGET'
        }),
    updateWidget: widget =>
        dispatch({
            type: 'UPDATE_WIDGET',
            widget: widget
        }),
    moveUp: widget =>
        dispatch({
            type: 'MOVE_UP',
            widget: widget
        }),
    moveDown: widget =>
        dispatch({
            type: 'MOVE_DOWN',
            widget: widget
        })
})


const WidgetListContainer = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(WidgetList)

export default WidgetListContainer