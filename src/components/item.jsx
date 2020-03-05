import React, {Component} from 'react';

class Item extends Component {
	render(){
		return (
			<div className= "item">
				<div className="item-title"> {this.props.title}</div> 
					<div className="details-container"> 
						<p>{this.props.score} points</p>
						<p> by {this.props.by}</p>
						<p>{this.props.time}</p>
						<p>{this.props.comments}comments</p>
					</div>
			</div>
			)
	}
}

export default Item;