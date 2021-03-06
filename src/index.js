import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
// import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

// Components
import App from './components/App';
import Home from './components/Home';
import SingleMovie from './components/SingleMovie';
// import SearchResults from './components/SearchResults';

// CSS
import '../public/css/styles.css';

// Create the redux store. Pass it the reducers and the middleware.
import reducers from './reducers/index.js';
import reduxPromise from 'redux-promise';
const initializedState = {page: 1};
const store = createStore(
    reducers,
    initializedState,
    applyMiddleware(
        reduxPromise
    )
);

store.subscribe(() => {
    // console.log(store.getState());
});


ReactDOM.render(
    <Provider store={store} >
        <Router history={browserHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={Home} />
                <Route path='movie/:id' component={SingleMovie} />
                {/* <Route path='search/:movieToSearchFor' component={SearchResults} /> */}
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
