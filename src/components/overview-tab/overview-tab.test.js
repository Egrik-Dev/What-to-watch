import React from 'react';
import renderer from 'react-test-renderer';
import OverviewTab from './overview-tab';

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

it(`Should OverviewTab render correctly`, () => {
  const tree = renderer
    .create(
        <OverviewTab
          film={film}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
