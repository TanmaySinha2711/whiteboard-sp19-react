import React, {Component} from 'react'
import {Link} from 'react-router-dom'

const CourseCard = ({course, deleteCourse}) =>
<div className="col-md-4 col-6">
  <div className="card mb-2" styles={{width: '18rem'}}>
    <img className="card-img-top"
         src="https://qph.fs.quoracdn.net/main-qimg-4dc960402c794b05132522e44d84731f-c"/>
       <div className="card-block">
      <h5 className="card-title">{course.title}</h5>
      <p className="card-text">Card text.</p>
      <Link className="btn btn-dark" to={`/course/${course.id}`}>
        <i className="fa fa-pencil" aria-hidden="true"/>
      </Link>
      <a onClick={() => deleteCourse(course)}
         className="btn btn-danger">
       <i className="fa fa-close" aria-hidden="true"/>
     </a>
    </div></div>
    </div>
export default CourseCard;
