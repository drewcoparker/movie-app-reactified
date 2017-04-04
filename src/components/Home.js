import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Navbar, FormGroup, FormControl, Button, Form} from 'react-bootstrap';
import MovieCard from './MovieCard';
import Paginator from './Paginator';
import Constants from '../Constants';
import config from '../config';
import GetMoviesAction from '../actions/GetMoviesAction.js';

import '../../public/css/styles.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nowPlaying: `${Constants.baseUrl}/movie/now_playing?${config.apiKey}&page=`,
            upComing: `${Constants.baseUrl}/movie/upcoming?${config.apiKey}&page=`,
            search: `${Constants.baseUrl}/search/movie?${config.apiKey}&query=`,
            page: `&page=`,
            displayMsg: ''
        }
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    }

    componentDidMount() {
        this.props.getMovies(this.state.nowPlaying);
        this.setState({
            displayMsg: 'Now playing'
        })
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.fromSetPage !== nextProps.fromSetPage) {
            this.props.getMovies(this.state.nowPlaying + nextProps.fromSetPage)
        }
    }

    handleSearchSubmit(event) {
        event.preventDefault();
        let page = `&page=${this.props.fromSetPage}`;
        let value = event.target[0].value;
        let searchQuery = this.state.search + value + page;
        this.props.getMovies(searchQuery);
    }

    render() {

        var cards = [];
        this.props.movieData.map((card, index) => {
            return cards.push(
                <MovieCard card={card} key={index} />
            );
        });
        return(
            <div className='app-wrapper'>
                <Navbar className="text-center">
                    <Form inline onSubmit={this.handleSearchSubmit}>
                        <FormGroup>
                            <FormControl id='search-input' type="text" placeholder="Search" />
                        </FormGroup>
                        <Button id='search-btn' type="submit">Go</Button>
                    </Form>
                </Navbar>
                <div className='app-wrapper'>
                    <h3 className="display-message">{this.state.displayMsg}</h3>
                    <div className="cards-wrapper">
                        {cards}
                    </div>
                    <div className="paginator">
                        <Paginator />
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state.apiResults);
    return {
        movieData: state.apiResults.movies,
        page: state.apiResults.page,
        fromSetPage: state.page
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getMovies: GetMoviesAction
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
