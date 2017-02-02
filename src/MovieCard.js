import React, { Component } from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';
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
        var overview = this.props.card.overview;
        if (overview.length > 349) {
            overview.split('')
            var elipsifiedArray = [];
            for (let i = 0; i < 350; i++) {
                elipsifiedArray.push(overview[i]);
            }
            var elipsifiedOverview = elipsifiedArray.join('').concat('...');
        }

        var imgPath = `${Constants.imageBase}${this.props.card.poster_path}`;
        var posterLink = `/movie/${this.props.card.id}`;
        return(
            <div className='card'>
                <Link to={posterLink}><img src={imgPath} role="presentation"/></Link>

                <div className='card-content'>
                    
                    <div className='title'>
                        {this.props.card.title}
                    </div>

                    <div className='description'>
                        {elipsifiedOverview || overview}
                    </div>

                    <div className='lower-card'>
                        <Button className='trailer-btn btn-sm btn-danger'
                                type="submit">View trailer
                        </Button>
                    </div>

                </div>
            </div>
        )
    }
}

export default MovieCard;
