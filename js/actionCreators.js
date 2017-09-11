import SET_SEARCH_TERM from './actions';

export function setSearchTerm(searchTerm) {
	return { type: setSearchTerm, payload: searchTerm };
}