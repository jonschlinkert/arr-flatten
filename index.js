/*!
 * arr-flatten <https://github.com/jonschlinkert/arr-flatten>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var toString = Object.prototype.toString;

module.exports = function flatten(arr) {
  return flat(arr, []);
};

function flat(arr, res) {
  var len = arr.length;
  var i = -1;

  while (len--) {
    var cur = arr[++i];

    if (toString.call(cur) === '[object Array]') {
      flat(cur, res);
    } else {
      res.push(cur);
    }
  }
  return res;
}
