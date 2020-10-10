const reviewsMocks = [
  {
    author: `Kate Muir`,
    comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    rating: `8,9`,
    date: `24.12.2016`
  }, {
    author: `Bill Goodykoontz`,
    comment: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
    rating: `8,0`,
    date: `18.11.2015`
  }, {
    author: `Amanda Greever`,
    comment: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
    rating: `8,0`,
    date: `18.11.2015`
  }, {
    author: `Matthew Lickona`,
    comment: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
    rating: `7,2`,
    date: `20.12.2016`
  }, {
    author: `Paula Fleri-Soler`,
    comment: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
    rating: `7,6`,
    date: `09.04.2017`
  }
];

const films = [
  {
    title: `The Grand Budapest Hotel`,
    genre: [`Drama`],
    releaseDate: 2014,
    rating: `8,9`,
    quantityRatings: 240,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.
    Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    director: `Wes Andreson`,
    actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tony Revoloru`, `Tilda Swinton`, `Tom Wilkinson`, `Owen Wilkinson`, `Adrien Brody`, `Ralph Fiennes`, `Jeff Goldblum`],
    runTime: `99 minutes`,
    img: `/img/the-grand-budapest-hotel-poster.jpg`,
    bgSrc: `/img/bg-the-grand-budapest-hotel.jpg`,
    poster: `/img/the-grand-budapest-hotel-poster.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    reviews: reviewsMocks
  }, {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    genre: [`Adventure`, `Family`, `Fantasy`],
    releaseDate: 2018,
    rating: `6,6`,
    quantityRatings: 176,
    description: `is a 2018 fantasy film directed by David Yates and written by J. K. Rowling. A joint American and British production, it is the sequel to Fantastic Beasts and Where to Find Them (2016). It is the second installment in the Fantastic Beasts film series and the tenth overall in the Wizarding World franchise, which began with the Harry Potter film series. The film features an ensemble cast that includes Eddie Redmayne, Katherine Waterston, Dan Fogler, Alison Sudol, Ezra Miller, Zoë Kravitz, Callum Turner, Claudia Kim, William Nadylam, Kevin Guthrie, Jude Law, and Johnny Depp. The plot follows Newt Scamander and Albus Dumbledore as they attempt to take down the dark wizard Gellert Grindelwald while facing new threats in a more divided wizarding world.`,
    director: `David Yates`,
    actors: [`Eddie Redmayne`, `Katherine Waterston`, `Dan Fogler`, `Alison Sudol`, `Ezra Miller`, `Zoë Kravitz`, `Callum Turner`, `Claudia Kim`, `William Nadylam`, `Kevin Guthrie`, `Jude Law`, `Johnny Depp`],
    runTime: `134 minutes`,
    img: `/img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    bgSrc: `/img/bg-Fantastic-Beasts-The-Crimes-of-Grindelwald-movie-cast.jpg`,
    poster: `/img/fantastic-beasts-poster.jpg`,
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    reviews: reviewsMocks
  }, {
    title: `Bohemian Rhapsody`,
    genre: [`Biography`, `Drama`, `Music`],
    releaseDate: 2018,
    rating: `8,0`,
    quantityRatings: 369,
    description: `is a 2018 biographical drama film about Freddie Mercury, the lead singer of the British rock band Queen. It was directed by Bryan Singer[a] from a screenplay by Anthony McCarten, and produced by Graham King and Queen manager Jim Beach. It stars Rami Malek as Mercury, with Lucy Boynton, Gwilym Lee, Ben Hardy, Joe Mazzello, Aidan Gillen, Tom Hollander, Allen Leech, and Mike Myers in supporting roles. Queen members Brian May and Roger Taylor served as consultants. A British-American venture, the film was produced by 20th Century Fox, Regency Enterprises, GK Films, and Queen Films, with Fox serving as distributor. The film follows the singer's life from the formation of the band up to their 1985 Live Aid performance at the original Wembley Stadium.`,
    director: `Bryan Singer`,
    actors: [`Rami Malek`, `Lucy Boynton`, `Gwilym Lee`, `Ben Hardy`, `Joe Mazzello`, `Aidan Gillen`, `Allen Leech`, `Tom Hollander`, `Mike Myers`],
    runTime: `134 minutes`,
    img: `/img/bohemian-rhapsody.jpg`,
    bgSrc: `/img/bg-bohemian-rhapsody.jpg`,
    poster: `/img/Bohemian_Rhapsody_poster.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    reviews: reviewsMocks
  }, {
    title: `Macbeth`,
    genre: [`Drama`, `History`, `War`],
    releaseDate: 2015,
    rating: `6,6`,
    quantityRatings: 107,
    director: `Justin Kurzel`,
    description: `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`,
    actors: [`Michael Fassbender`, `Marion Cotillard`, `Paddy Considine`, `Sean Harris`, `Jack Reynor`, `Elizabeth Debicki`, `David Thewlis`],
    runTime: `113 minutes`,
    img: `/img/macbeth.jpg`,
    bgSrc: `/img/bg-macbeth.jpg`,
    poster: `/img/macbeth-poster.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    reviews: reviewsMocks
  }, {
    title: `The Aviator`,
    genre: [`Biography`, `Drama`],
    releaseDate: 2004,
    rating: `7,5`,
    quantityRatings: 719,
    director: `Martin Scorsese`,
    description: `A biopic depicting the early years of legendary Director and aviator Howard Hughes' career from the late 1920s to the mid 1940s.`,
    actors: [`Leonardo DiCaprio`, `Cate Blanchett`, `Kate Beckinsale`, `John C. Reilly`, `Alec Baldwin`, `Alan Alda`, `Jude Law`],
    runTime: `170 minutes`,
    img: `/img/aviator.jpg`,
    bgSrc: `/img/bg-aviator.jpg`,
    poster: `/img/aviator-poster.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    reviews: reviewsMocks
  }, {
    title: `Shutter Island`,
    genre: [`Mystery`, `Thriller`],
    releaseDate: 2010,
    rating: `8,2`,
    quantityRatings: 1103,
    director: `Martin Scorsese`,
    description: `In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.`,
    actors: [`Leonardo DiCaprio`, `Mark Ruffalo`, `Ben Kingsley`, `Michelle Williams`, `Emily Mortimer`, `Patricia Clarkson`, `Max von Sydow`],
    runTime: `138 minutes`,
    img: `/img/shutter-island.jpg`,
    bgSrc: `/img/bg-shutter-island.jpg`,
    poster: `/img/shutter-island-poster.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    reviews: reviewsMocks
  }, {
    title: `Pulp Fiction`,
    genre: [`Crime`, `Drama`],
    releaseDate: 1994,
    rating: `8,9`,
    quantityRatings: 1721,
    director: `Quentin Tarantino`,
    description: `The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.`,
    actors: [`John Travolta`, `Samuel L. Jackson`, `Uma Thurman`, `Harvey Keitel`, `Tim Roth`, `Amanda Plummer`, `Maria de Medeiros`, `Ving Rhames`, `Eric Stoltz`, `Rosanna Arquette`, `Bruce Willis`],
    runTime: `154 minutes`,
    img: `/img/pulp-fiction.jpg`,
    bgSrc: `/img/bg-pulp-fiction.jpg`,
    poster: `/img/pulp-fiction-poster.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    reviews: reviewsMocks
  }, {
    title: `No Country for Old Men`,
    genre: [`Crime`, `Drama`, `Thriller`],
    releaseDate: 2007,
    rating: `8,1`,
    quantityRatings: 452,
    director: `Ethan Coen`,
    description: `Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.`,
    actors: [`Tommy Lee Jones`, `Javier Bardem`, `Josh Brolin`],
    runTime: `122 minutes`,
    img: `/img/no-country-for-old-men.jpg`,
    bgSrc: `/img/bg-no-country-for-old-men.jpg`,
    poster: `/img/no-country-for-old-men.jpg-poster`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    reviews: reviewsMocks
  }
];

export default films;
