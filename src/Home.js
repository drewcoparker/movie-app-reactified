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
        $.getJSON(url).then((movieData) => {
            return Promise.all(movieData.results.map((result) => {
                var movie = {};
                var id = result.id;
                var detailedUrl = `${Constants.baseUrl}/movie/${id}?${config.apiKey}&${append}`;
                return $.getJSON(detailedUrl).then((detailedResult) => {
                    // Assign the result property values to our own object
                    // property values.
                    movie.budget = detailedResult.budget;
                    movie.id = detailedResult.id;
                    movie.homepage = detailedResult.homepage;
                    movie.imdb_id = detailedResult.imdb_id;
                    movie.overview = detailedResult.overview;
                    movie.popularity = detailedResult.popularity;
                    movie.poster_path = detailedResult.poster_path;
                    movie.release_date = detailedResult.release_date;
                    movie.revenue = detailedResult.revenue;
                    movie.runtime = detailedResult.runtime;
                    movie.status = detailedResult.status;
                    movie.tagline = detailedResult.tagline;
                    movie.title = detailedResult.title;
                    movie.vote_average = detailedResult.vote_average;
                    movie.vote_count = detailedResult.vote_count;

                    // Find the director amongst the crew and assign his or her
                    // name to the director property
                    var crew = detailedResult.credits.crew;
                    for (let member of crew) {
                        if (member.job === 'Director') {
                            movie.director = member.name;
                            break;
                        }
                    }
                    // Find the US certification and assign that value to the
                    // mpaa property
                    var releaseCountries = detailedResult.release_dates.results
                    for (let country of releaseCountries) {
                        if (country.iso_3166_1 === 'US') {
                            var certifications = country.release_dates;
                            for (let item of certifications) {
                                var mpaa = item.certification;
                                if (mpaa !== '') {
                                    movie.mpaa = mpaa;
                                    break;
                                } else {
                                    movie.mpaa = 'NR';
                                }
                            }
                        }
                    }
                    // Push the object to our movie objects array (state)
                    return apiResults.push(movie);
                });
            }))
        }).then(() => {
            return this.setState({movieObjects: apiResults});
        })
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
