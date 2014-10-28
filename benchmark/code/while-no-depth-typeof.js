'use strict';

var typeOf = require('kind-of');

module.exports = function (arr) {
  return flatten(arr, []);
};

function flatten(arr, res) {
  var len = arr.length;
  var num = 0;

  while (len--) {
    var i = num++;

    if (typeOf(arr[i]) === 'array') {
      flatten(arr[i], res);
    } else {
      res.push(arr[i]);
    }
  }

  return res;
}
