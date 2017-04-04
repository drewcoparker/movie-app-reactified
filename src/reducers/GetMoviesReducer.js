
const INITIAL_STATE = { page: 1, movies: [] };

export default function (state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'GET_MOVIES':
            return action.payload
        default:
            return state;
    }
}
