import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class Item extends Component {
	render(){
		return (
			<div className= "item">
				<Link to={`/item?id=${this.props.id}`}>
					<div className="item-title"> {this.props.title}</div> 
					<div className="item-details"> 
						<p>{this.props.score} points</p>
						<p> by {this.props.by}</p>
						<p>{this.props.time}</p>
						<p>{this.props.descandants} comments</p>
					</div> 
					</Link>
			</div>
			)
	}
}

export default Item;