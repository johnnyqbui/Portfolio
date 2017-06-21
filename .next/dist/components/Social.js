'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Johnny\\Desktop\\personal-portfolio\\components\\Social.js';

var Social = function Social(_ref) {
    var menuOpen = _ref.menuOpen;

    var socialActive = menuOpen ? 'social socialActive' : 'social';
    return _react2.default.createElement('div', { className: socialActive, __source: {
            fileName: _jsxFileName,
            lineNumber: 4
        }
    }, _react2.default.createElement('ul', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }, _react2.default.createElement('a', { href: 'https://github.com/johnnyqbui', target: '_blank', __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, _react2.default.createElement('li', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }, _react2.default.createElement('img', { src: '/static/github.png', __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }))), _react2.default.createElement('a', { href: 'https://www.linkedin.com/in/johnnyqbui/', target: '_blank', __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }, _react2.default.createElement('li', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }, _react2.default.createElement('img', { src: '/static/linkedin.png', __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }))), _react2.default.createElement('a', { href: 'https://www.instagram.com/jqbui/', target: '_blank', __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }, _react2.default.createElement('li', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }, _react2.default.createElement('img', { src: '/static/instagram.png', __source: {
            fileName: _jsxFileName,
            lineNumber: 18
        }
    }))), _react2.default.createElement('a', { href: 'https://codepen.io/jbui/', target: '_blank', __source: {
            fileName: _jsxFileName,
            lineNumber: 21
        }
    }, _react2.default.createElement('li', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 22
        }
    }, _react2.default.createElement('img', { src: '/static/codepen.png', __source: {
            fileName: _jsxFileName,
            lineNumber: 23
        }
    })))));
};

exports.default = Social;