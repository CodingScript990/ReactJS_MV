import React, { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

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
      await fetch(`https://yts.mx/api/v2/list_movies.json?limit=20`)
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
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>R.MX</h1>
      </div>
      <div className={styles.movies}>
        <span>영화 : {movies.length}</span>
      </div>
      {loading ? (
        <div className={styles.loader}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <div className={styles.movies}>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
