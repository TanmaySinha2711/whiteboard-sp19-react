import React from 'react'
import './mouse-hover.css'

const ModuleListItem = ({module, selectModule, deleteModule}) =>
    <li onClick={() => {selectModule(module)}} className="list-group-item mouse_hover">
        <div>{module.title}</div>
        <div>
            <a onClick={()=> deleteModule(module.id)}
                className="btn btn-danger">
                <i className="fa fa-close" aria-hidden="true"/>
            </a>
        </div>
    </li>

export default ModuleListItem;