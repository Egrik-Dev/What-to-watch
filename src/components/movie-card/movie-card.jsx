import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {filmProps} from '../../props/props';
import VideoPlayer from '../video-player/video-player';
import withVideoPlayer from '../../hocks/with-video-player/with-video-player';

const VideoPlayerWrapped = withVideoPlayer(VideoPlayer);

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {film, onHover} = this.props;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={() => {
          onHover(film);
        }}
      >
        <VideoPlayerWrapped
          film={film}
        />
        <h3 className="small-movie-card__title">
          <Link
            className="small-movie-card__link"
            to={`/movies/${film.id}`}
          >
            {film.name}
          </Link>
        </h3>
      </article>
    );
  }
}

MovieCard.propTypes = {
  film: PropTypes.shape(filmProps).isRequired,
  onHover: PropTypes.func.isRequired
};

export default MovieCard;
