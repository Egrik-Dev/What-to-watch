import React from 'react';
import {filmsProps} from '../../props/props';
import MoviesList from '../movies-list/movies-list';
import {Link} from 'react-router-dom';
import HeaderUserBlock from '../header-user-block/header-user-block';
import {connect} from 'react-redux';
import {AppRoute} from '../../const';

const MyListScreen = (props) => {
  const {films} = props;
  const favoriteFilms = films.filter((film) => film.isFavorite);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to={AppRoute.ROOT} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">My list</h1>

        <HeaderUserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <MoviesList films={favoriteFilms} />
      </section>

      <footer className="page-footer">
        <div className="logo">
          <Link to={AppRoute.ROOT} className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

MyListScreen.propTypes = filmsProps;

const mapStateToProps = ({LOAD_DATA}) => ({
  films: LOAD_DATA.films
});

export {MyListScreen};
export default connect(mapStateToProps)(MyListScreen);
