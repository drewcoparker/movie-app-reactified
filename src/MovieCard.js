import React, { Component } from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';
import Constants from './Constants';

// CSS
import './css/styles.css';

class MovieCard extends Component {
    constructor(props) {
        super(props);
        // this.btnclick = this.btnclick.bind(this);
    }

    componentDidMount() {

    }

    render() {
        // Some movie descriptions are long and threaten the CSS structure. I've
        // elected to truncate long descriptions at 325 characters in order to
        // normalize things. This affects only about 10% of movies.
        var overview = this.props.card.overview;
        if (overview.length > 324) {
            overview.split('')
            var elipsifiedArray = [];
            for (let i = 0; i < 325; i++) {
                elipsifiedArray.push(overview[i]);
            }
            var elipsifiedOverview = elipsifiedArray.join('').concat('...');
        }

        var imgPath = `${Constants.imageBase}${this.props.card.poster_path}`;
        var posterLink = `/movie/${this.props.card.id}`;
        var placeHolderPoster = "http://placehold.it/185x278?text=No+poster+:/";
        return(
            <div className='card' id={this.props.card.id}>
                <Link to={posterLink}>
                    <img src={imgPath || placeHolderPoster} role="presentation"/>
                </Link>

                <div className='card-content'>

                    <div className='title'>
                        <p>{this.props.card.title}</p>
                    </div>

                    <div className='director'>
                        <p>Director: {this.props.card.director}</p>
                    </div>

                    <div className='description'>
                        {elipsifiedOverview || overview}
                    </div>

                    <div className='lower-card'>
                        <div className='lower-card-left'>
                            <span>Rated {this.props.card.mpaa}</span>
                        </div>
                        <div className='lower-card-middle'>
                            <Button className='trailer-btn btn-sm btn-danger'
                                    onClick={(e) => this.props.onBtnClick(e, this.props.card.id)}>
                                    <span>View trailer</span>
                            </Button>
                        </div>
                        <div className='lower-card-right'>
                            <span>{this.props.card.runtime} mins</span>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default MovieCard;
