import React from "react";

const MovieDesc = ({ year, director, plot, actors, genre }) => {
  return (
    <div className='details-box-desc'>
      <div className='description'>
        <p>
          Genre: <strong>{genre}</strong>
        </p>
        <p>
          Year: <strong>{year}</strong>
        </p>
        <p>
          Director: <strong>{director}</strong>
        </p>
        <p>
          Actors: <strong>{actors}</strong>
        </p>
      </div>
      <p className='plot'>{plot}</p>
    </div>
  );
};

export default MovieDesc;
