import MovieDetails from "./MovieDetails";
import { Grid } from "@mui/material";
import MovieCover from "./MovieCover";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  wrapper: {
    "@media (min-width: 425px)": {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
      width: "100%",
      height: "100%",
    },
  },
});

const DetailsScreen = () => {
  const classes = useStyles();
  const showScreen = useSelector((state) => state.moviesInfo);
  const movies = showScreen[0];
  return (
    <>
      <MovieDetails />
      <div>
        <p>More movies like this:</p>
        <Grid container className={classes.wrapper}>
          {movies?.map((item) => (
            <Grid
              item
              xs={4}
              sm={2.2}
              md={1}
              style={{ paddingTop: "10px" }}
              key={item.id}
              spacing={1}
            >
              <MovieCover key={item.id} item={item} title={item.l} style={{padding:'5px'}}/>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default DetailsScreen;
