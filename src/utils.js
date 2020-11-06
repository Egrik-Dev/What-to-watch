import {MINUTES_PER_HOUR, Months} from './const';
import {Genres} from './const';

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const camelize = (str) => {
  return str
    .split(`_`)
    .map(
        (word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(``);
};

export const formattingRuntime = (min) => {
  const hours = Math.floor(min / MINUTES_PER_HOUR);
  const minutes = min % MINUTES_PER_HOUR;
  return (hours > 0) ? `${hours}h ${minutes}m` : `${minutes}m`;
};

export const dateParse = (str) => {
  let date = new Date(Date.parse(str));

  const year = date.getFullYear();
  const month = Months[date.getMonth()];
  const day = (`0` + date.getDate()).slice(-2);

  return `${month} ${day}, ${year}`;
};

export const filterFilms = (films, genre) => {
  if (genre === Genres.ALL_GENRES) {
    return films;
  }

  return films.filter((film) => film.genre === genre);
};
