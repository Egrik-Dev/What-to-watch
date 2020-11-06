import React from 'react';
import PropTypes from 'prop-types';
import {filmProps} from '../../props/props';
import {dateParse} from '../../utils';
import axios from 'axios';
import {BACKEND_URL} from '../../const';

const ReviewsTab = (props) => {
  const {film} = props;
  const MOVIE_URL = `/comments/`;

  let [comments, setComments] = React.useState({});
  let [isFetchingComments, setFlag] = React.useState(true);

  React.useEffect(() => {
    axios.get(BACKEND_URL + MOVIE_URL + film.id)
      .then(({data}) => setComments(data))
      .then(() => setFlag(false));
  }, []);

  if (isFetchingComments) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          {comments.map((comment) => (
            <div
              className="review"
              key={comment.id}
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
          ))}
        </div>
      </div>
    </>
  );
};

ReviewsTab.propTypes = {
  film: PropTypes.shape(filmProps),
};

export default ReviewsTab;
