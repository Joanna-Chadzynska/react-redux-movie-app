import React, { useState, useEffect } from "react";
import { Link, generatePath } from "react-router-dom";
import RatingWidget from "./RatingWidget";

const Item = ({
  addToWatch,
  toWatch,
  movie: { Poster: poster, Title: title, imdbID: id, Year: year }
}) => {
  const initState = {
    isChecked: false
  };

  const [movie, setMovies] = useState(initState);

  const onToggleMovie = (e, id) => {
    const value = e.target.checked;

    // addToWatch(id);

    if (value) {
      setMovies(addToWatch(id));
    } else {
      return movie;
    }
  };

  return (
    <li key={id} className='movie-item'>
      <div className='item-description'>
        <h3>{title}</h3>
        <p>Year {year}</p>
      </div>

      <img src={poster} alt={title} />
      <form className='rate'>
        <RatingWidget />
        <input
          type='checkbox'
          value={movie.isChecked}
          id={id}
          onChange={e => onToggleMovie(e, id)}
        />
      </form>

      <Link to={generatePath("/details/:id", { id })}>Details</Link>
    </li>
  );
};

export default Item;
