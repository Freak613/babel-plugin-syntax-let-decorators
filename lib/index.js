"use strict";

exports.__esModule = true;
exports.default = _default;

function _default() {
  return {
    inherits: require("@babel/plugin-syntax-decorators").default,
    manipulateOptions: function manipulateOptions(opts, parserOpts) {
      parserOpts.allowLetDecorators = 'true';
    }
  };
}