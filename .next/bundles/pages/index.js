
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _Layout = __webpack_require__(548);

var _Layout2 = _interopRequireDefault(_Layout);

var _Title = __webpack_require__(550);

var _Title2 = _interopRequireDefault(_Title);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Johnny\\Desktop\\personal-portfolio\\pages\\index.js?entry';

exports.default = function () {
	return _react2.default.createElement('div', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 5
		}
	}, _react2.default.createElement(_Layout2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 6
		}
	}, _react2.default.createElement(_Title2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 7
		}
	})));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Johnny\\Desktop\\personal-portfolio\\pages\\index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Johnny\\Desktop\\personal-portfolio\\pages\\index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 545:
/***/ (function(module, exports) {

var __styledJsxDefaultExport = new String(".menu{position:fixed;padding:20px;top:30px;right:30px;cursor:pointer}.menu .dot{position:absolute;width:5px;height:5px;background-color:#000;-webkit-transition:0.2s ease-in-out;-webkit-transition:0.2s ease-in-out;transition:0.2s ease-in-out;border-radius:50%}.menu .dot:nth-of-type(1){-webkit-transform:translate(0px, 0px);-webkit-transform:translate(0px, 0px);-ms-transform:translate(0px, 0px);transform:translate(0px, 0px)}.menu .dot:nth-of-type(2){-webkit-transform:translate(15px, 0px);-webkit-transform:translate(15px, 0px);-ms-transform:translate(15px, 0px);transform:translate(15px, 0px)}.menu .dot:nth-of-type(3){-webkit-transform:translate(30px, 0px);-webkit-transform:translate(30px, 0px);-ms-transform:translate(30px, 0px);transform:translate(30px, 0px)}.menu .dot:nth-of-type(4){-webkit-transform:translate(0px, 15px);-webkit-transform:translate(0px, 15px);-ms-transform:translate(0px, 15px);transform:translate(0px, 15px)}.menu .dot:nth-of-type(5){-webkit-transform:translate(15px, 15px);-webkit-transform:translate(15px, 15px);-ms-transform:translate(15px, 15px);transform:translate(15px, 15px)}.menu .dot:nth-of-type(6){-webkit-transform:translate(30px, 15px);-webkit-transform:translate(30px, 15px);-ms-transform:translate(30px, 15px);transform:translate(30px, 15px)}.menu .dot:nth-of-type(7){-webkit-transform:translate(0px, 30px);-webkit-transform:translate(0px, 30px);-ms-transform:translate(0px, 30px);transform:translate(0px, 30px)}.menu .dot:nth-of-type(8){-webkit-transform:translate(15px, 30px);-webkit-transform:translate(15px, 30px);-ms-transform:translate(15px, 30px);transform:translate(15px, 30px)}.menu .dot:nth-of-type(9){-webkit-transform:translate(30px, 30px);-webkit-transform:translate(30px, 30px);-ms-transform:translate(30px, 30px);transform:translate(30px, 30px)}.menu:hover .dot{background-color:#555}.menu:hover .dot:nth-of-type(1){-webkit-transform:translate(-4px, -4px);-webkit-transform:translate(-4px, -4px);-ms-transform:translate(-4px, -4px);transform:translate(-4px, -4px)}.menu:hover .dot:nth-of-type(3){-webkit-transform:translate(20px, -4px);-webkit-transform:translate(20px, -4px);-ms-transform:translate(20px, -4px);transform:translate(20px, -4px)}.menu:hover .dot:nth-of-type(7){-webkit-transform:translate(-4px, 20px);-webkit-transform:translate(-4px, 20px);-ms-transform:translate(-4px, 20px);transform:translate(-4px, 20px)}.menu:hover .dot:nth-of-type(9){-webkit-transform:translate(20px, 20px);-webkit-transform:translate(20px, 20px);-ms-transform:translate(20px, 20px);transform:translate(20px, 20px)}.menu.active .dot:nth-of-type(1){-webkit-transform:translate(0, 0);-webkit-transform:translate(0, 0);-ms-transform:translate(0, 0);transform:translate(0, 0)}.menu.active .dot:nth-of-type(2){-webkit-transform:translate(4px, 4px);-webkit-transform:translate(4px, 4px);-ms-transform:translate(4px, 4px);transform:translate(4px, 4px)}.menu.active .dot:nth-of-type(3){-webkit-transform:translate(16px, 0);-webkit-transform:translate(16px, 0);-ms-transform:translate(16px, 0);transform:translate(16px, 0)}.menu.active .dot:nth-of-type(4){-webkit-transform:translate(4px, 12px);-webkit-transform:translate(4px, 12px);-ms-transform:translate(4px, 12px);transform:translate(4px, 12px)}.menu.active .dot:nth-of-type(6){-webkit-transform:translate(12px, 4px);-webkit-transform:translate(12px, 4px);-ms-transform:translate(12px, 4px);transform:translate(12px, 4px)}.menu.active .dot:nth-of-type(7){-webkit-transform:translate(0, 16px);-webkit-transform:translate(0, 16px);-ms-transform:translate(0, 16px);transform:translate(0, 16px)}.menu.active .dot:nth-of-type(8){-webkit-transform:translate(12px, 12px);-webkit-transform:translate(12px, 12px);-ms-transform:translate(12px, 12px);transform:translate(12px, 12px)}.menu.active .dot:nth-of-type(9){-webkit-transform:translate(16px, 16px);-webkit-transform:translate(16px, 16px);-ms-transform:translate(16px, 16px);transform:translate(16px, 16px)}.menu.active:hover .dot:nth-of-type(1){-webkit-transform:translate(-4px, -4px);-webkit-transform:translate(-4px, -4px);-ms-transform:translate(-4px, -4px);transform:translate(-4px, -4px)}.menu.active:hover .dot:nth-of-type(2){-webkit-transform:translate(2px, 2px);-webkit-transform:translate(2px, 2px);-ms-transform:translate(2px, 2px);transform:translate(2px, 2px)}.menu.active:hover .dot:nth-of-type(3){-webkit-transform:translate(20px, -4px);-webkit-transform:translate(20px, -4px);-ms-transform:translate(20px, -4px);transform:translate(20px, -4px)}.menu.active:hover .dot:nth-of-type(4){-webkit-transform:translate(2px, 14px);-webkit-transform:translate(2px, 14px);-ms-transform:translate(2px, 14px);transform:translate(2px, 14px)}.menu.active:hover .dot:nth-of-type(6){-webkit-transform:translate(14px, 2px);-webkit-transform:translate(14px, 2px);-ms-transform:translate(14px, 2px);transform:translate(14px, 2px)}.menu.active:hover .dot:nth-of-type(7){-webkit-transform:translate(-4px, 20px);-webkit-transform:translate(-4px, 20px);-ms-transform:translate(-4px, 20px);transform:translate(-4px, 20px)}.menu.active:hover .dot:nth-of-type(8){-webkit-transform:translate(14px, 14px);-webkit-transform:translate(14px, 14px);-ms-transform:translate(14px, 14px);transform:translate(14px, 14px)}.menu.active:hover .dot:nth-of-type(9){-webkit-transform:translate(20px, 20px);-webkit-transform:translate(20px, 20px);-ms-transform:translate(20px, 20px);transform:translate(20px, 20px)}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlc1xcc3R5bGVzaGVldC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEFBRWtCLEFBQ0ssQUFDc0IsQUFDQyxBQUNBLEFBQ0EsQUFDQyxBQUNBLEFBQ0QsQUFDQyxBQUNBLEFBQ3BCLEFBQ29CLEFBQ0EsQUFDQSxBQUNBLEFBQ1IsQUFDSSxBQUNELEFBQ0UsQUFDQSxBQUNGLEFBQ0csQUFDQSxBQUNBLEFBQ0YsQUFDRSxBQUNELEFBQ0EsQUFDQyxBQUNBLEFBQ0EsZ0JBL0JYLEdBQ0ksSUFVVixPQVhrQixBQUNRLEtBZXdCLEdBRU0sQUFHQSxDQW5CTSxBQWVKLEFBUUEsQ0F6QjFCLEFBR2dDLEFBQ0EsQUFDQSxBQUdBLEFBV0osQUFDQSxBQU9BLEFBQ0EsQ0F0Qk0sQUFDQSxBQUVBLEFBQ0EsQUFFQSxBQUNBLEFBQ0EsQUFDQSxBQU9KLEFBQ0EsQUFDQSxBQUVBLEFBR0EsQUFDQSxBQUNBLENBOUJULFVBREgsYUFDNEMsR0FEM0Msa0NBQzRFLDBCQWU1RSxZQUVNLEFBR0EsSUFuQk0sQUFlSixBQVFBLElBdEJNLEFBQ0EsQUFDQSxBQUdBLEFBV0osQUFDQSxBQU9BLEFBQ0EsSUF0Qk0sQUFDQSxBQUVBLEFBQ0EsQUFFQSxBQUNBLEFBQ0EsQUFDQSxBQU9KLEFBQ0EsQUFDQSxBQUVBLEFBR0EsQUFDQSxBQUNBLGdCQTlCdUYsbUJBQUMiLCJmaWxlIjoic3R5bGVzXFxzdHlsZXNoZWV0LnNjc3MiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvSm9obm55L0Rlc2t0b3AvcGVyc29uYWwtcG9ydGZvbGlvIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi5tZW51IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICB0b3A6IDMwcHg7XFxuICByaWdodDogMzBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgLm1lbnUgLmRvdCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDVweDtcXG4gICAgaGVpZ2h0OiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlOyB9XFxuICAubWVudSAuZG90Om50aC1vZi10eXBlKDEpIHtcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTsgfVxcbiAgLm1lbnUgLmRvdDpudGgtb2YtdHlwZSgyKSB7XFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNXB4LCAwcHgpO1xcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTVweCwgMHB4KTsgfVxcbiAgLm1lbnUgLmRvdDpudGgtb2YtdHlwZSgzKSB7XFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMHB4LCAwcHgpO1xcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzBweCwgMHB4KTsgfVxcbiAgLm1lbnUgLmRvdDpudGgtb2YtdHlwZSg0KSB7XFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDE1cHgpO1xcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAxNXB4KTsgfVxcbiAgLm1lbnUgLmRvdDpudGgtb2YtdHlwZSg1KSB7XFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNXB4LCAxNXB4KTtcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE1cHgsIDE1cHgpOyB9XFxuICAubWVudSAuZG90Om50aC1vZi10eXBlKDYpIHtcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDMwcHgsIDE1cHgpO1xcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzBweCwgMTVweCk7IH1cXG4gIC5tZW51IC5kb3Q6bnRoLW9mLXR5cGUoNykge1xcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAzMHB4KTtcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMzBweCk7IH1cXG4gIC5tZW51IC5kb3Q6bnRoLW9mLXR5cGUoOCkge1xcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTVweCwgMzBweCk7XFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNXB4LCAzMHB4KTsgfVxcbiAgLm1lbnUgLmRvdDpudGgtb2YtdHlwZSg5KSB7XFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMHB4LCAzMHB4KTtcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDMwcHgsIDMwcHgpOyB9XFxuICAubWVudTpob3ZlciAuZG90IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTsgfVxcbiAgLm1lbnU6aG92ZXIgLmRvdDpudGgtb2YtdHlwZSgxKSB7XFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNHB4LCAtNHB4KTtcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00cHgsIC00cHgpOyB9XFxuICAubWVudTpob3ZlciAuZG90Om50aC1vZi10eXBlKDMpIHtcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDIwcHgsIC00cHgpO1xcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjBweCwgLTRweCk7IH1cXG4gIC5tZW51OmhvdmVyIC5kb3Q6bnRoLW9mLXR5cGUoNykge1xcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTRweCwgMjBweCk7XFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNHB4LCAyMHB4KTsgfVxcbiAgLm1lbnU6aG92ZXIgLmRvdDpudGgtb2YtdHlwZSg5KSB7XFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMHB4LCAyMHB4KTtcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIwcHgsIDIwcHgpOyB9XFxuICAubWVudS5hY3RpdmUgLmRvdDpudGgtb2YtdHlwZSgxKSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7IH1cXG4gIC5tZW51LmFjdGl2ZSAuZG90Om50aC1vZi10eXBlKDIpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSg0cHgsIDRweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNHB4LCA0cHgpOyB9XFxuICAubWVudS5hY3RpdmUgLmRvdDpudGgtb2YtdHlwZSgzKSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTZweCwgMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTZweCwgMCk7IH1cXG4gIC5tZW51LmFjdGl2ZSAuZG90Om50aC1vZi10eXBlKDQpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSg0cHgsIDEycHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDRweCwgMTJweCk7IH1cXG4gIC5tZW51LmFjdGl2ZSAuZG90Om50aC1vZi10eXBlKDYpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMnB4LCA0cHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEycHgsIDRweCk7IH1cXG4gIC5tZW51LmFjdGl2ZSAuZG90Om50aC1vZi10eXBlKDcpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxNnB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxNnB4KTsgfVxcbiAgLm1lbnUuYWN0aXZlIC5kb3Q6bnRoLW9mLXR5cGUoOCkge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDEycHgsIDEycHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEycHgsIDEycHgpOyB9XFxuICAubWVudS5hY3RpdmUgLmRvdDpudGgtb2YtdHlwZSg5KSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTZweCwgMTZweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTZweCwgMTZweCk7IH1cXG4gIC5tZW51LmFjdGl2ZTpob3ZlciAuZG90Om50aC1vZi10eXBlKDEpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNHB4LCAtNHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNHB4LCAtNHB4KTsgfVxcbiAgLm1lbnUuYWN0aXZlOmhvdmVyIC5kb3Q6bnRoLW9mLXR5cGUoMikge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMnB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIDJweCk7IH1cXG4gIC5tZW51LmFjdGl2ZTpob3ZlciAuZG90Om50aC1vZi10eXBlKDMpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMHB4LCAtNHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMHB4LCAtNHB4KTsgfVxcbiAgLm1lbnUuYWN0aXZlOmhvdmVyIC5kb3Q6bnRoLW9mLXR5cGUoNCkge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMTRweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAxNHB4KTsgfVxcbiAgLm1lbnUuYWN0aXZlOmhvdmVyIC5kb3Q6bnRoLW9mLXR5cGUoNikge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDE0cHgsIDJweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTRweCwgMnB4KTsgfVxcbiAgLm1lbnUuYWN0aXZlOmhvdmVyIC5kb3Q6bnRoLW9mLXR5cGUoNykge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC00cHgsIDIwcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00cHgsIDIwcHgpOyB9XFxuICAubWVudS5hY3RpdmU6aG92ZXIgLmRvdDpudGgtb2YtdHlwZSg4KSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTRweCwgMTRweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTRweCwgMTRweCk7IH1cXG4gIC5tZW51LmFjdGl2ZTpob3ZlciAuZG90Om50aC1vZi10eXBlKDkpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMHB4LCAyMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMHB4LCAyMHB4KTsgfVxcblwiIl19 */\n/*@ sourceURL=styles\\stylesheet.scss */");

__styledJsxDefaultExport.__hash = "14272804771";
__styledJsxDefaultExport.__scoped = ".menu[data-jsx-ext~=\"24272804771\"]{position:fixed;padding:20px;top:30px;right:30px;cursor:pointer}.menu[data-jsx-ext~=\"24272804771\"] .dot[data-jsx-ext~=\"24272804771\"]{position:absolute;width:5px;height:5px;background-color:#000;-webkit-transition:0.2s ease-in-out;-webkit-transition:0.2s ease-in-out;transition:0.2s ease-in-out;border-radius:50%}.menu[data-jsx-ext~=\"24272804771\"] .dot[data-jsx-ext~=\"24272804771\"]:nth-of-type(1){-webkit-transform:translate(0px, 0px);-webkit-transform:translate(0px, 0px);-ms-transform:translate(0px, 0px);transform:translate(0px, 0px)}.menu[data-jsx-ext~=\"24272804771\"] .dot[data-jsx-ext~=\"24272804771\"]:nth-of-type(2){-webkit-transform:translate(15px, 0px);-webkit-transform:translate(15px, 0px);-ms-transform:translate(15px, 0px);transform:translate(15px, 0px)}.menu[data-jsx-ext~=\"24272804771\"] .dot[data-jsx-ext~=\"24272804771\"]:nth-of-type(3){-webkit-transform:translate(30px, 0px);-webkit-transform:translate(30px, 0px);-ms-transform:translate(30px, 0px);transform:translate(30px, 0px)}.menu[data-jsx-ext~=\"24272804771\"] .dot[data-jsx-ext~=\"24272804771\"]:nth-of-type(4){-webkit-transform:translate(0px, 15px);-webkit-transform:translate(0px, 15px);-ms-transform:translate(0px, 15px);transform:translate(0px, 15px)}.menu[data-jsx-ext~=\"24272804771\"] .dot[data-jsx-ext~=\"24272804771\"]:nth-of-type(5){-webkit-transform:translate(15px, 15px);-webkit-transform:translate(15px, 15px);-ms-transform:translate(15px, 15px);transform:translate(15px, 15px)}.menu[data-jsx-ext~=\"24272804771\"] .dot[data-jsx-ext~=\"24272804771\"]:nth-of-type(6){-webkit-transform:translate(30px, 15px);-webkit-transform:translate(30px, 15px);-ms-transform:translate(30px, 15px);transform:translate(30px, 15px)}.menu[data-jsx-ext~=\"24272804771\"] .dot[data-jsx-ext~=\"24272804771\"]:nth-of-type(7){-webkit-transform:translate(0px, 30px);-webkit-transform:translate(0px, 30px);-ms-transform:translate(0px, 30px);transform:translate(0px, 30px)}.menu[data-jsx-ext~=\"24272804771\"] .dot[data-jsx-ext~=\"24272804771\"]:nth-of-type(8){-webkit-transform:translate(15px, 30px);-webkit-transform:translate(15px, 30px);-ms-transform:translate(15px, 30px);transform:translate(15px, 30px)}.menu[data-jsx-ext~=\"24272804771\"] .dot[data-jsx-ext~=\"24272804771\"]:nth-of-type(9){-webkit-transform:translate(30px, 30px);-webkit-transform:translate(30px, 30px);-ms-transform:translate(30px, 30px);transform:translate(30px, 30px)}.menu[data-jsx-ext~=\"24272804771\"]:hover .dot[data-jsx-ext~=\"24272804771\"]{background-color:#555}.menu[data-jsx-ext~=\"24272804771\"]:hover .dot[data-jsx-ext~=\"24272804771\"]:nth-of-type(1){-webkit-transform:translate(-4px, -4px);-webkit-transform:translate(-4px, -4px);-ms-transform:translate(-4px, -4px);transform:translate(-4px, -4px)}.menu[data-jsx-ext~=\"24272804771\"]:hover .dot[data-jsx-ext~=\"24272804771\"]:nth-of-type(3){-webkit-transform:translate(20px, -4px);-webkit-transform:translate(20px, -4px);-ms-transform:translate(20px, -4px);transform:translate(20px, -4px)}.menu[data-jsx-ext~=\"24272804771\"]:hover .dot[data-jsx-ext~=\"24272804771\"]:nth-of-type(7){-webkit-transform:translate(-4px, 20px);-webkit-transform:translate(-4px, 20px);-ms-transform:translate(-4px, 20px);transform:translate(-4px, 20px)}.menu[data-jsx-ext~=\"24272804771\"]:hover .dot[data-jsx-ext~=\"24272804771\"]:nth-of-type(9){-webkit-transform:translate(20px, 20px);-webkit-transform:translate(20px, 20px);-ms-transform:translate(20px, 20px);transform:translate(20px, 20px)}.menu.active[data-jsx-ext~=\"24272804771\"] .dot[data-jsx-ext~=\"24272804771\"]:nth-of-type(1){-webkit-transform:translate(0, 0);-webkit-transform:translate(0, 0);-ms-transform:translate(0, 0);transform:translate(0, 0)}.menu.active[data-jsx-ext~=\"24272804771\"] .dot[data-jsx-ext~=\"24272804771\"]:nth-of-type(2){-webkit-transform:translate(4px, 4px);-webkit-transform:translate(4px, 4px);-ms-transform:translate(4px, 4px);transform:translate(4px, 4px)}.menu.active[data-jsx-ext~=\"24272804771\"] .dot[data-jsx-ext~=\"24272804771\"]:nth-of-type(3){-webkit-transform:translate(16px, 0);-webkit-transform:translate(16px, 0);-ms-transform:translate(16px, 0);transform:translate(16px, 0)}.menu.active[data-jsx-ext~=\"24272804771\"] .dot[data-jsx-ext~=\"24272804771\"]:nth-of-type(4){-webkit-transform:translate(4px, 12px);-webkit-transform:translate(4px, 12px);-ms-transform:translate(4px, 12px);transform:translate(4px, 12px)}.menu.active[data-jsx-ext~=\"24272804771\"] .dot[data-jsx-ext~=\"24272804771\"]:nth-of-type(6){-webkit-transform:translate(12px, 4px);-webkit-transform:translate(12px, 4px);-ms-transform:translate(12px, 4px);transform:translate(12px, 4px)}.menu.active[data-jsx-ext~=\"24272804771\"] .dot[data-jsx-ext~=\"24272804771\"]:nth-of-type(7){-webkit-transform:translate(0, 16px);-webkit-transform:translate(0, 16px);-ms-transform:translate(0, 16px);transform:translate(0, 16px)}.menu.active[data-jsx-ext~=\"24272804771\"] .dot[data-jsx-ext~=\"24272804771\"]:nth-of-type(8){-webkit-transform:translate(12px, 12px);-webkit-transform:translate(12px, 12px);-ms-transform:translate(12px, 12px);transform:translate(12px, 12px)}.menu.active[data-jsx-ext~=\"24272804771\"] .dot[data-jsx-ext~=\"24272804771\"]:nth-of-type(9){-webkit-transform:translate(16px, 16px);-webkit-transform:translate(16px, 16px);-ms-transform:translate(16px, 16px);transform:translate(16px, 16px)}.menu.active[data-jsx-ext~=\"24272804771\"]:hover .dot[data-jsx-ext~=\"24272804771\"]:nth-of-type(1){-webkit-transform:translate(-4px, -4px);-webkit-transform:translate(-4px, -4px);-ms-transform:translate(-4px, -4px);transform:translate(-4px, -4px)}.menu.active[data-jsx-ext~=\"24272804771\"]:hover .dot[data-jsx-ext~=\"24272804771\"]:nth-of-type(2){-webkit-transform:translate(2px, 2px);-webkit-transform:translate(2px, 2px);-ms-transform:translate(2px, 2px);transform:translate(2px, 2px)}.menu.active[data-jsx-ext~=\"24272804771\"]:hover .dot[data-jsx-ext~=\"24272804771\"]:nth-of-type(3){-webkit-transform:translate(20px, -4px);-webkit-transform:translate(20px, -4px);-ms-transform:translate(20px, -4px);transform:translate(20px, -4px)}.menu.active[data-jsx-ext~=\"24272804771\"]:hover .dot[data-jsx-ext~=\"24272804771\"]:nth-of-type(4){-webkit-transform:translate(2px, 14px);-webkit-transform:translate(2px, 14px);-ms-transform:translate(2px, 14px);transform:translate(2px, 14px)}.menu.active[data-jsx-ext~=\"24272804771\"]:hover .dot[data-jsx-ext~=\"24272804771\"]:nth-of-type(6){-webkit-transform:translate(14px, 2px);-webkit-transform:translate(14px, 2px);-ms-transform:translate(14px, 2px);transform:translate(14px, 2px)}.menu.active[data-jsx-ext~=\"24272804771\"]:hover .dot[data-jsx-ext~=\"24272804771\"]:nth-of-type(7){-webkit-transform:translate(-4px, 20px);-webkit-transform:translate(-4px, 20px);-ms-transform:translate(-4px, 20px);transform:translate(-4px, 20px)}.menu.active[data-jsx-ext~=\"24272804771\"]:hover .dot[data-jsx-ext~=\"24272804771\"]:nth-of-type(8){-webkit-transform:translate(14px, 14px);-webkit-transform:translate(14px, 14px);-ms-transform:translate(14px, 14px);transform:translate(14px, 14px)}.menu.active[data-jsx-ext~=\"24272804771\"]:hover .dot[data-jsx-ext~=\"24272804771\"]:nth-of-type(9){-webkit-transform:translate(20px, 20px);-webkit-transform:translate(20px, 20px);-ms-transform:translate(20px, 20px);transform:translate(20px, 20px)}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlc1xcc3R5bGVzaGVldC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEFBRWtCLEFBQ0ssQUFDc0IsQUFDQyxBQUNBLEFBQ0EsQUFDQyxBQUNBLEFBQ0QsQUFDQyxBQUNBLEFBQ3BCLEFBQ29CLEFBQ0EsQUFDQSxBQUNBLEFBQ1IsQUFDSSxBQUNELEFBQ0UsQUFDQSxBQUNGLEFBQ0csQUFDQSxBQUNBLEFBQ0YsQUFDRSxBQUNELEFBQ0EsQUFDQyxBQUNBLEFBQ0EsZ0JBL0JYLEdBQ0ksSUFVVixPQVhrQixBQUNRLEtBZXdCLEdBRU0sQUFHQSxDQW5CTSxBQWVKLEFBUUEsQ0F6QjFCLEFBR2dDLEFBQ0EsQUFDQSxBQUdBLEFBV0osQUFDQSxBQU9BLEFBQ0EsQ0F0Qk0sQUFDQSxBQUVBLEFBQ0EsQUFFQSxBQUNBLEFBQ0EsQUFDQSxBQU9KLEFBQ0EsQUFDQSxBQUVBLEFBR0EsQUFDQSxBQUNBLENBOUJULFVBREgsYUFDNEMsR0FEM0Msa0NBQzRFLDBCQWU1RSxZQUVNLEFBR0EsSUFuQk0sQUFlSixBQVFBLElBdEJNLEFBQ0EsQUFDQSxBQUdBLEFBV0osQUFDQSxBQU9BLEFBQ0EsSUF0Qk0sQUFDQSxBQUVBLEFBQ0EsQUFFQSxBQUNBLEFBQ0EsQUFDQSxBQU9KLEFBQ0EsQUFDQSxBQUVBLEFBR0EsQUFDQSxBQUNBLGdCQTlCdUYsbUJBQUMiLCJmaWxlIjoic3R5bGVzXFxzdHlsZXNoZWV0LnNjc3MiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvSm9obm55L0Rlc2t0b3AvcGVyc29uYWwtcG9ydGZvbGlvIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi5tZW51IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICB0b3A6IDMwcHg7XFxuICByaWdodDogMzBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgLm1lbnUgLmRvdCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDVweDtcXG4gICAgaGVpZ2h0OiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlOyB9XFxuICAubWVudSAuZG90Om50aC1vZi10eXBlKDEpIHtcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTsgfVxcbiAgLm1lbnUgLmRvdDpudGgtb2YtdHlwZSgyKSB7XFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNXB4LCAwcHgpO1xcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTVweCwgMHB4KTsgfVxcbiAgLm1lbnUgLmRvdDpudGgtb2YtdHlwZSgzKSB7XFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMHB4LCAwcHgpO1xcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzBweCwgMHB4KTsgfVxcbiAgLm1lbnUgLmRvdDpudGgtb2YtdHlwZSg0KSB7XFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDE1cHgpO1xcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAxNXB4KTsgfVxcbiAgLm1lbnUgLmRvdDpudGgtb2YtdHlwZSg1KSB7XFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNXB4LCAxNXB4KTtcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE1cHgsIDE1cHgpOyB9XFxuICAubWVudSAuZG90Om50aC1vZi10eXBlKDYpIHtcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDMwcHgsIDE1cHgpO1xcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzBweCwgMTVweCk7IH1cXG4gIC5tZW51IC5kb3Q6bnRoLW9mLXR5cGUoNykge1xcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAzMHB4KTtcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMzBweCk7IH1cXG4gIC5tZW51IC5kb3Q6bnRoLW9mLXR5cGUoOCkge1xcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTVweCwgMzBweCk7XFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNXB4LCAzMHB4KTsgfVxcbiAgLm1lbnUgLmRvdDpudGgtb2YtdHlwZSg5KSB7XFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMHB4LCAzMHB4KTtcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDMwcHgsIDMwcHgpOyB9XFxuICAubWVudTpob3ZlciAuZG90IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTsgfVxcbiAgLm1lbnU6aG92ZXIgLmRvdDpudGgtb2YtdHlwZSgxKSB7XFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNHB4LCAtNHB4KTtcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00cHgsIC00cHgpOyB9XFxuICAubWVudTpob3ZlciAuZG90Om50aC1vZi10eXBlKDMpIHtcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDIwcHgsIC00cHgpO1xcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjBweCwgLTRweCk7IH1cXG4gIC5tZW51OmhvdmVyIC5kb3Q6bnRoLW9mLXR5cGUoNykge1xcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTRweCwgMjBweCk7XFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNHB4LCAyMHB4KTsgfVxcbiAgLm1lbnU6aG92ZXIgLmRvdDpudGgtb2YtdHlwZSg5KSB7XFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMHB4LCAyMHB4KTtcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIwcHgsIDIwcHgpOyB9XFxuICAubWVudS5hY3RpdmUgLmRvdDpudGgtb2YtdHlwZSgxKSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7IH1cXG4gIC5tZW51LmFjdGl2ZSAuZG90Om50aC1vZi10eXBlKDIpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSg0cHgsIDRweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNHB4LCA0cHgpOyB9XFxuICAubWVudS5hY3RpdmUgLmRvdDpudGgtb2YtdHlwZSgzKSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTZweCwgMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTZweCwgMCk7IH1cXG4gIC5tZW51LmFjdGl2ZSAuZG90Om50aC1vZi10eXBlKDQpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSg0cHgsIDEycHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDRweCwgMTJweCk7IH1cXG4gIC5tZW51LmFjdGl2ZSAuZG90Om50aC1vZi10eXBlKDYpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMnB4LCA0cHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEycHgsIDRweCk7IH1cXG4gIC5tZW51LmFjdGl2ZSAuZG90Om50aC1vZi10eXBlKDcpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxNnB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxNnB4KTsgfVxcbiAgLm1lbnUuYWN0aXZlIC5kb3Q6bnRoLW9mLXR5cGUoOCkge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDEycHgsIDEycHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEycHgsIDEycHgpOyB9XFxuICAubWVudS5hY3RpdmUgLmRvdDpudGgtb2YtdHlwZSg5KSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTZweCwgMTZweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTZweCwgMTZweCk7IH1cXG4gIC5tZW51LmFjdGl2ZTpob3ZlciAuZG90Om50aC1vZi10eXBlKDEpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNHB4LCAtNHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNHB4LCAtNHB4KTsgfVxcbiAgLm1lbnUuYWN0aXZlOmhvdmVyIC5kb3Q6bnRoLW9mLXR5cGUoMikge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMnB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIDJweCk7IH1cXG4gIC5tZW51LmFjdGl2ZTpob3ZlciAuZG90Om50aC1vZi10eXBlKDMpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMHB4LCAtNHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMHB4LCAtNHB4KTsgfVxcbiAgLm1lbnUuYWN0aXZlOmhvdmVyIC5kb3Q6bnRoLW9mLXR5cGUoNCkge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMTRweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAxNHB4KTsgfVxcbiAgLm1lbnUuYWN0aXZlOmhvdmVyIC5kb3Q6bnRoLW9mLXR5cGUoNikge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDE0cHgsIDJweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTRweCwgMnB4KTsgfVxcbiAgLm1lbnUuYWN0aXZlOmhvdmVyIC5kb3Q6bnRoLW9mLXR5cGUoNykge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC00cHgsIDIwcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00cHgsIDIwcHgpOyB9XFxuICAubWVudS5hY3RpdmU6aG92ZXIgLmRvdDpudGgtb2YtdHlwZSg4KSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTRweCwgMTRweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTRweCwgMTRweCk7IH1cXG4gIC5tZW51LmFjdGl2ZTpob3ZlciAuZG90Om50aC1vZi10eXBlKDkpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMHB4LCAyMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMHB4LCAyMHB4KTsgfVxcblwiIl19 */\n/*@ sourceURL=styles\\stylesheet.scss */";
__styledJsxDefaultExport.__scopedHash = "24272804771";
module.exports = __styledJsxDefaultExport;

/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = __webpack_require__(37);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(40);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(39);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(540);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _brushstroke = __webpack_require__(551);

var _brushstroke2 = _interopRequireDefault(_brushstroke);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Johnny\\Desktop\\personal-portfolio\\components\\Canvas.js';


var _class = function (_Component) {
	(0, _inherits3.default)(_class, _Component);

	function _class(props) {
		(0, _classCallCheck3.default)(this, _class);

		return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));
	}

	(0, _createClass3.default)(_class, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var height = 150;
			var width = 800;
			var options = {
				width: width,
				height: height,
				color: '#222',
				animation: 'points',
				duration: 5,
				inkAmount: 4,
				size: 150,
				frames: 7,
				frameAnimation: true,
				splashing: false,
				reduceOverflow: 20
			};
			var bs = new _brushstroke2.default(options);

			function runAnimation() {
				bs.draw({
					points: [width / 1.38, height / 2.0, width / 2, height / 1.95, width / 3.4, height / 1.88]
				});
			}
			// Start
			runAnimation();
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement('div', {
				'data-jsx': 1601242705,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 40
				}
			}, _react2.default.createElement('canvas', { className: 'canvas-brushstroke', 'data-jsx': 1601242705,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 41
				}
			}), _react2.default.createElement(_style2.default, {
				styleId: 1601242705,
				css: '.canvas-brushstroke[data-jsx="1601242705"]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%, -50%);-ms-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXENhbnZhcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Q2dCLEFBRytCLG1CQUFxQixTQUFzQixVQUE2QywrR0FBWSIsImZpbGUiOiJjb21wb25lbnRzXFxDYW52YXMuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvSm9obm55L0Rlc2t0b3AvcGVyc29uYWwtcG9ydGZvbGlvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQnJ1c2hzdHJva2UgZnJvbSAnLi4vdXRpbHMvYnJ1c2hzdHJva2UnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IgKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcylcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0Y29uc3QgaGVpZ2h0ID0gMTUwO1xyXG5cdFx0Y29uc3Qgd2lkdGggPSA4MDA7XHJcblx0XHRjb25zdCBvcHRpb25zID0ge1xyXG5cdFx0XHR3aWR0aDogd2lkdGgsXHJcblx0XHRcdGhlaWdodDogaGVpZ2h0LFxyXG5cdFx0XHRjb2xvcjogJyMyMjInLFxyXG5cdFx0XHRhbmltYXRpb246ICdwb2ludHMnLFxyXG5cdFx0XHRkdXJhdGlvbjogNSxcclxuXHRcdCAgICBpbmtBbW91bnQ6IDQsXHJcblx0XHQgICAgc2l6ZTogMTUwLFxyXG5cdFx0ICAgIGZyYW1lczogNyxcclxuXHRcdCAgICBmcmFtZUFuaW1hdGlvbjogdHJ1ZSxcclxuXHRcdCAgICBzcGxhc2hpbmc6IGZhbHNlLFxyXG5cdFx0ICAgIHJlZHVjZU92ZXJmbG93OiAyMCxcclxuXHRcdH1cclxuXHRcdHZhciBicyA9IG5ldyBCcnVzaHN0cm9rZShvcHRpb25zKTtcclxuXHJcblx0XHRmdW5jdGlvbiBydW5BbmltYXRpb24oKSB7XHJcblx0XHQgICAgYnMuZHJhdyh7XHJcblx0XHQgICAgICAgIHBvaW50czogW3dpZHRoLzEuMzgsIGhlaWdodCAvIDIuMCxcclxuXHRcdCAgICAgICAgXHRcdHdpZHRoLzIsIGhlaWdodCAvIDEuOTUsXHJcblx0XHQgICAgICAgIFx0XHR3aWR0aC8zLjQsIGhlaWdodCAvIDEuODhdXHJcblx0XHQgICAgfSk7XHJcblx0XHR9XHJcblx0XHQvLyBTdGFydFxyXG5cdFx0cnVuQW5pbWF0aW9uKCk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIgKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHQ8Y2FudmFzIGNsYXNzTmFtZT1cImNhbnZhcy1icnVzaHN0cm9rZVwiLz5cclxuXHRcdFx0XHQ8c3R5bGUganN4PntgXHJcblx0XHQgICAgICAgIFx0LmNhbnZhcy1icnVzaHN0cm9rZSB7XHJcblx0XHQgICAgICAgIFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHQgICAgICAgIFx0XHR0b3A6IDUwJTtcclxuXHRcdCAgICAgICAgXHRcdGxlZnQ6IDUwJTtcclxuXHRcdCAgICAgICAgXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cdFx0ICAgICAgICBcdH1cclxuXHRcdCAgICAgICAgYH08L3N0eWxlPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHJcblx0fVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=components\\Canvas.js */'
			}));
		}
	}]);

	return _class;
}(_react.Component);

