import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import styles from "./Home.module.css";

// router /Home
function Home() {
  // movie url
  const movies_url = "http://localhost:3000/ReactJS_MV";
  // Loding State value
  const [loading, setLoading] = useState(true);
  // movies State value
  const [movies, setMovies] = useState([]);
  // search State value
  const [search, setSearch] = useState("");
  // get movie response(movie api) async
  const getMovies = async () => {
    // response api(movie.json)
    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?limit=40`)
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
        <h1>
          <a href={movies_url}>R.MX</a>
        </h1>
      </div>
      <div className={styles.movies_info}>
        <a href={movies_url} className={styles.movies_view}>
          영화
        </a>
        <input
          type="search"
          placeholder="searching.."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {loading ? (
        <div className={styles.loader}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <div className={styles.movies}>
          {movies
            // eslint-disable-next-line array-callback-return
            .filter((movie) => {
              // null 이면 movie info(All)
              if (search === "") {
                return movie;
              }
              // searching일때 movie info
              if (
                movie.title.toLowerCase().includes(search.toLocaleLowerCase())
              ) {
                return movie;
              }
            })
            .map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                year={movie.year}
              />
            ))}
        </div>
      )}
    </div>
  );
}

export default Home;
