import React from 'react';
import PropTypes from 'prop-types';

const GenreItem = (props) => {
  const handleGenreClick = React.useCallback((evt, genreValue, isActiveGenre, onFilterChange) => {
    evt.preventDefault();

    if (!isActiveGenre) {
      onFilterChange(genreValue);
    }
  });

  const {isActiveGenre, genre, onFilterChange} = props;
  const [genreValue, genreKey] = genre;

  return (
    <li className={`catalog__genres-item ${isActiveGenre ? `catalog__genres-item--active` : ``}`}>
      <a href="#" className="catalog__genres-link" onClick={(evt) => handleGenreClick(evt, genreValue, isActiveGenre, onFilterChange)}>{genreKey}</a>
    </li>
  );
};

GenreItem.propTypes = {
  isActiveGenre: PropTypes.bool.isRequired,
  genre: PropTypes.array.isRequired,
  onFilterChange: PropTypes.func.isRequired
};

export default GenreItem;
