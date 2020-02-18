import { searchMoviesTypes } from "./actionTypes";

const initState = {
	loading: false,
	movies: [],
	errorMessage: null
};

const movies = (state = initState, { type, payload, error }) => {
	switch (type) {
		case searchMoviesTypes.SEARCH_MOVIES_REQUEST:
			return {
				...state,
				loading: true,
				errorMessage: null
			};

		case searchMoviesTypes.SEARCH_MOVIES_SUCCESS:
			return {
				...state,
				loading: false,
				errorMessage: null,
				movies: payload
			};

		case searchMoviesTypes.SEARCH_MOVIES_FAILURE:
			return {
				...state,
				loading: false,
				errorMessage: error
			};

		default:
			return state;
	}
};

export default movies;
