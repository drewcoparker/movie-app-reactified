import React, { Component } from 'react';
import $ from 'jquery';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/Poster.css';

class Poster extends Component {

    render() {
        var imgPath = `http://image.tmdb.org/t/p/w370_and_h556_bestv2${this.props.poster.poster_path}`;
        return(
            <div className='poster'>
                <img className='results-poster' src={imgPath} />
                <div className='poster-content'>

                </div>
            </div>
        )
    }
}

export default Poster;
