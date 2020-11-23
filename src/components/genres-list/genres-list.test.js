import React from 'react';
import renderer from 'react-test-renderer';
import GenresList from './genres-list';

it(`Should GenresList render correctly`, () => {
  const tree = renderer
    .create(<GenresList
      onFilterChange={() => {}}
      activeGenre={`ALL_GENRES`}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
