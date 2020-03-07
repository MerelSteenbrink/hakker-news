import React, {Component} from 'react';
import * as timeago from 'timeago.js';

class Item extends Component {
	render(){
		return (
			<div className= "item">
				<div className="item-title"> {this.props.title}</div> 
					<div className="details-container"> 
						<p>{this.props.score} points</p>
						<p> by {this.props.by}</p>
						<p>{timeago.format(this.props.time * 1000)}</p>
						<p>{this.props.comments} comments</p>
					</div>
			</div>
			)
	}
}

export default Item;