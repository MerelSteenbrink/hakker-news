import React, {Component} from 'react';

class Comment extends Component {
	render(){
		return (
			<div className= "comment">
				<div className="item-title"> {this.props.by} -- {this.props.time}</div> 
				<div className="text">{this.props.text}</div>
			</div>
			)
	}
}

export default Comment;