import React, {Component} from 'react';

class Comment extends Component {
	renderChildren = (mum) => {
		if (mum.kids) {
			return ( <div className="comment-list">
	        <ol>
	        	{mum.kids.map(comment => {
	        		return <Comment key={comment.id}
	        		 comment={comment}
	        		 />	
	        	})}
	        </ol>
      </div> )
		}
		else return
	}

	render(){
		return (
			<div className= "comment">
				<div className="item-title"> {this.props.comment.by} -- {this.props.comment.time}</div> 
				<div className="text">{this.props.comment.text}</div>
				<div className="children"> {this.renderChildren(this.props.comment)} </div>
			</div>
			)
	}
}

export default Comment;