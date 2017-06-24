'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _OuterContainer = require('../components/Outer-Container');

var _OuterContainer2 = _interopRequireDefault(_OuterContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	return _react2.default.createElement(_OuterContainer2.default, null, _react2.default.createElement('h1', { className: 'contact__header' }, 'Contact'), _react2.default.createElement('div', { className: 'contact' }, _react2.default.createElement('div', { className: 'contact__text' }, _react2.default.createElement('h2', null, 'Open for business'), _react2.default.createElement('p', null, 'What do you want to accomplish?'), _react2.default.createElement('h3', null, _react2.default.createElement('a', { href: 'mailto:johnnyqbui7@gmail.com' }, 'johnnyqbui7@gmail.com')))));
};