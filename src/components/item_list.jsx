import React, {Component} from 'react';
import Item from "./item";
import { Link } from 'react-router-dom';

class ItemList extends Component {
	constructor(props) {
    	super(props);
    	this.state = {
      		error: null,
      		isLoaded: false,
      		items: []
    	};
  }


  componentDidMount() {
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then(res => res.json())
      .then(result => {
      	const promises = result
      	.slice(0,30)
      	.map(id => {
      		return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
      		.then(response => response.json())
      	})
      	return Promise.all(promises)
      })
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
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

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
      	<div className="item-list">
	        <ol>
	        	{this.state.items.map(item => {
	        		return <Link to={`/item?id=${item.id}`} key={item.id}>
		        		<Item title = {item.title} 
		        		 url = {item.url} 
		        		 score = {item.score} 
		        		 by = {item.by} 
		        		 time = {item.time} 
		        		 comments = {item.descendants}
		        		 id={item.id} />	
		        	</Link>
	        	})}
	        </ol>
        </div>
      );
    }
  }
}


export default ItemList;


