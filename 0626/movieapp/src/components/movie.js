import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import style from "styles/Home.module.css"


function Movie({id, medium_cover_image, title, year, rating, genres}) {
  return (
    <div>
      <p className={style.wrap_img}>
        <Link to={`/movie/${id}`}><img src={medium_cover_image} alt={title} /></Link>
        
      </p> 
     
      <h4>
      <Link to={`/movie/${id}`}>{title}</Link>
      </h4>
      <p className={style.wrap_span}>
        <span>{year}</span>
        <span>{rating}점</span>
      </p>
      <ul className={style.wrap_ul}>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.prototype = {
  id: PropTypes.number.isRequired,
  medium_cover_image : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired,
  year : PropTypes.string.isRequired,
  rating : PropTypes.string.isRequired,
  genres : PropTypes.string.isRequired,
}

export default Movie;