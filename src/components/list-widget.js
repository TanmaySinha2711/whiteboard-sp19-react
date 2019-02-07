import React from 'react'

const ListWidget = ({widget, updateWidget}) =>
	<div className = "border border-dark p-2">
		<div className = "row">
			<div className = "col-md-12">
				<div className = "p-2">
					<input type = "text"
						   id = "listSampleText"
						   className = "form-control p-2"
						   onChange={event => {
							   widget.text = event.target.value
							   updateWidget(widget)
						   }}
						   placeholder="Enter comma separated text"/>
				</div>
			</div>
		</div>
		<div className = "row">
			<div className = "col-md-12">
				<div className = "p-2">
					<select id = "listType"
							onChange={event => {
								widget.size = parseInt(event.target.value)
								updateWidget(widget)
							}}
							className="form-control selcls">
						<option value="1">UnOrdered</option>
						<option value="2">Ordered</option>
					</select>
				</div>
			</div>
		</div>
		<div className = "row">
			<div className = "col-md-12">
				<div className = "p-2">
					<input type = "text"
						   id = "listWidgetName"
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
			widget.size === 1 && <ul>{widget.text.split(",")
				.map(l => <li>{l}</li>)}</ul>||
			widget.size === 2 && <ol>{widget.text.split(",")
				.map(l => <li>{l}</li>)}</ol>
		}
	</div>

export default ListWidget
