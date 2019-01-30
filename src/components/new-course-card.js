import React, {Component} from 'react'

const NewCourseCard = ({course, addCourse}) =>
<div className="col-md-4 col-6">
  <div className="card" styles={{width: '18rem'}}>
    <img className="card-img-top"
         src="http://spiritual.panditbooking.com/wp-content/uploads/2016/01/swastik-compressed-1-758x379.jpg"/>
       <div className="card-block">
      <h5 className="card-title">New Course</h5>
      <p className="card-text">Card text</p>
      <a onClick={() => addCourse()}
         className="btn btn-primary">
       <i className="fa fa-plus" aria-hidden="true"/>
      </a>
    </div>
  </div>
  </div>
export default NewCourseCard;
