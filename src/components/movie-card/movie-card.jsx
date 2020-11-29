import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {filmProps} from '../../props/props';
import VideoPlayer from '../video-player/video-player';
import {AppRoute} from '../../const';

const MovieCard = (props) => {
  const {film} = props;

  return (
    <article
      className="small-movie-card catalog__movies-card"
    >
      <VideoPlayer
        film={film}
      />
      <h3 className="small-movie-card__title">
        <Link
          className="small-movie-card__link"
          to={`${AppRoute.MOVIE_PAGE}/${film.id}`}
        >
          {film.name}
        </Link>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  film: PropTypes.shape(filmProps).isRequired,
};

export default MovieCard;
