import React, { Component } from 'react';
import { Link } from 'react-router';
import Constants from './Constants';

// CSS
import './css/styles.css';

class MovieCard extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }



    render() {
        console.log(this.props.card);
        var imgPath = `${Constants.imageBase}${this.props.card.poster_path}`;
        var posterLink = `/movie/${this.props.card.id}`;
        return(
            <div className='card'>
                <Link to={posterLink}><img src={imgPath} role="presentation"/></Link>
                <div className='card-content'>
                    <div className='title'>
                        {this.props.card.title}
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;
