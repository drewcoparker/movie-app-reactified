import React, { Component } from 'react';


import './css/App.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moviePosters: []
        }
    }

    render() {
        return(
            <h1>Home page</h1>
        )
    }
}

export default Home;
