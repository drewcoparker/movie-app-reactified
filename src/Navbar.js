import React, { Component } from 'react';
import Router, { Link } from 'react-router';

// CSS
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/Navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    }


    handleSearchSubmit(event) {
        event.preventDefault();
        var inputBox = event.target[0].value;
        this.props.functionFromParent(inputBox);
    }

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
						<li><Link to="/nowPlaying">Now Playing</Link></li>
						<li><Link to="/topRated">Top Rated</Link></li>
                        <li>
                            <form onSubmit={this.handleSearchSubmit} >
                                <input type='text'></input>
                            </form>
                        </li>
					</ul>
				</div>
			</nav>
        )
    }

}


export default Navbar;
