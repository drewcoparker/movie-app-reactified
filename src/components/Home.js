import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MovieCard from './MovieCard';
import Paginator from './Paginator';
// import DiscoverButton from './DiscoverButton';
import GetMoviesAction from '../actions/GetMoviesAction.js';

import '../../public/css/styles.css';

class Home extends Component {
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        console.log('asdf');
        this.props.getMovies(this.props.page);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.page !== nextProps.page) {
            this.props.getMovies(this.props.page)
        }
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

    render() {
        var cards = [];
        this.props.movieData.map((card, index) => {
            return cards.push(
                <MovieCard card={card} key={index} />
            );
        });
        return(
            <div className='app-wrapper'>
                <div className="cards-wrapper">
                    {cards}
                </div>
                <div className="paginator">
                    <Paginator />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state.page);
    return {
        movieData: state.movies,
        page: state.page
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getMovies: GetMoviesAction
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
