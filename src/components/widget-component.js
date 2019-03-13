import React from 'react'
import HeadingWidget from "./heading-widget";
import ParaWidget from "./para-widget";
import ListWidget from "./list-widget";
import ImageWidget from "./image-widget"
import LinkWidget from "./link-widget"

const WidgetComponent = ({widget, deleteWidget, updateWidget, moveUp, moveDown, firstWidget, lastWidget}) =>
    <div>
        <div className = "row p-2">
            <div className = "col-md-3">
                <div className = "p-2">
                    <label id = "heading">{widget.type} widget</label>
                </div>
            </div>
            <div className = "col-md-2">
                <div className = "p-2">
                    <button className="btn btn-primary"
                            onClick={() => {moveUp(widget)}}
                            style={{visibility: firstWidget
                                    ? 'hidden': ''}}>
                        <i className="fa fa-chevron-up" aria-hidden="true"></i>
                    </button>
                    <button className="btn btn-primary"
                            onClick={() => {moveDown(widget)}}
                            style={{visibility: lastWidget
                                    ? 'hidden': ''}}
                            >
                        <i className="fa fa-chevron-down" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
            <div className = "col-md-3">
                <div className = "p-2">
                    <select id = "widgetType"
                            onChange={(event) => {
                                widget.type = event.target.value
                                updateWidget(widget)
                            }}
                            className = "form-control" value={widget.type}>
                        <option value="HEADING">Heading</option>
                        <option value="PARA">Paragraph</option>
                        <option value="LIST">List</option>
                        <option value="IMAGE">Image</option>
                        <option value="LINK">Link</option>
                    </select>
                </div>
            </div>
            <div className = "col-md-4">
                <div className = "p-2">
                    <button onClick={() => deleteWidget(widget.id)}>
                        <i className="fa fa-window-close" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </div>
        {
            widget.type=='HEADING' && <HeadingWidget widget={widget}
                                                    updateWidget={updateWidget}/> ||
            widget.type=='PARA'   && <ParaWidget widget={widget}
                                                    updateWidget={updateWidget}/> ||
            widget.type=='LIST'   && <ListWidget widget={widget}
                                                updateWidget={updateWidget}/> ||
            widget.type=='IMAGE'   && <ImageWidget widget={widget}
                                                   updateWidget={updateWidget}/> ||
            widget.type=='LINK'   && <LinkWidget widget={widget}
                                                 updateWidget={updateWidget}/>
        }
    </div>

export default WidgetComponent