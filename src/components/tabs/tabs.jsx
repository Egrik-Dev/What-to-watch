import React from 'react';
import PropTypes from 'prop-types';
import {filmProps} from '../../props/props';
import {arrTabs} from '../../const';
import {FilmTabs} from '../../const';
import OverviewTab from '../overview-tab/overview-tab';
import DetailsTab from '../details-tab/details-tab';
import ReviewsTab from '../reviews-tab/reviews-tab';

const Tabs = (props) => {
  const {activeTab, film, clickTabHandler} = props;

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {arrTabs.map((tab, i) => (
            <li
              className={`movie-nav__item ${activeTab === tab[1] ? `movie-nav__item--active` : ``}`}
              key={i}
              onClick={clickTabHandler}
            >
              <a href="#" className="movie-nav__link">{tab[1]}</a>
            </li>
          ))}
        </ul>
      </nav>

      {activeTab === FilmTabs.OVERVIEW &&
        <OverviewTab
          film={film}
        />
      }

      {activeTab === FilmTabs.DETAILS &&
        <DetailsTab
          film={film}
        />
      }

      {activeTab === FilmTabs.REVIEWS &&
        <ReviewsTab
          film={film}
        />
      }
    </div>
  );
};

Tabs.propTypes = {
  film: PropTypes.shape(filmProps),
  activeTab: PropTypes.string.isRequired,
  clickTabHandler: PropTypes.func.isRequired
};

export default Tabs;
