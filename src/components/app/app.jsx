import React from "react";
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainScreen from '../main/main';
import LoginScreen from '../login/login';
import MyListScreen from '../my-list/my-list';
import MovieScreen from '../movies/movies';
// import AddReviewScreen from '../add-review/add-review';
// import PlayerScreen from '../player/player';

const App = (props) => {
  const {titleMovie, genreMovie, releaseMovie} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen
            titleMovie={titleMovie}
            genreMovie={genreMovie}
            releaseMovie={releaseMovie}
          />
        </Route>
        <Route exact path="/login">
          <LoginScreen />
        </Route>
        <Route exact path="/mylist">
          <MyListScreen />
        </Route>
        <Route exact path="/movies/:id">
          <MovieScreen />
        </Route>
        {/* <Route exact path="/films/:id/review">
          <AddReviewScreen />
        </Route>
        <Route exact path="/player/:id">
          <PlayerScreen />
        </Route> */}
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  titleMovie: PropTypes.string.isRequired,
  genreMovie: PropTypes.string.isRequired,
  releaseMovie: PropTypes.number.isRequired
};

export default App;
