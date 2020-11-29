import React, {createRef} from 'react';
import {Link} from 'react-router-dom';
import {filmProps} from '../../props/props';
import PropTypes from 'prop-types';
import {AppRoute} from '../../const';

const VideoPlayer = (props) => {
  const {film} = props;
  const {previewImage} = film;

  const [isPlaying, setIsPlaying] = React.useState(false);

  const videoRef = createRef();
  let delayTimer = null;
  const DELAY_PLAY = 1000;

  const handleVideoHover = React.useCallback(() => {
    delayTimer = setTimeout(() => {
      setIsPlaying(true);
    }, DELAY_PLAY);
  });

  const handleVideoLeave = React.useCallback(() => {
    clearTimeout(delayTimer);
    setIsPlaying(false);
  });

  React.useEffect(() => {
    const video = videoRef.current;
    video.src = props.film.previewVideoLink;

    if (isPlaying) {
      video.play();
    } else {
      video.src = null;
      video.src = props.film.videoLink;
    }

    return () => {
      clearTimeout(delayTimer);
    };
  });

  return (
    <Link to={`${AppRoute.MOVIE_PAGE}/${film.id}`}>
      <video
        ref={videoRef}
        poster={previewImage}
        width={255}
        height={159}
        muted={true}
        onMouseEnter={handleVideoHover}
        onMouseLeave={handleVideoLeave}
      />
    </Link>
  );
};

VideoPlayer.propTypes = {
  film: PropTypes.shape(filmProps).isRequired,
};

export default VideoPlayer;
