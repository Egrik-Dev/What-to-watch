import React, {PureComponent} from "react";
import {filmsProps} from '../../props/props';
import PropTypes from 'prop-types';
import {Switch, Route, Router} from 'react-router-dom';
import MainScreen from '../main/main';
import LoginScreen from '../login/login';
import MyListScreen from '../my-list/my-list';
import MovieScreen from '../movies/movies';
import AddReviewScreen from '../add-review/add-review';
import PlayerScreen from '../player/player';
import withNewReview from '../../hocks/with-new-review/with-new-review';
import {connect} from 'react-redux';
import {fetchFilms, fetchPromoFilm, checkAuth} from '../../store/action-api';
import {ActionCreator} from '../../store/action';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../browser-history';

const NewReviewWrapped = withNewReview(AddReviewScreen);

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {fetchFilmsAction, fetchPromoFilmAction, checkAuthAction, loadDone} = this.props;
    Promise.all([
      fetchFilmsAction(),
      fetchPromoFilmAction(),
      checkAuthAction()
    ])
    .then(() => loadDone());
  }

  render() {
    const {films, isLoading} = this.props;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <Router history={browserHistory}>
        <Switch>
          <Route exact path="/">
            <MainScreen />
          </Route>
          <Route exact path="/login">
            <LoginScreen />
          </Route>
          <PrivateRoute
            exact
            path="/mylist"
            render={() => {
              return (
                <MyListScreen films={films}/>
              );
            }}
          />
          <Route exact path="/movies/:id" render={(props) => (
            <MovieScreen
              films={films}
              id={props.match.params.id}
            />
          )} />
          <PrivateRoute
            exact
            path="/movies/:id/review"
            render={(props) => {
              return (
                <NewReviewWrapped id={props.match.params.id} />
              );
            }}
          />
          <Route exact path="/player/:id" render={(props) => (
            <PlayerScreen
              id={props.match.params.id}
              films={films}
            />
          )} />
        </Switch>
      </Router>
    );
  }
}

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

App.propTypes = {
  films: filmsProps.films,
  isLoading: PropTypes.bool.isRequired,
  fetchFilmsAction: PropTypes.func.isRequired,
  fetchPromoFilmAction: PropTypes.func.isRequired,
  loadDone: PropTypes.func.isRequired,
  checkAuthAction: PropTypes.func.isRequired
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
