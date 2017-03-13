export default function(state = false, action){
	switch(action.type){
		case "TRAILER_MODAL":
			return action.payload;
		default:
			return state;
	}
}
