import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

// router /Detail
function Detail() {
  // params value(id)
  const { id } = useParams();
  // deatil value
  const [info, setInfo] = useState([]);
  // Home url
  const home_url = "http://localhost:3000/ReactJS_MV";
  // getMovie async json api
  const getMovie = async () => {
    // json response api
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setInfo(json.data.movie);
  };
  // useEffect movie detail api(response)
  useEffect(() => {
    // call getMovie api
    getMovie();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>
          <a href={home_url}>R.MX</a>
        </h1>
      </div>
      <div className={styles.info}>
        <div className={styles.info_img}>
          <img src={info.medium_cover_image} alt={info.title} />
        </div>
        <h2>{info.title_long}</h2>
        <p>{info.description_intro}</p>
        <span>{info.rating}</span>
      </div>
    </div>
  );
}

export default Detail;
