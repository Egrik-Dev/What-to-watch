import React from 'react';
import {Link} from 'react-router-dom';
import {filmsProps, filmProps} from '../../props/props';
import PropTypes from 'prop-types';
import MoviesList from '../movies-list/movies-list';
import GenresList from '../genres-list/genres-list';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {getGenreFilms} from '../../selectors/genre-selector';
import HeaderUserBlock from '../header-user-block/header-user-block';
import {toggleFavoriteFilm, fetchPromoFilm} from '../../store/action-api';
import {Genres, AppRoute, AuthStatus} from '../../const';

const MainScreen = (props) => {
  const {promoFilm, activeGenre, films, allFilms, onFilterChange, toggleFavoriteFilmAction, authorizationStatus, redirectToRoute} = props;

  const [isFavorite, setFavorite] = React.useState();

  React.useEffect(() => {
    const genres = new Set();

    films.forEach((film) => genres.add(film.genre));
    const genresArr = Array.from(genres);
    genresArr.forEach((genre) => {
      Genres[genre.toUpperCase()] = genre;
    });
  }, []);

  React.useEffect(() => {
    const isFavoriteProp = allFilms.find((movie) => movie.id === promoFilm.id).isFavorite;
    setFavorite(isFavoriteProp);
  }, [promoFilm]);

  const onHandleClickFavorite = React.useCallback(() => {
    if (authorizationStatus === AuthStatus.AUTH) {
      setFavorite(!isFavorite);
      const status = isFavorite ? 0 : 1;
      toggleFavoriteFilmAction(promoFilm.id, status);
    } else {
      redirectToRoute(AppRoute.LOGIN);
    }
  });

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={promoFilm.backgroundImage} alt={promoFilm.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="user-block">
            <HeaderUserBlock />
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={promoFilm.posterImage} alt={promoFilm.name} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{promoFilm.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{promoFilm.genre}</span>
                <span className="movie-card__year">{promoFilm.released}</span>
              </p>

              <div className="movie-card__buttons">
                <Link to={`${AppRoute.PLAYER}/${promoFilm.id}`} style={{marginRight: `14px`}}>
                  <button className="btn btn--play movie-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                </Link>
                <button className="btn btn--list movie-card__button" type="button" onClick={onHandleClickFavorite}>
                  {isFavorite
                    &&
                    <svg viewBox="0 0 18 14" width="18" height="14">
                      <use xlinkHref="#in-list"></use>
                    </svg>
                    ||
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                  }
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList
            activeGenre={activeGenre}
            onFilterChange={onFilterChange}
            films={films}
          />
          <MoviesList films={films} />
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

MainScreen.propTypes = {
  films: filmsProps.films,
  allFilms: filmsProps.films,
  activeGenre: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  promoFilm: PropTypes.shape(filmProps),
  toggleFavoriteFilmAction: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  redirectToRoute: PropTypes.func.isRequired,
};

const mapStateToProps = ({LOAD_DATA, APP_STATE, USER}) => ({
  activeGenre: APP_STATE.activeGenre,
  films: getGenreFilms({LOAD_DATA, APP_STATE}),
  allFilms: LOAD_DATA.films,
  authorizationStatus: USER.authorizationStatus,
  promoFilm: LOAD_DATA.promoFilm
});

const mapDispatchToProps = (dispatch) => ({
  onFilterChange(selectedGenre) {
    dispatch(ActionCreator.onFilterChange(selectedGenre));
  },
  fetchPromoFilmAction() {
    return dispatch(fetchPromoFilm());
  },
  toggleFavoriteFilmAction(id, status) {
    dispatch(toggleFavoriteFilm(id, status));
  },
  redirectToRoute(path) {
    dispatch(ActionCreator.redirectToRoute(path));
  }
});

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
