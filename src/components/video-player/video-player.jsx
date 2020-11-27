import React, {createRef} from 'react';
import {Link} from 'react-router-dom';
import {filmProps} from '../../props/props';
import PropTypes from 'prop-types';

const VideoPlayer = (props) => {
  const {film} = props;
  const {previewImage} = film;

  const [isPlaying, setIsPlaying] = React.useState(false);

  const videoRef = createRef();
  let delayTimer = null;
  const DELAY_PLAY = 1000;

  const onHoverVideo = React.useCallback(() => {
    delayTimer = setTimeout(() => {
      setIsPlaying(true);
    }, DELAY_PLAY);
  });

  const onLeaveVideo = React.useCallback(() => {
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
    <Link to={`/movies/${film.id}`}>
      <video
        ref={videoRef}
        poster={previewImage}
        width={255}
        height={159}
        muted={true}
        onMouseEnter={onHoverVideo}
        onMouseLeave={onLeaveVideo}
      />
    </Link>
  );
};

VideoPlayer.propTypes = {
  film: PropTypes.shape(filmProps).isRequired,
};

export default VideoPlayer;
