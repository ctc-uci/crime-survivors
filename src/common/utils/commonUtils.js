const windowExists = () => typeof window !== 'undefined';

const urlEncode = (str) => encodeURI(str.replace(/ /g, '_').replace(/[^a-zA-Z0-9\-_ ]/g, ''));

/* Example:
*     pathify(["Orange County", "Legal"], "AARP Legal Network Services", false, true)
*     returns
*     "Orange-County/Legal#AARP-Legal-Network-Services"
*/
const pathify = (
  pathArray,
  hash = '',
  endWithForwardSlash = false,
  fullPath = false,
) => {
  const reducer = (acc, cur) => {
    if (cur === null) {
      return acc;
    }
    return `${acc}/${urlEncode(cur)}`;
  };
  let urlPath = `/${pathArray.reduce(reducer)}`;

  // Additional options
  urlPath += endWithForwardSlash === true ? '/' : '';
  urlPath += hash ? `#${urlEncode(hash)}` : '';
  if (fullPath === true) {
    /* eslint-disable no-undef, no-console */
    if (typeof window === 'undefined') {
      console.warn('Window property does not exist, cannot retrieve hostname, fullPath=true flag ignored.');
    } else if (process.env.NODE_ENV !== 'production') {
      urlPath = `${window.location.hostname}:${window.location.port}/${urlPath}`;
    } else {
      urlPath = `${window.location.hostname}/${urlPath}`;
    }
    /* eslint-enable no-undef, no-console */
  }

  return encodeURI(urlPath);
};

module.exports = {
  pathify,
  windowExists,
  urlEncode,
};
