import films from '../mocks/films';
import {Genres} from '../const';
import {ActionType} from './action';
import {extend} from '../utils';

const initialState = {
  activeGenre: Genres.ALL_GENRES,
  films,
  promoMovie: films[0]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_FILMS:
      return extend(state, {films: action.films});

    case ActionType.CHANGE_GENRE:
      return extend(state, {activeGenre: Genres[action.genre]});
  }

  return state;
};
