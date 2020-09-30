import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/app';

const MOVIES = {
  PROMO_MOVIE: {
    title: `The Grand Budapest Hotel`,
    genre: `Drama`,
    year: 2014
  }
};

ReactDOM.render(
    <App
      titleMovie={MOVIES.PROMO_MOVIE.title}
      genreMovie={MOVIES.PROMO_MOVIE.genre}
      releaseMovie={MOVIES.PROMO_MOVIE.year}
    />,
    document.querySelector(`#root`)
);
