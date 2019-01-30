import React from 'react'

export default class HeadingWidget
  extends React.Component {
  render() {
    return(
      <div className = "border border-dark p-2">
   					<div className = "row p-2">
   						<div className = "col-md-2">
   							<div className = "p-2">
   								<label id = "headingHeading">Heading Widget</label>
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
   								<select id = "headingWidgetType"
   										className = "form-control selcls">
  									<option value="heading" selected>Heading</option>
  									<option value="paragraph">Paragraph</option>
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
									id = "headingSampleText"
									className = "form-control p-2"
									placeholder="Enter sample text"/>
							</div>
						</div>
					</div>
					<div className = "row">
						<div className = "col-md-12">
							<div className = "p-2">
								<select id = "headingType"
										className="form-control selcls">
  									<option value="h1">H1</option>
  									<option value="h2">H2</option>
 									<option value="h3">H3</option>
								</select>
							</div>
						</div>
					</div>
					<div className = "row">
						<div className = "col-md-12">
							<div className = "p-2">
								<input type = "text"
										id = "headingWidgetName"
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
										id = "headingPreviewText"
										className = "form-control p-2"
										disabled="disabled"/>
							</div>
						</div>
					</div>
   				</div>
    );
  }}
