import React, { useEffect } from "react";
import ItemToWatch from "./ItemToWatch";

const ToWatch = ({ addToWatch, removeFromList, toWatch }) => {
  console.log();
  return (
    <div>
      <h2>{toWatch.length} movies to watch</h2>
      <hr />
      <ul>
        {toWatch.map((movie) => (
          <ItemToWatch
            key={movie.imdbID}
            movie={movie}
            addToWatch={addToWatch}
            removeFromList={removeFromList}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToWatch;
