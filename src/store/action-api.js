import {ActionCreator} from './action';

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(`/films/promo`)
    .then(({data}) => dispatch(ActionCreator.loadPromoFilm(data)))
);

export const fetchFilms = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => dispatch(ActionCreator.loadFilms(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(ActionCreator.changeAuthorizationStatus(`AUTH`)))
);

export const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(ActionCreator.changeAuthorizationStatus(`AUTH`)))
    .then(() => dispatch(ActionCreator.redirectToRoute(`/`)))
);
