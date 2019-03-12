import React from 'react'
import WidgetComponent from './widget-component'

class WidgetList extends React.Component {
    componentDidMount(){
        this.props.loadWidgets(this.props.topicId)
    }
    render(){
        return (
            <div>
                {this.props.widgets.length?
                    this.props.widgets.map(widget =>
                        <WidgetComponent
                            key={widget.id}
                            deleteWidget={this.props.deleteWidget}
                            updateWidget={this.props.updateWidget}
                            moveUp={this.props.moveUp}
                            moveDown={this.props.moveDown}
                            firstWidget={0 === this.props.widgets.indexOf(widget)}
                            lastWidget={this.props.widgets.length - 1 === this.props.widgets.indexOf(widget)}
                            widget={widget}/>
                    ):""
                }
                {/*{
            widgets.map(widget =>
                <p>{widget.id}</p>
            )
        }*/}
                <button className="btn btn-default btn-circle"
                        onClick={() => this.props.addWidget(this.props.topicId)}>
                    <i className="fa fa-plus"></i>
                </button>
            </div>
        )

    }
}
export default WidgetList
