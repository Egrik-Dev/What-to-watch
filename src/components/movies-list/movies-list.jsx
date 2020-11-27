import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card';

const MoviesList = (props) => {
  const {films} = props;

  const [renderedFilms, setFilms] = React.useState([]);

  React.useEffect(() => {
    setFilms(films.slice(0, 8));
  }, [films]);

  const onClickShowMoreHandler = React.useCallback(() => {
    const moreRenderedFilms = films.slice(renderedFilms.length, (renderedFilms.length + 8));
    setFilms(renderedFilms.concat(moreRenderedFilms));
  });

  return (
    <>
      <div className="catalog__movies-list">
        {renderedFilms.map((film, i) =>
          <MovieCard
            key={i}
            film={film}
          />)}
      </div>
      {films.length !== renderedFilms.length &&
        <div className="catalog__more">
          <button
            className="catalog__button"
            type="button"
            onClick={onClickShowMoreHandler}
          >
            Show more
          </button>
        </div>
      }
    </>
  );
};

MoviesList.propTypes = {
  films: PropTypes.array.isRequired,
};

export default MoviesList;
