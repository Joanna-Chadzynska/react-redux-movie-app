import React, { useState, useEffect } from "react";
import { Link, generatePath } from "react-router-dom";
import RatingWidget from "./RatingWidget";
import { useStyles } from "./ListStyles";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import MyLink from "@material-ui/core/Link";

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
          <input
            type='checkbox'
            value={movie.isChecked}
            id={id}
            onChange={(e) => onToggleMovie(e, id)}
          />
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Item;
