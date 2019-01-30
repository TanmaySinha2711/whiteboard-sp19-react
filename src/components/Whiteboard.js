import React, {Component} from 'react'
import CourseEditor from "./course-editor";
import CourseTable from "./course-table";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import CourseGrid  from './course-grid'
import CourseService from "../services/course-service";

class WhiteBoard extends Component {
  constructor() {
    super();
    this.courseService = new CourseService()
    this.state = {
      courses: this.courseService.findAllCourses()
    }
  }
  deleteCourse = course =>
    this.setState({
      courses: this.courseService.deleteCourse(course)
    })
  addCourse = () =>
    this.setState({
      courses: this.courseService.addCourse(null)
    })
  render() {
    return (
      <div>
        <h1 className="text-center">White Board</h1>
        <Router>
          <div>
            <div className="text-center">
              <Link to="/">Course Grid</Link> |
              <Link to="/table">Course Table</Link>
            </div>
            <Route path='/' exact
                   render={() =>
                     <CourseGrid
                       addCourse={this.addCourse}
                       deleteCourse={this.deleteCourse}
                       courses={this.state.courses}/>}/>
            <Route path="/course/:id"
                   exact
                   component={CourseEditor}/>
            <Route path='/table'
                   render={() => <CourseTable
                     courses={this.state.courses}
                     addCourse={this.addCourse}
                     deleteCourse={this.deleteCourse}/>}/>
          </div>
        </Router>
      </div>
    )
  }
}

export default WhiteBoard;
