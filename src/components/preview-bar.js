import React from 'react'
import './toggle-button.css'

export default class TopicPills
  extends React.Component {
  render() {
    return(
      <div className = "row p-2">
   				<div className = "col-md-8"></div>
   				<div className = "col-md-1">
   				   <div className = "p-2">
   					     <button id = "save"
   								       className = "btn btn-primary">
							                Save
						     </button>
					   </div>
				  </div>
				  <div className = "col-md-1">
   				   <div className = "p-2">
   					     <label for = "togglePreview"
							          id = "preview">
							                 Preview
						     </label>
					   </div>
				  </div>
				  <div className = "col-md-1">
   				   <div className = "p-2">
						       <label className="switch">
                    <input type="checkbox"/>
                      <span className="slider round"></span>
                   </label>
             </div>
          </div>
   		</div>
    );
  }}
