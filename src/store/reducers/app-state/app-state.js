import {ActionType} from '../../action';
import {extend} from '../../../utils';

const initialState = {
  activeGenre: `ALL_GENRES`
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
