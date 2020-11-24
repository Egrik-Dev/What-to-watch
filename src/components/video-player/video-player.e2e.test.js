import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import VideoPlayer from './video-player';

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

it(`Play and pause video by hover`, () => {
  const onHoverVideo = jest.fn();
  const onLeaveVideo = jest.fn();

  const wrapper = shallow(
      <VideoPlayer
        film={film}
      />
  );

  const video = wrapper.find(`video`);

  video.simulate(`mouseenter`);
  expect(onHoverVideo).toHaveBeenCalledTimes(1);
  video.simulate(`mouseleave`);
  expect(onLeaveVideo).toHaveBeenCalledTimes(1);
});
