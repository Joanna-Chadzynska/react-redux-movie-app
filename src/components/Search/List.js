import React from "react";
import Item from "./Item";
import { useStyles } from "./ListStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const List = ({ movies, addToWatch, removeFromList }) => {
  const classes = useStyles();
  return (
    <div className='list'>
      <CssBaseline />
      <Container className={classes.cardGrid} maxWidth='md'>
        <Grid container spacing={4}>
          {movies.map((movie) => (
            <Item
              movie={movie}
              key={movie.imdbID}
              addToWatch={addToWatch}
              removeFromList={removeFromList}
            />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default List;
