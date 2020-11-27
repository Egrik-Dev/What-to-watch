import React from 'react';
import {filmsProps} from '../../props/props';
import {Link} from 'react-router-dom';
import MoviesList from '../movies-list/movies-list';
import Tabs from '../tabs/tabs';
import {filterFilms} from '../../utils';
import {MAX_RELATED_FILMS} from '../../const';
import PropTypes from 'prop-types';
import HeaderUserBlock from '../header-user-block/header-user-block';
import {camelizeFilm} from '../../utils';
import {connect} from 'react-redux';
import {toggleFavoriteFilm, loadFilm} from '../../store/action-api';
import {ActionCreator} from '../../store/action';

const MovieScreen = (props) => {
  const {filmProp = {}, isLoadingProp = true, films, id, authorizationStatus, toggleFavoriteFilmAction, loadFilmAction, redirectToRoute} = props;

  const [activeTab, setActiveTab] = React.useState(`Overview`);

  const clickTabHandler = React.useCallback((evt) => {
    evt.preventDefault();

    const target = evt.target.text;
    if (target) {
      setActiveTab(target);
    }
  });

  const [film, setFilmData] = React.useState(filmProp);
  const [isLoading, setLoadingStatus] = React.useState(isLoadingProp);
  const [isFavorite, setFavorite] = React.useState();
  const [relatedFilms, setRelatedFilms] = React.useState([]);

  React.useEffect(() => {
    loadFilmAction(id)
      .then(({data}) => {
        const editedFilm = camelizeFilm(data);
        setFilmData(editedFilm);
        setFavorite(data.isFavorite);
      })
      .then(() => setLoadingStatus(false));
  }, [id]);

  React.useEffect(() => {
    const filteredFilms = filterFilms(films, film.genre);
    setRelatedFilms(filteredFilms.filter((movie) => movie.id !== film.id));
  }, [film]);

  const onHandleClickFavorite = React.useCallback(() => {
    if (authorizationStatus === `AUTH`) {
      setFavorite(!isFavorite);
      const status = isFavorite ? 0 : 1;
      toggleFavoriteFilmAction(film.id, status);
    } else {
      redirectToRoute(`/login`);
    }
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <Link to={`/`} className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <HeaderUserBlock />
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{film.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{film.genre}</span>
                <span className="movie-card__year">{film.released}</span>
              </p>

              <div className="movie-card__buttons">
                <Link to={`/player/${film.id}`} style={{marginRight: `14px`}}>
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
                {authorizationStatus === `AUTH` && <Link to={`/movies/${film.id}/review`} className="btn movie-card__button">Add review</Link>}
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327" />
            </div>
            <Tabs
              activeTab={activeTab}
              film={film}
              clickTabHandler={clickTabHandler}
            />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <MoviesList
            films={relatedFilms.slice(0, MAX_RELATED_FILMS)}
          />
        </section>

        <footer className="page-footer">
          <div className="logo">
            <Link to={`/`} className="logo__link logo__link--light">
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
    </React.Fragment>
  );
};

MovieScreen.propTypes = {
  films: filmsProps.films,
  id: PropTypes.string.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  toggleFavoriteFilmAction: PropTypes.func.isRequired,
  loadFilmAction: PropTypes.func.isRequired,
  redirectToRoute: PropTypes.func.isRequired,
  isLoadingProp: PropTypes.bool,
  filmProp: PropTypes.object
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  toggleFavoriteFilmAction(id, status) {
    dispatch(toggleFavoriteFilm(id, status));
  },
  loadFilmAction(id) {
    return dispatch(loadFilm(id));
  },
  redirectToRoute(path) {
    dispatch(ActionCreator.redirectToRoute(path));
  }
});

export {MovieScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MovieScreen);
