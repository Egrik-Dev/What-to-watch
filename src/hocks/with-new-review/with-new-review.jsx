import React, {PureComponent} from 'react';

const withNewReview = (Component) => {
  class WithNewReview extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: 5,
        textReview: ``
      };

      this.handleRatingChange = this._handleRatingChange.bind(this);
      this.handleTextChange = this._handleTextChange.bind(this);
    }

    _handleRatingChange(evt) {
      const value = evt.target.value;
      this.setState(() => ({
        rating: value
      }));
    }

    _handleTextChange(evt) {
      const text = evt.target.value;
      this.setState(() => ({
        textReview: text
      }));
    }

    _getFilmId(startFind, endFind) {
      const filmPath = window.location.pathname;
      const strReview = filmPath.indexOf(endFind);
      const strMovies = filmPath.indexOf(startFind) + startFind.length;
      return Number(filmPath.substring(strMovies, strReview));
    }

    render() {
      return <Component
        {...this.props}
        handleTextChange={this.handleTextChange}
        handleRatingChange={this.handleRatingChange}
        getFilmId={this._getFilmId}
      />;
    }
  }

  WithNewReview.propTypes = {};

  return WithNewReview;
};

export default withNewReview;
