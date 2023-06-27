import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import style from "styles/Home.module.css"

const Detail = () => {

  const {id} = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  
  
  const getMovie = async () => {
    const json = await (
    await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovies(json.data.movie);
    setLoading(false);
  };

  useEffect(()=>{
    getMovie()
  }, [])


  const history = useHistory();
  return (
    <div>
    {loading ? (
      <p>잠시만 기다려주세요!</p>
    ) : (

      <div className={style.movie_info}>
        <p>
          <img src={movies.large_cover_image} alt="coverImg" />
        </p>
        <div className={style.movie_content}>
          <h3>{movies.title}</h3>
          <ul>
            {movies.genres.map((genres) => (
              <li key={genres}>{genres}</li>
            ))}
          </ul>
          <p>{movies.description_full}</p>
          <button onClick={() => history.goBack()}>뒤로가기</button>
        </div>
      </div>
     

    )}
  </div>
  );
}

export default Detail;