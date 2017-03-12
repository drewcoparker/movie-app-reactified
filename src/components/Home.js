import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import $ from 'jquery';
import MovieCard from './MovieCard';
import Paginator from './Paginator';
import DiscoverButton from './DiscoverButton';
// import Constants from '../Constants';
// import config from '../config';

import GetMoviesAction from '../actions/GetMoviesAction.js';

import '../../public/css/styles.css';

class Home extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     movieObjects: [],
        //     activePage: 1,
        //     totalPages: 0
        // }
        // this.handleCategoryChange = this.handleCategoryChange.bind(this);
        // this.componentDidMount = this.componentDidMount.bind(this);
        // this.handleTrailerClick = this.handleTrailerClick.bind(this);
        // this.handlePaginatorClick = this.handlePaginatorClick.bind(this);
        // this.getMovieResults = this.getMovieResults.bind(this);
    }

    componentDidMount() {
        this.props.getMovies();
    }

    // handleTrailerClick(e, id) {
    //     e.preventDefault();
    //     var trailerUrl = `${Constants.baseUrl}/movie/${id}/videos?${config.apiKey}`;
    //     $.getJSON(trailerUrl).then((trailerData) => {
    //         let trailer = trailerData.results[0].key;
    //         var youtubeLink = `https://www.youtube.com/embed/${trailer}?autoplay=1`;
    //         console.log(youtubeLink);
    //     })
    // }

    // handleCategoryChange(categoryApiUrl) {
    //     var url = Constants.baseUrl + categoryApiUrl + config.apiKey;
    //     $.getJSON(url, (categoryData) => {
    //         this.setState({
    //             movieObjects: categoryData.results
    //         })
    //     })
    // }

    // handlePaginatorClick(e) {
    //     this.setState({activePage: e});
    //     this.getMovieResults();
    // }

    render() {
        var cards = [];
        this.props.movieData.map((card, index) => {
            return cards.push(<MovieCard card={card} key={index} />);
        });
        return(
            <div className='app-wrapper'>
                <div className="cards-wrapper">
                    {cards}
                </div>
                <div className="paginator">

                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        movieData: state.movies
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getMovies: GetMoviesAction
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

//
// <Paginator
//     activePage={this.state.activePage}
//     numberPages={this.state.totalPages}
//     onPaginatorClick={this.handlePaginatorClick} />
