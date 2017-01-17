import React, { Component } from 'react';
import { Link } from 'react-router';
import Constants from './Constants';

// CSS
import './css/styles.css';

class Poster extends Component {

    render() {
        var imgPath = `${Constants.imageBase}${this.props.poster.poster_path}`;
        var posterLink = `/movie/${this.props.poster.id}`;
        return(
            <div className='poster'>
                <Link to={posterLink}><img src={imgPath} role="presentation"/></Link>
                <div className='poster-content'>

                </div>
            </div>
        )
    }
}

export default Poster;
