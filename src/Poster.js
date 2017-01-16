import React, { Component } from 'react';
import { Link } from 'react-router';

// CSS
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/Poster.css';

class Poster extends Component {

    render() {
        var imgPath = `http://image.tmdb.org/t/p/w370_and_h556_bestv2${this.props.poster.poster_path}`;
        var posterLink = `/movie/${this.props.poster.id}`;
        return(
            <div className='poster'>
                <Link to={posterLink}><img className='results-poster' src={imgPath} role="presentation"/></Link>
                <div className='poster-content'>

                </div>
            </div>
        )
    }
}

export default Poster;
