import React from 'react';
import PropTypes from 'prop-types';
import {filmProps} from '../../props/props';
import {formattingRuntime} from '../../utils';

const DetailsTab = (props) => {
  const {film} = props;
  const {starring} = film;
  const runTime = formattingRuntime(film.runTime);

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{film.director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">
            {starring.map((actor, i, arr) => (
              <React.Fragment key={i}>
                {(arr.length - 1 === i) ? `${actor}` : `${actor},`}
                <br />
              </React.Fragment>)
            )}
          </span>
        </p>
      </div>
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{runTime}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{film.genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{film.released}</span>
        </p>
      </div>
    </div>
  );
};

DetailsTab.propTypes = {
  film: PropTypes.shape(filmProps),
};

export default DetailsTab;


