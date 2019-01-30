import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import CourseCard from './course-card'
import NewCourseCard from "./new-course-card";

const CourseGrid = ({courses, deleteCourse, addCourse}) =>
  <div className="container">
    <div className = "container-fluid">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
             <a className="navbar-brand">
                   <Link to="/table"><i className="fa fa-bars" aria-hidden="true"></i></Link>
             </a>
             <a className="navbar-brand" href="#">Course Manager</a>
            <form className="form-inline">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <a className = "nav-item" href = "#">
                  <i className="fa fa-search"></i>
                </a>
            </form>
        </nav>
    </div>
    <div className="card-deck">
    {
        courses.map(course =>
          <CourseCard
            deleteCourse={deleteCourse}
            course={course}
            key={course.id}/>
        )
    }
      <NewCourseCard
        addCourse={addCourse}/>
    </div>
  </div>

export default CourseGrid
