import MockAdapter from 'axios-mock-adapter';
import {createApi} from '../../../services/api';
import {ActionType} from '../../action';
import loadData from './load-data';
import {fetchFilms, fetchPromoFilm} from '../../action-api';

const films = [
  {
    name: `Bronson`,
    description: `A young man who was sentenced to seven years in prison for robbing a post office ends up spending three decades in solitary confinement. During this time, his own personality is supplanted by his alter-ego, Charles Bronson.`,
    rating: 3.6,
    director: `Nicolas Winding Refn`,
    genre: `Action`,
    released: 2008,
    id: 1,
    posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/bronson.jpg`,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/bronson.jpg`,
    backgroundImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/bronson.jpg`,
    backgroundColor: `#73B39A`,
    scoresCount: 109661,
    runTime: 92,
    isFavorite: true,
    videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    starring: [`Tom Hardy`, `Kelly Adams`, `Luing Andrews`]
  },
  {
    name: `Pulp Fiction`,
    description: `The lives of two mob hitmen, a boxer, a gangster & his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.`,
    rating: 1.5,
    director: `Quentin Tarantino`,
    genre: `Crime`,
    released: 1994,
    id: 2,
    posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Pulp_Fiction.jpg`,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/pulp-fiction.jpg`,
    backgroundImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Pulp_Fiction.jpg`,
    backgroundColor: `#795433`,
    scoresCount: 1635992,
    runTime: 153,
    isFavorite: false,
    videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    starring: [`John Travolta`, `Uma Thurman`, `Samuel L. Jackson`]
  }
];

const updatedFilm = {
  name: `Pulp Fiction`,
  description: `The lives of two mob hitmen, a boxer, a gangster & his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.`,
  rating: 1.5,
  director: `Quentin Tarantino`,
  genre: `Crime`,
  released: 1994,
  id: 2,
  posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Pulp_Fiction.jpg`,
  previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/pulp-fiction.jpg`,
  backgroundImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Pulp_Fiction.jpg`,
  backgroundColor: `#795433`,
  scoresCount: 1635992,
  runTime: 153,
  isFavorite: true,
  videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
  previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  starring: [`John Travolta`, `Uma Thurman`, `Samuel L. Jackson`]
};

const updatedFilms = [
  {
    name: `Bronson`,
    description: `A young man who was sentenced to seven years in prison for robbing a post office ends up spending three decades in solitary confinement. During this time, his own personality is supplanted by his alter-ego, Charles Bronson.`,
    rating: 3.6,
    director: `Nicolas Winding Refn`,
    genre: `Action`,
    released: 2008,
    id: 1,
    posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/bronson.jpg`,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/bronson.jpg`,
    backgroundImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/bronson.jpg`,
    backgroundColor: `#73B39A`,
    scoresCount: 109661,
    runTime: 92,
    isFavorite: true,
    videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    starring: [`Tom Hardy`, `Kelly Adams`, `Luing Andrews`]
  }, updatedFilm
];

const api = createApi(() => {});

it(`Reducer without additional parameters should return initial state`, () => {
  expect(loadData(void 0, {})).toEqual({
    isLoading: true,
    promoFilm: null,
    films: [],
  });
});

it(`Reducer should load films by load action films`, () => {
  expect(loadData({
    isLoading: true,
    promoFilm: null,
    films: [],
  }, {
    type: ActionType.LOAD_FILMS,
    payload: films
  })).toEqual({
    isLoading: true,
    promoFilm: null,
    films
  });
});

it(`Reducer should load promo film by load action promo film`, () => {
  expect(loadData({
    isLoading: true,
    promoFilm: null,
    films
  }, {
    type: ActionType.LOAD_PROMO_FILM,
    payload: films[0]
  })).toEqual({
    isLoading: true,
    promoFilm: films[0],
    films
  });
});

it(`Reducer should change the flag status after loading`, () => {
  expect(loadData({
    isLoading: true,
    promoFilm: films[0],
    films
  }, {
    type: ActionType.LOAD_DONE,
    payload: false
  })).toEqual({
    isLoading: false,
    promoFilm: films[0],
    films
  });
});

it(`Reducer should update the list with movies`, () => {
  expect(loadData({
    isLoading: false,
    promoFilm: films[0],
    films
  }, {
    type: ActionType.UPDATE_FILMS,
    payload: updatedFilm
  })).toEqual({
    isLoading: false,
    promoFilm: films[0],
    films: updatedFilms
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API get response to /films`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchingFilms = fetchFilms();

    apiMock
    .onGet(`/films`)
    .reply(200, [{fake: true}]);

    return fetchingFilms(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILMS,
          payload: [{fake: true}]
        });
      });
  });

  it(`Should make a correct API get response to /films/promo`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchingPromoFilm = fetchPromoFilm();

    apiMock
    .onGet(`/films/promo`)
    .reply(200, [{fake: true}]);

    return fetchingPromoFilm(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_PROMO_FILM,
          payload: [{fake: true}]
        });
      });
  });
});
