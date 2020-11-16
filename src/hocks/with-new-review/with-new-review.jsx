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

    render() {
      return <Component
        {...this.props}
        handleTextChange={this.handleTextChange}
        handleRatingChange={this.handleRatingChange}
      />;
    }
  }

  WithNewReview.propTypes = {};

  return WithNewReview;
};

export default withNewReview;
