import {ActionCreator} from './action';
import {ApiRoute, AppRoute, AuthStatus} from '../const';

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.PROMO_FILM)
    .then(({data}) => dispatch(ActionCreator.loadPromoFilm(data)))
);

export const fetchFilms = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.FILMS)
    .then(({data}) => dispatch(ActionCreator.loadFilms(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.LOGIN)
    .then(({data}) => {
      dispatch(ActionCreator.changeAvatar(data.avatar_url));
      dispatch(ActionCreator.changeAuthorizationStatus(AuthStatus.AUTH));
    })
);

export const login = ({loginInput: email, passwordInput: password}) => (dispatch, _getState, api) => (
  api.post(ApiRoute.LOGIN, {email, password})
    .then(({data}) => {
      dispatch(ActionCreator.changeAvatar(data.avatar_url));
      dispatch(ActionCreator.changeAuthorizationStatus(AuthStatus.AUTH));
    })
);

export const fetchComments = (id) => (_dispatch, _getState, api) => (
  api.get(`${ApiRoute.COMMENTS}/${id}`)
);

export const postReview = (id, {rating, comment}) => (dispatch, _getState, api) => (
  api.post(`${ApiRoute.COMMENTS}/${id}`, {rating, comment})
    .then(() => dispatch(ActionCreator.redirectToRoute(`${AppRoute.MOVIE_PAGE}/${id}`)))
);

export const fetchFavoriteFilms = () => (_dispatch, _getState, api) => (
  api.get(ApiRoute.FAVORITE)
);

export const toggleFavoriteFilm = (id, status) => (dispatch, _getState, api) => (
  api.post(`${ApiRoute.FAVORITE}/${id}/${status}`)
    .then(({data}) => dispatch(ActionCreator.updateFilms(data)))
);

export const loadFilm = (id) => (_dispatch, _getState, api) => (
  api.get(`${ApiRoute.FILMS}/${id}`)
);
