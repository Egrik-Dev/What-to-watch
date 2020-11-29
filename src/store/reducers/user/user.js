import {ActionType} from '../../action';
import {extend} from '../../../utils';
import {AuthStatus} from '../../../const';

const initialState = {
  authorizationStatus: AuthStatus.NO_AUTH,
  avatar: ``
};

const user = (state = initialState, action) => {
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

export default user;
