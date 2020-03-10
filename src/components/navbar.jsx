import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class Navbar extends Component {
	render(){
		return (
			<div className= "navbar-container navbar" >
			<Link to="/"> <div className= "navbar-brand">Hakker News</div></Link>
			<Link to="/new"><div className="nav-link"> New</div></Link>
			<Link to="/ask"><div className="nav-link"> Ask</div></Link>
			<Link to="/show"><div className="nav-link">Show</div></Link>
			<Link to="/job"><div className="nav-link">Jobs</div></Link>
			</div>
			)
	}
}

export default Navbar;