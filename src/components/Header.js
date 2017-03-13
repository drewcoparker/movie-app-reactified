import React, { Component } from 'react';
// import Router, { Link } from 'react-router';
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TrailerModalAction from '../actions/TrailerModalAction.js';

// CSS
import '../../public/css/styles.css';

class Header extends Component {
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
            <Navbar>
                <Navbar.Form >
                    <FormGroup>
                        <FormControl id='search-input' type="text" placeholder="Search" />
                    </FormGroup>
                    {' '}
                    <Button id='search-btn' type="submit">Go</Button>
                </Navbar.Form>
            </Navbar>

        )
    }

}

function mapStateToProps(state) {
    return {
        modal: state.modal
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        trailerModalAction: TrailerModalAction
    })
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);

// <header>
//     <div className="left-header-section"></div>
//     <div className="middle-header-section">
//         <form id="main-search" onSubmit={this.handleSearchSubmit}>
//             <div className="search-wrapper">
//                 <div className="seach-form">
//                     <label className="main-input-label"></label>
//                     <input type="text" className="main-input" placeholder="Find Movies" />
//                     <button type="submit" className="main-search-btn">Go</button>
//                 </div>
//             </div>
//         </form>
//     </div>
//     <div className="right-header-section"></div>
// </header>



// <ul>
//     <li className="active">
//         <Link to="/">Home</Link>
//     </li>
//     <li><Link to="/nowPlaying">Now Playing</Link></li>
//     <li><Link to="/topRated">Top Rated</Link></li>
//     <li>
//         <form onSubmit={this.handleSearchSubmit} >
//             <input type='text'></input>
//         </form>
//     </li>
// </ul>