exports.default = _class;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Johnny\\Desktop\\personal-portfolio\\components\\Canvas.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Johnny\\Desktop\\personal-portfolio\\components\\Canvas.js"); } } })();

/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(194);

var _head2 = _interopRequireDefault(_head);

var _stylesheet = __webpack_require__(545);

var _stylesheet2 = _interopRequireDefault(_stylesheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Johnny\\Desktop\\personal-portfolio\\components\\Header.js';


var Header = function Header() {
    return _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _stylesheet2.default }, __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }), _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }, _react2.default.createElement('title', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, 'Johnny Bui | Front End Web Developer'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Raleway:200', rel: 'stylesheet', __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }), _react2.default.createElement('link', { href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', rel: 'stylesheet', __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    })));
};

exports.default = Header;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Johnny\\Desktop\\personal-portfolio\\components\\Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Johnny\\Desktop\\personal-portfolio\\components\\Header.js"); } } })();

/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = __webpack_require__(540);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(547);

var _Header2 = _interopRequireDefault(_Header);

var _Menu = __webpack_require__(553);

var _Menu2 = _interopRequireDefault(_Menu);

var _Social = __webpack_require__(549);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Johnny\\Desktop\\personal-portfolio\\components\\Layout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Johnny\\Desktop\\personal-portfolio\\components\\Layout.js"); } } })();

