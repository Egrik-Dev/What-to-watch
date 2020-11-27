import MockAdapter from 'axios-mock-adapter';
import {createApi} from '../../../services/api';
import {ActionType} from '../../action';
import {login, checkAuth} from '../../action-api';
import user from './user';

const api = createApi(() => {});

const mockAvatarurl = `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/3.jpg`;

it(`Reducer without additional parameters should return initial state`, () => {
  expect(user(void 0, {})).toEqual({
    authorizationStatus: `NO_AUTH`,
    avatar: ``
  });
});

it(`Reducer should change the authorization status`, () => {
  expect(user({
    authorizationStatus: `NO_AUTH`,
    avatar: ``
  }, {
    type: ActionType.CHANGE_AUTH_STATUS,
    status: `AUTH`
  })).toEqual({
    authorizationStatus: `AUTH`,
    avatar: ``
  });
});

it(`Reducer should change the avatar`, () => {
  expect(user({
    authorizationStatus: `AUTH`,
    avatar: ``
  }, {
    type: ActionType.CHANGE_AVATAR,
    payload: mockAvatarurl
  })).toEqual({
    authorizationStatus: `AUTH`,
    avatar: mockAvatarurl
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API post response to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {loginInput: `test@test.ru`, passwordInput: `123456`};
    const loginFunc = login(fakeUser);

    apiMock
    .onPost(`/login`)
    .reply(200, [{fake: true}]);

    return loginFunc(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.CHANGE_AVATAR,
          payload: void 0
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.CHANGE_AUTH_STATUS,
          status: `AUTH`
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: `/`
        });
      });
  });

  it(`Should make a correct API get response to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthAction = checkAuth();

    apiMock
    .onGet(`/login`)
    .reply(200, [{fake: true}]);

    return checkAuthAction(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.CHANGE_AVATAR,
          payload: void 0
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.CHANGE_AUTH_STATUS,
          status: `AUTH`
        });
      });
  });
});
