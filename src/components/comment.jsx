import React, {Component} from 'react';
import * as timeago from 'timeago.js';
import parse from 'html-react-parser';

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
			<div className="item-title"> {this.props.comment.by} -- {timeago.format(this.props.comment.time * 1000)}</div> 
			<div className="text">{parse(this.props.comment.text || "DELETED")}</div>
			<div className="children"> {this.renderChildren(this.props.comment)} </div>
		</div>
		)
}
}

export default Comment;