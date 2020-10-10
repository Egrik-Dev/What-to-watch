import React, {PureComponent} from 'react';

class AddNewReview extends PureComponent {
  constructor() {
    super();
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
    const MAX_RATING = 5;
    const ratingArr = new Array(MAX_RATING).fill(``);
    return (
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {ratingArr.map((item, index) => (
              <React.Fragment key={index}>
                <input className="rating__input" id={`star-${index + 1}`} type="radio" name="rating" value={index + 1} onChange={this.handleRatingChange}/>
                <label className="rating__label" htmlFor={`star-${index + 1}`}>Rating {index + 1}</label>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={this.handleTextChange}></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    );
  }
}

export default AddNewReview;
