'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Layout = function Layout(_ref) {
	var menuOpen = _ref.menuOpen,
	    children = _ref.children;

	var pageScale = menuOpen ? 'pageWrap pageWrapActive' : 'pageWrap';
	return _react2.default.createElement('div', { className: pageScale }, children);
};

exports.default = Layout;