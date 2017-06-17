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

var _Social = require('./Social');

var _Social2 = _interopRequireDefault(_Social);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Johnny\\Desktop\\personal-portfolio\\components\\Layout.js';


var layoutStyle = {
  height: 100 + 'vh'
};

var Layout = function Layout(props) {
  return _react2.default.createElement('div', { style: layoutStyle, 'data-jsx': 2961452149,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), props.children, _react2.default.createElement(_Social2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), _react2.default.createElement(_style2.default, {
    styleId: 2961452149,
    css: 'body{margin:0;padding:0 40px}p,h1,h2,h3,h4,h5,h6,a{font-family:\'Raleway\', sans-serif}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZdUIsQUFHZ0IsQUFDeUIsVUFESCxnQkFBTSxTQUNHIiwiZmlsZSI6ImNvbXBvbmVudHNcXExheW91dC5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9Kb2hubnkvRGVza3RvcC9wZXJzb25hbC1wb3J0Zm9saW8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJ1xyXG5pbXBvcnQgU29jaWFsIGZyb20gJy4vU29jaWFsJ1xyXG5cclxuY29uc3QgbGF5b3V0U3R5bGUgPSB7XHJcblx0aGVpZ2h0OiAxMDArJ3ZoJyxcclxufVxyXG5cclxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiAoXHJcbiAgPGRpdiBzdHlsZT17bGF5b3V0U3R5bGV9PlxyXG4gICAgPEhlYWRlciAvPlxyXG4gICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPFNvY2lhbC8gPlxyXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgIFx0Ym9keSB7XHJcbiAgICBcdFx0bWFyZ2luOiAwO1xyXG4gICAgXHRcdHBhZGRpbmc6IDAgNDBweDtcclxuICAgIFx0fVxyXG4gICAgXHRwLCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBhIHtcclxuICAgIFx0XHRmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gICAgXHR9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbilcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQiXX0= */\n/*@ sourceURL=components\\Layout.js */'
  }));
};

exports.default = Layout;