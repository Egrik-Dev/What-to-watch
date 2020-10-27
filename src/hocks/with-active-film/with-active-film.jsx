import React, {PureComponent} from 'react';
import {filmsProps} from '../../props/props';

const withActiveFilm = (Component) => {
  class WithActiveFilm extends PureComponent {
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
        <Component
          films={films}
          onHoverHandler={this.onHoverHandler}
        />
      );
    }
  }

  WithActiveFilm.propTypes = filmsProps;

  return WithActiveFilm;
};

export default withActiveFilm;
