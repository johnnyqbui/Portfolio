'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _OuterContainer = require('../components/Outer-Container');

var _OuterContainer2 = _interopRequireDefault(_OuterContainer);

var _Projects = require('../components/Projects');

var _Projects2 = _interopRequireDefault(_Projects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	return _react2.default.createElement(_OuterContainer2.default, null, _react2.default.createElement(_Projects2.default, null));
};