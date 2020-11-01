import React, {PureComponent, createRef} from 'react';
import {filmProps} from '../../props/props';
import PropTypes from 'prop-types';

const withVideoPlayer = (Component) => {
  class WithVideoPlayer extends PureComponent {
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
      video.src = this.props.film.videoLink;
    }

    componentDidUpdate() {
      const video = this._videoRef.current;

      if (this.state.isPlaying) {
        video.play();
      } else {
        video.src = null;
        video.src = this.props.film.videoLink;
      }
    }

    componentWillUnmount() {
      clearTimeout(this.delayTimer);
    }

    render() {
      const {film} = this.props;
      const {previewImage} = film;

      return (
        <Component
          film={film}
        >
          <video
            ref={this._videoRef}
            poster={previewImage}
            width={255}
            height={159}
            muted={true}
            onMouseEnter={this.onHoverVideo}
            onMouseLeave={this.onLeaveVideo}
          />
        </Component>
      );
    }
  }

  WithVideoPlayer.propTypes = {
    film: PropTypes.shape(filmProps).isRequired,
  };

  return WithVideoPlayer;
};

export default withVideoPlayer;
