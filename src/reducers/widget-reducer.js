import courseService from '../services/course-service'


let cs = new courseService()
//let widgets = cs.findAllWidgets()

const widgets = {
    widgets: [
        {
            "id": 123,
            "title": "Heading Widget",
            "type": "HEADING",
            "size": 1,
            "text": "default, widget, text"
        },
        {
            "id": 234,
            "title": "Paragraph Widget",
            "type": "PARA",
            "size": 1,
            "text": "default, widget, text"
        },
        {
            "id": 345,
            "title": "List Widget",
            "type": "LIST",
            "text": "default, widget, text"
        },
        {
            "id": 456,
            "title": "Image Widget",
            "type": "IMAGE",
            "size": 1,
            "text": "https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"
        },
        {
            "id": 567,
            "title": "Link Widget",
            "type": "LINK",
            "size": 1,
            "text": "default, widget, text"
        }
    ]
}

const WidgetReducer = (state = widgets, action) => {
    let idx = 0
    switch(action.type) {
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
                return {widgets: state.widgets}
            }
            else{
                let temp = []
                state.widgets.map(
                    widget => temp[widget]
                )
                let tempIdx = temp[idx - 1]
                temp[idx - 1] = temp[idx]
                temp[idx] = tempIdx

                return {widgets: temp}
            }
        case 'MOVE_DOWN':
            idx = state.widgets.indexOf(action.widget)
            if(idx === state.widgets.length - 1) {
                return {widgets: state.widgets}
            }
            else{
                let temp = []
                state.widgets.map(
                    widget => temp[widget]
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