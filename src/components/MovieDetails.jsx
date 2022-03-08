import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { makeStyles } from "@mui/styles";
import Header from "./Header";
import { Grid } from "@mui/material";
import image from "../images/image.png";

const useStyles = makeStyles({
  div: {
    marginTop: "15px",
    borderBottom: "1px solid red",
  },
});

const MovieDetails = () => {
  const KEY = process.env.REACT_APP_API_KEY;
  const classes = useStyles();
  const params = useParams();

  const [movieInfo, setMovieInfo] = useState(null);

  useEffect(() => {
    var options = {
      method: "GET",
      url: "https://imdb8.p.rapidapi.com/title/get-overview-details",
      params: { tconst: params.id, currentCountry: "US" },
      headers: {
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
        "x-rapidapi-key": KEY,
      },
    };

    axios
      .request(options)
      .then((res) => setMovieInfo(res.data))
      .catch(console.error);

    return () => setMovieInfo(null);
  }, [params.id]);
  console.log("params", params.id);

  return (
    movieInfo && (
      <>
        <Header />
        <Grid container>
          <Grid item>
            {movieInfo.title.image ? (
              <img
                src={movieInfo.title.image.url}
                style={{
                  width: "400px",
                  marginRight: "25px",
                  maxHeight: "400px",
                }}
              />
            ) : (
              <img
                src={image}
                style={{
                  width: "400px",
                  marginRight: "25px",
                  maxHeight: "400px",
                }}
              />
            )}
          </Grid>
          <Grid>
            <div className={classes.div}>
              Rating: {movieInfo.ratings.rating}
            </div>
            <div className={classes.div}>
              Top Rank: {movieInfo.ratings.topRank}
            </div>
            <div className={classes.div}>Genre: {movieInfo.genres[0]}</div>
            <div className={classes.div}>Released: {movieInfo.releaseDate}</div>
          </Grid>
        </Grid>
      </>
    )
  );
};

export default MovieDetails;
