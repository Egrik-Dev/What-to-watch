import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {filmProps} from '../../props/props';

const MovieCard = (props) => {
  const {film, onHover} = props;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => {
        onHover(film);
      }}
    >
      <Link to="/movies/1">
        <div className="small-movie-card__image">
          <img src={film.img} alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
        </div>
      </Link>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{film.title}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  film: PropTypes.shape(filmProps).isRequired,
  onHover: PropTypes.func.isRequired
};

export default MovieCard;
