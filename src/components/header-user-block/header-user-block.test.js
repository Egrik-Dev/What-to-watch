import React from 'react';
import renderer from 'react-test-renderer';
import HeaderUserBlock, {HeaderUserBlock as HeaderUserBlockWithoutStore} from './header-user-block';
import {Route, Router} from 'react-router-dom';
import browserHistory from '../../browser-history';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

it(`Should HeaderUserBlockWithoutStore render correctly with Authorization Status`, () => {
  const tree = renderer
    .create(
        <Router history={browserHistory}>
          <Route>
            <HeaderUserBlockWithoutStore
              authorizationStatus={`AUTH`}
              avatar={`https://assets.htmlacademy.ru/intensives/javascript-3/avatar/3.jpg`}
            />
          </Route>
        </Router>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Should HeaderUserBlockWithoutStore render correctly without Authorization Status`, () => {
  const tree = renderer
    .create(
        <Router history={browserHistory}>
          <Route>
            <HeaderUserBlockWithoutStore
              authorizationStatus={`NO_AUTH`}
              avatar={``}
            />
          </Route>
        </Router>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

describe(`Render connected to store component`, () => {
  const mockStore = configureStore([]);
  let store = null;
  let HeaderUserBlockComponent = null;

  beforeEach(() => {
    store = mockStore({
      USER: {
        authorizationStatus: `AUTH`,
        avatar: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/3.jpg`
      }
    });

    HeaderUserBlockComponent = renderer.create(
        <Provider store={store}>
          <Router history={browserHistory}>
            <Route>
              <HeaderUserBlock />
            </Route>
          </Router>
        </Provider>
    );
  });

  it(`Should HeaderUserBlock connected to store render correctly`, () => {
    expect(HeaderUserBlockComponent.toJSON()).toMatchSnapshot();
  });
});
