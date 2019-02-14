import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import CourseRow from './course-row'
import NewCourseRow from './new-course-row'

const CourseTable = ({courses, deleteCourse, addCourse}) =>
<div className="container-fluid">
  <nav className="navbar navbar-light bg-light justify-content-between">
    <a className = "nav-item" href = "#">
      <Link to="/whiteboard"><i className="fa fa-bars" aria-hidden="true"></i></Link>
    </a>
    <a className="navbar-brand">Course List</a>
    <form className="form-inline">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <a className = "nav-item" href = "#">
          <i className="fa fa-search"></i>
        </a>
        <NewCourseRow addCourse = {addCourse}/>
    </form>
  </nav>
  <div className="row">
      <div className="col-6">
        Title
      </div>
      <div className="col-2 d-none d-sm-block">
        Owner
      </div>
      <div className="col-2">
        Modified
      </div>
      <div className="col-2">

      </div>
  </div>
  {
      courses.map(course =>
        <CourseRow
          deleteCourse={deleteCourse}
          course={course}
          key={course.id}/>
      )
  }
</div>

export default CourseTable;
