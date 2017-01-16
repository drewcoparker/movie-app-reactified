import React, { Component } from 'react';
import { Link } from 'react-router';

// CSS
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/Navbar.css';

class Navbar extends Component {

    render() {
        return(
            <nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<a className="navbar-brand" href="#">WebSiteName</a>
					</div>
					<ul className="nav navbar-nav">
						<li className="active">
                            <Link to="/">Home</Link>
                        </li>
						<li><Link to="/nowPlaying">Page 1</Link></li>
						<li><Link to="/topRated">Page 2</Link></li>
					</ul>
				</div>
			</nav>
        )
    }

}


export default Navbar;
