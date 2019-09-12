import React from "react";
import { Link, generatePath } from "react-router-dom";

const ItemToWatch = ({
  movie: { Title: title, Year: year, imdbID: id, Type: type, Poster: poster }
}) => {
  return (
    <div>
      <h3>
        <Link to={generatePath("/details/:id", { id })}>{title}</Link>
      </h3>
      <span>{year}</span>
      <p>{type}</p>
      <img src={poster} alt='' />
    </div>
  );
};

export default ItemToWatch;
