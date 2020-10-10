import React from "react";
import {filmsProps} from '../../props/props';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainScreen from '../main/main';
import LoginScreen from '../login/login';
import MyListScreen from '../my-list/my-list';
import MovieScreen from '../movies/movies';
import AddReviewScreen from '../add-review/add-review';
import PlayerScreen from '../player/player';

const App = (props) => {
  const {films} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen
            films={films}
          />
        </Route>
        <Route exact path="/login">
          <LoginScreen />
        </Route>
        <Route exact path="/mylist">
          <MyListScreen films={films}/>
        </Route>
        <Route exact path="/movies/:id">
          <MovieScreen films={films}/>
        </Route>
        <Route exact path="/movies/:id/review">
          <AddReviewScreen film={films[3]}/>
        </Route>
        <Route exact path="/player/:id">
          <PlayerScreen film={films[1]}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = filmsProps;

export default App;
