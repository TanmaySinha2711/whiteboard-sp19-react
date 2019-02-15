import React from 'react'
import './mouse-hover.css'
import TopicService from "../services/topic-service";

class TopicPills extends React.Component{
    constructor(props) {
        super(props)
        this.topicService = TopicService.instance
        this.state = {
            topic: { title: 'Default' },
            topics: [],
            newTopic:{ title: 'Default Topic'}
        };
    }

    componentDidMount() {
        if(this.props.lessonId !== 0){
            this.findTopicsForLesson()
        }
    }
    createTopic = () => {
        this.setState(
            {topics:[
                    ...this.state.topics,
                    this.state.newTopic
                ]
            }
        )
    }

    topicTitleChanged = (event) => {
        this.setState(
            {
                newTopic: {title: event.target.value}
            });
    }

    findTopicsForLesson(){
        this.topicService.findAllTopicsForLesson(this.props.lessonId)
            .then(topics =>{
                this.setState({
                    topics:topics
                })
            })
    }
    render(){
        return(
            <div className="row p-2">
                <div className="col-5">
                    <ul className="nav nav-tabs">
                        {this.state.topics.length?
                            this.state.topics.map(topic =>
                                <li key={topic.id} className="nav-item">
                                    <a className="nav-link mouse_hover"
                                       onClick={() => this.props.selectTopic(topic)}>{topic.title}
                                    </a>
                                </li>
                            ):""
                        }
                    </ul>
                </div>
                <div className="col-4"></div>
                <div className="col-2">
                    <input type="text"
                           className="form-control p-2"
                           placeholder="Enter name of topic"
                           onChange={this.topicTitleChanged}/>
                </div>
                <div className="col-1">
                    <button className="btn btn-dark"
                            className="form-control"
                            onClick={this.createTopic}>
                        <i className="fa fa-plus" aria-hidden="true"/>
                    </button>
                </div>
            </div>
        )
    }
}
export default TopicPills;
