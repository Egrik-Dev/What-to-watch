import films from '../mocks/films';
import {Genres} from '../const';

export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  GET_FILMS: `GET_FILMS`
};

const getFilmsByGenre = (genre) => {
  return films.filter((film) => film.genre.includes(Genres[genre]));
};

export const ActionCreator = {
  onFilterChange: (selectedGenre) => ({
    type: ActionType.CHANGE_GENRE,
    genre: selectedGenre
  }),
  getFilms: (selectedGenre) => ({
    type: ActionType.GET_FILMS,
    films: getFilmsByGenre(selectedGenre),
    genre: selectedGenre
  }),
};
