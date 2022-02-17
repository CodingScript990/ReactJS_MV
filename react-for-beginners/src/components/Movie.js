import React from "react";
import PropsTypes from "prop-types";

// rendering
function Movie({ coverImg, title, summary, genres }) {
  // props
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>영화제목 : {title}</h2>
      <p>영화 줄거리 : {summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>장르 : {g}</li>
        ))}
      </ul>
    </div>
  );
}

// movie props types obj
Movie.propsTypes = {
  coverImg: PropsTypes.string.isRequired,
  title: PropsTypes.string.isRequired,
  summary: PropsTypes.string.isRequired,
  genres: PropsTypes.arrayOf(PropsTypes.string).isRequired,
};

export default Movie;
