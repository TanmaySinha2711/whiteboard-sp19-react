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

const store = createStore(WidgetReducer);

class CourseEditor extends React.Component {
    constructor(props) {
        super(props)
        this.courseService = new CourseService()
        const courseId = parseInt(props.match.params.id)
        const course = this.courseService.findCourseById(courseId)
        this.state = {
            course: course,
            module: course.modules[0],
            lesson: course.modules[0].lessons[0],
            lessons: course.modules[0].lessons,
            topic: course.modules[0].lessons[0].topics[0],
            topics: course.modules[0].lessons[0].topics,
            widgets:course.modules[0].lessons[0].topics[0].widgets,
            newLesson:{ title: 'Default Lesson',
                topics:[{
                    title:'Default Topic'
                }]
            },
            newTopic:{
                title:'Default Topic'
            }
        }
    }

    createLesson = (event) => {
        this.setState(
            {lessons: [
                    ...this.state.lessons,
                    this.state.newLesson
                ]
            }
        )
    }

    createTopic = (event) => {
        this.setState(
            {topics:[
                    ...this.state.topics,
                    this.state.newTopic
                ]
            }
        )
    }

    lessonTitleChanged = (event) => {
        this.setState(
            {
                newLesson: {title: event.target.value,
                    topics:[{
                        title:'Default Topic'
                    }]}
            });
    }

    topicTitleChanged = (event) => {
        this.setState(
            {
                newTopic: {title: event.target.value}
            });
    }

    selectModule = module =>
        this.setState({
            module: module,
            lessons: module.lessons,
            topics: module.lessons[0].topics,
            widgets: module.lessons[0].topics[0].widgets
        })
    selectLesson = lesson =>
        this.setState({
            lesson: lesson,
            topics: lesson.topics,
            widgets: lesson.topics[0].widgets
        })
    selectTopic = topic =>
        this.setState({
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
                            modules={this.state.course.modules}
                            selectModule={this.selectModule}
                        />
                    </div>
                    <div className="col-8">
                        <LessonTabs
                            lessons={this.state.lessons}
                            selectLesson={this.selectLesson}
                            createLesson={this.createLesson}
                            lessonTitleChanged={this.lessonTitleChanged}/>

                        <TopicPills
                            topics={this.state.topics}
                            selectTopic={this.selectTopic}
                            createTopic={this.createTopic}
                            topicTitleChanged={this.topicTitleChanged}/>
                        <PreviewBar/>
                        <Provider store={store}>
                            <WidgetListContainer previewWidgets={this.state.widgets}
                                                 key={this.state.topic.id}
                            topic = {this.state.topic}/>
                        </Provider>
                        {/*<WidgetList/>*/}
                    </div>
                </div>
            </div>
        )
    }
}
export default CourseEditor;
