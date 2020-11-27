import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {AddNewReview} from './add-new-review';

const mockEvent = {
  preventDefault() {}
};

configure({adapter: new Adapter()});

it(`Sending feedback on a click with correct data`, () => {
  const handleSubmitReview = jest.fn(() => Promise.reject());
  const id = `0`;

  const wrapper = shallow(
      <AddNewReview
        id={id}
        postReviewAction={handleSubmitReview}
      />
  );

  const text = wrapper.find(`.add-review__textarea`);
  const rating = wrapper.find(`.rating__input`);
  const answerOne = rating.at(0);
  const postReview = wrapper.find(`.add-review__btn`);

  text.simulate(`change`, {
    target: {value: `Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem`}
  });

  answerOne.simulate(`change`, {
    target: {value: `4`}
  });

  postReview.simulate(`click`, mockEvent);

  expect(handleSubmitReview).toHaveBeenCalledTimes(1);
  expect(handleSubmitReview).toHaveBeenCalled();
});
