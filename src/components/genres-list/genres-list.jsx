import React from 'react';
import PropTypes from 'prop-types';
import {arrGenres} from '../../const';
import GenreItem from '../genre-item/genre-item';

const GenresList = (props) => {
  const {activeGenre, onFilterChange} = props;

  return (
    <ul className="catalog__genres-list">
      {arrGenres.map((genre, i) => (
        <GenreItem
          key={i}
          isActiveGenre={activeGenre === genre[1]}
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

