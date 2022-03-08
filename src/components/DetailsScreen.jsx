import MovieDetails from "./MovieDetails";
import { Grid } from "@mui/material";
import MovieCover from "./MovieCover";
import { useSelector, useDispatch } from "react-redux";


const DetailsScreen = () => {
  const showScreen = useSelector((state) => state.moviesInfo);
  const movies = showScreen[0];
  return (
    <>
      <MovieDetails />
      <div>
        <p>More movies like this:</p>
        <Grid container spacing={2}>
        {movies?.map((item) => (
        <Grid item xs={4} sm={3} md={1}  >
          <MovieCover key={item.id} item={item} title={item.l} />
        </Grid>
      ))}
        </Grid>
        
      </div>
    </>
  );
};

export default DetailsScreen;
