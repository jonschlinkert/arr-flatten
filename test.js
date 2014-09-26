/*!
 * arr-flatten <https://github.com/jonschlinkert/arr-flatten>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var should = require('should');
var flatten = require('./');

describe('flatten', function () {
  it('should flatten array:', function () {
    flatten(['a', ['b', ['c']]], ['d', ['e']]).should.eql(['a', 'b', 'c', 'd', 'e']);
  });
});