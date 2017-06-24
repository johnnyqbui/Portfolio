'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Nav = require('./Nav');

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

var Menu = function Menu(_ref) {
    var menuOpen = _ref.menuOpen,
        onCloseMenu = _ref.onCloseMenu,
        onToggleMenu = _ref.onToggleMenu;

    var morph = menuOpen ? 'menu morphClose' : 'menu morphOpen';
    var overlay = menuOpen ? 'overlay overlay--active' : 'overlay delayed-Z';
    return _react2.default.createElement('div', { className: 'rightMenu' }, _react2.default.createElement('div', { className: 'background__menu' }), _react2.default.createElement('div', { onClick: onCloseMenu.bind(_this), className: overlay }), _react2.default.createElement('div', { onClick: onToggleMenu.bind(_this), className: morph }, _react2.default.createElement('span', { className: 'dot' }), _react2.default.createElement('span', { className: 'dot' }), _react2.default.createElement('span', { className: 'dot' }), _react2.default.createElement('span', { className: 'dot' }), _react2.default.createElement('span', { className: 'dot' }), _react2.default.createElement('span', { className: 'dot' }), _react2.default.createElement('span', { className: 'dot' }), _react2.default.createElement('span', { className: 'dot' }), _react2.default.createElement('span', { className: 'dot' })), _react2.default.createElement(_Nav2.default, { menuOpen: menuOpen }));
};

exports.default = Menu;