import React from "react";
import Card from "@mui/material/Card";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import image from '../images/image.png'
const MovieCover = ({ title, item }) => {
  const showScreen = useSelector((state) => state);
  const dispatch = useDispatch();
console.log(item.i)
  return (
    <>
      <Card style={{ height: "250px", width: "150px" }}>
        <Link to={`/movie/${item.id}`}>
          {item.i ? (
              <img
              src={item.i.imageUrl }
              style={{ height: "150px", width: "200px" }}
              alt="Movie Cover Image"
            /> ) : (
              <img
              src={image }
              style={{ height: "150px", width: "150px" }}
              alt="Movie Cover Image" />
            )

          }
         
          <h4>{title}</h4>
        </Link>
      </Card>
    </>
  );
};

export default MovieCover;
