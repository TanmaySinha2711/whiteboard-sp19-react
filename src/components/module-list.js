import React from 'react'
import ModuleListItem from "./module-list-item";
import ModuleService from "../services/module-service"

class ModuleList extends React.Component {
    constructor(props) {
        super(props);
        this.moduleService = ModuleService.instance;

        this.state = {
            modules: [],
            newModule:{
                title: "new m3",
                course: this.props.course,
                lessons: []
            }
        };

        this.titleChanged = this.titleChanged.bind(this);
        this.deleteModule = this.deleteModule.bind(this);
        this.createModule = this.createModule.bind(this);
    }

    componentDidMount() {
        if(this.props.course.id !== 0){
            this.findModulesForCourse()
        }
    }

    findModulesForCourse(){
        this.moduleService.findAllModulesForCourse(this.props.course.id)
            .then(modules =>{
                this.setState({
                    modules: modules
                })
            })
    }

    createModule = () => {
        this.moduleService
            .createModule(this.props.course.id, this.state.newModule)
            .then(() => {
                this.findModulesForCourse()
            })
    }
    deleteModule = moduleId =>
        this.moduleService.deleteModule(moduleId)
            .then(() => {
                this.findModulesForCourse()
            })

    titleChanged = (event) => {
        this.setState(
            {
                newModule: {
                    title: event.target.value,
                    course: this.props.course,
                    lessons: []
                }
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
                    {this.state.modules.length?
                        this.state.modules.map(
                            (module) => {
                                return (
                                    <ModuleListItem
                                        selectModule={this.props.selectModule}
                                        key={module.id}
                                        module={module}
                                        deleteModule={this.deleteModule}/>
                                )
                            }
                        ):""
                    }
                </ul>
            </div>
        )
    }
}
export default ModuleList;