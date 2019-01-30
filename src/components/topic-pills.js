import React from 'react'
import './mouse-hover.css'

const TopicPills = ({topics, selectTopic, createTopic, topicTitleChanged}) =>
      <div className="row p-2">
        <div className = "col-5">
      <ul className="nav nav-tabs">
        {
          topics.map(topic =>
            <li key={topic.id} className="nav-item">
              <a className="nav-link mouse_hover"
                 onClick={() => selectTopic(topic)}>{topic.title}
              </a>
            </li>
          )
        }
      </ul>
    </div>
      <div className = "col-4"></div>
      <div className = "col-2">
        <input type = "text"
          className = "form-control p-2"
          placeholder="Enter name of topic"
          onChange={topicTitleChanged}/>
      </div>
      <div className = "col-1">
        <button class = "btn btn-dark"
          className = "form-control"
          onClick={createTopic}>
          <i class="fa fa-plus" aria-hidden="true"/>
        </button>
      </div>
    </div>

export default TopicPills;
