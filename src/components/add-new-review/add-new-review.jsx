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

    return (
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">

            <input className="rating__input" id="star-1" type="radio" name="rating" value="1" onChange={this.handleRatingChange}/>
            <label className="rating__label" htmlFor="star-1">Rating 1</label>

            <input className="rating__input" id="star-2" type="radio" name="rating" value="2" onChange={this.handleRatingChange} />
            <label className="rating__label" htmlFor="star-2">Rating 2</label>

            <input className="rating__input" id="star-3" type="radio" name="rating" value="3" onChange={this.handleRatingChange} />
            <label className="rating__label" htmlFor="star-3">Rating 3</label>

            <input className="rating__input" id="star-4" type="radio" name="rating" value="4" onChange={this.handleRatingChange} />
            <label className="rating__label" htmlFor="star-4">Rating 4</label>

            <input className="rating__input" id="star-5" type="radio" name="rating" value="5" onChange={this.handleRatingChange} />
            <label className="rating__label" htmlFor="star-5">Rating 5</label>
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
