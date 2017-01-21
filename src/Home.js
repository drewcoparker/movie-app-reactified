import React, { Component } from 'react';
import $ from 'jquery';
import MovieCard from './MovieCard';
import DiscoverButton from './DiscoverButton';
import Constants from './Constants';
import config from './config';

import './css/styles.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {movieObjects: []}
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        var apiResults = [];
        var append = `append_to_response=credits,release_dates`;
        var url = `${Constants.baseUrl}/movie/now_playing?${config.apiKey}`;
        console.log('before');
        $.getJSON(url).then((movieData) => {
            return Promise.all(movieData.results.map((result) => {
                var id = result.id;
                var detailedUrl = `${Constants.baseUrl}/movie/${id}?${config.apiKey}&${append}`;
                return $.getJSON(detailedUrl).then((detailedResult) => {
                    return apiResults.push(detailedResult);
                });
            }))
        }).then(() => {
            return this.setState({movieObjects: apiResults});
        })




        // $.getJSON(url, (movieData) => {
        //     var movies = movieData.results;
        //     for (let movie of movies) {
        //         var id = movie.id;
        //         var detailedUrl = `${Constants.baseUrl}/movie/${id}?${config.apiKey}&${append}`;
        //         $.getJSON(detailedUrl, (detailedMovieData) => {
        //             var detailResults = detailedMovieData;
        //             apiResults.push(detailResults);
        //             this.setState({movieObjects: apiResults});
        //         });
        //     }
        // });
        // console.log(apiResults);
    }

    handleCategoryChange(categoryApiUrl) {
        var url = Constants.baseUrl + categoryApiUrl + config.apiKey;
        $.getJSON(url, (categoryData) => {
            this.setState({
                movieObjects: categoryData.results
            })
        })
    }

    render() {
        var cards = [];
        this.state.movieObjects.map((card, index) => {
            cards.push(<MovieCard card={card} key={index} />);
        });
        return(
            <div className="cards-wrapper">
                {cards}
            </div>
        )
    }
}

export default Home;



// var discoverBtns = [];
// Constants.discoverLinks.map((category, index) => {
//     discoverBtns.push(
//         <DiscoverButton
//             buttonLink={category.link}
//             buttonText={category.buttonText}
//             key={index}
//             functionFromParent={this.handleCategoryChange}
//         />
//     )
// })
