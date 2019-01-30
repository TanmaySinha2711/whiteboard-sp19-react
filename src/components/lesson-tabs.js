import React from 'react'
import './mouse-hover.css'

const LessonTabs = ({lessons, selectLesson, createLesson, lessonTitleChanged}) =>

      <div className = "row p-2">
        <div className = "col-5">
          <ul className="nav nav-tabs">
            {
              lessons.map(lesson =>
                <li key={lesson.id} className="nav-item">
                  <a className="nav-link mouse_hover"
                    onClick={() => selectLesson(lesson)}>{lesson.title}
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
            placeholder="Enter name of lesson"
            onChange={lessonTitleChanged}/>
        </div>
        <div className = "col-1">
          <button class = "btn btn-dark"
            className = "form-control"
            onClick={createLesson}>
            <i class="fa fa-plus" aria-hidden="true"/>
          </button>
        </div>
      </div>
export default LessonTabs
