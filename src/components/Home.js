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
        this.props.getMovies(this.props.page);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.page !== nextProps.page) {
            this.props.getMovies(nextProps.page)
        }
    }

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
