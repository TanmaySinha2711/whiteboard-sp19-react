import React from 'react'

const ImageWidget = ({widget, updateWidget}) =>
	<div className = "border border-dark p-2">
		<div className = "row">
			<div className = "col-md-12">
				<div className = "p-2">
					<input type = "text"
						   id = "imgURL"
						   onChange={event => {
							   widget.text = event.target.value
							   updateWidget(widget)
						   }}
						   className = "form-control p-2"
						   placeholder="Enter image URL"/>
				</div>
			</div>
		</div>
		<div className = "row">
			<div className = "col-md-12">
				<div className = "p-2">
					<input type = "text"
						   id = "imgWidgetName"
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
					<img src = {widget.text}
						 style={{width:100,height:80}}/>
				</div>
			</div>
		</div>
	</div>
export default ImageWidget
