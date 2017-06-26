'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Nav = function Nav(_ref) {
	var menuOpen = _ref.menuOpen;

	var renderMenu = menuOpen ? 'sideMenu closeSideMenu' : 'sideMenu';
	return _react2.default.createElement('nav', { className: renderMenu, 'data-jsx': 797085688
	}, _react2.default.createElement('ul', { className: 'nav', 'data-jsx': 797085688
	}, _react2.default.createElement('li', {
		'data-jsx': 797085688
	}, _react2.default.createElement(_link2.default, { prefetch: true, href: '/' }, _react2.default.createElement('a', { className: 'nav-links', 'data-jsx': 797085688
	}, 'HOME'))), _react2.default.createElement('li', {
		'data-jsx': 797085688
	}, _react2.default.createElement(_link2.default, { prefetch: true, className: 'nav-links', href: '/portfolio' }, _react2.default.createElement('a', {
		'data-jsx': 797085688
	}, 'PORTFOLIO'))), _react2.default.createElement('li', {
		'data-jsx': 797085688
	}, _react2.default.createElement(_link2.default, { prefetch: true, className: 'nav-links', href: '/about' }, _react2.default.createElement('a', {
		'data-jsx': 797085688
	}, 'ABOUT'))), _react2.default.createElement('li', {
		'data-jsx': 797085688
	}, _react2.default.createElement(_link2.default, { prefetch: true, className: 'nav-links', href: '/contact' }, _react2.default.createElement('a', {
		'data-jsx': 797085688
	}, 'CONTACT')))), _react2.default.createElement('div', { className: 'credits', 'data-jsx': 797085688
	}, _react2.default.createElement('p', {
		'data-jsx': 797085688
	}, 'Designed/Developed by Johnny Bui, 2017')), _react2.default.createElement(_style2.default, {
		styleId: 797085688,
		css: '.closeSideMenu[data-jsx="797085688"]{-webkit-transform:translate3d(0, 0, 0);-ms-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}.nav[data-jsx="797085688"]{padding:0;margin:0;list-style-type:none;top:140px;position:relative}.nav[data-jsx="797085688"] li[data-jsx="797085688"]{border-bottom:1px solid rgba(39, 39, 39, 0.51);-webkit-transition:.3s;transition:.3s}.nav[data-jsx="797085688"] li[data-jsx="797085688"]:first-of-type{border-top:1px solid rgba(39, 39, 39, 0.51)}.nav[data-jsx="797085688"] li[data-jsx="797085688"]:hover{background:rgba(41, 41, 41, 0.51)}.nav[data-jsx="797085688"] a[data-jsx="797085688"]{color:#aaa;display:block;padding:18px 35px;font-size:17px;font-weight:500;-webkit-letter-spacing:.5px;-moz-letter-spacing:.5px;-ms-letter-spacing:.5px;letter-spacing:.5px}.credits[data-jsx="797085688"]{bottom:20px;color:#aaa;left:20px;font-size:14px;position:absolute}'
	}));
};

exports.default = Nav;