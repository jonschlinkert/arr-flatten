'use strict';

/**
 * this was used in v0.1.0
 */

module.exports = function () {
  var args = [].slice.call(arguments);

  do {
    args = [].concat.apply([], args);
  } while (args.some(Array.isArray));

  return args;
};