const whiteSpaceToDash = (string) => string.replace(/ /g, '-');

/* Example:
*     pathify(["Orange County", "Legal"], "AARP Legal Network Services")
*     returns
*     "Orange-County/Legal#AARP-Legal-Network-Services"
*/
const pathify = (pathArray, resource = null, endWithForwardSlash = false) => {
  const reducer = (acc, cur) => {
    if (cur == null) {
      return acc;
    }
    return `${whiteSpaceToDash(acc)}/${whiteSpaceToDash(cur.replace(/[^a-zA-Z0-9\- ]/g, ''))}`;
  };
  let urlPath = pathArray.reduce(reducer);
  urlPath += endWithForwardSlash === true ? '/' : '';
  urlPath += resource !== null ? `#${whiteSpaceToDash(resource)}` : '';
  return urlPath;
};

const anotherFunction = () => 'hello world';

module.exports = {
  anotherFunction,
  pathify,
  whiteSpaceToDash,
};
