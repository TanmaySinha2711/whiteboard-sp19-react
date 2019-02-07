import React from 'react'

const LinkWidget = ({widget, updateWidget}) =>
	<div className = "border border-dark p-2">
		<div className = "row">
			<div className = "col-md-12">
				<div className = "p-2">
					<input type = "text"
						   id = "linkURL"
						   className = "form-control p-2"
						   onChange={event => {
							   widget.text = event.target.value
							   updateWidget(widget)
						   }}
						   placeholder="Enter Link"/>
				</div>
			</div>
		</div>
		<div className = "row">
			<div className = "col-md-12">
				<div className = "p-2">
					<input type = "text"
						   id = "linkText"
						   className = "form-control p-2"
						   placeholder="Link Text"/>
				</div>
			</div>
		</div>
		<div className = "row">
			<div className = "col-md-12">
				<div className = "p-2">
					<input type = "text"
						   id = "linkWidgetName"
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
					<a href = {widget.text}>{widget.text}</a>
				</div>
			</div>
		</div>
	</div>
export default LinkWidget
