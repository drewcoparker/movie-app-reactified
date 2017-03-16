import React, {Component} from 'react';
import Header from './Header';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
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
            <div className='app-wrapper'>
                <Header functionFromParent={this.handleSearch}/>
                {this.props.children}
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
