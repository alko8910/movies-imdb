import React from "react";
import MovieCover from "./MovieCover";
import { useSelector, useDispatch } from "react-redux";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  wrapper: {
    "@media (min-width: 780px)": {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
      width: "100%",
      height: "100%",
    },
  },
});

const MovieList = () => {
  const classes = useStyles();

  const showScreen = useSelector((state) => state.moviesInfo);
  const dispatch = useDispatch();
  const movies = showScreen[0];

  return (
    <Grid
      container
      className={classes.wrapper}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      {movies?.map((item) => (
        <Grid item xs={12} sm={4} key={item.id} style={{paddingTop: '10px'}}>
          <MovieCover
            key={item.id}
            item={item}
            title={item.l}
            style={{ width: "200px" }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieList;
