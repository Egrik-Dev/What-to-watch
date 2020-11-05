import React from 'react';
import PropTypes from 'prop-types';
import {filmProps} from '../../props/props';

const OverviewTab = (props) => {
  const {film} = props;
  const STARRING_QUANTITY = 4;

  const rateMovie = (rating) => {
    if (rating >= 0 && rating <= 3) {
      return `Bad`;
    } else if (rating > 3 && rating <= 5) {
      return `Normal`;
    } else if (rating > 5 && rating <= 8) {
      return `Good`;
    } else if (rating > 8 && rating < 10) {
      return `Very good`;
    } else if (rating === 10) {
      return `Awesome`;
    }

    let ratingError = new Error(`Incorrect rating provided`);
    throw ratingError;
  };

  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{film.rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{rateMovie(film.rating)}</span>
          <span className="movie-rating__count">{film.scoresCount}</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{film.description}</p>

        <p className="movie-card__director"><strong>Director: {film.director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {film.starring.slice(0, 4).join(`, `)} {film.starring.length > STARRING_QUANTITY ? `and other` : ``}</strong></p>
      </div>
    </React.Fragment>
  );
};

OverviewTab.propTypes = {
  film: PropTypes.shape(filmProps),
};

export default OverviewTab;
