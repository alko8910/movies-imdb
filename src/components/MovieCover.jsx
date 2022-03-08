import React from "react";
import Card from "@mui/material/Card";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const MovieCover = ({ title, item }) => {
  const showScreen = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      <Card style={{ height: "250px", width: "150px" }}>
        <Link to={`/movie/${item.id}`}>
          <img
            src={item.i.imageUrl}
            style={{ height: "150px", width: "200px" }}
            alt="Movie Cover Image"
          ></img>
          <h4>{title}</h4>
        </Link>
      </Card>
    </>
  );
};

export default MovieCover;
