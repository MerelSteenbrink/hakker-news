import React, {Component} from 'react';
import Item from './item';
import Comment from './comment';

class ItemShow extends Component {
	constructor(props) {
    	super(props);
    	this.state = {
      		error: null,
      		isLoaded: false,
      		item: {},
      		comments: []
    	};
  }

  getKids = (ids) => {
  	let url = 'https://hacker-news.firebaseio.com/v0/item/';
    const promises = ids.map(id => { return fetch(url + id + ".json").then(response => response.json()) })
    return Promise.all(promises)
	}

	putKids = (comment) => {
  	if ( comment.kids ) {
  		return this.getKids(comment.kids)
  		.then(comments => {
    			return Object.assign({}, comment, {kids: comments})
    	})
    } else {
    		return comment
   	}
	}

	componentDidMount(){
		const id = this.props.location.search.slice(4)
		fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
			  .then(res => res.json())
			  .then(result => {
			  	this.setState({ item: result });
			  	return result
			  })
			  .then(result => { 
			  	if (result.kids){
			  		return this.getKids(result.kids)
			  	} else {
			  		return []
			  	}})
			  .then(comments => {
			  	return Promise.all(comments.map(com => this.putKids(com)))
			  })
			  .then(comments => {
          	this.setState({
            	isLoaded: true,
            	comments: comments
          	});
        	},
        	(error) => {
          	this.setState({
            	isLoaded: true,
            	error
          	});
        	}
      	)
	}
	render(){
		const item = this.state.item;
		return (
			<div>
				<Item key={item.id}
	        		 title = {item.title} 
	        		 url = {item.url} 
	        		 score = {item.score} 
	        		 by = {item.by} 
	        		 time = {item.time} 
	        		 comments = {item.descendants}
	        		 id={item.id} />	
		    <div className="comment-list">
		        <ol>
		        	{this.state.comments.map(comment => {
		        		return <Comment key={comment.id}
		        		 by = {comment.by} 
		        		 time = {comment.time} 
		        		 text = {comment.text}
		        		 />	
		        	})}
		        </ol>
	      </div>
			</div>
		)
	}
}
 
export default ItemShow;

