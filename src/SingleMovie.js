import React, { Component } from 'react';
import $ from 'jquery';

class SingleMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMovieData: [],
            budget: '',
            revenue: ''
        }
    }

    componentDidMount() {
        var movieUrl = `https://api.themoviedb.org/3/movie/${this.props.params.id}?api_key=fec8b5ab27b292a68294261bb21b04a5`;
        $.getJSON(movieUrl, (movieResult) => {
            var revenue = `$${movieResult.revenue}`;
            var budget = `$${movieResult.budget}`;
            this.setState({
                currentMovieData: movieResult,
                revenue: revenue,
                budget: budget
            })
        })
    }

    render() {
        var posterPath = `http://image.tmdb.org/t/p/original/${this.state.currentMovieData.poster_path}?api_key=fec8b5ab27b292a68294261bb21b04a5`;
        return(
            <div className="movie-wrapper">
                <a href={this.state.currentMovieData.homepage} target="_blank">
                    <img src={posterPath} role="presentation"/>
                </a>
            </div>
        )
    }
}

export default SingleMovie;
