import React, { useEffect, useState } from "react";
import Movie from "../components/Movie";

// router /Home
function Home() {
  // Loding State value
  const [loading, setLoading] = useState(true);
  // movies State value
  const [movies, setMovies] = useState([]);
  // get movie response(movie api) async
  const getMovies = async () => {
    // response api(movie.json)
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?limit=20&genre=action`
      )
    ).json();
    // json type api moviList(info)
    setMovies(json.data.movies);
    setLoading(false);
  };
  // movie API response(useEffect)
  useEffect(() => {
    // response api callback
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loding...</h1>
      ) : (
        <div>
          <div>영화 : ({movies.length})</div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
      {/* <Test /> */}
      {/* <ToDoList /> */}
      {/* <Loading /> */}
    </div>
  );
}

export default Home;
