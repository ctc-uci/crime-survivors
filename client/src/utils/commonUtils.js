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

/* Example:
*     pathify(["Orange County", "Legal"], "AARP Legal Network Services")
*     returns
*     "Orange%20County/Legal#AARP%20Legal%20Network%20Services"
*/
const pathify = (pathArray, resource = null, endWithForwardSlash = false) => {
  const reducer = (acc, cur) => {
    if (cur == null) {
      return acc;
    }
    return `${acc}/${cur.replace(/[^a-zA-Z0-9\- ]/g, '')}`;
  };
  let urlPath = pathArray.reduce(reducer);
  urlPath += endWithForwardSlash === true ? '/' : '';
  urlPath += resource !== null ? `#${resource}` : '';
  return urlPath;
};

const anotherFunction = () => 'hello world';

module.exports = {
  generatePath,
  anotherFunction,
  pathify,
};
