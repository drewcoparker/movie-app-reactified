import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Navbar, FormGroup, FormControl, Button, Form} from 'react-bootstrap';
import MovieCard from './MovieCard';
import Paginator from './Paginator';
import Constants from '../Constants';
import config from '../config';
import GetMoviesAction from '../actions/GetMoviesAction.js';
import SetApiUrlAction from '../actions/SetApiUrlAction.js';

import '../../public/css/styles.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nowPlaying: `${Constants.baseUrl}/movie/now_playing?${config.apiKey}&page=`,
            upComing: `${Constants.baseUrl}/movie/upcoming?${config.apiKey}&page=`,
            search: `${Constants.baseUrl}/search/movie?${config.apiKey}&query=`,
            displayMsg: ''
        }
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    }

    componentDidMount() {
        this.props.getMovies(this.props.url + "1");
        this.setState({
            displayMsg: 'Now playing'
        })
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.fromSetPage !== nextProps.fromSetPage) {
            this.props.getMovies(this.props.url + nextProps.fromSetPage)
        }
    }

    handleSearchSubmit(event) {
        event.preventDefault();
        let page = `&page=`;
        let value = event.target[0].value;
        let searchQuery = this.state.search + value + page;
        this.props.setUrl(searchQuery);
        this.props.getMovies(searchQuery + "1");
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
                        <Paginator url={this.props.url}/>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        url: state.apiUrl,
        movieData: state.apiResults.movies,
        page: state.apiResults.page,
        fromSetPage: state.page
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getMovies: GetMoviesAction,
        setUrl: SetApiUrlAction
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
