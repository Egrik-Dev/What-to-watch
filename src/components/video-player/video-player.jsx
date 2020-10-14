import React, {createRef, PureComponent} from 'react';
import {filmProps} from '../../props/props';
import PropTypes from 'prop-types';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false
    };

    this._videoRef = createRef();

    this.onHoverVideo = this._onHoverVideo.bind(this);
    this.onLeaveVideo = this._onLeaveVideo.bind(this);

    this.delayTimer = null;
  }

  _onHoverVideo() {
    const DELAY_PLAY = 1000;
    this.delayTimer = setTimeout(() => {
      this.setState({isPlaying: true});
    }, DELAY_PLAY);
  }

  _onLeaveVideo() {
    clearTimeout(this.delayTimer);
    this.setState({isPlaying: false});
  }

  componentDidMount() {
    const video = this._videoRef.current;
    video.src = this.props.film.video;
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.state.isPlaying) {
      video.play();
    } else {
      video.src = null;
      video.src = this.props.film.video;
    }
  }

  render() {
    const {film} = this.props;
    const {img} = film;
    return (
      <video
        ref={this._videoRef}
        poster={img}
        width={255}
        height={159}
        muted={true}
        onMouseEnter={this.onHoverVideo}
        onMouseLeave={this.onLeaveVideo}
      />
    );
  }
}

VideoPlayer.propTypes = {
  film: PropTypes.shape(filmProps).isRequired,
};

export default VideoPlayer;
