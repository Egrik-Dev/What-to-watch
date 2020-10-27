import React from 'react';
import PropTypes from 'prop-types';

const AddNewReview = (props) => {
  const {handleTextChange, handleRatingChange} = props;
  const MAX_RATING = 5;
  const ratingArr = new Array(MAX_RATING).fill(``);

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {ratingArr.map((item, index) => (
            <React.Fragment key={index}>
              <input className="rating__input" id={`star-${index + 1}`} type="radio" name="rating" value={index + 1} onChange={handleRatingChange}/>
              <label className="rating__label" htmlFor={`star-${index + 1}`}>Rating {index + 1}</label>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={handleTextChange}></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
};

AddNewReview.propTypes = {
  handleTextChange: PropTypes.func.isRequired,
  handleRatingChange: PropTypes.func.isRequired
};

export default AddNewReview;
