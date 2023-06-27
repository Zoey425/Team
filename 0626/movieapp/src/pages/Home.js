import React, { useEffect, useState } from "react";
import style from "styles/Home.module.css"
import Movie from "components/movie";

const Home = () => {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)
    .then((response) => response.json())
    .then((json) => {
      setMovies(json.data.movies);
      setLoading(false);
    });
  }, []);

      // console.log(movies);
  return ( 

    <section>
       <h1>Movie Gallery</h1>
        <div className={style.home}>
          {loading ? <p>잠시만 기다려주세요!</p> :
          movies.map((movie) => 
          <Movie 
            key={movie.id}
            id={movie.id}
            medium_cover_image={movie.medium_cover_image}
            title = {movie.title}
            year={movie.year}
            rating={movie.rating}
            genres={movie.genres}
          />
          )}
        </div>
       
    </section>
  );
}

export default Home;

