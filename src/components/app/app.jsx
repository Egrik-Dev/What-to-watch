import React from "react";
import {filmsProps} from '../../props/props';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainScreen from '../main/main';
import LoginScreen from '../login/login';
import MyListScreen from '../my-list/my-list';
import MovieScreen from '../movies/movies';
import AddReviewScreen from '../add-review/add-review';
import PlayerScreen from '../player/player';
import withNewReview from '../../hocks/with-new-review/with-new-review';
import {connect} from 'react-redux';

const NewReviewWrapped = withNewReview(AddReviewScreen);

const App = (props) => {
  const {films} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen />
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
          <NewReviewWrapped />
        </Route>
        <Route exact path="/player/:id">
          <PlayerScreen film={films[1]}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

// Прокидывание redux state в App - временное решение.
// Позднее глобальный state будет только в компоненте main
const mapStateToProps = ({LOAD_DATA}) => ({
  films: LOAD_DATA.films,
});

App.propTypes = filmsProps;

export {App};
export default connect(mapStateToProps)(App);
