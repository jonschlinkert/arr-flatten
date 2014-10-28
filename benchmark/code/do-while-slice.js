'use strict';

var slice = require('array-slice');

module.exports = function () {
  var args = slice(arguments);

  do {
    args = [].concat.apply([], args);
  } while (args.some(Array.isArray));

  return args;
};