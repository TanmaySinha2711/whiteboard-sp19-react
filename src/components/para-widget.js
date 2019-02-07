import React from 'react'

const ParaWidget = ({widget, updateWidget}) =>
	<div className = "border border-dark p-2">
		<div className = "row">
			<div className = "col-md-12">
				<div className = "p-2">
					<input type = "text"
						   id = "paragraphSampleText"
						   className = "form-control p-2"
						   onChange={event => {
							   widget.text = event.target.value
							   updateWidget(widget)
						   }}
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
						   value = {widget.text}
						   disabled="disabled"/>
				</div>
			</div>
		</div>
	</div>

export default ParaWidget
