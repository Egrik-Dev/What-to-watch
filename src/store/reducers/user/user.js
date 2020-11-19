import {ActionType} from '../../action';
import {extend} from '../../../utils';

const initialState = {
  authorizationStatus: `NO_AUTH`
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_AUTH_STATUS:
      return extend(state, {authorizationStatus: action.status});

    default:
      break;
  }

  return state;
};
