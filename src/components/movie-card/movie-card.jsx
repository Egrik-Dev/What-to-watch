import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {filmProps} from '../../props/props';
import VideoPlayer from '../video-player/video-player';

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
        <VideoPlayer
          film={film}
        />
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
