import {ActionType} from '../../action';
import appState from './app-state';

it(`Reducer without additional parameters should return initial state`, () => {
  expect(appState(void 0, {})).toEqual({
    activeGenre: `ALL_GENRES`
  });
});

it(`Reducer should update change Active Genre`, () => {
  expect(appState({activeGenre: `ALL_GENRES`}, {
    type: ActionType.CHANGE_GENRE,
    genre: `DRAMAS`
  })).toEqual({
    activeGenre: `DRAMAS`
  });
});
