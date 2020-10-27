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
    id: 1,
    title: `The Grand Budapest Hotel`,
    genre: [`Dramas`],
    releaseDate: 2014,
    rating: `8,9`,
    quantityRatings: 240,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.
    Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    director: `Wes Andreson`,
    actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tony Revoloru`, `Tilda Swinton`, `Tom Wilkinson`, `Owen Wilkinson`, `Adrien Brody`, `Ralph Fiennes`, `Jeff Goldblum`],
    runTime: `99 minutes`,
    img: `/img/macbeth.jpg`,
    bgSrc: `/img/bg-the-grand-budapest-hotel.jpg`,
    poster: `/img/the-grand-budapest-hotel-poster.jpg`,
    video: `https://imdb-video.media-imdb.com/vi1157933593/MV5BMjM3MTY2MTYwOV5BMTFeQW1wNF5BbWU4MDI5MjQzMzEx.mp4?Expires=1603768587&Signature=eTgbkrS0hgPvDoObF924MYsBLTWme-znXqOmFF3DmWEC-Z3Owa0PCkaLjEMikxbIft2JWqWqw9FiivV6XgC6eAJEny5EJrmPj-7fruLMAXoydKY0jx5Q8ntHXsxph5qAFArovY-3dkC-5jqrbDjj4G4NSska5lfWomlXBbqH9qRbbMuduzv829Tos9eFU~tOX4QVbOA7wxomoy1NUiZdThgaqFPV2v56NG0gwbwCKNBSUSpRy-8TSuXYtob-VwFCMFO2ohg-msdn-FfpYIAYPySEhqRIdqpnn8NZEhQS~4rW62hphqs2q~2F2lqrCu8MVmRoYmVr2Fos-csuPGOKDw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA`,
    reviews: reviewsMocks
  }, {
    id: 2,
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
    video: `https://imdb-video.media-imdb.com/vi965130777/1434659607842-pgv4ql-1540579487666.mp4?Expires=1603768671&Signature=nOP5LFcGfwdVQ7xouFWIl8JFc10EHo3BJzR8DTnTyVufiwTmzYmN91-clq80DQK9xovAoxu3xtDxhyqMCzbvSPV8keMTTN-2hMxME7AyNujea8S9qsHUCeekqX7~yozZVLPp~0iH6CEG37cf97A2c6qmEY6BhFvPa5EtChkclLkeshNK6g2sc5d9QQrE1SgOG4WMMU5jQdUWr49MzThhHPLraHQwrP~1YioiKW71gMIJo7uvlmpsENwfLcLnlOURwkEC0eQw5fSlgvyC4bnUHgLKHSlesedMT7QD4SjNtYAds4X52wYrf4gf2dOjq-2i~XpRWbqjZCoD0zl3KEtf6g__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA`,
    reviews: reviewsMocks
  }, {
    id: 3,
    title: `Bohemian Rhapsody`,
    genre: [`Biography`, `Dramas`, `Music`],
    releaseDate: 2018,
    rating: `8,0`,
    quantityRatings: 369,
    description: `is a 2018 biographical Dramas film about Freddie Mercury, the lead singer of the British rock band Queen. It was directed by Bryan Singer[a] from a screenplay by Anthony McCarten, and produced by Graham King and Queen manager Jim Beach. It stars Rami Malek as Mercury, with Lucy Boynton, Gwilym Lee, Ben Hardy, Joe Mazzello, Aidan Gillen, Tom Hollander, Allen Leech, and Mike Myers in supporting roles. Queen members Brian May and Roger Taylor served as consultants. A British-American venture, the film was produced by 20th Century Fox, Regency Enterprises, GK Films, and Queen Films, with Fox serving as distributor. The film follows the singer's life from the formation of the band up to their 1985 Live Aid performance at the original Wembley Stadium.`,
    director: `Bryan Singer`,
    actors: [`Rami Malek`, `Lucy Boynton`, `Gwilym Lee`, `Ben Hardy`, `Joe Mazzello`, `Aidan Gillen`, `Allen Leech`, `Tom Hollander`, `Mike Myers`],
    runTime: `134 minutes`,
    img: `/img/bohemian-rhapsody.jpg`,
    bgSrc: `/img/bg-bohemian-rhapsody.jpg`,
    poster: `/img/Bohemian_Rhapsody_poster.jpg`,
    video: `https://imdb-video.media-imdb.com/vi1451538969/1434659607842-pgv4ql-1540474852592.mp4?Expires=1603161752&Signature=Jdi4SlLYijbc8X4fMxtb9jzY7ch06dbUvgWpAZ3TO4HrnXnojmX5yBxzHpZinFzk7P5uL0iLewJRR3ZZpvZTYaLHZJLHM1BLqhXlWfcKMGf-WUvB1i3~LKu0o2phIcj993PNDaBmfAlZ-HNl6Z5Xmeoedhjvo8fF5XKN8wnei3Ra2NxRSJCuUn00VZEw2hfWrDJF8gj4rHd4GdLY1EMXAjXxfaasaiGKhiZTKSplSTRR~sFWUmY62pw0OZ9EHIYo3-qszOtenekY1UgnF3XG5HVuPbwimIosq72svOdEIhFbHEiIoYCKl5HWgRtcg3lgPF7OIL3sLkHdABb9jK4N-A__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA`,
    reviews: reviewsMocks
  }, {
    id: 4,
    title: `Macbeth`,
    genre: [`Dramas`, `History`, `War`],
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
    video: `https://imdb-video.media-imdb.com/vi3526864921/1401497881123-xszl4z-1433432600712.mp4?Expires=1603161781&Signature=ROaWSiUaszgs4yKv6mhUDv6JHaQD9wM7fhc0Oom58VTUWHzXl7h~9iVtwpvge6WpKDdSMODwNNf-I3qRIgOP6yKaB9k3i1g8s8m760fBtfHbTV5vladoUL~IRHNa4mgQgjD-zDOlrmDXJXgQg1zkFnga44iyiJeLIyWBgMQctZ7FAxzPi1FDwg6OqDDcOhfktnh4V-fOvrWEY3NANztEvWeyt-1kCyTMY1MvpxI8F8hptjzanQsx437n1k7xTq2VirS4heKsLxQ-QVuAtp2sMBUy3rbhIoPWNCjtaQMXvOmqF5kyWigctpr~nXypwT9zG7UEpoMnEFPhYV~58EneYA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA`,
    reviews: reviewsMocks
  }, {

    id: 5,
    title: `The Aviator`,
    genre: [`Biography`, `Dramas`],
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
    video: `https://imdb-video.media-imdb.com/vi3947888665/1434659607842-pgv4ql-1564591874324.mp4?Expires=1603161810&Signature=tLCiPA6y6tzES1OUPpfg4ACcJNgAohwoPNO4XDx9Z9-ngNh01GYDGLGGc3uWn2dxDEONWYkoBktX1z6gOEkMrv3DyxmzNqxvT3dIDjuRZisKkobblxeAFLL9KJZhbFu2QU0SNW1EAaI6Cj2yypvSBOa625mqrqvJ2EcR4Z-Ml5RNXbDVQo-dxcHiPa39r0rEslFtlYYTJQ9ajwbyKyQLPGN9E-XDytSkUj2AOTCW4DI8-l8KwKW9mETJE1cO0EmNFC3eIQu6mOccvnApfvMVuqLFU3tW3pL33TZxCl2wE1dneHmlGUpB5O5cxAKwenafpNxuBBl5b94wkj~KOvOZ4A__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA`,
    reviews: reviewsMocks
  }, {
    id: 6,
    title: `Shutter Island`,
    genre: [`Mystery`, `Thrillers`],
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
    video: `https://imdb-video.media-imdb.com/vi4064281/MV5BODNkZjg2YTItNzdkYy00N2M5LWI1MjQtZmMyMTVkY2RjODU4XkExMV5BbXA0XkFpbWRiLWV0cy10cmFuc2NvZGU@.mp4?Expires=1603161836&Signature=KCI-YhwGO1MB9pyPIOAO1~6eTZu-pyOtF5nHRacH3Gm72jwVU5S7mk0C195LkeR0yPnNQmXHwt6SxpMMjpIiyJSjXgcuqz0oP2yJISp6iL-8gO9lDW9qBJsZmhRP-sCdoLi8MC7UBzww0NF0BT7YJA-DW6hG-oA-D5x1GurpXrIoAhD4y~bEKRYJKpuYDwp3yY0wyGHprNClVpEEZS9ygP58niHMGcyaF~K09AKXOZceSG2NO9jyiytOlXB34fx2gandTcQHNy-qcdOMm65CrD02EHWPr6sxKCTWFq3ghmEbC5XW1cuuicfNFGYMCxdnbSgqrR-528DacEOg17pKbQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA`,
    reviews: reviewsMocks
  }, {
    id: 7,
    title: `Pulp Fiction`,
    genre: [`Crime`, `Dramas`],
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
    video: `https://imdb-video.media-imdb.com/vi2620371481/1434659607842-pgv4ql-1450205469045.mp4?Expires=1603161868&Signature=dKEPkwu83ODXkk9QBpDTHYfT5K7yZmJFVPJPtnfK6HwfRhOk~HnCobAE0H9x0YHbgmDvCAvoT8EoDChFSQpNym4adB4aOup5H8qMLd83In7gO7m3-kcvHXRQWVALVuTkjaYahByU01B0x30LfUE-YFIHXfgxt6LXxKS~heBLMJzbBcI93TivAkbXnFzgAdUBUMpXN8B59yh4iDcS44-zkQWNfkPM8M1qhpeL4HAJT2XZRgzMTJoM25scVcPAutfZ6zW0iBedLVOL764W7OYdK7EfgeiDNW-rSn9m5n4uKEcadvcZH3QcVS0A~R~APns1PlDzvoMU0BWlFg1WGyM7HQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA`,
    reviews: reviewsMocks
  }, {
    id: 8,
    title: `No Country for Old Men`,
    genre: [`Crime`, `Dramas`, `Thrillers`],
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
    video: `https://imdb-video.media-imdb.com/vi145883417/MV5BZjkyMzE1YzItOWE1ZS00MjE3LWE4MWItNjAwOTAyNDgxODI1XkExMV5BbXA0XkFpbWRiLWV0cy10cmFuc2NvZGU@.mp4?Expires=1603161901&Signature=oPCNFH1WL8ZTEYjGkcW7iaEKbSPA1w121PlI6TDIZcAVT1CzUOdCtc6Szu~dtbPZY88vk2Dq2X4X5Wq8Xm97qVPFkqwEB8yl182z9pg7~gjaTRLrk1KBfazpeiTuzPA40axorYeMejuD94OUzjTCNciAW344RQ6SaKAi-fREHFEYov46EO1sHR3GyLwBn0scxOuBUh2jPjSTBUc2p067JBI0~XTXCRVyslqEctIPlPRYGYStExp8K-LlLu~39DMfCjsusNcQIWtJ-wLCq~BiW3oarcFerQKwpd-F544tvTpR52UPE9MXx8I2HQ0LKDwov8-dweqSnnarSTJf~zIDtg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA`,
    reviews: reviewsMocks
  }
];

export default films;
