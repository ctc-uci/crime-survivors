const whiteSpaceToDash = (string) => string.replace(/ /g, '-');

/* Example:
*     pathify(["Orange County", "Legal"], "AARP Legal Network Services", false, true)
*     returns
*     "Orange-County/Legal#AARP-Legal-Network-Services"
*/
const pathify = (pathArray, resource = null, endWithForwardSlash = false, fullPath = false) => {
  const reducer = (acc, cur) => {
    if (cur === null) {
      return acc;
    }
    return `${whiteSpaceToDash(acc)}/${whiteSpaceToDash(cur.replace(/[^a-zA-Z0-9\- ]/g, ''))}`;
  };
  let urlPath = pathArray.reduce(reducer);
  urlPath += endWithForwardSlash === true ? '/' : '';
  urlPath += resource !== null ? `#${whiteSpaceToDash(resource)}` : '';
  if (fullPath === true) {
    /* eslint-disable no-undef, no-console */
    if (typeof window === 'undefined') {
      console.warn('Window property does not exist, cannot retrieve hostname, fullPath=true flag ignored.');
    } else {
      urlPath = `${window.location.hostname}/${urlPath}`;
    }
    /* eslint-enable no-undef, no-console */
  }
  return encodeURI(urlPath);
};

const anotherFunction = () => 'hello world';

module.exports = {
  anotherFunction,
  pathify,
  whiteSpaceToDash,
};
