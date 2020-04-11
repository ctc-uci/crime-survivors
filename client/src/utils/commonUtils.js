const fixStringForWindows = (stringToFix) => {
  if (stringToFix != null) {
    return stringToFix.replace(/[^a-zA-Z0-9\- ]/g, '');
  }
  return stringToFix;
};

const generatePath = (category, title) => {
  if (title === '') {
    return `/${fixStringForWindows(category)}`;
  }
  return `/${fixStringForWindows(category)}/${fixStringForWindows(title)}`;
};

const anotherFunction = () => 'hello world';

module.exports = {
  generatePath,
  anotherFunction,
};
