import React, { Component } from 'react';
import $ from 'jquery';
import Poster from './Poster';
import Navbar from './Navbar';


// CSS
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';

class App extends Component {
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
        return (
            <div className="poster-wrapper">
                <Navbar />
                {this.props.children}
                {postersArray}
            </div>
        );
    }
}

export default App;
