import React from 'react'

export default class ParaWidget
  extends React.Component {
  render() {
    return(
      <div className = "border border-dark p-2">
   					<div className = "row p-2">
   						<div className = "col-md-2">
   							<div className = "p-2">
   								<label id = "paraHeading">Paragraph Widget</label>
   							</div>
   						</div>
   						<div className = "col-md-1">
   							<div className = "p-2">
   								<a href = "#">
   									<i className="fa fa-chevron-up"></i>
   								</a>
   								<a href = "#">
   									<i className="fa fa-chevron-down"></i>
   								</a>
   							</div>
   						</div>
   						<div className = "col-md-2">
   							<div className = "p-2">
   								<select id = "paraWidgetType"
   										className = "form-control selcls">
  									<option value="heading">Heading</option>
  									<option value="paragraph" selected>Paragraph</option>
 									<option value="list">List</option>
  									<option value="image">Image</option>
  									<option value="link">Link</option>
								</select>
   							</div>
   						</div>
   						<div className = "col-md-1">
   							<div className = "p-2">
								<a href = "#">
									<i className="fa fa-window-close" aria-hidden="true"></i>
								</a>
   							</div>
   						</div>
					</div>
					<div className = "row">
						<div className = "col-md-12">
							<div className = "p-2">
								<input type = "text"
									id = "paragraphSampleText"
									className = "form-control p-2"
									placeholder="Enter sample text"/>
							</div>
						</div>
					</div>
					<div className = "row">
						<div className = "col-md-12">
							<div className = "p-2">
								<input type = "text"
										id = "paraWidgetName"
										className = "form-control p-2"
										placeholder="Widget Name"/>
							</div>
						</div>
					</div>
					<div className = "row">
						<div className = "col-md-12">
							<div className = "p-2">
								<h5>Preview:</h5>
							</div>
						</div>
					</div>
					<div className = "row">
						<div className = "col-md-12">
							<div className = "p-2">
								<input type = "text"
										id = "paraPreviewText"
										className = "form-control p-2"
										disabled="disabled"/>
							</div>
						</div>
					</div>
   				</div>
    );
  }}
