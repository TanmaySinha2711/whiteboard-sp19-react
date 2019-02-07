import React from 'react'
import {connect} from 'react-redux'
import WidgetList from '../components/widget-list'

const stateToPropertyMapper = (state, previewWidgets) => ({
    previewWidgets: previewWidgets.previewWidgets,
    widgets: state.widgets
})

const dispatchToPropertyMapper = dispatch => ({
    findAllWidgets: () =>
        dispatch({
            type:'FIND_ALL_WIDGETS'
        }),
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