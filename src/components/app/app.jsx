import React from "react";
import PropTypes from 'prop-types';
import Main from '../main/main';

const App = (props) => {
  const {titleMovie, genreMovie, releaseMovie} = props;

  return (
    <Main
      titleMovie={titleMovie}
      genreMovie={genreMovie}
      releaseMovie={releaseMovie}
    />
  );
};

App.propTypes = {
  titleMovie: PropTypes.string.isRequired,
  genreMovie: PropTypes.string.isRequired,
  releaseMovie: PropTypes.number.isRequired
};

export default App;
