export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const camelize = (str) => {
  return str
    .split(`_`)
    .map(
        (word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(``);
};
