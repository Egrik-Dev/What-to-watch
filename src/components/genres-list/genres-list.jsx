import React from 'react';
import PropTypes from 'prop-types';
import {Genres} from '../../const';
import GenreItem from '../genre-item/genre-item';

const GenresList = (props) => {
  const {activeGenre, onFilterChange} = props;
  const arrGenres = Object.entries(Genres);

  return (
    <ul className="catalog__genres-list">
      {arrGenres.map((genre, i) => (
        <GenreItem
          key={i}
          isActiveGenre={activeGenre === genre[0]}
          onFilterChange={onFilterChange}
          genre={genre}
        />
      ))}
    </ul>
  );
};

GenresList.propTypes = {
  activeGenre: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired
};

export default GenresList;