/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\Johnny\\Desktop\\personal-portfolio\\components\\Social.js";

var Social = function Social() {
    return _react2.default.createElement("div", { className: "social", __source: {
            fileName: _jsxFileName,
            lineNumber: 2
        }
    }, _react2.default.createElement("ul", {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 3
        }
    }, _react2.default.createElement("a", { href: "https://github.com/johnnyqbui", target: "_blank", __source: {
            fileName: _jsxFileName,
            lineNumber: 4
        }
    }, _react2.default.createElement("li", { className: "github", __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }, _react2.default.createElement("img", { src: "/static/github.png", __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }))), _react2.default.createElement("a", { href: "https://www.linkedin.com/in/johnnyqbui/", target: "_blank", __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, _react2.default.createElement("li", {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, _react2.default.createElement("img", { src: "/static/linkedin.png", __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }))), _react2.default.createElement("a", { href: "https://www.instagram.com/jqbui/", target: "_blank", __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }, _react2.default.createElement("li", {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, _react2.default.createElement("img", { src: "/static/instagram.png", __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }))), _react2.default.createElement("a", { href: "https://codepen.io/jbui/", target: "_blank", __source: {
            fileName: _jsxFileName,
            lineNumber: 19
        }
    }, _react2.default.createElement("li", {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 20
        }
    }, _react2.default.createElement("img", { src: "/static/codepen.png", __source: {
            fileName: _jsxFileName,
            lineNumber: 21
        }
    })))), _react2.default.createElement("style", {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 25
        }
    }, "\n        .social {\n            position: fixed;\n            top: 50%;\n            transform: translateY(-50%);\n        }\n\n        .social ul {\n            margin: 0;\n            padding: 0;\n        }\n\n        .social li {\n            list-style-type: none;\n            padding: 10px;\n            margin: 30px 0;\n        }\n\n        .social img {\n            width: 25px;\n        }\n    "));
};

exports.default = Social;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Johnny\\Desktop\\personal-portfolio\\components\\Social.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Johnny\\Desktop\\personal-portfolio\\components\\Social.js"); } } })();

/***/ }),

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = __webpack_require__(540);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _Canvas = __webpack_require__(546);

var _Canvas2 = _interopRequireDefault(_Canvas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\Johnny\\Desktop\\personal-portfolio\\components\\Title.js";


var Title = function Title() {
    return _react2.default.createElement("div", {
        "data-jsx": 1332093348,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 4
        }
    }, _react2.default.createElement("div", { className: "title", "data-jsx": 1332093348,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }, _react2.default.createElement("h1", {
        "data-jsx": 1332093348,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, "Johnny Bui"), _react2.default.createElement("h2", {
        "data-jsx": 1332093348,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }, "Front End Web Developer")), _react2.default.createElement(_Canvas2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }), _react2.default.createElement(_style2.default, {
        styleId: 1332093348,
        css: ".title[data-jsx=\"1332093348\"]{-webkit-text-align:center;text-align:center;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%, -50%);-ms-transform:translate(-50%, -50%);transform:translate(-50%, -50%);z-index:2;color:white}.title[data-jsx=\"1332093348\"] h1[data-jsx=\"1332093348\"]{margin:0 0 5px 0;-webkit-letter-spacing:5px;-moz-letter-spacing:5px;-ms-letter-spacing:5px;letter-spacing:5px}.title[data-jsx=\"1332093348\"] h2[data-jsx=\"1332093348\"]{margin:0;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;font-size:1.2em}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFRpdGxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNvQixBQUdtQyxBQUVELEFBQ1IsVUFBb0MsUUFEUSw0QkFGQSxtQkFBeUIsU0FBMEIsVUFBaUQsdUJBRzNFLFFBRFosU0FDeUIsdUVBSHlGLFdBQTZCLGFBQWEiLCJmaWxlIjoiY29tcG9uZW50c1xcVGl0bGUuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvSm9obm55L0Rlc2t0b3AvcGVyc29uYWwtcG9ydGZvbGlvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhbnZhcyBmcm9tICcuL0NhbnZhcydcclxuXHJcbmNvbnN0IFRpdGxlID0gKCkgPT4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgIDxoMT5Kb2hubnkgQnVpPC9oMT5cclxuICAgICAgICAgICAgPGgyPkZyb250IEVuZCBXZWIgRGV2ZWxvcGVyPC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Q2FudmFzIC8+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC50aXRsZSBoMSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCA1cHggMDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRpdGxlIGgyIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpdGxlIl19 */\n/*@ sourceURL=components\\Title.js */"
    }));
};

exports.default = Title;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Johnny\\Desktop\\personal-portfolio\\components\\Title.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Johnny\\Desktop\\personal-portfolio\\components\\Title.js"); } } })();

/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _promise = __webpack_require__(38);

var _promise2 = _interopRequireDefault(_promise);

