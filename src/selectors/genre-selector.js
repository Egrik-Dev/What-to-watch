import {createSelector} from 'reselect';
import {Genres} from '../const';

export const getFilms = ({LOAD_DATA}) => LOAD_DATA.films;
export const getActiveGenre = ({APP_STATE}) => APP_STATE.activeGenre;

export const getGenreFilms = createSelector(
    getFilms,
    getActiveGenre,
    (films, genre) => {
      if (Genres[genre] === Genres.ALL_GENRES) {
        return films;
      }

      return films.filter((film) => film.genre === Genres[genre]);
    }
);
