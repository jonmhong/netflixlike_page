import { SET_SEARCH_TERM } from './actions';

DEFAULT_STATE = {
	searchTerm: '',
};

const setSearchTerm = (state, action) => {
	// left merge state and searchTerm into a new object
	return Object.assign({}, state, { searchTerm: action.payload });
};

// this takes in and pass to another reducer, which takes care of the transformation
// root: 1 takes care of default state, 2 needs to handle action
const rootReducer = (state = DEFAULT_STATE, action) => {
	switch(action.type) {
		case SET_SEARCH_TERM:
			return setSearchTerm(state, action);
		default: 
			return state;
	}
};

export default rootReducer;
