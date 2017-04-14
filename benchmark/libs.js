'use strict';

var fs = require('fs');
var path = require('path');
var write = require('write');
var cwd = path.join.bind(path, __dirname, 'code');

[
  'compute-flatten',
  'flatit',
  'flatten',
  'flatten-array',
  'just-flatten-it',
  'lodash.flatten',
  'lodash.flattendeep',
  'm_flattened',
  'reduce-flatten',
  'utils-flatten'
].forEach(function(name) {
  var fp = cwd(name + '.js');
  if (!fs.existsSync(fp)) {
    write.sync(fp, `module.exports = require('${name}');\n`);
  }
});
