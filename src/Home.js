import React, { Component } from 'react';
import $ from 'jquery';
import Poster from './Poster';

import './css/App.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moviePosters: []
        }
    }

    componentDidMount() {
        var url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5';
        $.getJSON(url, (movieData) => {
            this.setState({
                moviePosters: movieData.results
            })
        });
    }

    render() {
        var postersArray = [];
        this.state.moviePosters.map((poster, index) => {
            postersArray.push(<Poster poster={poster} key={index} />);
        });
        return(
            <div className="poster-wrapper">
                {postersArray}
            </div>
        )
    }
}

export default Home;
