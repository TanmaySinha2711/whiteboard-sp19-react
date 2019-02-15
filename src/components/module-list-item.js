import React from 'react'
import './mouse-hover.css'

const ModuleListItem = ({module, selectModule}) =>
    <li onClick={() => {selectModule(module)}} className="list-group-item mouse_hover">
        {module.title}
    </li>

export default ModuleListItem;