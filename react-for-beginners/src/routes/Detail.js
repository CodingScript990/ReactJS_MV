import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

// router /Detail
function Detail() {
  // params value(x)
  const { id } = useParams();
  // getMovie async json api
  const getMovie = async () => {
    // json response api
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
  };
  // useEffect movie detail api(response)
  useEffect(() => {
    // call getMovie api
    getMovie();
  }, []);
  return <h1>Detail</h1>;
}

export default Detail;
