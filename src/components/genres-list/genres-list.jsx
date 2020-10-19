import React from 'react';
import {Genres} from '../../const';

const GenresList = (props) => {
  const {activeGenre, onFilterChange} = props;
  const arrGenres = Object.entries(Genres);

  return (
    arrGenres.map((genre, i) => {
      const [genreValue, genreKey] = genre;
      return (
        <li key={i} className={`catalog__genres-item ${activeGenre === genreKey ? `catalog__genres-item--active` : ``}`}>
          <a href="#" className="catalog__genres-link" onClick={(evt) => {
            evt.preventDefault();

            onFilterChange(genreValue);
          }}>{genreKey}</a>
        </li>
      );
    })
  );
};

export default GenresList;

