import {ActionType} from './action';
import {extend} from '../utils';

const initialState = {
  activeGenre: `ALL_GENRES`,
  promoFilm: null,
  films: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {films: action.payload});

    case ActionType.LOAD_PROMO_FILM:
      return extend(state, {promoFilm: action.payload});

    case ActionType.CHANGE_GENRE:
      return extend(state, {activeGenre: action.genre});
  }

  return state;
};
