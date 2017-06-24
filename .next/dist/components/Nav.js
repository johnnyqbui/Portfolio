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

var _jsxFileName = 'C:\\Users\\Johnny\\Desktop\\personal-portfolio\\components\\Nav.js';


var Nav = function Nav(_ref) {
	var menuOpen = _ref.menuOpen;

	var renderMenu = menuOpen ? 'sideMenu closeSideMenu' : 'sideMenu';
	return _react2.default.createElement('nav', { className: renderMenu, 'data-jsx': 797085688,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 6
		}
	}, _react2.default.createElement('ul', { className: 'nav', 'data-jsx': 797085688,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 7
		}
	}, _react2.default.createElement('li', {
		'data-jsx': 797085688,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 8
		}
	}, _react2.default.createElement(_link2.default, { href: '/', __source: {
			fileName: _jsxFileName,
			lineNumber: 9
		}
	}, _react2.default.createElement('a', { className: 'nav-links', 'data-jsx': 797085688,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 10
		}
	}, 'HOME'))), _react2.default.createElement('li', {
		'data-jsx': 797085688,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 13
		}
	}, _react2.default.createElement(_link2.default, { className: 'nav-links', href: '/Portfolio', __source: {
			fileName: _jsxFileName,
			lineNumber: 14
		}
	}, _react2.default.createElement('a', {
		'data-jsx': 797085688,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 15
		}
	}, 'PORTFOLIO'))), _react2.default.createElement('li', {
		'data-jsx': 797085688,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 18
		}
	}, _react2.default.createElement(_link2.default, { className: 'nav-links', href: '/About', __source: {
			fileName: _jsxFileName,
			lineNumber: 19
		}
	}, _react2.default.createElement('a', {
		'data-jsx': 797085688,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 20
		}
	}, 'ABOUT'))), _react2.default.createElement('li', {
		'data-jsx': 797085688,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 23
		}
	}, _react2.default.createElement(_link2.default, { className: 'nav-links', href: '/Contact', __source: {
			fileName: _jsxFileName,
			lineNumber: 24
		}
	}, _react2.default.createElement('a', {
		'data-jsx': 797085688,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 25
		}
	}, 'CONTACT')))), _react2.default.createElement('div', { className: 'credits', 'data-jsx': 797085688,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 29
		}
	}, _react2.default.createElement('p', {
		'data-jsx': 797085688,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 30
		}
	}, 'Designed/Developed by Johnny Bui, 2017')), _react2.default.createElement(_style2.default, {
		styleId: 797085688,
		css: '.closeSideMenu[data-jsx="797085688"]{-webkit-transform:translate3d(0, 0, 0);-ms-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}.nav[data-jsx="797085688"]{padding:0;margin:0;list-style-type:none;top:140px;position:relative}.nav[data-jsx="797085688"] li[data-jsx="797085688"]{border-bottom:1px solid rgba(39, 39, 39, 0.51);-webkit-transition:.3s;transition:.3s}.nav[data-jsx="797085688"] li[data-jsx="797085688"]:first-of-type{border-top:1px solid rgba(39, 39, 39, 0.51)}.nav[data-jsx="797085688"] li[data-jsx="797085688"]:hover{background:rgba(41, 41, 41, 0.51)}.nav[data-jsx="797085688"] a[data-jsx="797085688"]{color:#aaa;display:block;padding:18px 35px;font-size:17px;font-weight:500;-webkit-letter-spacing:.5px;-moz-letter-spacing:.5px;-ms-letter-spacing:.5px;letter-spacing:.5px}.credits[data-jsx="797085688"]{bottom:20px;color:#aaa;left:20px;font-size:14px;position:absolute}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXE5hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQnFCLEFBRzJDLEFBQ2YsQUFDa0MsQUFDSCxBQUVWLEFBQ3BCLEFBQ0MsV0FOeUIsQ0FLTSxDQUNYLFFBTjRDLElBTXpCLEVBRGdCLFFBRHRCLENBRThCLE9BTjZCLEVBRWpELENBRzZDLEVBSjFCLElBSzRCLEVBTjBCLFFBS00sU0FDM0IsRUFObUMsTUFLaUMsU0FKdkYsb0JBRnBELHdFQU15SiIsImZpbGUiOiJjb21wb25lbnRzXFxOYXYuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvSm9obm55L0Rlc2t0b3AvcGVyc29uYWwtcG9ydGZvbGlvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgTmF2ID0gKHttZW51T3Blbn0pID0+IHtcclxuXHRjb25zdCByZW5kZXJNZW51ID0gbWVudU9wZW4gPyAnc2lkZU1lbnUgY2xvc2VTaWRlTWVudScgOiAnc2lkZU1lbnUnXHJcblx0cmV0dXJuIChcclxuXHRcdDxuYXYgY2xhc3NOYW1lPXtyZW5kZXJNZW51fT5cclxuXHRcdFx0PHVsIGNsYXNzTmFtZT0nbmF2Jz5cclxuXHRcdFx0XHQ8bGk+XHJcblx0XHRcdCAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuXHRcdFx0ICAgICAgICAgIDxhIGNsYXNzTmFtZT0nbmF2LWxpbmtzJyA+SE9NRTwvYT5cclxuXHRcdFx0ICAgICAgICA8L0xpbms+XHJcblx0XHQgICAgICAgIDwvbGk+XHJcblx0XHQgICAgXHQ8bGk+XHJcblx0XHRcdCAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtzXCIgaHJlZj1cIi9Qb3J0Zm9saW9cIj5cclxuXHRcdFx0ICAgICAgICAgIDxhPlBPUlRGT0xJTzwvYT5cclxuXHRcdFx0ICAgICAgICA8L0xpbms+XHJcblx0XHQgICAgICAgIDwvbGk+XHJcblx0XHQgICAgICAgIDxsaT5cclxuXHRcdFx0ICAgICAgICA8TGluayBjbGFzc05hbWU9XCJuYXYtbGlua3NcIiBocmVmPVwiL0Fib3V0XCI+XHJcblx0XHRcdCAgICAgICAgICA8YT5BQk9VVDwvYT5cclxuXHRcdFx0ICAgICAgICA8L0xpbms+XHJcblx0XHRcdCAgICA8L2xpPlxyXG5cdFx0XHQgICAgPGxpPlxyXG5cdFx0XHQgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cIm5hdi1saW5rc1wiIGhyZWY9XCIvQ29udGFjdFwiPlxyXG5cdFx0XHQgICAgICAgICAgPGE+Q09OVEFDVDwvYT5cclxuXHRcdFx0ICAgICAgICA8L0xpbms+XHJcblx0XHQgICAgICAgIDwvbGk+XHJcblx0ICAgICAgICA8L3VsPlxyXG5cdCAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NyZWRpdHMnPlxyXG5cdCAgICAgICAgXHQ8cD5EZXNpZ25lZC9EZXZlbG9wZWQgYnkgSm9obm55IEJ1aSwgMjAxNzwvcD5cclxuXHQgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgPHN0eWxlIGpzeD57YFxyXG5cdCAgICAgICAgXHQuY2xvc2VTaWRlTWVudSB7XHJcblx0ICAgICAgICBcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuXHQgICAgICAgIFx0fVxyXG5cdCAgICAgICAgICAgIC5uYXYge1xyXG5cdCAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG5cdCAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcblx0ICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuXHQgICAgICAgICAgICAgICAgdG9wOiAxNDBweDtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHQgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgLm5hdiBsaSB7XHJcblx0ICAgICAgICAgICAgXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgzOSwgMzksIDM5LCAwLjUxKTtcclxuXHQgICAgICAgICAgICBcdHRyYW5zaXRpb246IC4zcztcclxuXHQgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgLm5hdiBsaTpmaXJzdC1vZi10eXBlIHtcclxuXHQgICAgICAgICAgICBcdGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDM5LCAzOSwgMzksIDAuNTEpO1xyXG5cdCAgICAgICAgICAgIH1cclxuXHJcblx0ICAgICAgICAgICAgLm5hdiBsaTpob3ZlciB7XHJcblx0ICAgICAgICAgICAgXHRiYWNrZ3JvdW5kOiByZ2JhKDQxLCA0MSwgNDEsIDAuNTEpO1xyXG5cdCAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgICAubmF2IGEge1xyXG5cdCAgICAgICAgICAgICAgICBjb2xvcjogI2FhYTtcclxuXHQgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAxOHB4IDM1cHg7XHJcblx0ICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuXHQgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLjVweDtcclxuXHQgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgLmNyZWRpdHMge1xyXG4gICAgICAgICAgICBcdCAgICBib3R0b206IDIwcHg7XHJcblx0XHRcdFx0ICAgIGNvbG9yOiAjYWFhO1xyXG5cdFx0XHRcdCAgICBsZWZ0OiAyMHB4O1xyXG5cdFx0XHRcdCAgICBmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdFx0ICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHR9XHJcblx0ICAgICAgICBgfTwvc3R5bGU+XHJcblx0ICAgIDwvbmF2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2XHJcbiJdfQ== */\n/*@ sourceURL=components\\Nav.js */'
	}));
};

exports.default = Nav;