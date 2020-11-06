import React from 'react';
import PropTypes from 'prop-types';

const ShowMore = (props) => {
  const {onClickShowMoreHandler} = props;

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={onClickShowMoreHandler}
      >
          Show more
      </button>
    </div>
  );
};

ShowMore.propTypes = {
  onClickShowMoreHandler: PropTypes.func.isRequired
};

export default ShowMore;
