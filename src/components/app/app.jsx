import React from "react";
import {filmsProps} from '../../props/props';
import PropTypes from 'prop-types';
import {Switch, Route, Router} from 'react-router-dom';
import MainScreen from '../main/main';
import LoginScreen from '../login/login';
import MyListScreen from '../my-list/my-list';
import MovieScreen from '../movies/movies';
import AddReview from '../add-review/add-review';
import PlayerScreen from '../player/player';
import {connect} from 'react-redux';
import {fetchFilms, checkAuth, fetchPromoFilm} from '../../store/action-api';
import {ActionCreator} from '../../store/action';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../browser-history';
import {AppRoute} from "../../const";

const App = (props) => {
  React.useEffect(() => {
    const {fetchFilmsAction, checkAuthAction, loadDone, fetchPromoFilmAction} = props;
    Promise.all([
      fetchFilmsAction(),
      fetchPromoFilmAction(),
      checkAuthAction()
    ])
    .then(() => loadDone());
  }, []);

  const {films, isLoading} = props;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainScreen />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <LoginScreen />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MY_LIST}
          render={() => {
            return (
              <MyListScreen films={films}/>
            );
          }}
        />
        <Route exact path={`${AppRoute.MOVIE_PAGE}/:id`} render={(movieProps) => (
          <MovieScreen
            films={films}
            id={movieProps.match.params.id}
          />
        )} />
        <PrivateRoute
          exact
          path={`${AppRoute.MOVIE_PAGE}/:id${AppRoute.REVIEW}`}
          render={(reviewProps) => {
            return (
              <AddReview id={reviewProps.match.params.id} />
            );
          }}
        />
        <Route exact path={`${AppRoute.PLAYER}/:id`} render={(playerProps) => (
          <PlayerScreen
            id={playerProps.match.params.id}
            films={films}
          />
        )} />
      </Switch>
    </Router>
  );
};

App.propTypes = {
  films: filmsProps.films,
  isLoading: PropTypes.bool.isRequired,
  fetchFilmsAction: PropTypes.func.isRequired,
  loadDone: PropTypes.func.isRequired,
  checkAuthAction: PropTypes.func.isRequired,
  fetchPromoFilmAction: PropTypes.func.isRequired,
};

const mapStateToProps = ({LOAD_DATA}) => ({
  films: LOAD_DATA.films,
  isLoading: LOAD_DATA.isLoading
});

const mapDispatchToProps = (dispatch) => ({
  fetchFilmsAction() {
    return dispatch(fetchFilms());
  },
  fetchPromoFilmAction() {
    return dispatch(fetchPromoFilm());
  },
  checkAuthAction() {
    dispatch(checkAuth());
  },
  loadDone() {
    dispatch(ActionCreator.loadDone());
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
