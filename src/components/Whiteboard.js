import React, {Component} from 'react'
import CourseEditor from "./course-editor";
import CourseTable from "./course-table";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import CourseGrid  from './course-grid'
import CourseService from "../services/course-service";
import UserService from "../services/user-service"

class WhiteBoard extends Component {
    constructor() {
        super();
        this.courseService = CourseService.instance
        this.userService = UserService.instance
        const user = this.userService.findUserById(1)

        this.state = {
            courses: [],
            newCourse: {
                "title": "new course",
                //"faculty": {id: 1},
                "modules": []
            }
        }
    }

    componentDidMount() {
        this.courseService.findAllCourses()
            .then(courses => this.setState({
                courses:courses
            }))
    }

    findAllCourses(){
        this.courseService.findAllCourses()
            .then(courses => {
                this.setState({
                    courses: courses
                })
            })
    }
    deleteCourse = courseId =>
        this.courseService.deleteCourse(courseId)
            .then(() => {
                this.findAllCourses()
            })

    addCourse = () =>
        this.courseService.addCourse(this.state.newCourse)
            .then(() => {
                this.findAllCourses();
            })

    render() {
        return (
            <div>
                <h1 className="text-center">White Board</h1>
                <Router>
                    <div>
                        <div className="text-center">
                            <Link to="/whiteboard">Course Grid</Link> |
                            <Link to="/whiteboard/table">Course Table</Link>
                        </div>
                        <Route path='/whiteboard' exact
                               render={() =>
                                   <CourseGrid
                                       addCourse={this.addCourse}
                                       deleteCourse={this.deleteCourse}
                                       courses={this.state.courses}/>}/>
                        <Route path="/course/:id"
                               exact
                               component={CourseEditor}/>
                        <Route path='/whiteboard/table'
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
