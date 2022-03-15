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
    cover: { 
      "@media (min-width: 780px)": {
      height: '250px',
      width: '180px'
    }
  }
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
        <Grid item className={classes.cover} xs={12} sm={4}  key={item.id} style={{paddingTop: '10px', width:'200%'}}>
          <MovieCover
            key={item.id}
            item={item}
            title={item.l}
             style={{ width: "100%" }} 
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieList;
