import React from 'react';
import {Link} from 'react-router-dom';
import {filmProps} from '../../props/props';
import PropTypes from 'prop-types';

const VideoPlayer = (props) => {
  const {film, children} = props;

  return (
    <Link to={`/movies/${film.id}`}>
      {children}
    </Link>
  );
};

VideoPlayer.propTypes = {
  film: PropTypes.shape(filmProps).isRequired,
  children: PropTypes.element.isRequired
};

export default VideoPlayer;
