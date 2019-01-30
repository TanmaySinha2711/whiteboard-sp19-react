import React from 'react'
import ModuleListItem from "./module-list-item";

class ModuleList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      module: { title: 'Default' },
      modules: this.props.modules
    };
  }

  createModule = () => {
    this.setState(
      {
        modules: [
          ...this.state.modules,
          this.state.module
        ]
      }
    )
  }
  titleChanged = (event) => {
    this.setState(
      {
        module: {title: event.target.value}
      });
  }
  render() {
    return(
      <div>
        <ul className="list-group ">
          <li className="list-group-item">
            <input
              onChange={this.titleChanged}
              className="form-control"/>
            <br/>
            <button
              onClick={this.createModule}
              className="btn btn-primary btn-block">Add Module</button>
          </li>
          {
            this.state.modules.map(
              (module) => {
                return (
                  <ModuleListItem
                    selectModule={this.props.selectModule}
                    key={module.id}
                    module={module}/>
                )
              }
            )
          }
        </ul>
      </div>
    )
  }
}
export default ModuleList;
