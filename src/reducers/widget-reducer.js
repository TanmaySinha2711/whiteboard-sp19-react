import CourseService from '../services/course-service'
import WidgetService from '../services/widget-service'

let cs = CourseService.instance
const widgets = {
    widgets: []
}

const WidgetReducer = (state = widgets, action) => {
    let idx = 0
    switch(action.type) {
        case 'LOAD_WIDGETS':
            return {
                widgets : action.widgets
            }
        case 'FIND_ALL_WIDGETS':
            return{
                widgets:action.widgets
            }
        case 'DELETE_WIDGET':
            return {
                widgets: state.widgets.filter(widget => widget.id !== action.widget.id)
            }
        case 'ADD_WIDGET':
            return {
                widgets: action.widgets
            }
        case 'UPDATE_WIDGET':
            return {
                widgets: state.widgets.map(widget =>
                    widget.id === action.widget.id ? action.widget : widget
                )
            }
        case 'MOVE_UP':
            idx = state.widgets.indexOf(action.widget)
            if(idx === 0 ) {
                action.widget.hidden = true
                return {widgets: state.widgets}
            }
            else{
                let temp = []
                state.widgets.map(
                    widget => temp.push(widget)
                )
                let tempIdx = temp[idx - 1]
                temp[idx - 1] = temp[idx]
                temp[idx] = tempIdx

                return {widgets: temp}
            }
        case 'MOVE_DOWN':
            idx = state.widgets.indexOf(action.widget)
            if(idx === state.widgets.length - 1) {
                action.widget.hidden = true
                return {widgets: state.widgets}
            }
            else{
                let temp = []
                state.widgets.map(
                    widget => temp.push(widget)
                )
                let tempIdx = temp[idx + 1]
                temp[idx + 1] = temp[idx]
                temp[idx] = tempIdx

                return {widgets: temp}
            }
        default:
            return state;
    }
}

export default WidgetReducer;