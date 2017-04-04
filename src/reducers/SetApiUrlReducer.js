import Constants from '../Constants';
import config from '../config';

const INITIAL_STATE = `${Constants.baseUrl}/movie/now_playing?${config.apiKey}&page=`;

export default function(state = INITIAL_STATE, action){
	switch(action.type){
		case "SET_URL":
			return action.payload;
		default:
			return state;
	}
}