var _typeof2 = __webpack_require__(98);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function (root, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if ((typeof module === 'undefined' ? 'undefined' : (0, _typeof3.default)(module)) === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.Brushstroke = factory();
    }
})(undefined, function () {

    /**
     * Curve calc function for canvas 2.3.4 - (c) Epistemex 2013-2016 - www.epistemex.com - MIT License
     */

    /**
     * Calculates an array containing points representing a cardinal spline through given point array.
     * Points must be arranged as: [x1, y1, x2, y2, ..., xn, yn].
     *
     * The points for the cardinal spline are returned as a new array.
     *
     * @param {Array} points - point array
     * @param {Number} [tension=0.5] - tension. Typically between [0.0, 1.0] but can be exceeded
     * @param {Number} [numOfSeg=25] - number of segments between two points (line resolution)
     * @param {Boolean} [close=false] - Close the ends making the line continuous
     * @returns {Float32Array} New array with the calculated points that was added to the path
     */
    function getCurvePoints(points, tension, numOfSeg, close) {

        'use strict';

        // options or defaults

        tension = typeof tension === 'number' ? tension : 0.5;
        numOfSeg = typeof numOfSeg === 'number' ? numOfSeg : 25;

        var pts,

        // for cloning point array
        i = 1,
            l = points.length,
            rPos = 0,
            rLen = (l - 2) * numOfSeg + 2 + (close ? 2 * numOfSeg : 0),
            res = new Float32Array(rLen),
            cache = new Float32Array((numOfSeg + 2) * 4),
            cachePtr = 4;

        pts = points.slice(0);

        if (close) {
            pts.unshift(points[l - 1]); // insert end point as first point
            pts.unshift(points[l - 2]);
            pts.push(points[0], points[1]); // first point as last point
        } else {
            pts.unshift(points[1]); // copy 1. point and insert at beginning
            pts.unshift(points[0]);
            pts.push(points[l - 2], points[l - 1]); // duplicate end-points
        }

        // cache inner-loop calculations as they are based on t alone
        cache[0] = 1; // 1,0,0,0

        for (; i < numOfSeg; i++) {

            var st = i / numOfSeg,
                st2 = st * st,
                st3 = st2 * st,
                st23 = st3 * 2,
                st32 = st2 * 3;

            cache[cachePtr++] = st23 - st32 + 1; // c1
            cache[cachePtr++] = st32 - st23; // c2
            cache[cachePtr++] = st3 - 2 * st2 + st; // c3
            cache[cachePtr++] = st3 - st2; // c4
        }

        cache[++cachePtr] = 1; // 0,1,0,0

        // calc. points
        parse(pts, cache, l, tension);

        if (close) {
            pts = [];
            pts.push(points[l - 4], points[l - 3], points[l - 2], points[l - 1], // second last and last
            points[0], points[1], points[2], points[3]); // first and second
            parse(pts, cache, 4, tension);
        }

        function parse(pts, cache, l, tension) {

            for (var i = 2, t; i < l; i += 2) {

                var pt1 = pts[i],
                    pt2 = pts[i + 1],
                    pt3 = pts[i + 2],
                    pt4 = pts[i + 3],
                    t1x = (pt3 - pts[i - 2]) * tension,
                    t1y = (pt4 - pts[i - 1]) * tension,
                    t2x = (pts[i + 4] - pt1) * tension,
                    t2y = (pts[i + 5] - pt2) * tension,
                    c = 0,
                    c1,
                    c2,
                    c3,
                    c4;

                for (t = 0; t < numOfSeg; t++) {

                    c1 = cache[c++];
                    c2 = cache[c++];
                    c3 = cache[c++];
                    c4 = cache[c++];

                    res[rPos++] = c1 * pt1 + c2 * pt3 + c3 * t1x + c4 * t2x;
                    res[rPos++] = c1 * pt2 + c2 * pt4 + c3 * t1y + c4 * t2y;
                }
            }
        }

        // add last point
        l = close ? 0 : points.length - 2;
        res[rPos++] = points[l++];
        res[rPos] = points[l];

        return res;
    }

    /**
     * Brush by Akimitsu Hamamuro (http://codepen.io/akm2/pen/BonIh) - MIT License
     */

    var Brush = function () {

        /**
         * @constructor
         * @public
         */
        function Brush(x, y, color, size, inkAmount, angle, dripping, splashing) {
            this.x = x || 0;
            this.y = y || 0;
            if (color !== undefined) this.color = color;
            if (size !== undefined) this.size = size;
            if (inkAmount !== undefined) this.inkAmount = inkAmount;
            if (angle !== undefined) this.angle = angle;
            if (dripping !== undefined) this.dripping = dripping;
            if (splashing !== undefined) this.splashing = splashing;

            this._drops = [];
            this._resetTip();
        }

        Brush.prototype = {
            _SPLASHING_BRUSH_SPEED: 75,

            angle: 150,
            x: 0,
            y: 0,
            color: '#000',
            size: 35,
            inkAmount: 7,
            splashing: true,
            dripping: true,
            maxHairs: 1000,
            _latestPos: null,
            _strokeId: null,
            _drops: null,

            isStroke: function isStroke() {
                return Boolean(this._strokeId);
            },

            startStroke: function startStroke() {
                if (this.isStroke()) return;

                this._resetTip();

                // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
                this._strokeId = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                    var r, v;
                    r = Math.random() * 16 | 0;
                    v = c === 'x' ? r : r & 0x3 | 0x8;
                    return v.toString(16);
                });
            },

            endStroke: function endStroke() {
                this._strokeId = this._latestPos = null;
            },

            render: function render(ctx, x, y) {
                var isStroke = this.isStroke(),
                    dx,
                    dy,
                    i,
                    len;

                if (!this._latestPos) this._latestPos = {};
                this._latestPos.x = this.x;
                this._latestPos.y = this.y;
                this.x = x;
                this.y = y;

                if (this._drops.length) {
                    var drops = this._drops,
                        drop,
                        sizeSq = this.size * this.size;

                    for (i = 0, len = drops.length; i < len; i++) {
                        drop = drops[i];

                        dx = this.x - drop.x;
                        dy = this.y - drop.y;

                        if (isStroke && sizeSq > dx * dx + dy * dy && this._strokeId !== drop.strokeId || drop.life <= 0) {
                            drops.splice(i, 1);
                            len--;
                            i--;
                            continue;
                        }

                        drop.render(ctx);
                    }
                }

                if (isStroke) {
                    var tip = this._tip,
                        strokeId = this._strokeId,
                        dist;

                    dx = this.x - this._latestPos.x;
                    dy = this.y - this._latestPos.y;
                    dist = Math.sqrt(dx * dx + dy * dy);

                    if (this.splashing && dist > this._SPLASHING_BRUSH_SPEED) {
                        var maxNum = (dist - this._SPLASHING_BRUSH_SPEED) * 0.3 | 0,
                            r,
                            a,
                            sr,
                            sx,
                            sy;

                        ctx.save();
                        ctx.fillStyle = this.color;
                        ctx.beginPath();
                        for (i = 0, len = maxNum * Math.random() | 0; i < len; i++) {
                            r = (dist - 1) * Math.random() + 1;
                            a = Math.PI * 2 * Math.random();
                            sr = 5 * Math.random();
                            sx = this.x + r * Math.sin(a);
                            sy = this.y + r * Math.cos(a);
                            ctx.moveTo(sx + sr, sy);
                            ctx.arc(sx, sy, sr, 0, Math.PI * 2, false);
                        }
                        ctx.fill();
                        ctx.restore();
                    } else if (this.dripping && dist < this.inkAmount * 2 && Math.random() < 0.05) {
                        this._drops.push(new Drop(this.x, this.y, (this.size + this.inkAmount) * 0.5 * ((0.25 - 0.1) * Math.random() + 0.1), this.color, this._strokeId));
                    }

                    for (i = 0, len = tip.length; i < len; i++) {
                        tip[i].render(ctx, dx, dy, dist);
                    }
                }
            },

            dispose: function dispose() {
                this._tip.length = this._drops.length = 0;
            },

            _resetTip: function _resetTip() {
                var tip = this._tip = [],
                    rad = this.size * 0.5,
                    x0,
                    y0,
                    a0,
                    x1,
                    y1,
                    a1,
                    cv,
                    sv,
                    i,
                    len;

                a1 = Math.PI * 2 * Math.random();
                a1 = this.angle;
                len = rad * rad * Math.PI / this.inkAmount | 0;
                if (len < 1) len = 1;
                if (len > this.maxHairs) len = this.maxHairs;

                for (i = 0; i < len; i++) {
                    x0 = rad * Math.random();
                    y0 = x0 * 0.5;
                    a0 = Math.PI * 2 * Math.random();
                    x1 = x0 * Math.sin(a0);
                    y1 = y0 * Math.cos(a0);
                    cv = Math.cos(a1);
                    sv = Math.sin(a1);

                    tip.push(new Hair(this.x + x1 * cv - y1 * sv, this.y + x1 * sv + y1 * cv, this.inkAmount, this.color));
                }
            }
        };

        /**
         * Hair
         * @private
         */
        function Hair(x, y, inkAmount, color) {
            this.x = x || 0;
            this.y = y || 0;
            this.inkAmount = inkAmount;
            this.color = color;

            this._latestPos = { x: this.x, y: this.y };
        }

        Hair.prototype = {
            x: 0,
            y: 0,
            inkAmount: 7,
            color: '#000',
            _latestPos: null,

            render: function render(ctx, offsetX, offsetY, offsetLength) {
                this._latestPos.x = this.x;
                this._latestPos.y = this.y;
                this.x += offsetX;
                this.y += offsetY;

                var per = offsetLength ? this.inkAmount / offsetLength : 0;
                if (per > 1) per = 1;else if (per < 0) per = 0;

                ctx.save();
                ctx.lineCap = ctx.lineJoin = 'round';
                ctx.strokeStyle = this.color;
                ctx.lineWidth = this.inkAmount * per;
                ctx.beginPath();
                ctx.moveTo(this._latestPos.x, this._latestPos.y);
                ctx.lineTo(this.x, this.y);
                ctx.stroke();
                ctx.restore();
            }
        };

        /**
         * Drop
         * @private
         */
        function Drop(x, y, size, color, strokeId) {
            this.x = x || 0;
            this.y = y || 0;
            this.size = size;
            this.color = color;
            this.strokeId = strokeId;

            this.life = this.size * 1.5;
            this._latestPos = { x: this.x, y: this.y };
        }

        Drop.prototype = {
            x: 0,
            y: 0,
            size: 7,
            color: '#000',
            strokeId: null,
            life: 0,
            _latestPos: null,
            _xOffRatio: 0,

            render: function render(ctx) {
                if (Math.random() < 0.03) {
                    this._xOffRatio += 0.06 * Math.random() - 0.03;
                } else if (Math.random() < 0.1) {
                    this._xOffRatio *= 0.003;
                }

                this._latestPos.x = this.x;
                this._latestPos.y = this.y;
                this.x += this.life * this._xOffRatio;
                this.y += this.life * 0.5 * Math.random();

                this.life -= (0.05 - 0.01) * Math.random() + 0.01;

                ctx.save();
                ctx.lineCap = ctx.lineJoin = 'round';
                ctx.strokeStyle = this.color;
                ctx.lineWidth = this.size + this.life * 0.3;
                ctx.beginPath();
                ctx.moveTo(this._latestPos.x, this._latestPos.y);
                ctx.lineTo(this.x, this.y);
                ctx.stroke();
                ctx.restore();
                ctx.restore();
            }
        };

        return Brush;
    }();

    /********************
     * Brushstroke utils
     ********************/

    // Type of elements, most from anime.js

    var is = {
        obj: function obj(a) {
            return Object.prototype.toString.call(a).indexOf('Object') > -1;
        },
        num: function num(a) {
            return typeof a === 'number';
        },
        str: function str(a) {
            return typeof a === 'string';
        },
        fnc: function fnc(a) {
            return typeof a === 'function';
        },
        und: function und(a) {
            return typeof a === 'undefined';
        }
    };

    // Functions

    function callFunction(fn, context, params) {
        if (is.fnc(fn)) fn.call(context, params);
    }

    // Objects

    function extendSingle(target, source) {
        for (var key in source) {
            target[key] = source[key];
        }return target;
    }

    function extend(target, source) {
        if (!target) target = {};
        for (var i = 1; i < arguments.length; i++) {
            extendSingle(target, arguments[i]);
        }return target;
    }

    // Styles

    function validProperty(property, value) {
        try {
            return !is.und(value) && !is.obj(value) && !is.fnc(value) && value.length > 0 && value != parseInt(value) && property != parseInt(property);
        } catch (e) {
            return false;
        }
    }

    function setStyle(el) {
        var computedStyle = getComputedStyle(el);
        var style = '';
        for (var property in computedStyle) {
            if (validProperty(property, computedStyle[property])) {
                style += property + ':' + computedStyle[property] + ';';
            }
        }
        el.style.cssText += style + ';visibility:visible;';
    }

    function setStyleAll(el, list) {
        var children = el.children;
        for (var i = 0; i < children.length; i++) {
            setStyleAll(children[i], list);
        }list.push({ el: el, style: el.style.cssText });
        setStyle(el);
    }

    function restoreStyleAll(list) {
        var current;
        for (var i = 0; i < list.length; i++) {
            current = list[i];
            if (current.style) {
                current.el.style.cssText = current.style;
            } else {
                current.el.removeAttribute('style');
            }
        }
    }

    function getOuterHTML(el) {
        var list = [];
        setStyleAll(el, list);
        var html = el.outerHTML;
        restoreStyleAll(list);
        return html;
    }

    function fixRootPosition(root) {
        var style = getComputedStyle(root);
        var position = style.getPropertyValue('position');
        if (position === 'static') {
            root.style.position = 'relative';
        }
    }

    function setPosition(o) {
        var elRect = o.el.getBoundingClientRect();
        var rootRect = o.root.getBoundingClientRect();
        o.top = elRect.top - rootRect.top;
        o.left = elRect.left - rootRect.left;
    }

    // Promises

    function deferred() {
        return new function () {
            this.resolve = null;
            this.reject = null;

            this.promise = new _promise2.default(function (resolve, reject) {
                this.resolve = resolve;
                this.reject = reject;
            }.bind(this));
        }();
    }

    // Get random points in a 2d space

    function randomize(num, width, height) {
        var numPoints = num || 10;
        var points = [];
        for (var i = 0; i < numPoints; i++) {
            points.push(width * Math.random() * 0.9 + width * 0.05 | 0, height * Math.random() * 0.9 + height * 0.05 | 0);
        }
        return points;
    }

    // Canvas

    function resizeImage(img, o) {
        var canvas = document.getElementsByTagName('canvas')[0];
        canvas.width = o.width;
        canvas.height = o.height;
        var ctx = canvas.getContext("2d");
        if (o.stretch) {
            ctx.drawImage(img, 0, 0, o.width, o.height);
        } else {
            var width = img.width;
            var height = img.height;
            var left = o.width / 2 - width / 2;
            var top = o.height / 2 - height / 2;
            ctx.drawImage(img, left, top, width, height);
        }
        return canvas;
    }

    function initCanvas(o) {
        if (o.el) {
            o.width = o.el.offsetWidth;
            o.height = o.el.offsetHeight;
            setPosition(o);
        }
        var canvas = document.getElementsByTagName('canvas')[0];
        canvas.style.position = 'absolute';
        canvas.style.top = o.top + 'px';
        canvas.style.left = o.left + 'px';
        canvas.width = o.width;
        canvas.height = o.height;
        canvas.style.visibility = 'hidden';
        o.canvas = canvas;
        o.ctx = canvas.getContext('2d');
        fixRootPosition(o.root);
        // o.root.appendChild(o.canvas);
    }

    /**************
     * Brushstroke
     **************/

    function Brushstroke(options) {

        // Default values

        this.defaults = {
            animation: 'to-bottom',
            path: undefined,
            points: undefined,
            frameAnimation: false,
            frames: 0,
            duration: 0,
            delay: 0,
            color: '#ccc',
            width: 300,
            height: 120,
            size: 40,
            inkAmount: 1,
            lifting: false,
            dripping: false,
            splashing: true,
            padding: 30,
            overlap: 10,
            tension: 0.5,
            reduceOverflow: 20,
            root: document.body,
            el: undefined,
            image: undefined,
            repeat: 'no-repeat',
            stretch: false,
            centered: false,
            queue: false
        };

        this.init(options);
    }

    Brushstroke.prototype = {

        init: function init(options) {
            var o = extend(this.defaults, options);
            if (is.str(o.root)) o.root = document.querySelector(o.root);
            if (is.str(o.el)) o.el = document.querySelector(o.el);
            initCanvas(o);

            var d = deferred();
            this.promise = d.promise;
            d.resolve();
        },

        run: function run(options) {
            var that = this;

            function start() {
                options.canvas.style.visibility = 'visible';
                if (options.render) {
                    that.render(options);
                } else {
                    callFunction(that.animations[options.animation], that, options);
                }
            }

            if (options.clear) {
                options.ctx.clearRect(0, 0, options.width, options.height);
                options.d.resolve();
            } else if (options.el) {
                if (options.pattern) {
                    start();
                } else {
                    var html = '<style>body{margin:0;}</style>' + getOuterHTML(options.el);
                    rasterizeHTML.drawHTML(html, null).then(function success(renderResult) {
                        if (options.fill) {
                            options.ctx.drawImage(renderResult.image, 0, 0, options.width, options.height);
                            options.d.resolve();
                        } else {
                            options.pattern = options.ctx.createPattern(renderResult.image, options.repeat);
                            start();
                        }
                    }, function error(e) {
                        console.log('rasterizeHTMLError: ' + e);
                    });
                }
            } else if (options.image) {
                var img = new Image();
                img.onload = function () {
                    if (options.stretch || options.centered) img = resizeImage(img, options);
                    if (options.fill) {
                        options.ctx.drawImage(img, 0, 0, options.width, options.height);
                        options.d.resolve();
                    } else {
                        options.pattern = options.ctx.createPattern(img, options.repeat);
                        start();
                    }
                };
                img.src = options.image;
            } else {
                start();
            }
        },

        draw: function draw(options) {
            var that = this;
            var o = extend({}, this.defaults, options);
            var _draw = function _draw() {
                var d = deferred();
                that.run(extend(o, { d: d }));
                return d.promise;
            };
            if (o.queue) {
                this.promise = this.promise.then(_draw);
            } else {
                _draw();
            }
        },

        erase: function erase(options) {
            this.draw(extend({}, options, { erase: true }));
        },

        fill: function fill(options) {
            this.draw(extend({}, options, { fill: true }));
        },

        clear: function clear(options) {
            this.draw(extend({}, options, { clear: true }));
        },

        setPath: function setPath(o) {
            var path = o.path;
            if (is.str(path)) {
                path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                path.setAttribute('d', o.path);
                o.path = path;
            }
            o.pathLenght = path.getTotalLength();
        },

        pointAt: function pointAt(t, o) {
            switch (o.animation) {
                case 'points':
                    var points = o.points;
                    var length = points.length;
                    var i = Math.round(length * t / 2) * 2;
                    if (i >= length) i = length - 2;
                    return { x: points[i], y: points[i + 1] };
                case 'path':
                    return o.path.getPointAtLength(o.pathLenght * t);
                default:
                    return null;
            }
        },

        setPos: function setPos(o, pos) {
            var first = !pos;
            if (first) pos = {};
            switch (o.direction) {
                case 'bottom':
                    pos.startY = first ? o.padding : pos.startY + o.size - o.overlap;
                    this.setPosBottomTop(o, pos, first);
                    break;
                case 'top':
                    pos.startY = first ? o.height - o.padding : pos.startY - o.size + o.overlap;
                    this.setPosBottomTop(o, pos, first);
                    break;
                case 'right':
                    pos.startX = first ? o.padding : pos.startX + o.size - o.overlap;
                    this.setPosRightLeft(o, pos, first);
                    break;
                case 'left':
                    pos.startX = first ? o.width - o.padding : pos.startX - o.size + o.overlap;
                    this.setPosRightLeft(o, pos, first);
                    break;
            }
            return pos;
        },

        setPosBottomTop: function setPosBottomTop(o, pos, first) {
            if (first) {
                pos.vertical = true;
            } else {
                var aux = pos.startX;
            }
            pos.startX = first ? o.padding : pos.x;
            pos.x = first ? o.width - o.padding : aux;
            pos.y = pos.startY;
        },

        setPosRightLeft: function setPosRightLeft(o, pos, first) {
            if (first) {
                pos.vertical = false;
            } else {
                var aux = pos.startY;
            }
            pos.x = pos.startX;
            pos.startY = first ? o.padding : pos.y;
            pos.y = first ? o.height - o.padding : aux;
        },

        render: function render(o) {
            if (!is.und(o.duration) || !is.und(o.frames)) {
                var that = this;

                if (o.delay) {
                    var delay = o.delay;
                    delete o.delay;
                    setTimeout(function () {
                        that.render(o);
                    }, delay * 1000);
                    return;
                }

                if (o.erase) o.ctx.globalCompositeOperation = 'destination-out';

                var frame = 1,
                    elapsed,
                    time,
                    t,
                    point,
                    x = 0,
                    y = 0;
                var startTime = new Date();

                if (!is.und(o.startX)) x = o.startX;
                if (!is.und(o.startY)) y = o.startY;

                var brush = new Brush(x, y, o.pattern || o.color, o.size, o.inkAmount, o.angle, o.dripping, o.splashing);
                brush.startStroke(x, y);
                callFunction(o.begin);

                if (o.frameAnimation && o.duration) {
                    if (!o.frames) o.frames = parseFloat(o.duration) * 60;
                    delete o.duration;
                }

                (function calc() {
                    if (o.duration) {
                        elapsed = (new Date() - startTime) / 1000;
                        time = elapsed / parseFloat(o.duration);
                    } else {
                        time = frame / parseFloat(o.frames);
                    }
                    t = time;

                    if (is.fnc(o.easing)) {
                        t = o.easing(t);
                    }

                    if (time > 1) {
                        t = 1;
                    }

                    point = that.pointAt(t, o);
                    if (!point) {
                        point = {
                            x: x + (o.x - x) * t,
                            y: y + (o.y - y) * t
                        };
                    }

                    x = point.x;
                    y = point.y;
                    brush.render(o.ctx, x, y);

                    if (time >= 1) {
                        brush.endStroke();
                        if (o.erase) o.ctx.globalCompositeOperation = 'source-over';
                        callFunction(o.end);
                        o.d.resolve();
                    } else {
                        if (o.duration) {
                            requestAnimationFrame(calc);
                        } else {
                            frame++;
                            o.frameAnimation ? requestAnimationFrame(calc) : calc();
                        }
                    }
                })();
            }
        },

        animations: {
            'to-bottom': function toBottom(o) {
                callFunction(this.animations.basic, this, extend(o, { direction: 'bottom' }));
            },
            'to-top': function toTop(o) {
                callFunction(this.animations.basic, this, extend(o, { direction: 'top' }));
            },
            'to-right': function toRight(o) {
                callFunction(this.animations.basic, this, extend(o, { direction: 'right' }));
            },
            'to-left': function toLeft(o) {
                callFunction(this.animations.basic, this, extend(o, { direction: 'left' }));
            },
            'basic': function basic(o) {
                var pos = this.setPos(o);
                var brushstrokes = Math.ceil(((pos.vertical ? o.height : o.width) + o.size / 2 - o.padding * 2) / (o.size - o.overlap));
                var angle = pos.vertical ? Math.PI * 0.5 : 0;
                var duration = o.duration / brushstrokes;
                var frames = o.frames / brushstrokes;
                var points = [];
                var alt = true;
                var overflow = o.reduceOverflow;
                var opts, first, last;

                function fixOverflow(axis) {
                    if (i === 0) pos[axis] = pos[axis] - overflow;
                    if (i === 1) pos[axis] = pos[axis] + overflow;
                    if (i === brushstrokes - 1) pos[axis] = alt ? pos[axis] + overflow : pos[axis] - overflow;
                }

                for (var i = 0; i < brushstrokes; i++) {
                    if (o.lifting) {
                        first = i === 0;
                        last = i === brushstrokes - 1;
                        opts = extend({}, o, pos, { duration: duration, frames: frames, angle: angle, render: true, queue: true });
                        if (!first) opts.begin = null;
                        if (!last) opts.end = null;
                        this.draw(opts);
                    } else {
                        if (overflow) {
                            pos.vertical ? fixOverflow('x') : fixOverflow('y');
                        }
                        points.push(pos.startX, pos.startY, pos.x, pos.y);
                    }
                    this.setPos(o, pos);
                    alt = !alt;
                }

                if (o.lifting) {
                    o.d.resolve();
                } else {
                    callFunction(this.animations.points, this, extend(o, { animation: 'points', points: points, angle: angle }));
                }
            },
            'path': function path(o) {
                this.setPath(o);
                var point = this.pointAt(0, o);
                this.render(extend(o, { startX: point.x, startY: point.y }));
            },
            'points': function points(o) {
                var points = o.points || 0;
                points = is.num(points) ? randomize(points, o.width, o.height) : points;
                points = getCurvePoints(points, o.tension);
                this.render(extend(o, { points: points, startX: points[0], startY: points[1] }));
            }
        }
    };

    return Brushstroke;
});

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Johnny\\Desktop\\personal-portfolio\\utils\\brushstroke.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Johnny\\Desktop\\personal-portfolio\\utils\\brushstroke.js"); } } })();

/***/ }),

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(541);


/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = __webpack_require__(540);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(544);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\Johnny\\Desktop\\personal-portfolio\\components\\Menu.js";


var Menu = function Menu() {
    return _react2.default.createElement("div", {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 4
        }
    }, _react2.default.createElement("a", { href: "#", className: "menu", __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }, _react2.default.createElement("div", { className: "dot", __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }), _react2.default.createElement("div", { className: "dot", __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }), _react2.default.createElement("div", { className: "dot", __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }), _react2.default.createElement("div", { className: "dot", __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }), _react2.default.createElement("div", { className: "dot", __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }), _react2.default.createElement("div", { className: "dot", __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }), _react2.default.createElement("div", { className: "dot", __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }), _react2.default.createElement("div", { className: "dot", __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }), _react2.default.createElement("div", { className: "dot", __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    })), _react2.default.createElement("div", { className: "nav", "data-jsx": 2747461169,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }, _react2.default.createElement(_link2.default, { href: "/", __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }, _react2.default.createElement("a", { className: "nav-links", "data-jsx": 2747461169,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 18
        }
    }, "Home")), _react2.default.createElement(_link2.default, { className: "nav-links", href: "/Portfolio", __source: {
            fileName: _jsxFileName,
            lineNumber: 20
        }
    }, _react2.default.createElement("a", {
        "data-jsx": 2747461169,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 21
        }
    }, "Portfolio")), _react2.default.createElement(_link2.default, { className: "nav-links", href: "/About", __source: {
            fileName: _jsxFileName,
            lineNumber: 23
        }
    }, _react2.default.createElement("a", {
        "data-jsx": 2747461169,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 24
        }
    }, "About")), _react2.default.createElement(_link2.default, { className: "nav-links", href: "/Contact", __source: {
            fileName: _jsxFileName,
            lineNumber: 26
        }
    }, _react2.default.createElement("a", {
        "data-jsx": 2747461169,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 27
        }
    }, "Contact")), _react2.default.createElement(_style2.default, {
        styleId: 2747461169,
        css: ".nav[data-jsx=\"2747461169\"]{-webkit-text-align:center;text-align:center;top:0px;position:relative;z-index:3;display:none}.nav[data-jsx=\"2747461169\"] a[data-jsx=\"2747461169\"]{-webkit-text-decoration:none;text-decoration:none;color:black;padding:10px 100px;position:relative}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXE1lbnUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJ3QixBQUd1QyxBQUNHLDhDQUQwQixNQUNPLEdBRGdDLFVBQ1EsU0FEdUIsV0FBa0MsQUFDbEIsY0FEbUMsS0FDbEIiLCJmaWxlIjoiY29tcG9uZW50c1xcTWVudS5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9Kb2hubnkvRGVza3RvcC9wZXJzb25hbC1wb3J0Zm9saW8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5jb25zdCBNZW51ID0gKCkgPT4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cIm1lbnVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb3RcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb3RcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb3RcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb3RcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb3RcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb3RcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb3RcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb3RcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb3RcIj48L2Rpdj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua3NcIiA+SG9tZTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJuYXYtbGlua3NcIiBocmVmPVwiL1BvcnRmb2xpb1wiPlxyXG4gICAgICAgICAgICAgIDxhPlBvcnRmb2xpbzwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJuYXYtbGlua3NcIiBocmVmPVwiL0Fib3V0XCI+XHJcbiAgICAgICAgICAgICAgPGE+QWJvdXQ8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtzXCIgaHJlZj1cIi9Db250YWN0XCI+XHJcbiAgICAgICAgICAgICAgPGE+Q29udGFjdDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAubmF2IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5uYXYgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyAubmF2IGE6aG92ZXI6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGJhY2tncm91bmQ6IHJnYmEoMTAwLDEwMCwxMDAsMC4xKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gLm5hdiBhOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICAgIC8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIC8vICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzk5OTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjOTk5O1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRyYW5zaXRpb246IC4yNXM7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51Il19 */\n/*@ sourceURL=components\\Menu.js */"
    })));
};

