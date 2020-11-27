import React from 'react';
import PropTypes from 'prop-types';
import {filmProps} from '../../props/props';
import {connect} from 'react-redux';
import ItemReview from '../item-review/item-review';
import {fetchComments} from '../../store/action-api';

const ReviewsTab = (props) => {
  const {commentsProp = {}, isLoadingProp, film, fetchCommentsAction} = props;

  let [comments, setComments] = React.useState(commentsProp);
  let [isFetchingComments, setFlag] = React.useState(isLoadingProp);

  React.useEffect(() => {
    fetchCommentsAction(film.id)
      .then(({data}) => setComments(data))
      .then(() => setFlag(false));
  }, [film]);

  if (isFetchingComments) {
    return <div>Loading...</div>;
  }

  const firstPartComments = comments.slice(0, Math.round(comments.length / 2));
  const secondPartComments = comments.slice(Math.round(comments.length / 2), comments.length);

  return (
    <>
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          {firstPartComments.map((comment, index) => (
            <ItemReview
              comment={comment}
              key={index}
            />
          ))}
        </div>
        <div className="movie-card__reviews-col">
          {secondPartComments.map((comment, index) => (
            <ItemReview
              comment={comment}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

ReviewsTab.propTypes = {
  film: PropTypes.shape(filmProps),
  fetchCommentsAction: PropTypes.func.isRequired,
  isLoadingProp: PropTypes.bool,
  commentsProp: PropTypes.array
};

const mapDispatchToProps = (dispatch) => ({
  fetchCommentsAction(id) {
    return dispatch(fetchComments(id));
  }
});

export {ReviewsTab};
export default connect(null, mapDispatchToProps)(ReviewsTab);
