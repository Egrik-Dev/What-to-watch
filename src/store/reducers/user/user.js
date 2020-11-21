import {ActionType} from '../../action';
import {extend} from '../../../utils';

const initialState = {
  authorizationStatus: `NO_AUTH`,
  avatar: ``
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_AUTH_STATUS:
      return extend(state, {authorizationStatus: action.status});

    case ActionType.CHANGE_AVATAR:
      return extend(state, {avatar: action.payload});

    default:
      break;
  }

  return state;
};
