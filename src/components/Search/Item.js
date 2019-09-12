import React, { useState } from "react";
import { Link, generatePath } from "react-router-dom";
import RatingWidget from "./RatingWidget";
import { useStyles } from "./ListStyles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Delete, Movie } from "@material-ui/icons";

const Item = ({
  addToWatch,
  movie,
  removeFromList,
  movie: { Poster: poster, Title: title, imdbID: id, Year: year }
}) => {
  // const [movieItem, setMoviesCheck] = useState(false);
  // const handleChecked = (e) => {
  //   setMoviesCheck(!movieItem);
  //   if (!movieItem) {
  //     addToWatch(movie);
  //   } else {
  //     removeFromList(movie);
  //   }
  // };

  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia className={classes.cardMedia} image={poster} title={title} />

        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant='h5' component='h2'>
            <Link to={generatePath("/details/:id", { id })}>{title}</Link>
          </Typography>
          <Typography>{year}</Typography>
        </CardContent>

        <CardActions>
          <RatingWidget />
          <Button onClick={() => addToWatch(movie)}>
            <Movie></Movie>
          </Button>
          <Button onClick={() => removeFromList(movie)}>
            <Delete></Delete>
          </Button>
          {/* <label>Add to watch</label>
          <input
            type='checkbox'
            checked={movieItem}
            id={id}
            onChange={handleChecked}
          /> */}
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Item;
