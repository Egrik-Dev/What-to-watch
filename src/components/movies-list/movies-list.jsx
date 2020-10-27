import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card';

const MoviesList = (props) => {
  const {films, onHoverHandler} = props;

  return (
    <div className="catalog__movies-list">
      {films.map((film, i) =>
        <MovieCard
          key={i}
          film={film}
          onHover={onHoverHandler}
        />)}
    </div>
  );
};

MoviesList.propTypes = {
  films: PropTypes.array.isRequired,
  onHoverHandler: PropTypes.func.isRequired
};

export default MoviesList;
