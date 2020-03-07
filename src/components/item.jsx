import React, {Component} from 'react';
import * as timeago from 'timeago.js';
import { Link } from 'react-router-dom';

class Item extends Component {
	getDomain = (url) => {
		return url ? url.match(/:\/\/(www[0-9]?\.)?(.[^\/:]+)/i)[2] : ""
	}

	render(){
		return (
			<div className= "item">
				<div className="item-title details-container">{this.props.title }
					<a href={this.props.url}>{this.getDomain(this.props.url)}</a>
				</div> 
					<div className="details-container"> 
						<p>{this.props.score} points</p>
						<p> by {this.props.by}</p>
						<p>{timeago.format(this.props.time * 1000)}</p>
						<Link to={`/item?id=${this.props.id}`}>
							<p>{this.props.comments} comments</p>
						</Link>
					</div>
			</div>
			)
	}
}

export default Item;