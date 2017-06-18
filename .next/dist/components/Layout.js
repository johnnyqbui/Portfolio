'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Menu = require('./Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _Social = require('./Social');

var _Social2 = _interopRequireDefault(_Social);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Johnny\\Desktop\\personal-portfolio\\components\\Layout.js';


var layoutStyle = {
    height: 100 + 'vh'
};

var Layout = function Layout(props) {
    return _react2.default.createElement('div', { style: layoutStyle, 'data-jsx': 3223929461,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }, _react2.default.createElement(_Header2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }), _react2.default.createElement(_Menu2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }), props.children, _react2.default.createElement(_Social2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }), _react2.default.createElement(_style2.default, {
        styleId: 3223929461,
        css: 'body{margin:0;padding:0 40px}p,h1,h2,h3,h4,h5,h6,a{font-family:\'Raleway\', sans-serif}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlMkIsQUFHb0IsQUFDeUIsVUFEQyxnQkFBVSxTQUNEIiwiZmlsZSI6ImNvbXBvbmVudHNcXExheW91dC5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9Kb2hubnkvRGVza3RvcC9wZXJzb25hbC1wb3J0Zm9saW8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJ1xyXG5pbXBvcnQgTWVudSBmcm9tICcuL01lbnUnXHJcbmltcG9ydCBTb2NpYWwgZnJvbSAnLi9Tb2NpYWwnXHJcblxyXG5cclxuY29uc3QgbGF5b3V0U3R5bGUgPSB7XHJcblx0aGVpZ2h0OiAxMDArJ3ZoJyxcclxufVxyXG5cclxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiAoXHJcbiAgICA8ZGl2IHN0eWxlPXtsYXlvdXRTdHlsZX0+XHJcbiAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgIDxNZW51IC8+XHJcbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDxTb2NpYWwgLz5cclxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgIFx0Ym9keSB7XHJcbiAgICAgICAgXHRcdG1hcmdpbjogMDtcclxuICAgICAgICBcdFx0cGFkZGluZzogMCA0MHB4O1xyXG4gICAgICAgIFx0fVxyXG4gICAgICAgIFx0cCwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgYSB7XHJcbiAgICAgICAgXHRcdGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgXHR9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbilcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQiXX0= */\n/*@ sourceURL=components\\Layout.js */'
    }));
};

exports.default = Layout;