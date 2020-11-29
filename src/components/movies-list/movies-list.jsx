import React from 'react';
import MovieCard from '../movie-card/movie-card';
import {QuantityFilms} from '../../const';
import {filmsProps} from '../../props/props';

const MoviesList = (props) => {
  const {films} = props;

  const [renderedFilms, setFilms] = React.useState([]);

  React.useEffect(() => {
    setFilms(films.slice(0, QuantityFilms.RENDERED));
  }, [films]);

  const handleShowMoreClick = React.useCallback(() => {
    const moreRenderedFilms = films.slice(renderedFilms.length, (renderedFilms.length + QuantityFilms.RENDERED));
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
            onClick={handleShowMoreClick}
          >
            Show more
          </button>
        </div>
      }
    </>
  );
};

MoviesList.propTypes = filmsProps;

export default MoviesList;
