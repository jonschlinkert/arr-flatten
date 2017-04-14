module.exports = function () {
  var args = [].slice.call(arguments);

  do {
    args = [].concat.apply([], args);
  } while (args.some(Array.isArray));

  return args;
};
