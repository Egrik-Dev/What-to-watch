import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {postReview} from '../../store/action-api';

const AddNewReview = (props) => {
  const {id, postReviewAction} = props;

  const MAX_RATING = 5;
  const ratingArr = new Array(MAX_RATING).fill(``);

  const [rating, setRating] = React.useState();
  const [comment, setComment] = React.useState(``);
  const [isPosting, setPostingStatus] = React.useState(false);
  const [isError, setError] = React.useState(false);

  const handleRatingChange = React.useCallback((evt) => {
    const value = Number(evt.target.value);
    setError(false);
    setRating(value);
  });

  const handleTextChange = React.useCallback((evt) => {
    const text = evt.target.value;
    setError(false);
    setComment(text);
  });

  const handlePostReview = React.useCallback((evt) => {
    evt.preventDefault();

    setPostingStatus(true);
    postReviewAction(id, {rating, comment})
      .catch(() => {
        setPostingStatus(false);
        setError(true);
      });
  });

  return (
    <form action="#" className="add-review__form">
      {isError &&
        <div style={{textAlign: `center`}}>
          <p
            style={{color: `red`}}
          >An error occurred, please try again!</p>
        </div>
      }
      <div className="rating">
        <div className="rating__stars">
          {ratingArr.map((item, index) => (
            <React.Fragment key={index}>
              <input
                className="rating__input"
                id={`star-${index + 1}`}
                type="radio"
                name="rating"
                value={index + 1}
                disabled={isPosting}
                onChange={handleRatingChange}
              />
              <label className="rating__label" htmlFor={`star-${index + 1}`}>Rating {index + 1}</label>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text" id="review-text"
          placeholder="Review text"
          onChange={handleTextChange}
          disabled={isPosting}
        ></textarea>
        <div className="add-review__submit">
          <button
            className="add-review__btn"
            type="submit"
            onClick={handlePostReview}
            disabled={
              (isPosting || comment.length < 50 || comment.length > 400 || !rating)
                ? true
                : false
            }
          >Post</button>
        </div>
      </div>
    </form>
  );
};

AddNewReview.propTypes = {
  id: PropTypes.string.isRequired,
  postReviewAction: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  postReviewAction(id, {rating, comment}) {
    return dispatch(postReview(id, {rating, comment}));
  }
});

export {AddNewReview};
export default connect(null, mapDispatchToProps)(AddNewReview);
