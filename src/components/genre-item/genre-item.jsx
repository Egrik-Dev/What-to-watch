import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class GenreItem extends PureComponent {
  constructor(props) {
    super(props);
  }

  onClickHandler(evt, genreValue, isActiveGenre, onFilterChange) {
    evt.preventDefault();

    if (!isActiveGenre) {
      onFilterChange(genreValue);
    }
  }

  render() {
    const {isActiveGenre, genre, onFilterChange} = this.props;
    const [genreValue, genreKey] = genre;

    return (
      <li className={`catalog__genres-item ${isActiveGenre ? `catalog__genres-item--active` : ``}`}>
        <a href="#" className="catalog__genres-link" onClick={(evt) => this.onClickHandler(evt, genreValue, isActiveGenre, onFilterChange)}>{genreKey}</a>
      </li>
    );
  }
}

GenreItem.propTypes = {
  isActiveGenre: PropTypes.bool.isRequired,
  genre: PropTypes.array.isRequired,
  onFilterChange: PropTypes.func.isRequired
};

export default GenreItem;
