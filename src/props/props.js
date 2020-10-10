import PropTypes from 'prop-types';

export const filmsProps = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    releaseDate: PropTypes.number.isRequired,
    rating: PropTypes.string.isRequired,
    quantityRatings: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    runTime: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    bgSrc: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired,
    reviews: PropTypes.arrayOf(PropTypes.shape({
      author: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired,
      rating: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    }))
  })).isRequired
};

export const filmProps = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  releaseDate: PropTypes.number.isRequired,
  rating: PropTypes.string.isRequired,
  quantityRatings: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  actors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  runTime: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  bgSrc: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }))
};

// export default filmsProps;
