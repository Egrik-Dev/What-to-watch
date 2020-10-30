import {ActionType} from '../../action';
import {extend} from '../../../utils';

const initialState = {
  promoFilm: null,
  films: []
};

export const loadData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {films: action.payload});

    case ActionType.LOAD_PROMO_FILM:
      return extend(state, {promoFilm: action.payload});
  }

  return state;
};
