import React from 'react';
import renderer from 'react-test-renderer';
import {AddNewReview} from './add-new-review';

it(`Should AddNewReview render correctly`, () => {
  const tree = renderer
    .create(<AddNewReview
      id={`2`}
      postReviewAction={() => {}}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
