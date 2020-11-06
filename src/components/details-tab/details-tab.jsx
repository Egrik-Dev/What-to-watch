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
        <div className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <ul className="movie-card__details-value" style={
            {
              padding: `0`,
              margin: `0`,
              color: `#131313`
            }
          }>
            {starring.map((actor, i, arr) => (
              <li key={i} style={{listStyle: `none`}}>
                {(arr.length - 1 === i) ? `${actor}` : `${actor},`}
              </li>
            )
            )}
          </ul>
        </div>
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


