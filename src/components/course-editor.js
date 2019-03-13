import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";
import PreviewBar from "./preview-bar"
import WidgetReducer from "../reducers/widget-reducer"
import WidgetListContainer from "../containers/widget-list-container"

import {createStore} from "redux"
import {Provider} from 'react-redux'

import CourseService from "../services/course-service"
import TopicService from "../services/topic-service"

const store = createStore(WidgetReducer);

class CourseEditor extends React.Component {
    constructor(props) {
        super(props)
        this.courseService = CourseService.instance
        this.topicService = TopicService.instance
        const courseId = parseInt(props.match.params.id)
        this.state = {
            course: {
                id: 0
            },
            module: {
                id: 0
            },
            lesson:{
                id: 0
            },
            moduleId: 1,
            lessonId: 1,
            topicId: 1,
            courseId: courseId
        }
    }

    findCourseById(){
        this.courseService.findCourseById(parseInt(this.props.match.params.id))
            .then(course =>
            this.setState({
                course:course
            }))
    }
    componentDidMount() {
        this.findCourseById()
    }

    selectModule = module =>
        this.setState({
            moduleId: module.id,
            module: module,
            lessons: module.lessons
            //topics: module.lessons[0].topics
            //widgets: module.lessons[0].topics[0].widgets
        })
    selectLesson = lesson =>
        this.setState({
            lessonId: lesson.id,
            lesson: lesson,
            topics: lesson.topics
            //widgets: lesson.topics[0].widgets
        })
    selectTopic = topic =>
        this.setState({
            topicId: topic.id,
            topic: topic,
            widgets:topic.widgets
        })

    render() {
        return (
            <div className = "container-fluid">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">
                        <Link to="/"><i className="fa fa-window-close" aria-hidden="true"></i></Link>
                    </a>
                    <a className="navbar-brand" href="#">Course Editor: {this.state.course.title}</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Build
                                    <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pages</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Themes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Store</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Apps</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Settings</a>
                            </li>
                            <li className = "nav-item">
                                <a className = "nav-link" href = "#">
                                    <i className="fa fa-plus" aria-hidden="true"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="row">
                    <div className="col-3">
                        <ModuleList
                            course={this.state.course}
                            selectModule={this.selectModule}
                        />
                    </div>
                    <div className="col-8">
                        <LessonTabs
                            moduleId={this.state.moduleId}
                            selectLesson={this.selectLesson}/>
                        <TopicPills
                            lessonId={this.state.lessonId}
                            selectTopic={this.selectTopic}/>
                        <PreviewBar/>
                        {<Provider store={store}>
                            <WidgetListContainer previewWidgets={this.state.widgets}
                                                 key={this.state.topicId}
                                                 topicId = {this.state.topicId}/>
                        </Provider>}
                    </div>
                </div>
            </div>
        )
    }
}
export default CourseEditor;