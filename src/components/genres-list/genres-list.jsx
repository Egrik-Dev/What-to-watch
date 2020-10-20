import React from 'react';
import {Genres} from '../../const';

const GenresList = (props) => {
  const {activeGenre, onFilterChange} = props;
  const arrGenres = Object.entries(Genres);

  const onClickHandler = (evt, genreValue) => {
    evt.preventDefault();

    onFilterChange(genreValue);
  };

  return (
    arrGenres.map((genre, i) => {
      const [genreValue, genreKey] = genre;
      return (
        <li key={i} className={`catalog__genres-item ${activeGenre === genreKey ? `catalog__genres-item--active` : ``}`}>
          <a href="#" className="catalog__genres-link" onClick={(evt) => onClickHandler(evt, genreValue)}>{genreKey}</a>
        </li>
      );
    })
  );
};

export default GenresList;

