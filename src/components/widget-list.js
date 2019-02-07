import React from 'react'
import WidgetComponent from './widget-component'

const WidgetList = ({widgets, addWidget, deleteWidget, updateWidget, moveUp, moveDown}) =>
    <div>
        {
            widgets.map(widget =>
            <WidgetComponent
                key = {widget.id}
                deleteWidget={deleteWidget}
                updateWidget={updateWidget}
                moveUp={moveUp}
                moveDown={moveDown}
                widget={widget}/>
            )
        }
        <button className="btn btn-default btn-circle"
        onClick={addWidget}>
            <i className="fa fa-plus"></i>
        </button>
    </div>

export default WidgetList
