import React from "react";
import PropsTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "./Movie.module.css";

// rendering
function Movie({ id, coverImg, title, year, summary, genres }) {
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
        </h2>
        <h3 className={styled.movie_year}>{year}</h3>
      </div>
      {/* End of movie item */}

      {/* movie decoration */}
      <div className={styled.movie_decoration}>
        <p>{summary.length > 120 ? `${summary.slice(0, 120)}...` : summary}</p>
        <ul className={styled.movie_genres}>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
      {/* End of movie decoration */}
    </div>
    // End of movie container
  );
}

// movie props types obj
Movie.propsTypes = {
  id: PropsTypes.number.isRequired,
  coverImg: PropsTypes.string.isRequired,
  title: PropsTypes.string.isRequired,
  summary: PropsTypes.string.isRequired,
  year: PropsTypes.number.isRequired,
  genres: PropsTypes.arrayOf(PropsTypes.string).isRequired,
};

export default Movie;
