/*!
 * arr-flatten <https://github.com/jonschlinkert/arr-flatten>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

module.exports = function (arr) {
  return ...flat(arr);
};

function* flat(h, ...r) {
  if (Array.isArray(h)) yield* flat(...h);
  else h == null ? [] : yield h;
  if (r.length) yield* flat(r);
}
