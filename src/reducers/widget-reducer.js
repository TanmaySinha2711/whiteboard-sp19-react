import CourseService from '../services/course-service'
import WidgetService from '../services/widget-service'

let cs = CourseService.instance
const widgets = {
    widgets: [
        {
            "id": 123,
            "title": "Heading Widget",
            "type": "HEADING",
            "size": 1,
            "text": "default, widget, text",
            "hidden": false
        },
        {
            "id": 234,
            "title": "Paragraph Widget",
            "type": "PARA",
            "size": 1,
            "text": "default, widget, text",
            "hidden": false
        },
        {
            "id": 345,
            "title": "List Widget",
            "type": "LIST",
            "text": "default, widget, text",
            "hidden": false
        },
        {
            "id": 456,
            "title": "Image Widget",
            "type": "IMAGE",
            "size": 1,
            "text": "https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg",
            "hidden": false
        },
        {
            "id": 567,
            "title": "Link Widget",
            "type": "LINK",
            "size": 1,
            "text": "http://www.google.com",
            "hidden": false
        }
    ]
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
                widgets: [
                    ...state.widgets,
                    {
                        type: 'HEADING',
                        text: 'Default Widget'
                    }
                ]
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