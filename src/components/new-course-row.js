import React, {Component} from 'react'

const NewCourseRow = ({course, addCourse}) =>
  <a className = "nav-link" onClick={() => addCourse()}>
    <i class="fa fa-plus" aria-hidden="true"></i>
  </a>

export default NewCourseRow;
