/*!
 * arr-flatten <https://github.com/jonschlinkert/arr-flatten>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

module.exports = function () {
  var args = [].slice.call(arguments);

  do {
    args = [].concat.apply([], args);
  } while (args.some(Array.isArray));

  return args;
};
