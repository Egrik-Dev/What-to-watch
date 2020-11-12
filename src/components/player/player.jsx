import React, {createRef} from 'react';
import {Link} from 'react-router-dom';
import {filmsProps} from '../../props/props';
import {QUANTITY_RENDERED_FILMS} from '../../const';

const PlayerScreen = (props) => {
  const {films} = props;

  const activeFilmId = Number(window.location.pathname.substring(QUANTITY_RENDERED_FILMS));
  const fullCardFilm = films.find((film) => film.id === activeFilmId);

  const {previewImage} = fullCardFilm;

  const [isPlaying, setIsPlaying] = React.useState(false);
  const [elapsedTime, setElapsedTime] = React.useState(null);

  const videoRef = createRef();

  const onPlayButtonClick = React.useCallback(() => {
    setIsPlaying(!isPlaying);
  });

  const getFormatedTime = (duration) => {
    const minutes = Math.floor(duration / 60);
    const seconds = Math.round(duration % 60);
    const hours = Math.floor(minutes / 60);
    return (`${hours}:${minutes}:${seconds}`);
  };

  const switchFullScreenMode = React.useCallback(() => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  });

  React.useEffect(() => {
    const video = videoRef.current;
    video.onloadeddata = () => {
      setElapsedTime(video.duration);
    };
  }, []);

  React.useEffect(() => {
    const video = videoRef.current;
    const elapsedTimer = setInterval(() => setElapsedTime(video.duration - video.currentTime), 1000);

    if (isPlaying) {
      video.play();
    } else {
      video.pause();
      clearInterval(elapsedTimer);
    }

    return () => {
      clearInterval(elapsedTimer);
    };
  });

  return (
    <div className="player">
      <video
        ref={videoRef}
        src={fullCardFilm.videoLink}
        className="player__video"
        poster={previewImage}
        preload={`auto`}
      />

      <Link to={`/movies/${fullCardFilm.id}`}>
        <button type="button" className="player__exit">Exit</button>
      </Link>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: `30%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{elapsedTime !== null ? getFormatedTime(elapsedTime) : `Loading`}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={onPlayButtonClick}>
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen" onClick={switchFullScreenMode}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

PlayerScreen.propTypes = filmsProps;

export default PlayerScreen;
