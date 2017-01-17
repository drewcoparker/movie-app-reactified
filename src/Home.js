import React, { Component } from 'react';
import $ from 'jquery';
import Poster from './Poster';
import DiscoverButton from './DiscoverButton';
import Constants from './Constants';
import config from './config';

import './css/styles.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moviePosters: []
        }
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
    }

    componentDidMount() {
        var url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5';
        $.getJSON(url, (movieData) => {
            this.setState({
                moviePosters: movieData.results
            })
        });
    }

    handleCategoryChange(categoryApiUrl) {
        var url = Constants.baseUrl + categoryApiUrl + config.apiKey;
        $.getJSON(url, (categoryData) => {
            this.setState({
                moviePosters: categoryData.results
            })
        })
    }

    render() {
        var postersArray = [];
        this.state.moviePosters.map((poster, index) => {
            postersArray.push(<Poster poster={poster} key={index} />);
        });
        var discoverBtns = [];
        Constants.discoverLinks.map((category, index) => {
            discoverBtns.push(
                <DiscoverButton
                    buttonLink={category.link}
                    buttonText={category.buttonText}
                    key={index}
                    functionFromParent={this.handleCategoryChange}
                />
            )
        })
        return(
            <div className="poster-wrapper">
                {/*{discoverBtns}*/}
                {postersArray}
            </div>
        )
    }
}

export default Home;
