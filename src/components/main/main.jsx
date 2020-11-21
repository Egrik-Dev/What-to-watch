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
import {camelizeFilm} from '../../utils';

const MainScreen = (props) => {
  const {activeGenre, films, onFilterChange, toggleFavoriteFilmAction, fetchPromoFilmAction} = props;

  const [promoFilm, setPromoFilmData] = React.useState({});
  const [isLoading, setLoadingStatus] = React.useState(true);
  const [isFavorite, setFavorite] = React.useState();

  React.useEffect(() => {
    fetchPromoFilmAction()
      .then(({data}) => {
        const editedFilm = camelizeFilm(data);
        setPromoFilmData(editedFilm);
        setFavorite(data.isFavorite);
      })
      .then(() => setLoadingStatus(false));
  }, []);

  const onHandleClickFavorite = React.useCallback(() => {
    setFavorite(!isFavorite);
    const status = isFavorite ? 0 : 1;
    toggleFavoriteFilmAction(promoFilm.id, status);
  });

  if (isLoading) {
    return (<div>Loading...</div>);
  }

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
                <Link to={`/player/${promoFilm.id}`} style={{marginRight: `14px`}}>
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

const mapStateToProps = ({LOAD_DATA, APP_STATE}) => ({
  // promoFilm: LOAD_DATA.promoFilm,
  activeGenre: APP_STATE.activeGenre,
  films: getGenreFilms({LOAD_DATA, APP_STATE}),
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
});

MainScreen.propTypes = {
  films: filmsProps.films,
  activeGenre: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  promoFilm: PropTypes.shape(filmProps),
  toggleFavoriteFilmAction: PropTypes.func.isRequired,
  fetchPromoFilmAction: PropTypes.func.isRequired
};

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
