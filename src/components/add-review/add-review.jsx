import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import AddNewReview from '../add-new-review/add-new-review';
import HeaderUserBlock from '../header-user-block/header-user-block';
import {AppRoute} from '../../const';
import {filmsProps} from '../../props/props';

const AddReview = (props) => {
  const {films, id} = props;
  const activeFilmId = Number(id);

  const film = films.find((movie) => movie.id === activeFilmId);

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to={AppRoute.ROOT} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to={`${AppRoute.MOVIE_PAGE}/${id}`}>
                  {film.name}
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <HeaderUserBlock />
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={film.posterImage} alt={film.name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <AddNewReview
          id={id}
        />
      </div>

    </section>
  );
};

AddReview.propTypes = {
  films: filmsProps.films,
  id: PropTypes.string.isRequired
};

const mapStateToProps = ({LOAD_DATA}) => ({
  films: LOAD_DATA.films
});

export {AddReview};
export default connect(mapStateToProps)(AddReview);
