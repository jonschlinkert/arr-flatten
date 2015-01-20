'use strict';

/**
 * current implementation
 */

module.exports = function (arr) {
  return flatten(arr, []);
};

function flatten(arr, res) {
  var len = arr.length;
  var num = 0;

  while (len--) {
    var i = num++;

    if (!Array.isArray(arr[i])) {
      res.push(arr[i]);
    } else {
      flatten(arr[i], res);
    }
  }
  return res;
}
