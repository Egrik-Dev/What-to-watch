import {camelizeFilm} from '../utils';

export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  LOAD_DONE: `LOAD_DONE`,
  CHANGE_AUTH_STATUS: `CHANGE_AUTH_STATUS`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  UPDATE_FILMS: `UPDATE_FILMS`,
  CHANGE_AVATAR: `CHANGE_AVATAR`
};

const editingFilmsData = (movies) => {
  movies.map((film) => camelizeFilm(film));
  return movies;
};

export const ActionCreator = {
  loadFilms: (data) => ({
    type: ActionType.LOAD_FILMS,
    payload: editingFilmsData(data)
  }),
  loadPromoFilm: (promoFilm) => ({
    type: ActionType.LOAD_PROMO_FILM,
    payload: camelizeFilm(promoFilm)
  }),
  loadDone: () => ({
    type: ActionType.LOAD_DONE,
    payload: false
  }),
  onFilterChange: (selectedGenre) => ({
    type: ActionType.CHANGE_GENRE,
    genre: selectedGenre
  }),
  changeAuthorizationStatus: (status) => ({
    type: ActionType.CHANGE_AUTH_STATUS,
    status
  }),
  redirectToRoute: (route) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: route
  }),
  updateFilms: (film) => ({
    type: ActionType.UPDATE_FILMS,
    payload: camelizeFilm(film)
  }),
  changeAvatar: (data) => ({
    type: ActionType.CHANGE_AVATAR,
    payload: data
  })
};
