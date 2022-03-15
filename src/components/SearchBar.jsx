import React, { useEffect } from "react";
import axios from "axios";
import MovieIcon from "@mui/icons-material/Movie";
import { TextField, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import { searchMovie } from "../actions/searchActions";
import { connect } from "react-redux";
import { moviesInfo } from "../actions/moviesInfoAction";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  button: {
    color: "white",
    height: 48,
    margin: "10px",
    float: "right",
  },
  textField: {
    float: "right",
    width: "30%",
    margin: "10px",
  },
  header: {
    marginBottom: "50px",
  },
});

const SearchBar = (props) => {
  const KEY = process.env.REACT_APP_API_KEY;
  const classes = useStyles();
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();

  const searchQuery = params.get("search");

  const dispatch = useDispatch();
  const searchMovies = () => {
    navigate(`/?search=${props.text}`);
  };

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://imdb8.p.rapidapi.com/auto-complete",
      params: { q: searchQuery || props.text },
      headers: {
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
        "x-rapidapi-key": KEY,
      },
    };
    axios
      .request(options)
      .then(function (response) {
        dispatch(moviesInfo(response.data.d));
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [searchQuery]);

  return (
    <div className={classes.header}>
      <Link to="/" style={{ color: "black" }}>
        <MovieIcon />
      </Link>
      <Button
        className={classes.button}
        variant="contained"
        onClick={searchMovies}
      >
        Search
      </Button>
      <TextField
        className={classes.textField}
        onChange={(e) => dispatch(searchMovie(e.target.value))}
      ></TextField>
    </div>
  );
};

const mapStateToProps = (state) => ({
  text: state.movies.text,
  movieInfo: state.movies.newItem,
});

export default connect(mapStateToProps, { searchMovie, moviesInfo })(SearchBar);
