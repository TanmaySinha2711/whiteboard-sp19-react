import React from 'react';
import ModuleListItem from "./module-list-item";
import CourseService from "../services/course-service";
import ModuleService from "../services/module-service";

class ModuleList extends React.Component {
  constructor(props) {
    super(props);

    this.titleChanged = this.titleChanged.bind(this);
    this.createModule = this.createModule.bind(this);
    this.setCourseId = this.setCourseId.bind(this);
    this.moduleService = ModuleService.instance;
    this.courseService = CourseService.instance;

    this.state = {courseId: '',
      module: {title: ''},
      date:'',
      modules: [
      ]
    };
  }

  setCourseId(courseId){
    this.setState({courseId:courseId})
  }

  titleChanged(event){
    this.setState({module:{title: event.target.value}});
  }

  findAllModulesForCourse(courseId){
    this.moduleService.findAllModulesForCourse(courseId)
  }

  componentDidMount(){
    console.log(this.props.courseId)
    this.setCourseId(this.props.courseId)
  }

  componentWillReceiveProps(newProps){
    this.setCourseId(newProps.courseId);
    this.findAllModulesForCourse(newProps.courseId)
  }

  createModule(){
    this.moduleService.createModule(this.state.courseId,this.state.module)
        .then(()=> {
          this.findAllModulesForCourse(this.state.courseId);
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
