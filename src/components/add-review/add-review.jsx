import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import AddNewReview from '../add-new-review/add-new-review';

const AddReviewScreen = (props) => {
  const {handleTextChange, handleRatingChange, getFilmId, films} = props;
  const START_FIND_ID = `movies/`;
  const END_FIND_ID = `/review`;

  const filmId = getFilmId(START_FIND_ID, END_FIND_ID);
  const film = films.find((movie) => movie.id === filmId);

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={film.background_image} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <a href="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="movie-page.html" className="breadcrumbs__link">{film.name}</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={film.poster_image} alt={film.name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <AddNewReview
          handleTextChange={handleTextChange}
          handleRatingChange={handleRatingChange}
        />
      </div>

    </section>
  );
};

const mapStateToProps = (state) => ({
  films: state.films
});

AddReviewScreen.propTypes = {
  films: PropTypes.array.isRequired,
  handleTextChange: PropTypes.func.isRequired,
  handleRatingChange: PropTypes.func.isRequired,
  getFilmId: PropTypes.func.isRequired
};

export {AddReviewScreen};
export default connect(mapStateToProps)(AddReviewScreen);
