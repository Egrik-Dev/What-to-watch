import {createSelector} from 'reselect';
import {Genres} from '../const';

export const getFilms = (state) => state.films;
export const getActiveGenre = (state) => state.activeGenre;

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
