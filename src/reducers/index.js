import { combineReducers } from 'redux';
import GetMoviesReducer from './GetMoviesReducer';
import SetPageReducer from './SetPageReducer';
import TrailerModalReducer from './TrailerModalReducer';
import GetTrailerReducer from './GetTrailerReducer';
import SetApiUrlReducer from './SetApiUrlReducer'

// The master reducer. All actions flow through the master reducer which then
// returns a new version of the state tree, aka, the store.
const masterReducer = combineReducers({
    apiResults: GetMoviesReducer,
    page: SetPageReducer,
    showModal: TrailerModalReducer,
    trailer: GetTrailerReducer,
    apiUrl: SetApiUrlReducer
});

export default masterReducer;
