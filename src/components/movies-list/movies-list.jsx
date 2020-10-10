import React, {PureComponent} from 'react';
import {filmsProps} from '../../props/props';
import MovieCard from '../movie-card/movie-card';

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      avtiveFilm: {}
    };
    this.onHoverHandler = this._onHoverHandler.bind(this);
  }

  _onHoverHandler(activeMovie) {
    this.setState(() => ({
      avtiveFilm: activeMovie
    }));
  }

  render() {
    const {films} = this.props;
    return (
      films.map((film, i) => <MovieCard
        key={i}
        film={film}
        onHover={this.onHoverHandler}
      />)
    );
  }
}

MoviesList.propTypes = filmsProps;

export default MoviesList;
