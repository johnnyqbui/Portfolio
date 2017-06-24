'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Social = function Social(_ref) {
    var menuOpen = _ref.menuOpen;

    var socialActive = menuOpen ? 'social socialActive' : 'social';
    return _react2.default.createElement('div', { className: socialActive }, _react2.default.createElement('ul', null, _react2.default.createElement('a', { href: 'https://github.com/johnnyqbui', target: '_blank' }, _react2.default.createElement('li', null, _react2.default.createElement('img', { src: '/static/github.png' }))), _react2.default.createElement('a', { href: 'https://www.linkedin.com/in/johnnyqbui/', target: '_blank' }, _react2.default.createElement('li', null, _react2.default.createElement('img', { src: '/static/linkedin.png' }))), _react2.default.createElement('a', { href: 'https://www.instagram.com/jqbui/', target: '_blank' }, _react2.default.createElement('li', null, _react2.default.createElement('img', { src: '/static/instagram.png' }))), _react2.default.createElement('a', { href: 'https://codepen.io/jbui/', target: '_blank' }, _react2.default.createElement('li', null, _react2.default.createElement('img', { src: '/static/codepen.png' })))));
};

exports.default = Social;