import React, { Component } from 'react';
import Navbar from './Navbar';


// CSS
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';

class App extends Component {

    render() {
        return (
            <div>
                <Navbar />
                {this.props.children}
            </div>
        );
    }
}

export default App;
