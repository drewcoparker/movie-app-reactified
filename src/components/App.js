import React, {Component} from 'react';
import Home from './Home';
import TrailerModal from './TrailerModal.js'

// CSS
import '../../public/css/styles.css';

class App extends Component {

    render() {
        return (
            <div>
                <Home />
                <TrailerModal />
            </div>
        );
    }
}

export default App;
