import React, {Component} from 'react';
import ItemList from "./item_list";


class App extends Component {
	render(){
		return (
			<div className= "container">
				<ItemList/>
			</div>
			)
	}
}

export default App;