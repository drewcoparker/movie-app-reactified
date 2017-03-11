import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

// Components
import App from './components/App';
import Home from './components/Home';
import SingleMovie from './components/SingleMovie';
import SearchResults from './components/SearchResults';

// CSS
import '../public/css/styles.css';

// Create the redux store. Pass it the reducers and react-router-redux middleware.
// import { reducers } from
// const store = createStore({
//     reducers,
//
// })

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path='movie/:id' component={SingleMovie} />
            {/* <Route path='search/:movieToSearchFor' component={SearchResults} /> */}
        </Route>
    </Router>,

    document.getElementById('root')
);
