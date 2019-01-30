import React, {Component} from 'react'
import {Link} from 'react-router-dom'

var n =  new Date();
var y = n.getFullYear();
var m = n.getMonth() + 1;
var d = n.getDate();

const CourseRow = ({course, deleteCourse}) =>
  <div class="row">
    <div class="col-6">
      <Link to={`/course/${course.id}`}>{course.title}</Link>
    </div>
    <div class="col-2">
      me
    </div>
    <div class="col-2 d-none d-sm-block">
      {course.id}
    </div>
    <div class="col-2">
      <a onClick = {() => deleteCourse(course)}>
        <i class="fa fa-times"></i>
      </a>
    </div>
  </div>
export default CourseRow;
