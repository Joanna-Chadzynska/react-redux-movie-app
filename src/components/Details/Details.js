import React, { useEffect } from "react";
import MovieDesc from "./MovieDesc";
import RatingWidget from "../Search/RatingWidget";

const Details = ({
  getDetails,
  id,
  detail: {
    details: {
      Title: title,
      Year: year,
      Director: director,
      Plot: plot,
      Poster: poster,
      Actors: actors,
      Genre: genre
    }
  }
}) => {
  useEffect(() => {
    getDetails(id);
  }, [getDetails, id]);

  return (
    <>
      <div className='details'>
        <h1>{title}</h1>
        <div className='details-box'>
          <img src={poster} alt={title} />
          <MovieDesc
            year={year}
            plot={plot}
            director={director}
            actors={actors}
            genre={genre}
          />
        </div>
        <RatingWidget className='rating-widget' />
      </div>
      {/* <div className='simmillar'>
        <h2>Podobne</h2>
      </div> */}
    </>
  );
};

export default Details;
