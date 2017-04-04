import React, {Component} from 'react';
import Home from './Home';
import { connect } from 'react-redux';
import TrailerModal from './TrailerModal.js'

// CSS
import '../../public/css/styles.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchText: ''
        }
        this.handleSearch = this.handleSearch.bind(this)
    }

    handleSearch(searchTextFromChild) {
        this.setState({searchText: searchTextFromChild});
        this.props.router.push('/search/' + encodeURI(searchTextFromChild));
    }

    render() {
        return (
            <div>
                <Home />
                <TrailerModal shown={this.props.showModal} trailer={this.props.trailer}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        showModal: state.showModal,
        trailer: state.trailer
    }
}

export default connect(mapStateToProps, null)(App);
