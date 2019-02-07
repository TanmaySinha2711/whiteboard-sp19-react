import React from 'react'

const HeadingWidget = ({widget, updateWidget}) =>
	<div className = "border border-dark p-2">
		<div className = "row">
			<div className = "col-md-12">
				<div className = "p-2">
					<input type = "text"
						   id = "headingSampleText"
						   onChange={event => {
							   widget.text = event.target.value
							   updateWidget(widget)
						   }}
						   className = "form-control p-2"
						   placeholder="Enter sample text"/>
				</div>
			</div>
		</div>
		<div className = "row">
			<div className = "col-md-12">
				<div className = "p-2">
					<select id = "headingType"
							onChange={event => {
								widget.size = parseInt(event.target.value)
								updateWidget(widget)
							}}
							className="form-control selcls">
						<option value="1">H1</option>
						<option value="2">H2</option>
						<option value="3">H3</option>
						<option value="4">H4</option>
						<option value="5">H5</option>
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
		{
			widget.size === 1 && <h1>{widget.text}</h1> ||
			widget.size === 2 && <h2>{widget.text}</h2> ||
			widget.size === 3 && <h3>{widget.text}</h3> ||
			widget.size === 4 && <h4>{widget.text}</h4> ||
			widget.size === 5 && <h5>{widget.text}</h5>
		}
	</div>

export default HeadingWidget