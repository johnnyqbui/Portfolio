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
	return _react2.default.createElement('nav', { className: renderMenu, 'data-jsx': 2671838794,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 6
		}
	}, _react2.default.createElement('ul', { className: 'nav', 'data-jsx': 2671838794,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 7
		}
	}, _react2.default.createElement('li', {
		'data-jsx': 2671838794,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 8
		}
	}, _react2.default.createElement(_link2.default, { href: '/', __source: {
			fileName: _jsxFileName,
			lineNumber: 9
		}
	}, _react2.default.createElement('a', { className: 'nav-links', 'data-jsx': 2671838794,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 10
		}
	}, 'HOME'))), _react2.default.createElement('li', {
		'data-jsx': 2671838794,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 13
		}
	}, _react2.default.createElement(_link2.default, { className: 'nav-links', href: '/Portfolio', __source: {
			fileName: _jsxFileName,
			lineNumber: 14
		}
	}, _react2.default.createElement('a', {
		'data-jsx': 2671838794,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 15
		}
	}, 'PORTFOLIO'))), _react2.default.createElement('li', {
		'data-jsx': 2671838794,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 18
		}
	}, _react2.default.createElement(_link2.default, { className: 'nav-links', href: '/About', __source: {
			fileName: _jsxFileName,
			lineNumber: 19
		}
	}, _react2.default.createElement('a', {
		'data-jsx': 2671838794,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 20
		}
	}, 'ABOUT'))), _react2.default.createElement('li', {
		'data-jsx': 2671838794,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 23
		}
	}, _react2.default.createElement(_link2.default, { className: 'nav-links', href: '/Contact', __source: {
			fileName: _jsxFileName,
			lineNumber: 24
		}
	}, _react2.default.createElement('a', {
		'data-jsx': 2671838794,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 25
		}
	}, 'CONTACT')))), _react2.default.createElement('div', { className: 'credits', 'data-jsx': 2671838794,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 29
		}
	}, _react2.default.createElement('p', {
		'data-jsx': 2671838794,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 30
		}
	}, 'Designed/Developed by Johnny Bui, 2017')), _react2.default.createElement(_style2.default, {
		styleId: 2671838794,
		css: '.sideMenu[data-jsx="2671838794"]{position:fixed;right:0;z-index:3;width:300px;height:100%;-webkit-transition:0.5s;transition:0.5s;background:#34383e;-webkit-transform:translate3d(100%, 0, 0);-ms-transform:translate3d(100%, 0, 0);transform:translate3d(100%, 0, 0)}.closeSideMenu[data-jsx="2671838794"]{-webkit-transform:translate3d(0, 0, 0);-ms-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}.nav[data-jsx="2671838794"]{padding:0;margin:0;list-style-type:none;top:140px;position:relative}.nav[data-jsx="2671838794"] li[data-jsx="2671838794"]{border-bottom:1px solid rgba(39, 39, 39, 0.51);-webkit-transition:.3s;transition:.3s}.nav[data-jsx="2671838794"] li[data-jsx="2671838794"]:first-of-type{border-top:1px solid rgba(39, 39, 39, 0.51)}.nav[data-jsx="2671838794"] li[data-jsx="2671838794"]:hover{background:rgba(41, 41, 41, 0.51)}.nav[data-jsx="2671838794"] a[data-jsx="2671838794"]{color:#aaa;display:block;padding:18px 35px;font-size:17px;font-weight:500;-webkit-letter-spacing:.5px;-moz-letter-spacing:.5px;-ms-letter-spacing:.5px;letter-spacing:.5px}.credits[data-jsx="2671838794"]{bottom:20px;color:#aaa;left:20px;font-size:14px;position:absolute}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXE5hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQnFCLEFBRzJCLEFBQ2dCLEFBQ2YsQUFDa0MsQUFDSCxBQUVWLEFBQ3BCLEFBQ0MsV0FOeUIsQ0FLTSxDQUNYLEdBUk4sS0FFa0QsSUFGL0IsQUFRTSxFQURnQixRQUR0QixDQU5xQixBQVFTLE9BTjZCLEVBRWpELENBRzZDLEVBSjFCLENBSGEsR0FRZSxFQU4wQixRQUZoQixBQU9zQixTQUMzQixFQU5tQyxNQUtpQyxTQUp2RixnQkFIb0QsSUFDeEcsZ0JBRG1KLHdEQU9NLDZEQVBLIiwiZmlsZSI6ImNvbXBvbmVudHNcXE5hdi5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9Kb2hubnkvRGVza3RvcC9wZXJzb25hbC1wb3J0Zm9saW8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5jb25zdCBOYXYgPSAoe21lbnVPcGVufSkgPT4ge1xyXG5cdGNvbnN0IHJlbmRlck1lbnUgPSBtZW51T3BlbiA/ICdzaWRlTWVudSBjbG9zZVNpZGVNZW51JyA6ICdzaWRlTWVudSdcclxuXHRyZXR1cm4gKFxyXG5cdFx0PG5hdiBjbGFzc05hbWU9e3JlbmRlck1lbnV9PlxyXG5cdFx0XHQ8dWwgY2xhc3NOYW1lPSduYXYnPlxyXG5cdFx0XHRcdDxsaT5cclxuXHRcdFx0ICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG5cdFx0XHQgICAgICAgICAgPGEgY2xhc3NOYW1lPSduYXYtbGlua3MnID5IT01FPC9hPlxyXG5cdFx0XHQgICAgICAgIDwvTGluaz5cclxuXHRcdCAgICAgICAgPC9saT5cclxuXHRcdCAgICBcdDxsaT5cclxuXHRcdFx0ICAgICAgICA8TGluayBjbGFzc05hbWU9XCJuYXYtbGlua3NcIiBocmVmPVwiL1BvcnRmb2xpb1wiPlxyXG5cdFx0XHQgICAgICAgICAgPGE+UE9SVEZPTElPPC9hPlxyXG5cdFx0XHQgICAgICAgIDwvTGluaz5cclxuXHRcdCAgICAgICAgPC9saT5cclxuXHRcdCAgICAgICAgPGxpPlxyXG5cdFx0XHQgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cIm5hdi1saW5rc1wiIGhyZWY9XCIvQWJvdXRcIj5cclxuXHRcdFx0ICAgICAgICAgIDxhPkFCT1VUPC9hPlxyXG5cdFx0XHQgICAgICAgIDwvTGluaz5cclxuXHRcdFx0ICAgIDwvbGk+XHJcblx0XHRcdCAgICA8bGk+XHJcblx0XHRcdCAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtzXCIgaHJlZj1cIi9Db250YWN0XCI+XHJcblx0XHRcdCAgICAgICAgICA8YT5DT05UQUNUPC9hPlxyXG5cdFx0XHQgICAgICAgIDwvTGluaz5cclxuXHRcdCAgICAgICAgPC9saT5cclxuXHQgICAgICAgIDwvdWw+XHJcblx0ICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY3JlZGl0cyc+XHJcblx0ICAgICAgICBcdDxwPkRlc2lnbmVkL0RldmVsb3BlZCBieSBKb2hubnkgQnVpLCAyMDE3PC9wPlxyXG5cdCAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICA8c3R5bGUganN4PntgXHJcblx0ICAgICAgICBcdC5zaWRlTWVudSB7XHJcblx0ICAgICAgICBcdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0XHRcdCAgICByaWdodDogMDtcclxuXHRcdFx0XHQgICAgei1pbmRleDogMztcclxuXHRcdFx0XHQgICAgd2lkdGg6IDMwMHB4O1xyXG5cdFx0XHRcdCAgICBoZWlnaHQ6IDEwMCU7XHJcblx0XHRcdFx0ICAgIHRyYW5zaXRpb246IDAuNXM7XHJcblx0XHRcdFx0ICAgIGJhY2tncm91bmQ6ICMzNDM4M2U7XHJcblx0XHRcdFx0ICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XHJcblx0ICAgICAgICBcdH1cclxuXHQgICAgICAgIFx0LmNsb3NlU2lkZU1lbnUge1xyXG5cdCAgICAgICAgXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcblx0ICAgICAgICBcdH1cclxuXHQgICAgICAgICAgICAubmF2IHtcclxuXHQgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuXHQgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG5cdCAgICAgICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcblx0ICAgICAgICAgICAgICAgIHRvcDogMTQwcHg7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgICAgIC5uYXYgbGkge1xyXG5cdCAgICAgICAgICAgIFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMzksIDM5LCAzOSwgMC41MSk7XHJcblx0ICAgICAgICAgICAgXHR0cmFuc2l0aW9uOiAuM3M7XHJcblx0ICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgICAgIC5uYXYgbGk6Zmlyc3Qtb2YtdHlwZSB7XHJcblx0ICAgICAgICAgICAgXHRib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgzOSwgMzksIDM5LCAwLjUxKTtcclxuXHQgICAgICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgICAgIC5uYXYgbGk6aG92ZXIge1xyXG5cdCAgICAgICAgICAgIFx0YmFja2dyb3VuZDogcmdiYSg0MSwgNDEsIDQxLCAwLjUxKTtcclxuXHQgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgLm5hdiBhIHtcclxuXHQgICAgICAgICAgICAgICAgY29sb3I6ICNhYWE7XHJcblx0ICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRcdFx0cGFkZGluZzogMThweCAzNXB4O1xyXG5cdCAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcblx0ICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC41cHg7XHJcblx0ICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgICAgIC5jcmVkaXRzIHtcclxuICAgICAgICAgICAgXHQgICAgYm90dG9tOiAyMHB4O1xyXG5cdFx0XHRcdCAgICBjb2xvcjogI2FhYTtcclxuXHRcdFx0XHQgICAgbGVmdDogMjBweDtcclxuXHRcdFx0XHQgICAgZm9udC1zaXplOiAxNHB4O1xyXG5cdFx0XHRcdCAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0fVxyXG5cdCAgICAgICAgYH08L3N0eWxlPlxyXG5cdCAgICA8L25hdj5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdlxyXG4iXX0= */\n/*@ sourceURL=components\\Nav.js */'
	}));
};

exports.default = Nav;