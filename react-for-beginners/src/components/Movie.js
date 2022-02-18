import React from "react";
import PropsTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.moudle.css";

// rendering
function Movie({ id, coverImg, title, year, summary, genres }) {
  // props
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt={title} className={styles.movie_img} />
      <div>
        <h2 className={styles.movie_title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <h3 className={styles.movie_year}>{year}</h3>
      </div>
      <p>{summary.length > 120 ? `${summary.slice(0, 120)}...` : summary}</p>
      <ul className={styles.movie_genres}>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

// movie props types obj
Movie.propsTypes = {
  id: PropsTypes.number.isRequired,
  coverImg: PropsTypes.string.isRequired,
  title: PropsTypes.string.isRequired,
  summary: PropsTypes.string.isRequired,
  genres: PropsTypes.arrayOf(PropsTypes.string).isRequired,
};

export default Movie;
