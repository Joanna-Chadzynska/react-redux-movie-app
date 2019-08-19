import React from "react";
import Item from "./Item";
const List = ({ movies, addToWatch, toWatch }) => {
  return (
    <ul className='list'>
      {movies.map(movie => (
        <Item
          movie={movie}
          key={movie.imdbID}
          addToWatch={addToWatch}
          toWatch={toWatch}
        />
      ))}
    </ul>
  );
};

export default List;
