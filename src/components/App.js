import React, { Component } from 'react';
import Header from './Header';


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
        this.setState({
            searchText: searchTextFromChild
        });
        this.props.router.push('/search/' + encodeURI(searchTextFromChild));
    }

    render() {
        return (
            <div className='app-wrapper'>
                <Header functionFromParent={this.handleSearch}/>
                {this.props.children}
            </div>
        );
    }
}

export default App;
