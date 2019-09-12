import React, { useState } from "react";
import List from "./List";
import Spinner from "./Spinner";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Paper from "@material-ui/core/Paper";

const Search = ({ getMovies, movies, loading, addToWatch, toWatch }) => {
  const [name, setValues] = useState("");

  const onChange = (e) => {
    setValues(e.target.value);
  };

  const handleOnSubmit = (name) => {
    // e.preventDefault();
    getMovies(name);
    setValues("");
  };

  return (
    <>
      <Paper className='main__searchbar'>
        <form onSubmit={() => handleOnSubmit(name)}>
          <InputBase
            type='search'
            name='search'
            value={name}
            onChange={onChange}
            className='inputBase'
            placeholder='Search Track'
          />
          <IconButton aria-label='Search' style={{ padding: 10 }}>
            <SearchIcon />
          </IconButton>
        </form>
      </Paper>
      {/* <form onSubmit={handleOnSubmit}>
        <input type='search' name='search' value={name} onChange={onChange} />
        <button>Search</button>
      </form> */}

      <div className='spinner'>{loading && <Spinner />}</div>
      <List movies={movies} addToWatch={addToWatch} toWatch={toWatch} />
    </>
  );
};

export default Search;
