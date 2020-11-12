import React, {PureComponent} from "react";
import {filmsProps} from '../../props/props';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainScreen from '../main/main';
import LoginScreen from '../login/login';
import MyListScreen from '../my-list/my-list';
import MovieScreen from '../movies/movies';
import AddReviewScreen from '../add-review/add-review';
import PlayerScreen from '../player/player';
import withNewReview from '../../hocks/with-new-review/with-new-review';
import {connect} from 'react-redux';
import {fetchFilms, fetchPromoFilm} from '../../store/action-api';
import {ActionCreator} from '../../store/action';

const NewReviewWrapped = withNewReview(AddReviewScreen);

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Promise.all([
      this.props._fetchFilms(),
      this.props._fetchPromoFilm()
    ])
    .then(() => this.props.loadDone());
  }

  render() {
    const {films, isLoading} = this.props;

    if (isLoading) {
      return <div>Loading...</div>;
    }

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
            <PlayerScreen films={films}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

// Прокидывание redux state в App - временное решение.
// Позднее глобальный state будет только в компоненте main
const mapStateToProps = ({LOAD_DATA}) => ({
  films: LOAD_DATA.films,
  isLoading: LOAD_DATA.isLoading
});

const mapDispatchToProps = (dispatch) => ({
  _fetchFilms() {
    return dispatch(fetchFilms());
  },
  _fetchPromoFilm() {
    return dispatch(fetchPromoFilm());
  },
  loadDone() {
    dispatch(ActionCreator.loadDone());
  }
});

App.propTypes = {
  films: filmsProps.films,
  isLoading: PropTypes.bool.isRequired,
  _fetchFilms: PropTypes.func.isRequired,
  _fetchPromoFilm: PropTypes.func.isRequired,
  loadDone: PropTypes.func.isRequired
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
