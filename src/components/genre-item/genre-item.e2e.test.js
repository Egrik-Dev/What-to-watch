import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GenreItem from './genre-item';

const genre = [`ALL_GENRES`, `All genres`];

configure({adapter: new Adapter()});
const handleFilterChange = jest.fn();
const filterChangePrevention = jest.fn();

describe(`Genre tabs should be clicked`, () => {
  it(`Click on not active Filter tab`, () => {
    const wrapper = shallow(
        <GenreItem
          isActiveGenre={false}
          genre={genre}
          onFilterChange={handleFilterChange}
        />
    );

    wrapper.find(`.catalog__genres-link`).simulate(`click`, {
      preventDefault: filterChangePrevention,
    });
    expect(handleFilterChange).toHaveBeenCalledTimes(1);
  });

  it(`Cick on active Filter tab`, () => {
    const wrapper = shallow(
        <GenreItem
          isActiveGenre={true}
          genre={genre}
          onFilterChange={handleFilterChange}
        />
    );

    wrapper.find(`.catalog__genres-link`).simulate(`click`, {
      preventDefault: filterChangePrevention,
    });
    expect(handleFilterChange).toHaveBeenCalledTimes(1);
  });
});

