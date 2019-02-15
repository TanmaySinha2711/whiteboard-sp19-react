import React from 'react'
import './mouse-hover.css'
import LessonService from '../services/lesson-service'

class LessonTabs extends React.Component {
    constructor(props) {
        super(props)
        this.lessonService = LessonService.instance
        this.state = {
            lesson: { title: 'Default' },
            lessons: [],
            newLesson:{ title: 'Default Lesson',
                topics:[{
                    title:'Default Topic'
                }]
            }
        };
    }

    componentDidMount() {
        console.log("asasas" , this.props.moduleId)
        if(this.props.moduleId !== 0){
            this.findLessonsForModule()
        }
    }
    createLesson = () => {
        this.setState(
            {lessons: [
                    ...this.state.lessons,
                    this.state.newLesson
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

    findLessonsForModule(){
        console.log(this.lessonService.findAllLessonsForModule(this.props.moduleId))
        this.lessonService.findAllLessonsForModule(this.props.moduleId)
            .then(lessons =>{
                this.setState({
                    lessons:lessons
                })
            })
    }

    render(){
        return(
            <div className="row p-2">
                <div className="col-5">
                    <ul className="nav nav-tabs">
                        {this.state.lessons.length ?
                            this.state.lessons.map(lesson =>
                                <li key={lesson.id} className="nav-item">
                                    <a className="nav-link mouse_hover"
                                       onClick={() => this.props.selectLesson(lesson)}>{lesson.title}
                                    </a>
                                </li>
                            ) : ""
                        }
                    </ul>
                </div>
                <div className="col-4"></div>
                <div className="col-2">
                    <input type="text"
                           className="form-control p-2"
                           placeholder="Enter name of lesson"
                           onChange={this.lessonTitleChanged}/>
                </div>
                <div className="col-1">
                    <button className="btn btn-dark"
                            className="form-control"
                            onClick={this.createLesson}>
                        <i className="fa fa-plus" aria-hidden="true"/>
                    </button>
                </div>
            </div>
        )
    }
}
export default LessonTabs
