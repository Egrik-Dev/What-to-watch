import React from 'react';
import renderer from 'react-test-renderer';
import GenreItem from './genre-item';

const genre = [`ALL_GENRES`, `All genres`];

it(`Should GenreItem render correctly if it is not an active genre`, () => {
  const tree = renderer
    .create(<GenreItem
      isActiveGenre={false}
      genre={genre}
      onFilterChange={() => {}}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Should GenreItem render correctly if it is an active genre`, () => {
  const tree = renderer
    .create(<GenreItem
      isActiveGenre={true}
      genre={genre}
      onFilterChange={() => {}}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
