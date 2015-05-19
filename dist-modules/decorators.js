/**
 * Baobab-React Decorators
 * ========================
 *
 * ES7 decorators sugar for higher order components.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.root = root;
exports.branch = branch;

var _higherOrderJs = require('./higher-order.js');

function root(tree) {
  if (typeof tree === 'function') return (0, _higherOrderJs.root)(tree);

  return function (target) {
    return (0, _higherOrderJs.root)(target, tree);
  };
}

function branch(specs) {
  if (typeof specs === 'function') return (0, _higherOrderJs.branch)(specs);

  return function (target) {
    return (0, _higherOrderJs.branch)(target, specs);
  };
}