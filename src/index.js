import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './App';
import Home from './Home';
import SingleMovie from './SingleMovie';

// CSS
import './css/index.css';

render(
    <Router history={hashHistory}>
        <Route path='/' component={App} />
            <IndexRoute component={Home} />
            <Route path='movie/:id' component={SingleMovie} />
    </Router>,

    document.getElementById('root')
);
