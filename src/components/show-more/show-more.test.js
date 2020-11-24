import React from 'react';
import renderer from 'react-test-renderer';
import ShowMore from './show-more';

it(`Should ShowMore render correctly`, () => {
  const tree = renderer
    .create(
        <ShowMore
          onClickShowMoreHandler={() => {}}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