exports.default = Menu;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Johnny\\Desktop\\personal-portfolio\\components\\Menu.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Johnny\\Desktop\\personal-portfolio\\components\\Menu.js"); } } })();

/***/ })

},[552]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/NjQ5MWJmOCIsIndlYnBhY2s6Ly8vc3R5bGVzL3N0eWxlc2hlZXQuc2Nzcz82NDkxYmY4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2FudmFzLmpzPzY0OTFiZjgiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanM/NjQ5MWJmOCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcz82NDkxYmY4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU29jaWFsLmpzPzY0OTFiZjgiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UaXRsZS5qcz82NDkxYmY4Iiwid2VicGFjazovLy8uL3V0aWxzL2JydXNoc3Ryb2tlLmpzPzY0OTFiZjgiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NZW51LmpzPzY0OTFiZjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcclxuaW1wb3J0IFRpdGxlIGZyb20gJy4uL2NvbXBvbmVudHMvVGl0bGUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXHJcblx0PGRpdj5cclxuXHRcdDxMYXlvdXQ+XHJcblx0XHRcdDxUaXRsZSAvPlxyXG5cdFx0PC9MYXlvdXQ+XHJcblx0PC9kaXY+XHJcbilcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsIm1vZHVsZS5leHBvcnRzID0gXCIubWVudSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgdG9wOiAzMHB4O1xcbiAgcmlnaHQ6IDMwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gIC5tZW51IC5kb3Qge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiA1cHg7XFxuICAgIGhlaWdodDogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgfVxcbiAgLm1lbnUgLmRvdDpudGgtb2YtdHlwZSgxKSB7XFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7XFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7IH1cXG4gIC5tZW51IC5kb3Q6bnRoLW9mLXR5cGUoMikge1xcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTVweCwgMHB4KTtcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE1cHgsIDBweCk7IH1cXG4gIC5tZW51IC5kb3Q6bnRoLW9mLXR5cGUoMykge1xcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzBweCwgMHB4KTtcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDMwcHgsIDBweCk7IH1cXG4gIC5tZW51IC5kb3Q6bnRoLW9mLXR5cGUoNCkge1xcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAxNXB4KTtcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMTVweCk7IH1cXG4gIC5tZW51IC5kb3Q6bnRoLW9mLXR5cGUoNSkge1xcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTVweCwgMTVweCk7XFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNXB4LCAxNXB4KTsgfVxcbiAgLm1lbnUgLmRvdDpudGgtb2YtdHlwZSg2KSB7XFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMHB4LCAxNXB4KTtcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDMwcHgsIDE1cHgpOyB9XFxuICAubWVudSAuZG90Om50aC1vZi10eXBlKDcpIHtcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMzBweCk7XFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDMwcHgpOyB9XFxuICAubWVudSAuZG90Om50aC1vZi10eXBlKDgpIHtcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDE1cHgsIDMwcHgpO1xcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTVweCwgMzBweCk7IH1cXG4gIC5tZW51IC5kb3Q6bnRoLW9mLXR5cGUoOSkge1xcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzBweCwgMzBweCk7XFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMHB4LCAzMHB4KTsgfVxcbiAgLm1lbnU6aG92ZXIgLmRvdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7IH1cXG4gIC5tZW51OmhvdmVyIC5kb3Q6bnRoLW9mLXR5cGUoMSkge1xcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTRweCwgLTRweCk7XFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNHB4LCAtNHB4KTsgfVxcbiAgLm1lbnU6aG92ZXIgLmRvdDpudGgtb2YtdHlwZSgzKSB7XFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMHB4LCAtNHB4KTtcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIwcHgsIC00cHgpOyB9XFxuICAubWVudTpob3ZlciAuZG90Om50aC1vZi10eXBlKDcpIHtcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC00cHgsIDIwcHgpO1xcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTRweCwgMjBweCk7IH1cXG4gIC5tZW51OmhvdmVyIC5kb3Q6bnRoLW9mLXR5cGUoOSkge1xcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjBweCwgMjBweCk7XFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMHB4LCAyMHB4KTsgfVxcbiAgLm1lbnUuYWN0aXZlIC5kb3Q6bnRoLW9mLXR5cGUoMSkge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApOyB9XFxuICAubWVudS5hY3RpdmUgLmRvdDpudGgtb2YtdHlwZSgyKSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoNHB4LCA0cHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDRweCwgNHB4KTsgfVxcbiAgLm1lbnUuYWN0aXZlIC5kb3Q6bnRoLW9mLXR5cGUoMykge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDE2cHgsIDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE2cHgsIDApOyB9XFxuICAubWVudS5hY3RpdmUgLmRvdDpudGgtb2YtdHlwZSg0KSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoNHB4LCAxMnB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg0cHgsIDEycHgpOyB9XFxuICAubWVudS5hY3RpdmUgLmRvdDpudGgtb2YtdHlwZSg2KSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTJweCwgNHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMnB4LCA0cHgpOyB9XFxuICAubWVudS5hY3RpdmUgLmRvdDpudGgtb2YtdHlwZSg3KSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTZweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTZweCk7IH1cXG4gIC5tZW51LmFjdGl2ZSAuZG90Om50aC1vZi10eXBlKDgpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMnB4LCAxMnB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMnB4LCAxMnB4KTsgfVxcbiAgLm1lbnUuYWN0aXZlIC5kb3Q6bnRoLW9mLXR5cGUoOSkge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDE2cHgsIDE2cHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE2cHgsIDE2cHgpOyB9XFxuICAubWVudS5hY3RpdmU6aG92ZXIgLmRvdDpudGgtb2YtdHlwZSgxKSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTRweCwgLTRweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTRweCwgLTRweCk7IH1cXG4gIC5tZW51LmFjdGl2ZTpob3ZlciAuZG90Om50aC1vZi10eXBlKDIpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIDJweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAycHgpOyB9XFxuICAubWVudS5hY3RpdmU6aG92ZXIgLmRvdDpudGgtb2YtdHlwZSgzKSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjBweCwgLTRweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjBweCwgLTRweCk7IH1cXG4gIC5tZW51LmFjdGl2ZTpob3ZlciAuZG90Om50aC1vZi10eXBlKDQpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIDE0cHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMTRweCk7IH1cXG4gIC5tZW51LmFjdGl2ZTpob3ZlciAuZG90Om50aC1vZi10eXBlKDYpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNHB4LCAycHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE0cHgsIDJweCk7IH1cXG4gIC5tZW51LmFjdGl2ZTpob3ZlciAuZG90Om50aC1vZi10eXBlKDcpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNHB4LCAyMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNHB4LCAyMHB4KTsgfVxcbiAgLm1lbnUuYWN0aXZlOmhvdmVyIC5kb3Q6bnRoLW9mLXR5cGUoOCkge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDE0cHgsIDE0cHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE0cHgsIDE0cHgpOyB9XFxuICAubWVudS5hY3RpdmU6aG92ZXIgLmRvdDpudGgtb2YtdHlwZSg5KSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjBweCwgMjBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjBweCwgMjBweCk7IH1cXG5cIlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzdHlsZXMvc3R5bGVzaGVldC5zY3NzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQnJ1c2hzdHJva2UgZnJvbSAnLi4vdXRpbHMvYnJ1c2hzdHJva2UnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IgKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcylcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0Y29uc3QgaGVpZ2h0ID0gMTUwO1xyXG5cdFx0Y29uc3Qgd2lkdGggPSA4MDA7XHJcblx0XHRjb25zdCBvcHRpb25zID0ge1xyXG5cdFx0XHR3aWR0aDogd2lkdGgsXHJcblx0XHRcdGhlaWdodDogaGVpZ2h0LFxyXG5cdFx0XHRjb2xvcjogJyMyMjInLFxyXG5cdFx0XHRhbmltYXRpb246ICdwb2ludHMnLFxyXG5cdFx0XHRkdXJhdGlvbjogNSxcclxuXHRcdCAgICBpbmtBbW91bnQ6IDQsXHJcblx0XHQgICAgc2l6ZTogMTUwLFxyXG5cdFx0ICAgIGZyYW1lczogNyxcclxuXHRcdCAgICBmcmFtZUFuaW1hdGlvbjogdHJ1ZSxcclxuXHRcdCAgICBzcGxhc2hpbmc6IGZhbHNlLFxyXG5cdFx0ICAgIHJlZHVjZU92ZXJmbG93OiAyMCxcclxuXHRcdH1cclxuXHRcdHZhciBicyA9IG5ldyBCcnVzaHN0cm9rZShvcHRpb25zKTtcclxuXHJcblx0XHRmdW5jdGlvbiBydW5BbmltYXRpb24oKSB7XHJcblx0XHQgICAgYnMuZHJhdyh7XHJcblx0XHQgICAgICAgIHBvaW50czogW3dpZHRoLzEuMzgsIGhlaWdodCAvIDIuMCxcclxuXHRcdCAgICAgICAgXHRcdHdpZHRoLzIsIGhlaWdodCAvIDEuOTUsXHJcblx0XHQgICAgICAgIFx0XHR3aWR0aC8zLjQsIGhlaWdodCAvIDEuODhdXHJcblx0XHQgICAgfSk7XHJcblx0XHR9XHJcblx0XHQvLyBTdGFydFxyXG5cdFx0cnVuQW5pbWF0aW9uKCk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIgKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHQ8Y2FudmFzIGNsYXNzTmFtZT1cImNhbnZhcy1icnVzaHN0cm9rZVwiLz5cclxuXHRcdFx0XHQ8c3R5bGUganN4PntgXHJcblx0XHQgICAgICAgIFx0LmNhbnZhcy1icnVzaHN0cm9rZSB7XHJcblx0XHQgICAgICAgIFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHQgICAgICAgIFx0XHR0b3A6IDUwJTtcclxuXHRcdCAgICAgICAgXHRcdGxlZnQ6IDUwJTtcclxuXHRcdCAgICAgICAgXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cdFx0ICAgICAgICBcdH1cclxuXHRcdCAgICAgICAgYH08L3N0eWxlPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHJcblx0fVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQ2FudmFzLmpzIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgc3R5bGVzaGVldCBmcm9tICcuLi9zdHlsZXMvc3R5bGVzaGVldC5zY3NzJ1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8c3R5bGUgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBzdHlsZXNoZWV0IH19IC8+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDx0aXRsZT5Kb2hubnkgQnVpIHwgRnJvbnQgRW5kIFdlYiBEZXZlbG9wZXI8L3RpdGxlPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UmFsZXdheToyMDBcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxyXG4gICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJpbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJ1xyXG5pbXBvcnQgTWVudSBmcm9tICcuL01lbnUnXHJcbmltcG9ydCBTb2NpYWwgZnJvbSAnLi9Tb2NpYWwnXHJcblxyXG5cclxuY29uc3QgbGF5b3V0U3R5bGUgPSB7XHJcblx0aGVpZ2h0OiAxMDArJ3ZoJyxcclxufVxyXG5cclxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiAoXHJcbiAgICA8ZGl2IHN0eWxlPXtsYXlvdXRTdHlsZX0+XHJcbiAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgIDxNZW51IC8+XHJcbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDxTb2NpYWwgLz5cclxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgIFx0Ym9keSB7XHJcbiAgICAgICAgXHRcdG1hcmdpbjogMDtcclxuICAgICAgICBcdFx0cGFkZGluZzogMCA0MHB4O1xyXG4gICAgICAgIFx0fVxyXG4gICAgICAgIFx0cCwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgYSB7XHJcbiAgICAgICAgXHRcdGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgXHR9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbilcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0xheW91dC5qcyIsImNvbnN0IFNvY2lhbCA9ICgpID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbFwiPlxyXG4gICAgPHVsPlxyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vam9obm55cWJ1aVwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZ2l0aHViXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvZ2l0aHViLnBuZ1wiLz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9qb2hubnlxYnVpL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvbGlua2VkaW4ucG5nXCIvPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9qcWJ1aS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2luc3RhZ3JhbS5wbmdcIi8+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2NvZGVwZW4uaW8vamJ1aS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2NvZGVwZW4ucG5nXCIvPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvYT5cclxuICAgIDwvdWw+XHJcbiAgICA8c3R5bGU+e2BcclxuICAgICAgICAuc29jaWFsIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNvY2lhbCB1bCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zb2NpYWwgbGkge1xyXG4gICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMzBweCAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNvY2lhbCBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbilcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTb2NpYWxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1NvY2lhbC5qcyIsImltcG9ydCBDYW52YXMgZnJvbSAnLi9DYW52YXMnXHJcblxyXG5jb25zdCBUaXRsZSA9ICgpID0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICA8aDE+Sm9obm55IEJ1aTwvaDE+XHJcbiAgICAgICAgICAgIDxoMj5Gcm9udCBFbmQgV2ViIERldmVsb3BlcjwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPENhbnZhcyAvPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudGl0bGUgaDEge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgNXB4IDA7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50aXRsZSBoMiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaXRsZVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvVGl0bGUuanMiLCIoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcclxuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcclxuICAgICAgICBkZWZpbmUoW10sIGZhY3RvcnkpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xyXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByb290LkJydXNoc3Ryb2tlID0gZmFjdG9yeSgpO1xyXG4gICAgfVxyXG59KHRoaXMsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEN1cnZlIGNhbGMgZnVuY3Rpb24gZm9yIGNhbnZhcyAyLjMuNCAtIChjKSBFcGlzdGVtZXggMjAxMy0yMDE2IC0gd3d3LmVwaXN0ZW1leC5jb20gLSBNSVQgTGljZW5zZVxyXG4gICAgICovXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxjdWxhdGVzIGFuIGFycmF5IGNvbnRhaW5pbmcgcG9pbnRzIHJlcHJlc2VudGluZyBhIGNhcmRpbmFsIHNwbGluZSB0aHJvdWdoIGdpdmVuIHBvaW50IGFycmF5LlxyXG4gICAgICogUG9pbnRzIG11c3QgYmUgYXJyYW5nZWQgYXM6IFt4MSwgeTEsIHgyLCB5MiwgLi4uLCB4biwgeW5dLlxyXG4gICAgICpcclxuICAgICAqIFRoZSBwb2ludHMgZm9yIHRoZSBjYXJkaW5hbCBzcGxpbmUgYXJlIHJldHVybmVkIGFzIGEgbmV3IGFycmF5LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHBvaW50cyAtIHBvaW50IGFycmF5XHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW3RlbnNpb249MC41XSAtIHRlbnNpb24uIFR5cGljYWxseSBiZXR3ZWVuIFswLjAsIDEuMF0gYnV0IGNhbiBiZSBleGNlZWRlZFxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtudW1PZlNlZz0yNV0gLSBudW1iZXIgb2Ygc2VnbWVudHMgYmV0d2VlbiB0d28gcG9pbnRzIChsaW5lIHJlc29sdXRpb24pXHJcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtjbG9zZT1mYWxzZV0gLSBDbG9zZSB0aGUgZW5kcyBtYWtpbmcgdGhlIGxpbmUgY29udGludW91c1xyXG4gICAgICogQHJldHVybnMge0Zsb2F0MzJBcnJheX0gTmV3IGFycmF5IHdpdGggdGhlIGNhbGN1bGF0ZWQgcG9pbnRzIHRoYXQgd2FzIGFkZGVkIHRvIHRoZSBwYXRoXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGdldEN1cnZlUG9pbnRzKHBvaW50cywgdGVuc2lvbiwgbnVtT2ZTZWcsIGNsb3NlKSB7XHJcblxyXG4gICAgICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAgICAgLy8gb3B0aW9ucyBvciBkZWZhdWx0c1xyXG4gICAgICAgIHRlbnNpb24gPSAodHlwZW9mIHRlbnNpb24gPT09ICdudW1iZXInKSA/IHRlbnNpb24gOiAwLjU7XHJcbiAgICAgICAgbnVtT2ZTZWcgPSAodHlwZW9mIG51bU9mU2VnID09PSAnbnVtYmVyJykgPyBudW1PZlNlZyA6IDI1O1xyXG5cclxuICAgICAgICB2YXIgcHRzLFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGZvciBjbG9uaW5nIHBvaW50IGFycmF5XHJcbiAgICAgICAgICAgIGkgPSAxLFxyXG4gICAgICAgICAgICBsID0gcG9pbnRzLmxlbmd0aCxcclxuICAgICAgICAgICAgclBvcyA9IDAsXHJcbiAgICAgICAgICAgIHJMZW4gPSAobC0yKSAqIG51bU9mU2VnICsgMiArIChjbG9zZSA/IDIgKiBudW1PZlNlZzogMCksXHJcbiAgICAgICAgICAgIHJlcyA9IG5ldyBGbG9hdDMyQXJyYXkockxlbiksXHJcbiAgICAgICAgICAgIGNhY2hlID0gbmV3IEZsb2F0MzJBcnJheSgobnVtT2ZTZWcgKyAyKSAqIDQpLFxyXG4gICAgICAgICAgICBjYWNoZVB0ciA9IDQ7XHJcblxyXG4gICAgICAgIHB0cyA9IHBvaW50cy5zbGljZSgwKTtcclxuXHJcbiAgICAgICAgaWYgKGNsb3NlKSB7XHJcbiAgICAgICAgICAgIHB0cy51bnNoaWZ0KHBvaW50c1tsIC0gMV0pO1x0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gaW5zZXJ0IGVuZCBwb2ludCBhcyBmaXJzdCBwb2ludFxyXG4gICAgICAgICAgICBwdHMudW5zaGlmdChwb2ludHNbbCAtIDJdKTtcclxuICAgICAgICAgICAgcHRzLnB1c2gocG9pbnRzWzBdLCBwb2ludHNbMV0pOyBcdFx0XHRcdFx0XHRcdFx0Ly8gZmlyc3QgcG9pbnQgYXMgbGFzdCBwb2ludFxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcHRzLnVuc2hpZnQocG9pbnRzWzFdKTtcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gY29weSAxLiBwb2ludCBhbmQgaW5zZXJ0IGF0IGJlZ2lubmluZ1xyXG4gICAgICAgICAgICBwdHMudW5zaGlmdChwb2ludHNbMF0pO1xyXG4gICAgICAgICAgICBwdHMucHVzaChwb2ludHNbbCAtIDJdLCBwb2ludHNbbCAtIDFdKTtcdFx0XHRcdFx0XHRcdC8vIGR1cGxpY2F0ZSBlbmQtcG9pbnRzXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjYWNoZSBpbm5lci1sb29wIGNhbGN1bGF0aW9ucyBhcyB0aGV5IGFyZSBiYXNlZCBvbiB0IGFsb25lXHJcbiAgICAgICAgY2FjaGVbMF0gPSAxO1x0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyAxLDAsMCwwXHJcblxyXG4gICAgICAgIGZvciAoOyBpIDwgbnVtT2ZTZWc7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgdmFyIHN0ID0gaSAvIG51bU9mU2VnLFxyXG4gICAgICAgICAgICAgICAgc3QyID0gc3QgKiBzdCxcclxuICAgICAgICAgICAgICAgIHN0MyA9IHN0MiAqIHN0LFxyXG4gICAgICAgICAgICAgICAgc3QyMyA9IHN0MyAqIDIsXHJcbiAgICAgICAgICAgICAgICBzdDMyID0gc3QyICogMztcclxuXHJcbiAgICAgICAgICAgIGNhY2hlW2NhY2hlUHRyKytdID1cdHN0MjMgLSBzdDMyICsgMTtcdFx0XHRcdFx0XHRcdC8vIGMxXHJcbiAgICAgICAgICAgIGNhY2hlW2NhY2hlUHRyKytdID1cdHN0MzIgLSBzdDIzO1x0XHRcdFx0XHRcdFx0XHQvLyBjMlxyXG4gICAgICAgICAgICBjYWNoZVtjYWNoZVB0cisrXSA9XHRzdDMgLSAyICogc3QyICsgc3Q7XHRcdFx0XHRcdFx0XHQvLyBjM1xyXG4gICAgICAgICAgICBjYWNoZVtjYWNoZVB0cisrXSA9XHRzdDMgLSBzdDI7XHRcdFx0XHRcdFx0XHRcdFx0Ly8gYzRcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhY2hlWysrY2FjaGVQdHJdID0gMTtcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyAwLDEsMCwwXHJcblxyXG4gICAgICAgIC8vIGNhbGMuIHBvaW50c1xyXG4gICAgICAgIHBhcnNlKHB0cywgY2FjaGUsIGwsIHRlbnNpb24pO1xyXG5cclxuICAgICAgICBpZiAoY2xvc2UpIHtcclxuICAgICAgICAgICAgcHRzID0gW107XHJcbiAgICAgICAgICAgIHB0cy5wdXNoKHBvaW50c1tsIC0gNF0sIHBvaW50c1tsIC0gM10sXHJcbiAgICAgICAgICAgICAgICBwb2ludHNbbCAtIDJdLCBwb2ludHNbbCAtIDFdLCBcdFx0XHRcdFx0XHRcdC8vIHNlY29uZCBsYXN0IGFuZCBsYXN0XHJcbiAgICAgICAgICAgICAgICBwb2ludHNbMF0sIHBvaW50c1sxXSxcclxuICAgICAgICAgICAgICAgIHBvaW50c1syXSwgcG9pbnRzWzNdKTsgXHRcdFx0XHRcdFx0XHRcdC8vIGZpcnN0IGFuZCBzZWNvbmRcclxuICAgICAgICAgICAgcGFyc2UocHRzLCBjYWNoZSwgNCwgdGVuc2lvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBwYXJzZShwdHMsIGNhY2hlLCBsLCB0ZW5zaW9uKSB7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMiwgdDsgaSA8IGw7IGkgKz0gMikge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBwdDEgPSBwdHNbaV0sXHJcbiAgICAgICAgICAgICAgICAgICAgcHQyID0gcHRzW2krMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgcHQzID0gcHRzW2krMl0sXHJcbiAgICAgICAgICAgICAgICAgICAgcHQ0ID0gcHRzW2krM10sXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHQxeCA9IChwdDMgLSBwdHNbaS0yXSkgKiB0ZW5zaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIHQxeSA9IChwdDQgLSBwdHNbaS0xXSkgKiB0ZW5zaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIHQyeCA9IChwdHNbaSs0XSAtIHB0MSkgKiB0ZW5zaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIHQyeSA9IChwdHNbaSs1XSAtIHB0MikgKiB0ZW5zaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGMgPSAwLCBjMSwgYzIsIGMzLCBjNDtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKHQgPSAwOyB0IDwgbnVtT2ZTZWc7IHQrKykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjMSA9IGNhY2hlW2MrK107XHJcbiAgICAgICAgICAgICAgICAgICAgYzIgPSBjYWNoZVtjKytdO1xyXG4gICAgICAgICAgICAgICAgICAgIGMzID0gY2FjaGVbYysrXTtcclxuICAgICAgICAgICAgICAgICAgICBjNCA9IGNhY2hlW2MrK107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlc1tyUG9zKytdID0gYzEgKiBwdDEgKyBjMiAqIHB0MyArIGMzICogdDF4ICsgYzQgKiB0Mng7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzW3JQb3MrK10gPSBjMSAqIHB0MiArIGMyICogcHQ0ICsgYzMgKiB0MXkgKyBjNCAqIHQyeTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gYWRkIGxhc3QgcG9pbnRcclxuICAgICAgICBsID0gY2xvc2UgPyAwIDogcG9pbnRzLmxlbmd0aCAtIDI7XHJcbiAgICAgICAgcmVzW3JQb3MrK10gPSBwb2ludHNbbCsrXTtcclxuICAgICAgICByZXNbclBvc10gPSBwb2ludHNbbF07XHJcblxyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQnJ1c2ggYnkgQWtpbWl0c3UgSGFtYW11cm8gKGh0dHA6Ly9jb2RlcGVuLmlvL2FrbTIvcGVuL0JvbkloKSAtIE1JVCBMaWNlbnNlXHJcbiAgICAgKi9cclxuXHJcbiAgICB2YXIgQnJ1c2ggPSAoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICAgICAqIEBwdWJsaWNcclxuICAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBCcnVzaCh4LCB5LCBjb2xvciwgc2l6ZSwgaW5rQW1vdW50LCBhbmdsZSwgZHJpcHBpbmcsIHNwbGFzaGluZykge1xyXG4gICAgICAgICAgICB0aGlzLnggPSB4IHx8IDA7XHJcbiAgICAgICAgICAgIHRoaXMueSA9IHkgfHwgMDtcclxuICAgICAgICAgICAgaWYgKGNvbG9yICE9PSB1bmRlZmluZWQpIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgICAgICAgICAgaWYgKHNpemUgIT09IHVuZGVmaW5lZCkgdGhpcy5zaXplID0gc2l6ZTtcclxuICAgICAgICAgICAgaWYgKGlua0Ftb3VudCAhPT0gdW5kZWZpbmVkKSB0aGlzLmlua0Ftb3VudCA9IGlua0Ftb3VudDtcclxuICAgICAgICAgICAgaWYgKGFuZ2xlICE9PSB1bmRlZmluZWQpIHRoaXMuYW5nbGUgPSBhbmdsZTtcclxuICAgICAgICAgICAgaWYgKGRyaXBwaW5nICE9PSB1bmRlZmluZWQpIHRoaXMuZHJpcHBpbmcgPSBkcmlwcGluZztcclxuICAgICAgICAgICAgaWYgKHNwbGFzaGluZyAhPT0gdW5kZWZpbmVkKSB0aGlzLnNwbGFzaGluZyA9IHNwbGFzaGluZztcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2Ryb3BzID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuX3Jlc2V0VGlwKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBCcnVzaC5wcm90b3R5cGUgPSB7XHJcbiAgICAgICAgICAgIF9TUExBU0hJTkdfQlJVU0hfU1BFRUQ6IDc1LFxyXG5cclxuICAgICAgICAgICAgYW5nbGU6ICAgICAgMTUwLFxyXG4gICAgICAgICAgICB4OiAgICAgICAgICAwLFxyXG4gICAgICAgICAgICB5OiAgICAgICAgICAwLFxyXG4gICAgICAgICAgICBjb2xvcjogICAgICAnIzAwMCcsXHJcbiAgICAgICAgICAgIHNpemU6ICAgICAgIDM1LFxyXG4gICAgICAgICAgICBpbmtBbW91bnQ6ICA3LFxyXG4gICAgICAgICAgICBzcGxhc2hpbmc6ICB0cnVlLFxyXG4gICAgICAgICAgICBkcmlwcGluZzogICB0cnVlLFxyXG4gICAgICAgICAgICBtYXhIYWlyczogICAxMDAwLFxyXG4gICAgICAgICAgICBfbGF0ZXN0UG9zOiBudWxsLFxyXG4gICAgICAgICAgICBfc3Ryb2tlSWQ6ICBudWxsLFxyXG4gICAgICAgICAgICBfZHJvcHM6ICAgICBudWxsLFxyXG5cclxuICAgICAgICAgICAgaXNTdHJva2U6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy5fc3Ryb2tlSWQpO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgc3RhcnRTdHJva2U6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNTdHJva2UoKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3Jlc2V0VGlwKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMDUwMzQvaG93LXRvLWNyZWF0ZS1hLWd1aWQtdXVpZC1pbi1qYXZhc2NyaXB0XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdHJva2VJZCA9ICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24oYykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByLCB2O1xyXG4gICAgICAgICAgICAgICAgICAgIHIgPSBNYXRoLnJhbmRvbSgpICogMTYgfCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHYgPSBjID09PSAneCcgPyByIDogKHIgJiAweDMgfCAweDgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgZW5kU3Ryb2tlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N0cm9rZUlkID0gdGhpcy5fbGF0ZXN0UG9zID0gbnVsbDtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIHJlbmRlcjogZnVuY3Rpb24oY3R4LCB4LCB5KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaXNTdHJva2UgPSB0aGlzLmlzU3Ryb2tlKCksXHJcbiAgICAgICAgICAgICAgICAgICAgZHgsIGR5LFxyXG4gICAgICAgICAgICAgICAgICAgIGksIGxlbjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2xhdGVzdFBvcykgdGhpcy5fbGF0ZXN0UG9zID0ge307XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sYXRlc3RQb3MueCA9IHRoaXMueDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xhdGVzdFBvcy55ID0gdGhpcy55O1xyXG4gICAgICAgICAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICAgICAgICAgIHRoaXMueSA9IHk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2Ryb3BzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkcm9wcyAgPSB0aGlzLl9kcm9wcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZVNxID0gdGhpcy5zaXplICogdGhpcy5zaXplO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwLCBsZW4gPSBkcm9wcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkcm9wID0gZHJvcHNbaV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkeCA9IHRoaXMueCAtIGRyb3AueDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHkgPSB0aGlzLnkgLSBkcm9wLnk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaXNTdHJva2UgJiYgc2l6ZVNxID4gZHggKiBkeCArIGR5ICogZHkgJiYgdGhpcy5fc3Ryb2tlSWQgIT09IGRyb3Auc3Ryb2tlSWQpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wLmxpZmUgPD0gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3BzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlbi0tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaS0tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyb3AucmVuZGVyKGN0eCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpc1N0cm9rZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0aXAgPSB0aGlzLl90aXAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUlkID0gdGhpcy5fc3Ryb2tlSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3Q7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGR4ID0gdGhpcy54IC0gdGhpcy5fbGF0ZXN0UG9zLng7XHJcbiAgICAgICAgICAgICAgICAgICAgZHkgPSB0aGlzLnkgLSB0aGlzLl9sYXRlc3RQb3MueTtcclxuICAgICAgICAgICAgICAgICAgICBkaXN0ID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3BsYXNoaW5nICYmIGRpc3QgPiB0aGlzLl9TUExBU0hJTkdfQlJVU0hfU1BFRUQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heE51bSA9IChkaXN0IC0gdGhpcy5fU1BMQVNISU5HX0JSVVNIX1NQRUVEKSAqIDAuMyB8IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByLCBhLCBzciwgc3gsIHN5O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMCwgbGVuID0gbWF4TnVtICogTWF0aC5yYW5kb20oKSB8IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgciA9IChkaXN0IC0gMSkgKiBNYXRoLnJhbmRvbSgpICsgMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEgPSBNYXRoLlBJICogMiAqIE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzciA9IDUgKiBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ggPSB0aGlzLnggKyByICogTWF0aC5zaW4oYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeSA9IHRoaXMueSArIHIgKiBNYXRoLmNvcyhhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5tb3ZlVG8oc3ggKyBzciwgc3kpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmFyYyhzeCwgc3ksIHNyLCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5kcmlwcGluZyAmJiBkaXN0IDwgdGhpcy5pbmtBbW91bnQgKiAyICYmIE1hdGgucmFuZG9tKCkgPCAwLjA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Ryb3BzLnB1c2gobmV3IERyb3AoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLngsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5zaXplICsgdGhpcy5pbmtBbW91bnQpICogMC41ICogKCgwLjI1IC0gMC4xKSAqIE1hdGgucmFuZG9tKCkgKyAwLjEpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0cm9rZUlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMCwgbGVuID0gdGlwLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpcFtpXS5yZW5kZXIoY3R4LCBkeCwgZHksIGRpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGRpc3Bvc2U6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdGlwLmxlbmd0aCA9IHRoaXMuX2Ryb3BzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBfcmVzZXRUaXA6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRpcCA9IHRoaXMuX3RpcCA9IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgIHJhZCA9IHRoaXMuc2l6ZSAqIDAuNSxcclxuICAgICAgICAgICAgICAgICAgICB4MCwgeTAsIGEwLCB4MSwgeTEsIGExLCBjdiwgc3YsXHJcbiAgICAgICAgICAgICAgICAgICAgaSwgbGVuO1xyXG5cclxuICAgICAgICAgICAgICAgIGExICA9IE1hdGguUEkgKiAyICogTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgICAgIGExICA9IHRoaXMuYW5nbGU7XHJcbiAgICAgICAgICAgICAgICBsZW4gPSByYWQgKiByYWQgKiBNYXRoLlBJIC8gdGhpcy5pbmtBbW91bnQgfCAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxlbiA8IDEpIGxlbiA9IDE7XHJcbiAgICAgICAgICAgICAgICBpZiAobGVuID4gdGhpcy5tYXhIYWlycykgbGVuID0gdGhpcy5tYXhIYWlycztcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB4MCA9IHJhZCAqIE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgeTAgPSB4MCAqIDAuNTtcclxuICAgICAgICAgICAgICAgICAgICBhMCA9IE1hdGguUEkgKiAyICogTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgICAgICAgICB4MSA9IHgwICogTWF0aC5zaW4oYTApO1xyXG4gICAgICAgICAgICAgICAgICAgIHkxID0geTAgKiBNYXRoLmNvcyhhMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3YgPSBNYXRoLmNvcyhhMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3YgPSBNYXRoLnNpbihhMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRpcC5wdXNoKG5ldyBIYWlyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnggKyB4MSAqIGN2IC0geTEgKiBzdixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy55ICsgeDEgKiBzdiArIHkxICogY3YsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5rQW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSGFpclxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gSGFpcih4LCB5LCBpbmtBbW91bnQsIGNvbG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMueCA9IHggfHwgMDtcclxuICAgICAgICAgICAgdGhpcy55ID0geSB8fCAwO1xyXG4gICAgICAgICAgICB0aGlzLmlua0Ftb3VudCA9IGlua0Ftb3VudDtcclxuICAgICAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fbGF0ZXN0UG9zID0geyB4OiB0aGlzLngsIHk6IHRoaXMueSB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgSGFpci5wcm90b3R5cGUgPSB7XHJcbiAgICAgICAgICAgIHg6ICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIHk6ICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIGlua0Ftb3VudDogIDcsXHJcbiAgICAgICAgICAgIGNvbG9yOiAgICAgICcjMDAwJyxcclxuICAgICAgICAgICAgX2xhdGVzdFBvczogbnVsbCxcclxuXHJcbiAgICAgICAgICAgIHJlbmRlcjogZnVuY3Rpb24oY3R4LCBvZmZzZXRYLCBvZmZzZXRZLCBvZmZzZXRMZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xhdGVzdFBvcy54ID0gdGhpcy54O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbGF0ZXN0UG9zLnkgPSB0aGlzLnk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnggKz0gb2Zmc2V0WDtcclxuICAgICAgICAgICAgICAgIHRoaXMueSArPSBvZmZzZXRZO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBwZXIgPSBvZmZzZXRMZW5ndGggPyB0aGlzLmlua0Ftb3VudCAvIG9mZnNldExlbmd0aCA6IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAgICAgIChwZXIgPiAxKSBwZXIgPSAxO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocGVyIDwgMCkgcGVyID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgICAgICAgICAgY3R4LmxpbmVDYXAgPSBjdHgubGluZUpvaW4gPSAncm91bmQnO1xyXG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvcjtcclxuICAgICAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSB0aGlzLmlua0Ftb3VudCAqIHBlcjtcclxuICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgICAgIGN0eC5tb3ZlVG8odGhpcy5fbGF0ZXN0UG9zLngsIHRoaXMuX2xhdGVzdFBvcy55KTtcclxuICAgICAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy54LCB0aGlzLnkpO1xyXG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEcm9wXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBEcm9wKHgsIHksIHNpemUsIGNvbG9yLCBzdHJva2VJZCkge1xyXG4gICAgICAgICAgICB0aGlzLnggPSB4IHx8IDA7XHJcbiAgICAgICAgICAgIHRoaXMueSA9IHkgfHwgMDtcclxuICAgICAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcclxuICAgICAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgICAgICAgICB0aGlzLnN0cm9rZUlkID0gc3Ryb2tlSWQ7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxpZmUgPSB0aGlzLnNpemUgKiAxLjU7XHJcbiAgICAgICAgICAgIHRoaXMuX2xhdGVzdFBvcyA9IHsgeDogdGhpcy54LCB5OiB0aGlzLnkgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIERyb3AucHJvdG90eXBlID0ge1xyXG4gICAgICAgICAgICB4OiAgICAgICAgICAwLFxyXG4gICAgICAgICAgICB5OiAgICAgICAgICAwLFxyXG4gICAgICAgICAgICBzaXplOiAgICAgICA3LFxyXG4gICAgICAgICAgICBjb2xvcjogICAgICAnIzAwMCcsXHJcbiAgICAgICAgICAgIHN0cm9rZUlkOiAgIG51bGwsXHJcbiAgICAgICAgICAgIGxpZmU6ICAgICAgIDAsXHJcbiAgICAgICAgICAgIF9sYXRlc3RQb3M6IG51bGwsXHJcbiAgICAgICAgICAgIF94T2ZmUmF0aW86IDAsXHJcblxyXG4gICAgICAgICAgICByZW5kZXI6IGZ1bmN0aW9uKGN0eCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPCAwLjAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5feE9mZlJhdGlvICs9IDAuMDYgKiBNYXRoLnJhbmRvbSgpIC0gMC4wMztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoTWF0aC5yYW5kb20oKSA8IDAuMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3hPZmZSYXRpbyAqPSAwLjAwMztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sYXRlc3RQb3MueCA9IHRoaXMueDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xhdGVzdFBvcy55ID0gdGhpcy55O1xyXG4gICAgICAgICAgICAgICAgdGhpcy54ICs9IHRoaXMubGlmZSAqIHRoaXMuX3hPZmZSYXRpbztcclxuICAgICAgICAgICAgICAgIHRoaXMueSArPSAodGhpcy5saWZlICogMC41KSAqIE1hdGgucmFuZG9tKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5saWZlIC09ICgwLjA1IC0gMC4wMSkgKiBNYXRoLnJhbmRvbSgpICsgMC4wMTtcclxuXHJcbiAgICAgICAgICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgICAgICAgICAgY3R4LmxpbmVDYXAgPSBjdHgubGluZUpvaW4gPSAncm91bmQnO1xyXG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvcjtcclxuICAgICAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSB0aGlzLnNpemUgKyB0aGlzLmxpZmUgKiAwLjM7XHJcbiAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgICAgICBjdHgubW92ZVRvKHRoaXMuX2xhdGVzdFBvcy54LCB0aGlzLl9sYXRlc3RQb3MueSk7XHJcbiAgICAgICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCwgdGhpcy55KTtcclxuICAgICAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICAgICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIEJydXNoO1xyXG5cclxuICAgIH0pKCk7XHJcblxyXG5cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICogQnJ1c2hzdHJva2UgdXRpbHNcclxuICAgICAqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbiAgICAvLyBUeXBlIG9mIGVsZW1lbnRzLCBtb3N0IGZyb20gYW5pbWUuanNcclxuXHJcbiAgICB2YXIgaXMgPSB7XHJcbiAgICAgICAgb2JqOiBmdW5jdGlvbihhKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYSkuaW5kZXhPZignT2JqZWN0JykgPiAtMSB9LFxyXG4gICAgICAgIG51bTogZnVuY3Rpb24oYSkgeyByZXR1cm4gdHlwZW9mIGEgPT09ICdudW1iZXInIH0sXHJcbiAgICAgICAgc3RyOiBmdW5jdGlvbihhKSB7IHJldHVybiB0eXBlb2YgYSA9PT0gJ3N0cmluZycgfSxcclxuICAgICAgICBmbmM6IGZ1bmN0aW9uKGEpIHsgcmV0dXJuIHR5cGVvZiBhID09PSAnZnVuY3Rpb24nIH0sXHJcbiAgICAgICAgdW5kOiBmdW5jdGlvbihhKSB7IHJldHVybiB0eXBlb2YgYSA9PT0gJ3VuZGVmaW5lZCcgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBGdW5jdGlvbnNcclxuXHJcbiAgICBmdW5jdGlvbiBjYWxsRnVuY3Rpb24oZm4sIGNvbnRleHQsIHBhcmFtcykge1xyXG4gICAgICAgIGlmIChpcy5mbmMoZm4pKSBmbi5jYWxsKGNvbnRleHQsIHBhcmFtcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gT2JqZWN0c1xyXG5cclxuICAgIGZ1bmN0aW9uIGV4dGVuZFNpbmdsZSh0YXJnZXQsIHNvdXJjZSkge1xyXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpXHJcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBleHRlbmQodGFyZ2V0LCBzb3VyY2UpIHtcclxuICAgICAgICBpZiAoIXRhcmdldCkgdGFyZ2V0ID0ge307XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIGV4dGVuZFNpbmdsZSh0YXJnZXQsIGFyZ3VtZW50c1tpXSk7XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTdHlsZXNcclxuXHJcbiAgICBmdW5jdGlvbiB2YWxpZFByb3BlcnR5KHByb3BlcnR5LCB2YWx1ZSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiAhaXMudW5kKHZhbHVlKSAmJlxyXG4gICAgICAgICAgICAgICAgIWlzLm9iaih2YWx1ZSkgJiZcclxuICAgICAgICAgICAgICAgICFpcy5mbmModmFsdWUpICYmXHJcbiAgICAgICAgICAgICAgICB2YWx1ZS5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICB2YWx1ZSAhPSBwYXJzZUludCh2YWx1ZSkgJiZcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5ICE9IHBhcnNlSW50KHByb3BlcnR5KTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0U3R5bGUoZWwpIHtcclxuICAgICAgICB2YXIgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWwpO1xyXG4gICAgICAgIHZhciBzdHlsZSA9ICcnO1xyXG4gICAgICAgIGZvciAodmFyIHByb3BlcnR5IGluIGNvbXB1dGVkU3R5bGUpIHtcclxuICAgICAgICAgICAgaWYgKHZhbGlkUHJvcGVydHkocHJvcGVydHksIGNvbXB1dGVkU3R5bGVbcHJvcGVydHldKSkge1xyXG4gICAgICAgICAgICAgICAgc3R5bGUgKz0gcHJvcGVydHkgKyAnOicgKyBjb21wdXRlZFN0eWxlW3Byb3BlcnR5XSArICc7JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbC5zdHlsZS5jc3NUZXh0ICs9IHN0eWxlICsgJzt2aXNpYmlsaXR5OnZpc2libGU7JztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRTdHlsZUFsbChlbCwgbGlzdCkge1xyXG4gICAgICAgIHZhciBjaGlsZHJlbiA9IGVsLmNoaWxkcmVuO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIHNldFN0eWxlQWxsKGNoaWxkcmVuW2ldLCBsaXN0KTtcclxuICAgICAgICBsaXN0LnB1c2goe2VsOiBlbCwgc3R5bGU6IGVsLnN0eWxlLmNzc1RleHR9KTtcclxuICAgICAgICBzZXRTdHlsZShlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzdG9yZVN0eWxlQWxsKGxpc3QpIHtcclxuICAgICAgICB2YXIgY3VycmVudDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY3VycmVudCA9IGxpc3RbaV07XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50LnN0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50LmVsLnN0eWxlLmNzc1RleHQgPSBjdXJyZW50LnN0eWxlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudC5lbC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0T3V0ZXJIVE1MKGVsKSB7XHJcbiAgICAgICAgdmFyIGxpc3QgPSBbXTtcclxuICAgICAgICBzZXRTdHlsZUFsbChlbCwgbGlzdCk7XHJcbiAgICAgICAgdmFyIGh0bWwgPSBlbC5vdXRlckhUTUw7XHJcbiAgICAgICAgcmVzdG9yZVN0eWxlQWxsKGxpc3QpO1xyXG4gICAgICAgIHJldHVybiBodG1sO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZpeFJvb3RQb3NpdGlvbihyb290KSB7XHJcbiAgICAgICAgdmFyIHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShyb290KTtcclxuICAgICAgICB2YXIgcG9zaXRpb24gPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdwb3NpdGlvbicpO1xyXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gJ3N0YXRpYycpIHtcclxuICAgICAgICAgICAgcm9vdC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldFBvc2l0aW9uKG8pIHtcclxuICAgICAgICB2YXIgZWxSZWN0ID0gby5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICB2YXIgcm9vdFJlY3QgPSBvLnJvb3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgby50b3AgPSBlbFJlY3QudG9wIC0gcm9vdFJlY3QudG9wO1xyXG4gICAgICAgIG8ubGVmdCA9IGVsUmVjdC5sZWZ0IC0gcm9vdFJlY3QubGVmdDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQcm9taXNlc1xyXG5cclxuICAgIGZ1bmN0aW9uIGRlZmVycmVkKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlc29sdmUgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLnJlamVjdCA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc29sdmUgPSByZXNvbHZlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWplY3QgPSByZWplY3Q7XHJcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgcmFuZG9tIHBvaW50cyBpbiBhIDJkIHNwYWNlXHJcblxyXG4gICAgZnVuY3Rpb24gcmFuZG9taXplKG51bSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIHZhciBudW1Qb2ludHMgPSBudW0gfHwgMTA7XHJcbiAgICAgICAgdmFyIHBvaW50cyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtUG9pbnRzOyBpKyspIHtcclxuICAgICAgICAgICAgcG9pbnRzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAod2lkdGggKiBNYXRoLnJhbmRvbSgpICogMC45ICsgd2lkdGggKiAwLjA1KSB8IDAsXHJcbiAgICAgICAgICAgICAgICAoaGVpZ2h0ICogTWF0aC5yYW5kb20oKSAqIDAuOSArIGhlaWdodCAqIDAuMDUpIHwgMFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcG9pbnRzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENhbnZhc1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlc2l6ZUltYWdlKGltZywgbykge1xyXG4gICAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnY2FudmFzJylbMF07XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gby53aWR0aDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gby5oZWlnaHQ7XHJcbiAgICAgICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgaWYgKG8uc3RyZXRjaCkge1xyXG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgMCwgMCwgby53aWR0aCwgby5oZWlnaHQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciB3aWR0aCA9IGltZy53aWR0aDtcclxuICAgICAgICAgICAgdmFyIGhlaWdodCA9IGltZy5oZWlnaHQ7XHJcbiAgICAgICAgICAgIHZhciBsZWZ0ID0gby53aWR0aCAvIDIgLSB3aWR0aCAvIDI7XHJcbiAgICAgICAgICAgIHZhciB0b3AgPSBvLmhlaWdodCAvIDIgLSBoZWlnaHQgLyAyO1xyXG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgbGVmdCwgdG9wLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNhbnZhcztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbml0Q2FudmFzKG8pIHtcclxuICAgICAgICBpZiAoby5lbCkge1xyXG4gICAgICAgICAgICBvLndpZHRoID0gby5lbC5vZmZzZXRXaWR0aDtcclxuICAgICAgICAgICAgby5oZWlnaHQgPSBvLmVsLm9mZnNldEhlaWdodDtcclxuICAgICAgICAgICAgc2V0UG9zaXRpb24obyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnY2FudmFzJylbMF07XHJcbiAgICAgICAgY2FudmFzLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICBjYW52YXMuc3R5bGUudG9wID0gby50b3AgKyAncHgnO1xyXG4gICAgICAgIGNhbnZhcy5zdHlsZS5sZWZ0ID0gby5sZWZ0ICsgJ3B4JztcclxuICAgICAgICBjYW52YXMud2lkdGggPSBvLndpZHRoO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBvLmhlaWdodDtcclxuICAgICAgICBjYW52YXMuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG4gICAgICAgIG8uY2FudmFzID0gY2FudmFzO1xyXG4gICAgICAgIG8uY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgZml4Um9vdFBvc2l0aW9uKG8ucm9vdCk7XHJcbiAgICAgICAgLy8gby5yb290LmFwcGVuZENoaWxkKG8uY2FudmFzKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqKioqKioqKioqKioqXHJcbiAgICAgKiBCcnVzaHN0cm9rZVxyXG4gICAgICoqKioqKioqKioqKioqL1xyXG5cclxuICAgIGZ1bmN0aW9uIEJydXNoc3Ryb2tlKG9wdGlvbnMpIHtcclxuXHJcbiAgICAgICAgLy8gRGVmYXVsdCB2YWx1ZXNcclxuXHJcbiAgICAgICAgdGhpcy5kZWZhdWx0cyA9IHtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiAndG8tYm90dG9tJyxcclxuICAgICAgICAgICAgcGF0aDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICBwb2ludHM6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgZnJhbWVBbmltYXRpb246IGZhbHNlLFxyXG4gICAgICAgICAgICBmcmFtZXM6IDAsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwLFxyXG4gICAgICAgICAgICBkZWxheTogMCxcclxuICAgICAgICAgICAgY29sb3I6ICcjY2NjJyxcclxuICAgICAgICAgICAgd2lkdGg6IDMwMCxcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMjAsXHJcbiAgICAgICAgICAgIHNpemU6IDQwLFxyXG4gICAgICAgICAgICBpbmtBbW91bnQ6IDEsXHJcbiAgICAgICAgICAgIGxpZnRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBkcmlwcGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIHNwbGFzaGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgcGFkZGluZzogMzAsXHJcbiAgICAgICAgICAgIG92ZXJsYXA6IDEwLFxyXG4gICAgICAgICAgICB0ZW5zaW9uOiAwLjUsXHJcbiAgICAgICAgICAgIHJlZHVjZU92ZXJmbG93OiAyMCxcclxuICAgICAgICAgICAgcm9vdDogZG9jdW1lbnQuYm9keSxcclxuICAgICAgICAgICAgZWw6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgaW1hZ2U6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgcmVwZWF0OiAnbm8tcmVwZWF0JyxcclxuICAgICAgICAgICAgc3RyZXRjaDogZmFsc2UsXHJcbiAgICAgICAgICAgIGNlbnRlcmVkOiBmYWxzZSxcclxuICAgICAgICAgICAgcXVldWU6IGZhbHNlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0KG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIEJydXNoc3Ryb2tlLnByb3RvdHlwZSA9IHtcclxuXHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgdmFyIG8gPSBleHRlbmQodGhpcy5kZWZhdWx0cywgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIGlmIChpcy5zdHIoby5yb290KSkgby5yb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvLnJvb3QpO1xyXG4gICAgICAgICAgICBpZiAoaXMuc3RyKG8uZWwpKSBvLmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvLmVsKTtcclxuICAgICAgICAgICAgaW5pdENhbnZhcyhvKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBkID0gZGVmZXJyZWQoKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9taXNlID0gZC5wcm9taXNlO1xyXG4gICAgICAgICAgICBkLnJlc29sdmUoKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBydW46IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHN0YXJ0KCkge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5jYW52YXMuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnJlbmRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyKG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsRnVuY3Rpb24odGhhdC5hbmltYXRpb25zW29wdGlvbnMuYW5pbWF0aW9uXSwgdGhhdCwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmNsZWFyKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLmN0eC5jbGVhclJlY3QoMCwgMCwgb3B0aW9ucy53aWR0aCwgb3B0aW9ucy5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5kLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zLmVsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5wYXR0ZXJuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGh0bWwgPSAnPHN0eWxlPmJvZHl7bWFyZ2luOjA7fTwvc3R5bGU+JyArIGdldE91dGVySFRNTChvcHRpb25zLmVsKTtcclxuICAgICAgICAgICAgICAgICAgICByYXN0ZXJpemVIVE1MLmRyYXdIVE1MKGh0bWwsIG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3MocmVuZGVyUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5maWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5jdHguZHJhd0ltYWdlKHJlbmRlclJlc3VsdC5pbWFnZSwgMCwgMCwgb3B0aW9ucy53aWR0aCwgb3B0aW9ucy5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuZC5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucGF0dGVybiA9IG9wdGlvbnMuY3R4LmNyZWF0ZVBhdHRlcm4ocmVuZGVyUmVzdWx0LmltYWdlLCBvcHRpb25zLnJlcGVhdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3IoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Jhc3Rlcml6ZUhUTUxFcnJvcjogJyArIGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zLmltYWdlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICAgICAgICBpbWcub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuc3RyZXRjaCB8fCBvcHRpb25zLmNlbnRlcmVkKSBpbWcgPSByZXNpemVJbWFnZShpbWcsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmZpbGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5jdHguZHJhd0ltYWdlKGltZywgMCwgMCwgb3B0aW9ucy53aWR0aCwgb3B0aW9ucy5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmQucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucGF0dGVybiA9IG9wdGlvbnMuY3R4LmNyZWF0ZVBhdHRlcm4oaW1nLCBvcHRpb25zLnJlcGVhdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGltZy5zcmMgPSBvcHRpb25zLmltYWdlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3RhcnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGRyYXc6IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgICAgICAgICAgdmFyIG8gPSBleHRlbmQoe30sIHRoaXMuZGVmYXVsdHMsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICB2YXIgX2RyYXcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZCA9IGRlZmVycmVkKCk7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnJ1bihleHRlbmQobywge2Q6IGR9KSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAoby5xdWV1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9taXNlID0gdGhpcy5wcm9taXNlLnRoZW4oX2RyYXcpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgX2RyYXcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGVyYXNlOiBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgICAgICAgICB0aGlzLmRyYXcoZXh0ZW5kKHt9LCBvcHRpb25zLCB7ZXJhc2U6IHRydWV9KSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZmlsbDogZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgdGhpcy5kcmF3KGV4dGVuZCh7fSwgb3B0aW9ucywge2ZpbGw6IHRydWV9KSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgY2xlYXI6IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhdyhleHRlbmQoe30sIG9wdGlvbnMsIHtjbGVhcjogdHJ1ZX0pKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzZXRQYXRoOiBmdW5jdGlvbiAobykge1xyXG4gICAgICAgICAgICB2YXIgcGF0aCA9IG8ucGF0aDtcclxuICAgICAgICAgICAgaWYgKGlzLnN0cihwYXRoKSkge1xyXG4gICAgICAgICAgICAgICAgcGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncGF0aCcpO1xyXG4gICAgICAgICAgICAgICAgcGF0aC5zZXRBdHRyaWJ1dGUoJ2QnLCBvLnBhdGgpO1xyXG4gICAgICAgICAgICAgICAgby5wYXRoID0gcGF0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvLnBhdGhMZW5naHQgPSBwYXRoLmdldFRvdGFsTGVuZ3RoKCk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcG9pbnRBdDogZnVuY3Rpb24gKHQsIG8pIHtcclxuICAgICAgICAgICAgc3dpdGNoIChvLmFuaW1hdGlvbikge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAncG9pbnRzJzpcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcG9pbnRzID0gby5wb2ludHM7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxlbmd0aCA9IHBvaW50cy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBNYXRoLnJvdW5kKChsZW5ndGggKiB0KSAvIDIpICogMjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaSA+PSBsZW5ndGgpIGkgPSBsZW5ndGggLSAyO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7eDogcG9pbnRzW2ldLCB5OiBwb2ludHNbaSArIDFdfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3BhdGgnOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnBhdGguZ2V0UG9pbnRBdExlbmd0aChvLnBhdGhMZW5naHQgKiB0KTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzZXRQb3M6IGZ1bmN0aW9uIChvLCBwb3MpIHtcclxuICAgICAgICAgICAgdmFyIGZpcnN0ID0gIXBvcztcclxuICAgICAgICAgICAgaWYgKGZpcnN0KSBwb3MgPSB7fTtcclxuICAgICAgICAgICAgc3dpdGNoIChvLmRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnYm90dG9tJzpcclxuICAgICAgICAgICAgICAgICAgICBwb3Muc3RhcnRZID0gZmlyc3QgPyBvLnBhZGRpbmcgOiBwb3Muc3RhcnRZICsgby5zaXplIC0gby5vdmVybGFwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0UG9zQm90dG9tVG9wKG8sIHBvcywgZmlyc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAndG9wJzpcclxuICAgICAgICAgICAgICAgICAgICBwb3Muc3RhcnRZID0gZmlyc3QgPyBvLmhlaWdodCAtIG8ucGFkZGluZyA6IHBvcy5zdGFydFkgLSBvLnNpemUgKyBvLm92ZXJsYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQb3NCb3R0b21Ub3AobywgcG9zLCBmaXJzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdyaWdodCc6XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zLnN0YXJ0WCA9IGZpcnN0ID8gby5wYWRkaW5nIDogcG9zLnN0YXJ0WCArIG8uc2l6ZSAtIG8ub3ZlcmxhcDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFBvc1JpZ2h0TGVmdChvLCBwb3MsIGZpcnN0KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxyXG4gICAgICAgICAgICAgICAgICAgIHBvcy5zdGFydFggPSBmaXJzdCA/IG8ud2lkdGggLSBvLnBhZGRpbmcgOiBwb3Muc3RhcnRYIC0gby5zaXplICsgby5vdmVybGFwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0UG9zUmlnaHRMZWZ0KG8sIHBvcywgZmlyc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBwb3M7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2V0UG9zQm90dG9tVG9wOiBmdW5jdGlvbiAobywgcG9zLCBmaXJzdCkge1xyXG4gICAgICAgICAgICBpZiAoZmlyc3QpIHtcclxuICAgICAgICAgICAgICAgIHBvcy52ZXJ0aWNhbCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYXV4ID0gcG9zLnN0YXJ0WDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwb3Muc3RhcnRYID0gZmlyc3QgPyBvLnBhZGRpbmcgOiBwb3MueDtcclxuICAgICAgICAgICAgcG9zLnggPSBmaXJzdCA/IG8ud2lkdGggLSBvLnBhZGRpbmcgOiBhdXg7XHJcbiAgICAgICAgICAgIHBvcy55ID0gcG9zLnN0YXJ0WTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzZXRQb3NSaWdodExlZnQ6IGZ1bmN0aW9uIChvLCBwb3MsIGZpcnN0KSB7XHJcbiAgICAgICAgICAgIGlmIChmaXJzdCkge1xyXG4gICAgICAgICAgICAgICAgcG9zLnZlcnRpY2FsID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYXV4ID0gcG9zLnN0YXJ0WTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwb3MueCA9IHBvcy5zdGFydFg7XHJcbiAgICAgICAgICAgIHBvcy5zdGFydFkgPSBmaXJzdCA/IG8ucGFkZGluZyA6IHBvcy55O1xyXG4gICAgICAgICAgICBwb3MueSA9IGZpcnN0ID8gby5oZWlnaHQgLSBvLnBhZGRpbmcgOiBhdXg7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAobykge1xyXG4gICAgICAgICAgICBpZiAoIWlzLnVuZChvLmR1cmF0aW9uKSB8fCAhaXMudW5kKG8uZnJhbWVzKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChvLmRlbGF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlbGF5ID0gby5kZWxheTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgby5kZWxheTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5yZW5kZXIobyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgZGVsYXkgKiAxMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG8uZXJhc2UpIG8uY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkZXN0aW5hdGlvbi1vdXQnO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBmcmFtZSA9IDEsIGVsYXBzZWQsIHRpbWUsIHQsIHBvaW50LCB4ID0gMCwgeSA9IDA7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RhcnRUaW1lID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzLnVuZChvLnN0YXJ0WCkpIHggPSBvLnN0YXJ0WDtcclxuICAgICAgICAgICAgICAgIGlmICghaXMudW5kKG8uc3RhcnRZKSkgeSA9IG8uc3RhcnRZO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBicnVzaCA9IG5ldyBCcnVzaCh4LCB5LCBvLnBhdHRlcm4gfHwgby5jb2xvciwgby5zaXplLCBvLmlua0Ftb3VudCwgby5hbmdsZSwgby5kcmlwcGluZywgby5zcGxhc2hpbmcpO1xyXG4gICAgICAgICAgICAgICAgYnJ1c2guc3RhcnRTdHJva2UoeCwgeSk7XHJcbiAgICAgICAgICAgICAgICBjYWxsRnVuY3Rpb24oby5iZWdpbik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG8uZnJhbWVBbmltYXRpb24gJiYgby5kdXJhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghby5mcmFtZXMpIG8uZnJhbWVzID0gcGFyc2VGbG9hdChvLmR1cmF0aW9uKSAqIDYwO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBvLmR1cmF0aW9uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIChmdW5jdGlvbiBjYWxjKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvLmR1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsYXBzZWQgPSAobmV3IERhdGUoKSAtIHN0YXJ0VGltZSkgLyAxMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lID0gZWxhcHNlZCAvIHBhcnNlRmxvYXQoby5kdXJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZSA9IGZyYW1lIC8gcGFyc2VGbG9hdChvLmZyYW1lcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHQgPSB0aW1lO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXMuZm5jKG8uZWFzaW5nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gby5lYXNpbmcodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGltZSA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBwb2ludCA9IHRoYXQucG9pbnRBdCh0LCBvKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXBvaW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogeCArIChvLnggLSB4KSAqIHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiB5ICsgKG8ueSAtIHkpICogdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgeCA9IHBvaW50Lng7XHJcbiAgICAgICAgICAgICAgICAgICAgeSA9IHBvaW50Lnk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJ1c2gucmVuZGVyKG8uY3R4LCB4LCB5KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRpbWUgPj0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicnVzaC5lbmRTdHJva2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG8uZXJhc2UpIG8uY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxGdW5jdGlvbihvLmVuZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG8uZC5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG8uZHVyYXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxjKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvLmZyYW1lQW5pbWF0aW9uID8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGMpIDogY2FsYygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGFuaW1hdGlvbnM6IHtcclxuICAgICAgICAgICAgJ3RvLWJvdHRvbSc6IGZ1bmN0aW9uKG8pIHtcclxuICAgICAgICAgICAgICAgIGNhbGxGdW5jdGlvbih0aGlzLmFuaW1hdGlvbnMuYmFzaWMsIHRoaXMsIGV4dGVuZChvLCB7ZGlyZWN0aW9uOiAnYm90dG9tJ30pKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ3RvLXRvcCc6IGZ1bmN0aW9uKG8pIHtcclxuICAgICAgICAgICAgICAgIGNhbGxGdW5jdGlvbih0aGlzLmFuaW1hdGlvbnMuYmFzaWMsIHRoaXMsIGV4dGVuZChvLCB7ZGlyZWN0aW9uOiAndG9wJ30pKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ3RvLXJpZ2h0JzogZnVuY3Rpb24obykge1xyXG4gICAgICAgICAgICAgICAgY2FsbEZ1bmN0aW9uKHRoaXMuYW5pbWF0aW9ucy5iYXNpYywgdGhpcywgZXh0ZW5kKG8sIHtkaXJlY3Rpb246ICdyaWdodCd9KSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICd0by1sZWZ0JzogZnVuY3Rpb24obykge1xyXG4gICAgICAgICAgICAgICAgY2FsbEZ1bmN0aW9uKHRoaXMuYW5pbWF0aW9ucy5iYXNpYywgdGhpcywgZXh0ZW5kKG8sIHtkaXJlY3Rpb246ICdsZWZ0J30pKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ2Jhc2ljJzogZnVuY3Rpb24obykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBvcyA9IHRoaXMuc2V0UG9zKG8pO1xyXG4gICAgICAgICAgICAgICAgdmFyIGJydXNoc3Ryb2tlcyA9IE1hdGguY2VpbCgoKHBvcy52ZXJ0aWNhbCA/IG8uaGVpZ2h0IDogby53aWR0aCkgKyAoby5zaXplIC8gMikgLSAoby5wYWRkaW5nICogMikpIC8gKG8uc2l6ZSAtIG8ub3ZlcmxhcCkpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGFuZ2xlID0gcG9zLnZlcnRpY2FsID8gTWF0aC5QSSAqIDAuNSA6IDA7XHJcbiAgICAgICAgICAgICAgICB2YXIgZHVyYXRpb24gPSBvLmR1cmF0aW9uIC8gYnJ1c2hzdHJva2VzO1xyXG4gICAgICAgICAgICAgICAgdmFyIGZyYW1lcyA9IG8uZnJhbWVzIC8gYnJ1c2hzdHJva2VzO1xyXG4gICAgICAgICAgICAgICAgdmFyIHBvaW50cyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdmFyIGFsdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3ZlcmZsb3cgPSBvLnJlZHVjZU92ZXJmbG93O1xyXG4gICAgICAgICAgICAgICAgdmFyIG9wdHMsIGZpcnN0LCBsYXN0O1xyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGZpeE92ZXJmbG93KGF4aXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gMCkgcG9zW2F4aXNdID0gcG9zW2F4aXNdIC0gb3ZlcmZsb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IDEpIHBvc1theGlzXSA9IHBvc1theGlzXSArIG92ZXJmbG93O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09PSBicnVzaHN0cm9rZXMgLSAxKSBwb3NbYXhpc10gPSBhbHQgPyBwb3NbYXhpc10gKyBvdmVyZmxvdyA6IHBvc1theGlzXSAtIG92ZXJmbG93O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYnJ1c2hzdHJva2VzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoby5saWZ0aW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0ID0gaSA9PT0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdCA9IGkgPT09IGJydXNoc3Ryb2tlcyAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdHMgPSBleHRlbmQoe30sIG8sIHBvcywge2R1cmF0aW9uOiBkdXJhdGlvbiwgZnJhbWVzOiBmcmFtZXMsIGFuZ2xlOiBhbmdsZSwgcmVuZGVyOiB0cnVlLCBxdWV1ZTogdHJ1ZX0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWZpcnN0KSBvcHRzLmJlZ2luID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFsYXN0KSBvcHRzLmVuZCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhdyhvcHRzKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3ZlcmZsb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcy52ZXJ0aWNhbCA/IGZpeE92ZXJmbG93KCd4JykgOiBmaXhPdmVyZmxvdygneScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50cy5wdXNoKHBvcy5zdGFydFgsIHBvcy5zdGFydFksIHBvcy54LCBwb3MueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0UG9zKG8sIHBvcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0ID0gIWFsdDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoby5saWZ0aW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgby5kLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbEZ1bmN0aW9uKHRoaXMuYW5pbWF0aW9ucy5wb2ludHMsIHRoaXMsIGV4dGVuZChvLCB7YW5pbWF0aW9uOiAncG9pbnRzJywgcG9pbnRzOiBwb2ludHMsIGFuZ2xlOiBhbmdsZX0pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ3BhdGgnOiBmdW5jdGlvbihvKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBhdGgobyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgcG9pbnQgPSB0aGlzLnBvaW50QXQoMCwgbyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcihleHRlbmQobywge3N0YXJ0WDogcG9pbnQueCwgc3RhcnRZOiBwb2ludC55fSkpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAncG9pbnRzJzogZnVuY3Rpb24obykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBvaW50cyA9IG8ucG9pbnRzIHx8IDA7XHJcbiAgICAgICAgICAgICAgICBwb2ludHMgPSBpcy5udW0ocG9pbnRzKSA/IHJhbmRvbWl6ZShwb2ludHMsIG8ud2lkdGgsIG8uaGVpZ2h0KSA6IHBvaW50cztcclxuICAgICAgICAgICAgICAgIHBvaW50cyA9IGdldEN1cnZlUG9pbnRzKHBvaW50cywgby50ZW5zaW9uKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKGV4dGVuZChvLCB7cG9pbnRzOiBwb2ludHMsIHN0YXJ0WDogcG9pbnRzWzBdLCBzdGFydFk6IHBvaW50c1sxXX0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIEJydXNoc3Ryb2tlO1xyXG5cclxufSkpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3V0aWxzL2JydXNoc3Ryb2tlLmpzIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgTWVudSA9ICgpID0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJtZW51XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG90XCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG90XCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG90XCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG90XCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG90XCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG90XCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG90XCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG90XCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG90XCI+PC9kaXY+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2XCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtzXCIgPkhvbWU8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtzXCIgaHJlZj1cIi9Qb3J0Zm9saW9cIj5cclxuICAgICAgICAgICAgICA8YT5Qb3J0Zm9saW88L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtzXCIgaHJlZj1cIi9BYm91dFwiPlxyXG4gICAgICAgICAgICAgIDxhPkFib3V0PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cIm5hdi1saW5rc1wiIGhyZWY9XCIvQ29udGFjdFwiPlxyXG4gICAgICAgICAgICAgIDxhPkNvbnRhY3Q8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLm5hdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubmF2IGEge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gLm5hdiBhOmhvdmVyOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBiYWNrZ3JvdW5kOiByZ2JhKDEwMCwxMDAsMTAwLDAuMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIC5uYXYgYTphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgIC8vICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIC8vICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM5OTk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzk5OTtcclxuICAgICAgICAgICAgICAgIC8vICAgICB0cmFuc2l0aW9uOiAuMjVzO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTWVudS5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBRUE7QUFDQTs7Ozs7OztBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7O0FBRUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUdBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVpBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUNBOzs7O0FBR0E7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTs7QUFEQTtBQWFBO0FBYkE7Ozs7O0FBcENBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFLQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQUFBO0FBQUE7QUFrQkE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUdBO0FBSEE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFHQTtBQUhBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBR0E7QUFIQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUlBO0FBSkE7QUFJQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTBCQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuREE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFBQTtBQUFBO0FBOEJBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQURBO0FBR0E7QUFFQTtBQUFBO0FBQ0E7QUFLQTs7OztBQVlBOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUVBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUdBOzs7O0FBQUE7QUFDQTtBQUtBOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBRUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFuQkE7QUFvQkE7QUFTQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUlBO0FBekpBO0FBQ0E7QUE0SkE7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBN0JBO0FBQ0E7QUFnQ0E7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQXBDQTtBQUNBO0FBcUNBO0FBR0E7QUFDQTtBQUdBOzs7O0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBUEE7QUFDQTtBQVFBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBQUE7QUFEQTtBQVNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFEQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBR0E7Ozs7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQTVCQTtBQUNBO0FBMkJBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBRkE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFUQTtBQVVBO0FBRUE7QUFDQTtBQWxCQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFaQTtBQWVBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBRUE7O0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7O0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBRUE7QUFFQTtBQUNBO0FBREE7QUFDQTs7QUFFQTtBQUNBO0FBREE7QUFLQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUVBO0FBRkE7QUFJQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFHQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBbkVBO0FBN09BO0FBQ0E7QUFpVEE7QUF6NUJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWEE7QUFBQTtBQUFBO0FBa0RBO0FBQ0E7QUFEQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        