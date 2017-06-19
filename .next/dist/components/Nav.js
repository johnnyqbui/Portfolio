'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Johnny\\Desktop\\personal-portfolio\\components\\Nav.js';


var _class = function (_Component) {
	(0, _inherits3.default)(_class, _Component);

	function _class() {
		(0, _classCallCheck3.default)(this, _class);

		return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
	}

	(0, _createClass3.default)(_class, [{
		key: 'render',
		value: function render() {
			var menuIsOpen = this.props.isOpen;
			var renderMenu = menuIsOpen ? 'sideMenu openNav' : 'sideMenu closeNav';

			return _react2.default.createElement('div', { className: renderMenu, 'data-jsx': 34806289,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 10
				}
			}, _react2.default.createElement('ul', { className: 'nav', 'data-jsx': 34806289,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 11
				}
			}, _react2.default.createElement('li', {
				'data-jsx': 34806289,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 12
				}
			}, _react2.default.createElement(_link2.default, { href: '/', __source: {
					fileName: _jsxFileName,
					lineNumber: 13
				}
			}, _react2.default.createElement('a', { className: 'nav-links', 'data-jsx': 34806289,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 14
				}
			}, 'Home'))), _react2.default.createElement('li', {
				'data-jsx': 34806289,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 17
				}
			}, _react2.default.createElement(_link2.default, { className: 'nav-links', href: '/Portfolio', __source: {
					fileName: _jsxFileName,
					lineNumber: 18
				}
			}, _react2.default.createElement('a', {
				'data-jsx': 34806289,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 19
				}
			}, 'Portfolio'))), _react2.default.createElement('li', {
				'data-jsx': 34806289,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 22
				}
			}, _react2.default.createElement(_link2.default, { className: 'nav-links', href: '/About', __source: {
					fileName: _jsxFileName,
					lineNumber: 23
				}
			}, _react2.default.createElement('a', {
				'data-jsx': 34806289,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 24
				}
			}, 'About'))), _react2.default.createElement('li', {
				'data-jsx': 34806289,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 27
				}
			}, _react2.default.createElement(_link2.default, { className: 'nav-links', href: '/Contact', __source: {
					fileName: _jsxFileName,
					lineNumber: 28
				}
			}, _react2.default.createElement('a', {
				'data-jsx': 34806289,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 29
				}
			}, 'Contact')))), _react2.default.createElement(_style2.default, {
				styleId: 34806289,
				css: '.sideMenu[data-jsx="34806289"]{position:absolute;right:0;height:100vh;width:300px;background:#999;-webkit-transition:.5s;transition:.5s;z-index:2}.openNav[data-jsx="34806289"]{right:0}.closeNav[data-jsx="34806289"]{right:-300px}.nav[data-jsx="34806289"]{padding:0;margin:0;list-style-type:none;top:110px;position:relative}.nav[data-jsx="34806289"] li[data-jsx="34806289"]{border-bottom:1px solid black}.nav[data-jsx="34806289"] li[data-jsx="34806289"]:first-of-type{border-top:1px solid black}.nav[data-jsx="34806289"] a[data-jsx="34806289"]{-webkit-text-decoration:none;text-decoration:none;color:black;display:block;padding:20px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXE5hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQ3NCLEFBRytCLEFBQ1YsQUFDSyxBQUNHLEFBQ2lCLEFBQ0gsQUFDSCxTQUxQLEVBRXdCLEdBRG5CLEtBRmMsRUFHNkMsT0FIbkIsQUFLcEIsR0FERyxXQUowQyxDQUd1QixTQUd2RCxFQUhtRixDQUh0QixVQU01QixPQU53RCxDQUdTLE9BR2pDLGNBQWUsa0JBTmdDLFdBQVkiLCJmaWxlIjoiY29tcG9uZW50c1xcTmF2LmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0pvaG5ueS9EZXNrdG9wL3BlcnNvbmFsLXBvcnRmb2xpbyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdHJlbmRlcigpIHtcclxuXHRcdGxldCBtZW51SXNPcGVuID0gdGhpcy5wcm9wcy5pc09wZW47XHJcblx0XHRjb25zdCByZW5kZXJNZW51ID0gbWVudUlzT3BlbiA/ICdzaWRlTWVudSBvcGVuTmF2JyA6ICdzaWRlTWVudSBjbG9zZU5hdidcclxuXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17cmVuZGVyTWVudX0+XHJcblx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cIm5hdlwiPlxyXG5cdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdCAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuXHRcdFx0XHQgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtzXCIgPkhvbWU8L2E+XHJcblx0XHRcdFx0ICAgICAgICA8L0xpbms+XHJcblx0XHRcdCAgICAgICAgPC9saT5cclxuXHRcdFx0ICAgIFx0PGxpPlxyXG5cdFx0XHRcdCAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtzXCIgaHJlZj1cIi9Qb3J0Zm9saW9cIj5cclxuXHRcdFx0XHQgICAgICAgICAgPGE+UG9ydGZvbGlvPC9hPlxyXG5cdFx0XHRcdCAgICAgICAgPC9MaW5rPlxyXG5cdFx0XHQgICAgICAgIDwvbGk+XHJcblx0XHRcdCAgICAgICAgPGxpPlxyXG5cdFx0XHRcdCAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtzXCIgaHJlZj1cIi9BYm91dFwiPlxyXG5cdFx0XHRcdCAgICAgICAgICA8YT5BYm91dDwvYT5cclxuXHRcdFx0XHQgICAgICAgIDwvTGluaz5cclxuXHRcdFx0XHQgICAgPC9saT5cclxuXHRcdFx0XHQgICAgPGxpPlxyXG5cdFx0XHRcdCAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtzXCIgaHJlZj1cIi9Db250YWN0XCI+XHJcblx0XHRcdFx0ICAgICAgICAgIDxhPkNvbnRhY3Q8L2E+XHJcblx0XHRcdFx0ICAgICAgICA8L0xpbms+XHJcblx0XHRcdCAgICAgICAgPC9saT5cclxuXHRcdCAgICAgICAgPC91bD5cclxuXHRcdCAgICAgICAgPHN0eWxlIGpzeD57YFxyXG5cdFx0ICAgICAgICBcdC5zaWRlTWVudSB7XHJcblx0XHQgICAgICAgIFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHQgICAgICAgIFx0XHRyaWdodDogMDtcclxuXHRcdCAgICAgICAgXHRcdGhlaWdodDogMTAwdmg7XHJcblx0XHQgICAgICAgIFx0XHR3aWR0aDogMzAwcHg7XHJcblx0XHQgICAgICAgIFx0XHRiYWNrZ3JvdW5kOiAjOTk5O1xyXG5cdFx0ICAgICAgICBcdFx0dHJhbnNpdGlvbjogLjVzO1xyXG5cdFx0ICAgICAgICBcdFx0ei1pbmRleDogMjtcclxuXHRcdCAgICAgICAgXHR9XHJcblx0XHQgICAgICAgIFx0Lm9wZW5OYXYge1xyXG5cdFx0ICAgICAgICBcdFx0cmlnaHQ6IDA7XHJcblx0XHQgICAgICAgIFx0fVxyXG5cdFx0ICAgICAgICBcdC5jbG9zZU5hdiB7XHJcblx0XHQgICAgICAgIFx0XHRyaWdodDogLTMwMHB4O1xyXG5cdFx0ICAgICAgICBcdH1cclxuXHRcdCAgICAgICAgICAgIC5uYXYge1xyXG5cdFx0ICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcblx0XHQgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG5cdFx0ICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuXHRcdCAgICAgICAgICAgICAgICB0b3A6IDExMHB4O1xyXG4gICAgXHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdCAgICAgICAgICAgIH1cclxuXHRcdCAgICAgICAgICAgIC5uYXYgbGkge1xyXG5cdFx0ICAgICAgICAgICAgXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcblx0XHQgICAgICAgICAgICB9XHJcblx0XHQgICAgICAgICAgICAubmF2IGxpOmZpcnN0LW9mLXR5cGUge1xyXG5cdFx0ICAgICAgICAgICAgXHRib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XHJcblx0XHQgICAgICAgICAgICB9XHJcblx0XHQgICAgICAgICAgICAubmF2IGEge1xyXG5cdFx0ICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRcdCAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcblx0XHQgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcblx0XHQgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuXHRcdCAgICAgICAgICAgIH1cclxuXHRcdCAgICAgICAgYH08L3N0eWxlPlxyXG5cdFx0ICAgIDwvZGl2PlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG4iXX0= */\n/*@ sourceURL=components\\Nav.js */'
			}));
		}
	}]);

	return _class;
}(_react.Component);

exports.default = _class;