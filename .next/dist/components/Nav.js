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
			var menuToggle = this.props.menuOpen;
			var renderMenu = menuToggle ? 'sideMenu closeSideMenu' : 'sideMenu';

			return _react2.default.createElement('nav', { className: renderMenu, 'data-jsx': 2020867423,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 10
				}
			}, _react2.default.createElement('ul', { className: 'nav', 'data-jsx': 2020867423,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 11
				}
			}, _react2.default.createElement('li', {
				'data-jsx': 2020867423,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 12
				}
			}, _react2.default.createElement(_link2.default, { href: '/', __source: {
					fileName: _jsxFileName,
					lineNumber: 13
				}
			}, _react2.default.createElement('a', { className: 'nav-links', 'data-jsx': 2020867423,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 14
				}
			}, 'HOME'))), _react2.default.createElement('li', {
				'data-jsx': 2020867423,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 17
				}
			}, _react2.default.createElement(_link2.default, { className: 'nav-links', href: '/Portfolio', __source: {
					fileName: _jsxFileName,
					lineNumber: 18
				}
			}, _react2.default.createElement('a', {
				'data-jsx': 2020867423,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 19
				}
			}, 'PORTFOLIO'))), _react2.default.createElement('li', {
				'data-jsx': 2020867423,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 22
				}
			}, _react2.default.createElement(_link2.default, { className: 'nav-links', href: '/About', __source: {
					fileName: _jsxFileName,
					lineNumber: 23
				}
			}, _react2.default.createElement('a', {
				'data-jsx': 2020867423,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 24
				}
			}, 'ABOUT'))), _react2.default.createElement('li', {
				'data-jsx': 2020867423,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 27
				}
			}, _react2.default.createElement(_link2.default, { className: 'nav-links', href: '/Contact', __source: {
					fileName: _jsxFileName,
					lineNumber: 28
				}
			}, _react2.default.createElement('a', {
				'data-jsx': 2020867423,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 29
				}
			}, 'CONTACT')))), _react2.default.createElement(_style2.default, {
				styleId: 2020867423,
				css: '.sideMenu[data-jsx="2020867423"]{position:fixed;right:0;z-index:2;width:300px;height:100%;-webkit-transition:0.5s;transition:0.5s;background:#34383e;-webkit-transform:translate3d(100%, 0, 0);-ms-transform:translate3d(100%, 0, 0);transform:translate3d(100%, 0, 0)}.closeSideMenu[data-jsx="2020867423"]{-webkit-transform:translate3d(0, 0, 0);-ms-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}.nav[data-jsx="2020867423"]{padding:0;margin:0;list-style-type:none;top:140px;position:relative}.nav[data-jsx="2020867423"] li[data-jsx="2020867423"]{border-bottom:1px solid rgba(39, 39, 39, 0.51);-webkit-transition:.3s;transition:.3s}.nav[data-jsx="2020867423"] li[data-jsx="2020867423"]:first-of-type{border-top:1px solid rgba(39, 39, 39, 0.51)}.nav[data-jsx="2020867423"] li[data-jsx="2020867423"]:hover{background:rgba(41, 41, 41, 0.51)}.nav[data-jsx="2020867423"] a[data-jsx="2020867423"]{-webkit-text-decoration:none;text-decoration:none;color:#aaa;display:block;padding:18px 35px;font-size:17px;font-weight:500;-webkit-letter-spacing:.5px;-moz-letter-spacing:.5px;-ms-letter-spacing:.5px;letter-spacing:.5px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXE5hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQ3NCLEFBRzRCLEFBQ2dCLEFBQ2YsQUFDa0MsQUFDSCxBQUVWLEFBQ1YsV0FMaUIsS0FGWCxLQUVtRCxJQUYvQixVQU1ELENBTnVCLE9BRXNDLEVBRW5ELEdBRG1CLENBSGdCLEdBT3hDLEVBTG9GLFFBRmxCLEVBT2pDLFNBTGtFLE1BS3RDLFNBSnRCLFVBSXdELE1BUEEsSUFDN0csTUFNZ0osVUFQUyxPQU9pQyxxR0FBZSxTQVBwQyIsImZpbGUiOiJjb21wb25lbnRzXFxOYXYuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvSm9obm55L0Rlc2t0b3AvcGVyc29uYWwtcG9ydGZvbGlvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0cmVuZGVyKCkge1xyXG5cdFx0bGV0IG1lbnVUb2dnbGUgPSB0aGlzLnByb3BzLm1lbnVPcGVuO1xyXG5cdFx0Y29uc3QgcmVuZGVyTWVudSA9IG1lbnVUb2dnbGUgPyAnc2lkZU1lbnUgY2xvc2VTaWRlTWVudScgOiAnc2lkZU1lbnUnXHJcblxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PG5hdiBjbGFzc05hbWU9e3JlbmRlck1lbnV9PlxyXG5cdFx0XHRcdDx1bCBjbGFzc05hbWU9J25hdic+XHJcblx0XHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0ICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG5cdFx0XHRcdCAgICAgICAgICA8YSBjbGFzc05hbWU9J25hdi1saW5rcycgPkhPTUU8L2E+XHJcblx0XHRcdFx0ICAgICAgICA8L0xpbms+XHJcblx0XHRcdCAgICAgICAgPC9saT5cclxuXHRcdFx0ICAgIFx0PGxpPlxyXG5cdFx0XHRcdCAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtzXCIgaHJlZj1cIi9Qb3J0Zm9saW9cIj5cclxuXHRcdFx0XHQgICAgICAgICAgPGE+UE9SVEZPTElPPC9hPlxyXG5cdFx0XHRcdCAgICAgICAgPC9MaW5rPlxyXG5cdFx0XHQgICAgICAgIDwvbGk+XHJcblx0XHRcdCAgICAgICAgPGxpPlxyXG5cdFx0XHRcdCAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtzXCIgaHJlZj1cIi9BYm91dFwiPlxyXG5cdFx0XHRcdCAgICAgICAgICA8YT5BQk9VVDwvYT5cclxuXHRcdFx0XHQgICAgICAgIDwvTGluaz5cclxuXHRcdFx0XHQgICAgPC9saT5cclxuXHRcdFx0XHQgICAgPGxpPlxyXG5cdFx0XHRcdCAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtzXCIgaHJlZj1cIi9Db250YWN0XCI+XHJcblx0XHRcdFx0ICAgICAgICAgIDxhPkNPTlRBQ1Q8L2E+XHJcblx0XHRcdFx0ICAgICAgICA8L0xpbms+XHJcblx0XHRcdCAgICAgICAgPC9saT5cclxuXHRcdCAgICAgICAgPC91bD5cclxuXHRcdCAgICAgICAgPHN0eWxlIGpzeD57YFxyXG5cdFx0ICAgICAgICBcdC5zaWRlTWVudSB7XHJcblx0XHQgICAgICAgIFx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRcdFx0XHQgICAgcmlnaHQ6IDA7XHJcblx0XHRcdFx0XHQgICAgei1pbmRleDogMjtcclxuXHRcdFx0XHRcdCAgICB3aWR0aDogMzAwcHg7XHJcblx0XHRcdFx0XHQgICAgaGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHRcdFx0ICAgIHRyYW5zaXRpb246IDAuNXM7XHJcblx0XHRcdFx0XHQgICAgYmFja2dyb3VuZDogIzM0MzgzZTtcclxuXHRcdFx0XHRcdCAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xyXG5cdFx0ICAgICAgICBcdH1cclxuXHRcdCAgICAgICAgXHQuY2xvc2VTaWRlTWVudSB7XHJcblx0XHQgICAgICAgIFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG5cdFx0ICAgICAgICBcdH1cclxuXHRcdCAgICAgICAgICAgIC5uYXYge1xyXG5cdFx0ICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcblx0XHQgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG5cdFx0ICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuXHRcdCAgICAgICAgICAgICAgICB0b3A6IDE0MHB4O1xyXG4gICAgXHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdCAgICAgICAgICAgIH1cclxuXHRcdCAgICAgICAgICAgIC5uYXYgbGkge1xyXG5cdFx0ICAgICAgICAgICAgXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgzOSwgMzksIDM5LCAwLjUxKTtcclxuXHRcdCAgICAgICAgICAgIFx0dHJhbnNpdGlvbjogLjNzO1xyXG5cdFx0ICAgICAgICAgICAgfVxyXG5cdFx0ICAgICAgICAgICAgLm5hdiBsaTpmaXJzdC1vZi10eXBlIHtcclxuXHRcdCAgICAgICAgICAgIFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMzksIDM5LCAzOSwgMC41MSk7XHJcblx0XHQgICAgICAgICAgICB9XHJcblxyXG5cdFx0ICAgICAgICAgICAgLm5hdiBsaTpob3ZlciB7XHJcblx0XHQgICAgICAgICAgICBcdGJhY2tncm91bmQ6IHJnYmEoNDEsIDQxLCA0MSwgMC41MSk7XHJcblx0XHQgICAgICAgICAgICB9XHJcblx0XHQgICAgICAgICAgICAubmF2IGEge1xyXG5cdFx0ICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRcdCAgICAgICAgICAgICAgICBjb2xvcjogI2FhYTtcclxuXHRcdCAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIFx0XHRcdFx0XHRwYWRkaW5nOiAxOHB4IDM1cHg7XHJcblx0XHQgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG5cdFx0ICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0ICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLjVweDtcclxuXHRcdCAgICAgICAgICAgIH1cclxuXHRcdCAgICAgICAgYH08L3N0eWxlPlxyXG5cdFx0ICAgIDwvbmF2PlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG4iXX0= */\n/*@ sourceURL=components\\Nav.js */'
			}));
		}
	}]);

	return _class;
}(_react.Component);

exports.default = _class;