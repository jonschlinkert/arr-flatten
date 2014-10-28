'use strict';

module.exports = function (arr, depth) {
  if (depth < 1) {
    return arr;
  }
  return flatten(arr, [], depth || Infinity);
};

function flatten(arr, res, depth) {
  depth--;

  var len = arr.length;
  var num = 0;

  while (len--) {
    var i = num++;

    if (depth > -1 && Array.isArray(arr[i])) {
      flatten(arr[i], res, depth);
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}
