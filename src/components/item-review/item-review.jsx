import React from 'react';
import {dateParse} from '../../utils';
import PropTypes from 'prop-types';

const ItemReview = (props) => {
  const {comment} = props;

  return (
    <div
      className="review"
    >
      <blockquote className="review__quote">
        <p className="review__text">{comment.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{comment.user.name}</cite>
          <time className="review__date" dateTime={comment.date.slice(0, 10)}>{dateParse(comment.date)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{comment.rating}</div>
    </div>
  );
};

ItemReview.propTypes = {
  comment: PropTypes.shape({
    comment: PropTypes.string.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired,
    date: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
  })
};

export default ItemReview;
