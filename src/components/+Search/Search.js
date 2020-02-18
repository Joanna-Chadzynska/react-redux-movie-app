import React from "react";
import { connect } from "react-redux";
import { getMovies } from "../../duck/movies/actions";
import Movies from "./Movies";

const Search = ({ getMovies, movies }) => {
	const callSearchFunction = (e) => {
		e.preventDefault();
		getMovies(e.target.search.value);
		e.target.search.value = "";
	};

	return (
		<>
			<form className='search' onSubmit={callSearchFunction}>
				<input type='search' name='search' />
				<button>Search</button>
			</form>
			<Movies />
		</>
	);
};

const mapDispatch = (dispatch) => ({
	getMovies: (query, type) => dispatch(getMovies(query, type))
});

export default connect(null, mapDispatch)(Search);
