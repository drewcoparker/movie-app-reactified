import { combineReducers } from 'redux';
import GetMoviesReducer from './GetMoviesReducer';
import SetPageReducer from './SetPageReducer';

// The master reducer. All actions flow through the master reducer which then
// returns a new version of the state tree, aka, the store.
const masterReducer = combineReducers({
    movies: GetMoviesReducer,
    page: SetPageReducer
});

export default masterReducer;
