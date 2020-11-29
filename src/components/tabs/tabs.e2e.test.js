import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow} from 'enzyme';
import Tabs from './tabs';

configure({adapter: new Adapter()});

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

it(`Clicking on the tab should call the handler function`, () => {
  const handleTabClick = jest.fn();
  const wrapper = shallow(
      <Tabs
        film={film}
        activeTab={`Overview`}
        handleTabClick={handleTabClick}
      />
  );
  const tabs = wrapper.find(`.movie-nav__item`);
  expect(tabs).toHaveLength(3);

  const secondTab = tabs.at(2);
  secondTab.simulate(`click`);
  expect(handleTabClick).toHaveBeenCalledTimes(1);
});
