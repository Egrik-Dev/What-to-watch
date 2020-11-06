import {createSelector} from 'reselect';
import {Genres} from '../const';
import {filterFilms} from '../utils';

export const getFilms = ({LOAD_DATA}) => LOAD_DATA.films;
export const getActiveGenre = ({APP_STATE}) => Genres[APP_STATE.activeGenre];

export const getGenreFilms = createSelector(
    getFilms,
    getActiveGenre,
    filterFilms
);
