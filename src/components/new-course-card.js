import React, {Component} from 'react'

const NewCourseCard = ({course, addCourse}) =>
<div className="col-md-4 col-6">
  <div className="card" styles={{width: '18rem'}}>
    <img className="card-img-top"
         src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Biohazard_symbol_%28black_and_yellow%29.png/220px-Biohazard_symbol_%28black_and_yellow%29.png"/>
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
