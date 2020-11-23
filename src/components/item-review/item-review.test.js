import React from 'react';
import renderer from 'react-test-renderer';
import ItemReview from './item-review';

const comment = {
  id: 1,
  user: {
    id: 18,
    name: `Ben`
  },
  rating: 3.7,
  comment: `I love this movie. This film is a milestone in cinematography. Great Immersive camera-work.`,
  date: `2020-10-09T13:38:44.769Z`
};

it(`Should ItemReview render correctly`, () => {
  const tree = renderer
    .create(
        <ItemReview
          comment={comment}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
