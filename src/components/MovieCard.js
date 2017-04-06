import React, { Component } from 'react';
// import { Link } from 'react-router';
import { Button } from 'react-bootstrap';
import Constants from '../Constants';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GetTrailerAction from '../actions/GetTrailerAction.js'
import TrailerModalAction from '../actions/TrailerModalAction.js'

// CSS
import '../../public/css/styles.css';

class MovieCard extends Component {
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {

    }

    handleTrailerBtnClick(e, id) {
        e.preventDefault();
        this.props.getTrailer(id)
        this.props.showModal({showModal: true});
    }


    render() {
        // Some movie descriptions are long and threaten the CSS structure. I've
        // elected to truncate long descriptions at 325 characters in order to
        // normalize things. This affects only about 10% of movies.
        var overview = this.props.card.overview;
        if ((overview === null) || overview === '') {
            overview = "No description available :/"
        }
        if (overview.length > 324) {
            overview.split('')
            var elipsifiedArray = [];
            for (let i = 0; i < 325; i++) {
                elipsifiedArray.push(overview[i]);
            }
            var elipsifiedOverview = elipsifiedArray.join('').concat('...');
        }

        var imgPath;
        if (this.props.card.poster_path === null) {
            imgPath = "http://placehold.it/185x278?text=No+poster+:/";
        } else {
            imgPath = `${Constants.imageBase}${this.props.card.poster_path}`;
        }
        
        var imdbLink = "http://www.imdb.com/title/" + this.props.card.imdb_id;

        return(
            <div className='card' id={this.props.card.id}>
                <a target="_blank" href={imdbLink}>
                    <img src={imgPath} role="presentation"/>
                </a>

                <div className='card-content'>

                    <div className='title'>
                        <p>{this.props.card.title}</p>
                    </div>

                    <div className='director'>
                        <p>Director by {this.props.card.director}</p>
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
                                    onClick={(e) => this.handleTrailerBtnClick(e, this.props.card.id)}>
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

function mapStateToProps(state) {
    return {
        trailer: state.trailer
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getTrailer: GetTrailerAction,
        showModal: TrailerModalAction
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);
