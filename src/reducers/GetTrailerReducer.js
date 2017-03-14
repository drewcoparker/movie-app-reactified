export default function (state='', action) {
    switch(action.type) {
        case 'GET_TRAILER':
            return action.payload;
        default:
            return state;
    }
}
