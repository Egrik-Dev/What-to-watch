import {ActionCreator} from './action';

export const fetchPromoFilm = () => (_dispatch, _getState, api) => (
  api.get(`/films/promo`)
);

export const fetchFilms = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => dispatch(ActionCreator.loadFilms(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(({data}) => {
      dispatch(ActionCreator.changeAvatar(data.avatar_url));
      dispatch(ActionCreator.changeAuthorizationStatus(`AUTH`));
    })
);

export const login = ({userLogin: email, userPass: password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(ActionCreator.changeAuthorizationStatus(`AUTH`)))
    .then(() => dispatch(ActionCreator.redirectToRoute(`/`)))
);

export const fetchComments = (id) => (_dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
);

export const postReview = (id, {rating, comment}) => (dispatch, getState, api) => (
  api.post(`/comments/${id}`, {rating, comment})
    .then(() => dispatch(ActionCreator.redirectToRoute(`/movies/${id}`)))
);

export const fetchFavoriteFilms = () => (_dispatch, _getState, api) => (
  api.get(`/favorite`)
);

export const toggleFavoriteFilm = (id, status) => (dispatch, _getState, api) => (
  api.post(`/favorite/${id}/${status}`)
    .then(({data}) => dispatch(ActionCreator.updateFilms(data)))
);

export const loadFilm = (id) => (_dispatch, _getState, api) => (
  api.get(`/films/${id}`)
);
