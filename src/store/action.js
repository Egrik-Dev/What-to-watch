import {camelize} from '../utils';

export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  LOAD_DONE: `LOAD_DONE`,
};

const camelizeFilm = (film) => {
  for (let key in film) {
    if (key.includes(`_`)) {
      const newKey = camelize(key);
      film[newKey] = film[key];
      delete film[key];
    }
  }

  return film;
};

const editingFilmsData = (movies) => {
  movies.map((film) => camelizeFilm(film));
  return movies;
};

export const ActionCreator = {
  loadFilms: (data) => ({
    type: ActionType.LOAD_FILMS,
    payload: editingFilmsData(data)
  }),
  loadPromoFilm: (promoFilm) => ({
    type: ActionType.LOAD_PROMO_FILM,
    payload: camelizeFilm(promoFilm)
  }),
  loadDone: () => ({
    type: ActionType.LOAD_DONE,
    payload: false
  }),
  onFilterChange: (selectedGenre) => ({
    type: ActionType.CHANGE_GENRE,
    genre: selectedGenre
  })
};
