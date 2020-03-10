import React, { Component } from 'react';
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

	thereWeGo = (comment) => {
		if (comment.kids) {
			return this.putKids(comment)
			.then(newcomment => {
				return Promise.all(newcomment.kids.map(kid => this.thereWeGo(kid)))
				.then(comments => { return Object.assign({}, comment, { kids: comments.filter(com => !com.deleted) }) })
			})
		} else {
			return comment
		}
	}

	putKids = (comment) => {
		let url = 'https://hacker-news.firebaseio.com/v0/item/';
		const promises = comment.kids.map(id => { return fetch(url + id + ".json").then(response => response.json()) })
		return Promise.all(promises)
		.then(comments => { return Object.assign({}, comment, { kids: comments.filter(com => !com.deleted) }) })
	}

	componentDidMount() {
		const id = this.props.location.search.slice(4)
		fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
		.then(res => res.json())
		.then(result => {
			this.setState({ item: result });
			return result
		})
		.then(result => this.thereWeGo(result))
		.then(result => {
			this.setState({
				isLoaded: true,
				comments: result.kids
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
			text ={item.text}
			id={item.id} />	
			<div className="comment-list">
			<ol>
			{this.state.comments.map(comment => {
				return <Comment key={comment.id}  comment = {comment} />	
			})}
			</ol>
			</div>
			</div>
			)
	}
}

export default ItemShow;