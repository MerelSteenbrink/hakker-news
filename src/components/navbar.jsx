import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class Navbar extends Component {
	render(){
		return (
			<div className= "navbar-container navbar" >
				<Link to="/"> <div className= "navbar-brand">Hakker News</div></Link>
        		<Link to="/ask"><div className="nav-link"> Ask</div></Link>
        		<Link to="/stories"><div className="nav-link"> Stories</div></Link>
        		<Link to="/jobs"><div className="nav-link"> Jobs</div></Link>
			</div>
			)
	}
}

export default Navbar;