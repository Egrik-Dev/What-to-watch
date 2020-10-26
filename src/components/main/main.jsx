import React from 'react';
import {Link} from 'react-router-dom';
import {filmsProps} from '../../props/props';
import MoviesList from '../movies-list/movies-list';
import GenresList from '../genres-list/genres-list';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import withActiveFilm from '../../hocks/with-active-film/with-active-film';

const MoviesListWrapped = withActiveFilm(MoviesList);

const MainScreen = (props) => {
  const {activeGenre, films, onFilterChange, promoMovie} = props;
  const {
    title: titlePromoMovie,
    genre: genresPromoMovie,
    releaseDate: releasePromoMovie,
    bgSrc,
    poster,
    id
  } = promoMovie;

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={bgSrc} alt={titlePromoMovie} />
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
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={poster} alt={titlePromoMovie} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{titlePromoMovie}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genresPromoMovie.join(`, `)}</span>
                <span className="movie-card__year">{releasePromoMovie}</span>
              </p>

              <div className="movie-card__buttons">
                <Link to={`/player/${id}`} style={{marginRight: `14px`}}>
                  <button className="btn btn--play movie-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                </Link>
                <Link to="/movies/1">
                  <button className="btn btn--list movie-card__button" type="button">
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                    <span>My list</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            <GenresList
              activeGenre={activeGenre}
              onFilterChange={onFilterChange}
            />
          </ul>
          <MoviesListWrapped films={films} />
          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
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

const mapStateToProps = (state) => ({
  activeGenre: state.activeGenre,
  films: state.films,
  promoMovie: state.promoMovie
});

const mapDispatchToProps = (dispatch) => ({
  onFilterChange(selectedGenre) {
    dispatch(ActionCreator.onFilterChange(selectedGenre));
    dispatch(ActionCreator.getFilms(selectedGenre));
  },
});

MainScreen.propTypes = filmsProps;

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
