import React from 'react';
import renderer from 'react-test-renderer';
import {ReviewsTab} from './reviews-tab';
import thunk from 'redux-thunk';
import {createApi} from '../../services/api';
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

const film = {
  name: `Bronson`,
  description: `A young man who was sentenced to seven years in prison for robbing a post office ends up spending three decades in solitary confinement. During this time, his own personality is supplanted by his alter-ego, Charles Bronson.`,
  rating: 3.6,
  director: `Nicolas Winding Refn`,
  genre: `Action`,
  released: 2008,
  id: 1,
  posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/bronson.jpg`,
  previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/bronson.jpg`,
  backgroundImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/bronson.jpg`,
  backgroundColor: `#73B39A`,
  scoresCount: 109661,
  runTime: 92,
  isFavorite: true,
  videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
  previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  starring: [`Tom Hardy`, `Kelly Adams`, `Luing Andrews`]
};

const comments = [
  {
    id: 1,
    user: {
      id: 12,
      name: `Isaak`
    },
    rating: 4.6,
    comment: `Poised to be an instant classic`,
    date: `2020-10-29T13:38:44.769Z`
  },
  {
    id: 2,
    user: {
      id: 12,
      name: `Ben`
    },
    rating: 7.6,
    comment: `Something comment Something comment Something comment`,
    date: `2020-11-22T10:33:02.936Z`
  }
];

const api = createApi({onError: () => {}});

describe(`Render connected to store component`, () => {
  const middlewares = [thunk.withExtraArgument(api)];
  const createMockStore = configureStore(middlewares);
  const mockStore = createMockStore();

  it(`Should ReviewsTab render correctly`, () => {
    const fetchComments = jest.fn(() => Promise.resolve());
    const tree = renderer
      .create(
          <Provider store={mockStore}>
            <ReviewsTab
              film={film}
              fetchCommentsAction={fetchComments}
              isLoadingProp={false}
              commentsProp={comments}
            />
          </Provider>
      );

    fetchComments();
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
