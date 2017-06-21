'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Nav = require('./Nav');

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Johnny\\Desktop\\personal-portfolio\\components\\Menu.js',
    _this = undefined;

var Menu = function Menu(_ref) {
    var menuOpen = _ref.menuOpen,
        onCloseMenu = _ref.onCloseMenu,
        onToggleMenu = _ref.onToggleMenu;

    var morph = menuOpen ? 'menu morphClose' : 'menu morphOpen';
    var overlay = menuOpen ? 'overlay overlay--active' : 'overlay delayed-Z';
    return _react2.default.createElement('div', { className: 'rightMenu', __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }, _react2.default.createElement('div', { className: 'background__menu', __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }), _react2.default.createElement('div', { onClick: onCloseMenu.bind(_this), className: overlay, __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }), _react2.default.createElement('div', { onClick: onToggleMenu.bind(_this), className: morph, __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, _react2.default.createElement('span', { className: 'dot', __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }), _react2.default.createElement('span', { className: 'dot', __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }), _react2.default.createElement('span', { className: 'dot', __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }), _react2.default.createElement('span', { className: 'dot', __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }), _react2.default.createElement('span', { className: 'dot', __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }), _react2.default.createElement('span', { className: 'dot', __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }), _react2.default.createElement('span', { className: 'dot', __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }), _react2.default.createElement('span', { className: 'dot', __source: {
            fileName: _jsxFileName,
            lineNumber: 18
        }
    }), _react2.default.createElement('span', { className: 'dot', __source: {
            fileName: _jsxFileName,
            lineNumber: 19
        }
    })), _react2.default.createElement(_Nav2.default, { menuOpen: menuOpen, __source: {
            fileName: _jsxFileName,
            lineNumber: 21
        }
    }));
};

exports.default = Menu;