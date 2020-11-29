import {ActionType} from '../../action';
import {extend} from '../../../utils';
import {DEFAULT_GENRE} from '../../../const';

const initialState = {
  activeGenre: DEFAULT_GENRE
};

const appState = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {activeGenre: action.genre});

    default:
      break;
  }

  return state;
};

export default appState;
