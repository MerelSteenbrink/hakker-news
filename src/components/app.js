import React, {Component} from 'react';
import ItemList from "./item_list";


class App extends Component {
	render(){
		return (
			<div className= "container">
				<ItemList tab={this.props.match.params.tab || "top"}/>
			</div>
			)
	}
}

export default App;