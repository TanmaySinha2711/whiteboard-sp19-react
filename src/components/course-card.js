import React, {Component} from 'react'
import {Link} from 'react-router-dom'

const CourseCard = ({course, deleteCourse}) =>
<div className="col-md-4 col-6">
  <div className="card mb-2" styles={{width: '18rem'}}>
    <img className="card-img-top"
         src="https://images-na.ssl-images-amazon.com/images/I/51-0tECWgtL._SX425_.jpg"/>
       <div className="card-block">
      <h5 className="card-title">{course.title}</h5>
      <p className="card-text">Card text.</p>
      <Link className="btn btn-dark" to={`/course/${course.id}`}>
        <i className="fa fa-pencil" aria-hidden="true"/>
      </Link>
      <a onClick={() => deleteCourse(course.id)}
         className="btn btn-danger">
       <i className="fa fa-close" aria-hidden="true"/>
     </a>
    </div></div>
    </div>
export default CourseCard;
