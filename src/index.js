import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './App';
import Home from './Home';
import SingleMovie from './SingleMovie';

// CSS
import './css/index.css';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path='movie/:id' component={SingleMovie} />
            <Route path='upComing' component={Home} />
            <Route path='topRated' component={Home} />
        </Route>
    </Router>,

    document.getElementById('root')
);
