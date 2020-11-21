import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card';
import ShowMore from '../show-more/show-more';

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
          <ShowMore
            onClickShowMoreHandler={onClickShowMoreHandler}
          />
      }
    </>
  );
};

MoviesList.propTypes = {
  films: PropTypes.array.isRequired,
};

export default MoviesList;
