import React from "react";
import PropsTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "./Movie.module.css";

// rendering
function Movie({ id, coverImg, title, year }) {
  // props
  return (
    // movie container
    <div className={styled.movie}>
      {/* movie item */}
      <div className={styled.movie_item}>
        <img src={coverImg} alt={title} className={styled.movie_img} />
        <h2 className={styled.movie_title}>
          <Link className={styled.movie_url} to={`/movie/${id}`}>
            {title}
          </Link>
          <span className={styled.movie_year}>{year}</span>
        </h2>
      </div>
      {/* End of movie item */}
    </div>
    // End of movie container
  );
}

// movie props types obj
Movie.propsTypes = {
  id: PropsTypes.number.isRequired,
  coverImg: PropsTypes.string.isRequired,
  title: PropsTypes.string.isRequired,
  year: PropsTypes.number.isRequired,
};

export default Movie;
