import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './App';
import Home from './Home';
import SingleMovie from './SingleMovie';
import SearchResults from './SearchResults';

// CSS
import './css/styles.css';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path='movie/:id' component={SingleMovie} />
            {/* <Route path='search/:movieToSearchFor' component={SearchResults} /> */}
        </Route>
    </Router>,

    document.getElementById('root')
);
