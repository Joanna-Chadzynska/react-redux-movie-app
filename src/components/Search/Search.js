import React, { useState } from "react";
import List from "./List";
import Spinner from "./Spinner";

const Search = ({ getMovies, movies, loading, addToWatch, toWatch }) => {
  const [name, setValues] = useState("");

  const onChange = e => {
    setValues(e.target.value);
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    getMovies(e.target.search.value);
    setValues("");
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <input type='search' name='search' value={name} onChange={onChange} />
        <button>Search</button>
      </form>

      <div className='spinner'>{loading && <Spinner />}</div>

      <List movies={movies} addToWatch={addToWatch} toWatch={toWatch} />
    </>
  );
};

export default Search;
