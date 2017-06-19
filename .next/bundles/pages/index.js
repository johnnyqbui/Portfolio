
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

var _Title = __webpack_require__(551);

var _Title2 = _interopRequireDefault(_Title);

var _Menu = __webpack_require__(549);

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Johnny\\Desktop\\personal-portfolio\\pages\\index.js?entry';

exports.default = function () {
	return _react2.default.createElement('div', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 6
		}
	}, _react2.default.createElement(_Menu2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 7
		}
	}), _react2.default.createElement(_Layout2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 8
		}
	}, _react2.default.createElement(_Title2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 9
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

var __styledJsxDefaultExport = new String("body{margin:0;padding:0;overflow-x:hidden}p,h1,h2,h3,h4,h5,h6,a{font-family:'Raleway', sans-serif}*,*:after,*:before{-webkit-box-sizing:border-box;box-sizing:border-box}.overlay{position:fixed;z-index:1;width:100%;height:100%;background:rgba(0, 0, 0, 0.3);opacity:0;-webkit-transition:opacity 0.3s, -webkit-transform 0s 0.3s;-webkit-transition:opacity 0.3s, -webkit--webkit-transform 0s 0.3s;-webkit-transition:opacity 0.3s, -webkit-transform 0s 0.3s;transition:opacity 0.3s, -webkit-transform 0s 0.3s;-webkit-transition:opacity 0.3s,-webkit-transform 0s 0.3s;-webkit-transition:opacity 0.3s, transform 0s 0.3s;transition:opacity 0.3s, transform 0s 0.3s;-webkit-transition:opacity 0.3s,-webkit-transform 0s 0.3s, -webkit--webkit-transform 0s 0.3s;-webkit-transition:opacity 0.3s, transform 0s 0.3s, -webkit-transform 0s 0.3s;transition:opacity 0.3s, transform 0s 0.3s, -webkit-transform 0s 0.3s}.morphClose .dot:nth-of-type(1){-webkit-transform:translate(0px, 0px);-webkit-transform:translate(0px, 0px);-ms-transform:translate(0px, 0px);transform:translate(0px, 0px)}.morphClose .dot:nth-of-type(2){-webkit-transform:translate(7px, 7px);-webkit-transform:translate(7px, 7px);-ms-transform:translate(7px, 7px);transform:translate(7px, 7px)}.morphClose .dot:nth-of-type(3){-webkit-transform:translate(30px, 0px);-webkit-transform:translate(30px, 0px);-ms-transform:translate(30px, 0px);transform:translate(30px, 0px)}.morphClose .dot:nth-of-type(4){-webkit-transform:translate(7px, 23px);-webkit-transform:translate(7px, 23px);-ms-transform:translate(7px, 23px);transform:translate(7px, 23px)}.morphClose .dot:nth-of-type(5){-webkit-transform:translate(15px, 15px);-webkit-transform:translate(15px, 15px);-ms-transform:translate(15px, 15px);transform:translate(15px, 15px)}.morphClose .dot:nth-of-type(6){-webkit-transform:translate(23px, 7px);-webkit-transform:translate(23px, 7px);-ms-transform:translate(23px, 7px);transform:translate(23px, 7px)}.morphClose .dot:nth-of-type(7){-webkit-transform:translate(0px, 30px);-webkit-transform:translate(0px, 30px);-ms-transform:translate(0px, 30px);transform:translate(0px, 30px)}.morphClose .dot:nth-of-type(8){-webkit-transform:translate(23px, 23px);-webkit-transform:translate(23px, 23px);-ms-transform:translate(23px, 23px);transform:translate(23px, 23px)}.morphClose .dot:nth-of-type(9){-webkit-transform:translate(30px, 30px);-webkit-transform:translate(30px, 30px);-ms-transform:translate(30px, 30px);transform:translate(30px, 30px)}.morphClose:hover .dot{background-color:#000}.morphClose:hover .dot:nth-of-type(1){-webkit-transform:translate(-3px, -3px);-webkit-transform:translate(-3px, -3px);-ms-transform:translate(-3px, -3px);transform:translate(-3px, -3px)}.morphClose:hover .dot:nth-of-type(2){-webkit-transform:translate(6px, 6px);-webkit-transform:translate(6px, 6px);-ms-transform:translate(6px, 6px);transform:translate(6px, 6px)}.morphClose:hover .dot:nth-of-type(3){-webkit-transform:translate(33px, -3px);-webkit-transform:translate(33px, -3px);-ms-transform:translate(33px, -3px);transform:translate(33px, -3px)}.morphClose:hover .dot:nth-of-type(4){-webkit-transform:translate(6px, 24px);-webkit-transform:translate(6px, 24px);-ms-transform:translate(6px, 24px);transform:translate(6px, 24px)}.morphClose:hover .dot:nth-of-type(5){-webkit-transform:translate(15px, 15px);-webkit-transform:translate(15px, 15px);-ms-transform:translate(15px, 15px);transform:translate(15px, 15px)}.morphClose:hover .dot:nth-of-type(6){-webkit-transform:translate(24px, 6px);-webkit-transform:translate(24px, 6px);-ms-transform:translate(24px, 6px);transform:translate(24px, 6px)}.morphClose:hover .dot:nth-of-type(7){-webkit-transform:translate(-3px, 33px);-webkit-transform:translate(-3px, 33px);-ms-transform:translate(-3px, 33px);transform:translate(-3px, 33px)}.morphClose:hover .dot:nth-of-type(8){-webkit-transform:translate(24px, 24px);-webkit-transform:translate(24px, 24px);-ms-transform:translate(24px, 24px);transform:translate(24px, 24px)}.morphClose:hover .dot:nth-of-type(9){-webkit-transform:translate(33px, 33px);-webkit-transform:translate(33px, 33px);-ms-transform:translate(33px, 33px);transform:translate(33px, 33px)}.morphOpen .dot:nth-of-type(1){-webkit-transform:translate(0px, 0px);-webkit-transform:translate(0px, 0px);-ms-transform:translate(0px, 0px);transform:translate(0px, 0px)}.morphOpen .dot:nth-of-type(2){-webkit-transform:translate(15px, 0px);-webkit-transform:translate(15px, 0px);-ms-transform:translate(15px, 0px);transform:translate(15px, 0px)}.morphOpen .dot:nth-of-type(3){-webkit-transform:translate(30px, 0px);-webkit-transform:translate(30px, 0px);-ms-transform:translate(30px, 0px);transform:translate(30px, 0px)}.morphOpen .dot:nth-of-type(4){-webkit-transform:translate(0px, 15px);-webkit-transform:translate(0px, 15px);-ms-transform:translate(0px, 15px);transform:translate(0px, 15px)}.morphOpen .dot:nth-of-type(5){-webkit-transform:translate(15px, 15px);-webkit-transform:translate(15px, 15px);-ms-transform:translate(15px, 15px);transform:translate(15px, 15px)}.morphOpen .dot:nth-of-type(6){-webkit-transform:translate(30px, 15px);-webkit-transform:translate(30px, 15px);-ms-transform:translate(30px, 15px);transform:translate(30px, 15px)}.morphOpen .dot:nth-of-type(7){-webkit-transform:translate(0px, 30px);-webkit-transform:translate(0px, 30px);-ms-transform:translate(0px, 30px);transform:translate(0px, 30px)}.morphOpen .dot:nth-of-type(8){-webkit-transform:translate(15px, 30px);-webkit-transform:translate(15px, 30px);-ms-transform:translate(15px, 30px);transform:translate(15px, 30px)}.morphOpen .dot:nth-of-type(9){-webkit-transform:translate(30px, 30px);-webkit-transform:translate(30px, 30px);-ms-transform:translate(30px, 30px);transform:translate(30px, 30px)}.morphOpen:hover .dot{background-color:#000}.morphOpen:hover .dot:nth-of-type(1){-webkit-transform:translate(-3px, -3px);-webkit-transform:translate(-3px, -3px);-ms-transform:translate(-3px, -3px);transform:translate(-3px, -3px)}.morphOpen:hover .dot:nth-of-type(2){-webkit-transform:translate(15px, 0px);-webkit-transform:translate(15px, 0px);-ms-transform:translate(15px, 0px);transform:translate(15px, 0px)}.morphOpen:hover .dot:nth-of-type(3){-webkit-transform:translate(33px, -3px);-webkit-transform:translate(33px, -3px);-ms-transform:translate(33px, -3px);transform:translate(33px, -3px)}.morphOpen:hover .dot:nth-of-type(4){-webkit-transform:translate(0px, 15px);-webkit-transform:translate(0px, 15px);-ms-transform:translate(0px, 15px);transform:translate(0px, 15px)}.morphOpen:hover .dot:nth-of-type(5){-webkit-transform:translate(15px, 15px);-webkit-transform:translate(15px, 15px);-ms-transform:translate(15px, 15px);transform:translate(15px, 15px)}.morphOpen:hover .dot:nth-of-type(6){-webkit-transform:translate(30px, 15px);-webkit-transform:translate(30px, 15px);-ms-transform:translate(30px, 15px);transform:translate(30px, 15px)}.morphOpen:hover .dot:nth-of-type(7){-webkit-transform:translate(-3px, 33px);-webkit-transform:translate(-3px, 33px);-ms-transform:translate(-3px, 33px);transform:translate(-3px, 33px)}.morphOpen:hover .dot:nth-of-type(8){-webkit-transform:translate(15px, 30px);-webkit-transform:translate(15px, 30px);-ms-transform:translate(15px, 30px);transform:translate(15px, 30px)}.morphOpen:hover .dot:nth-of-type(9){-webkit-transform:translate(33px, 33px);-webkit-transform:translate(33px, 33px);-ms-transform:translate(33px, 33px);transform:translate(33px, 33px)}.menu{position:fixed;top:30px;right:30px;height:40px;width:40px;cursor:pointer;z-index:3}.menu .dot{position:absolute;width:5px;height:5px;background-color:#555;-webkit-transition:0.2s ease-in-out;-webkit-transition:0.2s ease-in-out;transition:0.2s ease-in-out}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlc1xcc3R5bGVzaGVldC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEFBRVksQUFFeUIsQUFFSixBQUVmLEFBRXVCLEFBRUEsQUFFQyxBQUVBLEFBRUMsQUFFRCxBQUVBLEFBRUMsQUFFQSxBQUVsQixBQUVvQixBQUVGLEFBRUUsQUFFRCxBQUVDLEFBRUQsQUFFQyxBQUVBLEFBRUEsQUFFSixBQUVDLEFBRUEsQUFFQSxBQUVDLEFBRUEsQUFFRCxBQUVDLEFBRUEsQUFFbEIsQUFFb0IsQUFFRCxBQUVDLEFBRUQsQUFFQyxBQUVBLEFBRUEsQUFFQSxBQUVBLEFBRTNCLEFBRUssVUF0RkUsTUFNTSxBQThFRCxHQUVRLEVBdEZRLEVBMEJwQixBQXNDQSxHQW9Ca0IsQ0E5RUMsR0FnRlMsQ0FsRkksSUFGcEIsR0FrRnFCLENBOUVDLEFBRXNCLEFBRUEsQUFvQkksQUFnQkosQ0E5Q25DLEFBWXFDLEFBRUEsQUFJQSxBQUVBLEFBY0ksQUFJQSxBQVVKLEFBRUEsQUFFQSxBQU1BLEFBVUksQUFJQSxDQXhERixBQU1BLEFBRUEsQUFJSSxBQUlBLEFBSUEsQUFJQSxBQUVBLEFBRUEsQUFVSixBQUVBLEFBSUEsQUFFQSxBQUlJLEFBSUEsQUFJQSxBQUVBLEFBRUEsQUFFQSxBQUVBLENBSVQsU0FGUixDQTlFb0IsRUFGbEMsU0FnRmdDLEVBRStCLGNBRmxCLElBOUVFLE9BOEVELElBOUUrRCxRQWdGYiwwQ0E5RXhFLEFBRUEsQUFvQkksQUFnQkosSUFsQ0UsQUFFQSxBQUlBLEFBRUEsQUFjSSxBQUlBLEFBVUosQUFFQSxBQUVBLEFBTUEsQUFVSSxBQUlBLElBeERGLEFBTUEsQUFFQSxBQUlJLEFBSUEsQUFJQSxBQUlBLEFBRUEsQUFFQSxBQVVKLEFBRUEsQUFJQSxBQUVBLEFBSUksQUFJQSxBQUlBLEFBRUEsQUFFQSxBQUVBLEFBRUEsRUE1RW1JLGNBZ0ZsRSxzS0FoRmdILDJKQUF5RSxvUEFBQyIsImZpbGUiOiJzdHlsZXNcXHN0eWxlc2hlZXQuc2NzcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9Kb2hubnkvRGVza3RvcC9wZXJzb25hbC1wb3J0Zm9saW8iLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuOyB9XFxuXFxucCwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgYSB7XFxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmOyB9XFxuXFxuKiwgKjphZnRlciwgKjpiZWZvcmUge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbi5vdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDE7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIG9wYWNpdHk6IDA7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcywgLXdlYmtpdC10cmFuc2Zvcm0gMHMgMC4zcztcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcywgLXdlYmtpdC10cmFuc2Zvcm0gMHMgMC4zcztcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcywgdHJhbnNmb3JtIDBzIDAuM3M7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MsIHRyYW5zZm9ybSAwcyAwLjNzLCAtd2Via2l0LXRyYW5zZm9ybSAwcyAwLjNzOyB9XFxuXFxuLm1vcnBoQ2xvc2UgLmRvdDpudGgtb2YtdHlwZSgxKSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpOyB9XFxuXFxuLm1vcnBoQ2xvc2UgLmRvdDpudGgtb2YtdHlwZSgyKSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDdweCwgN3B4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoN3B4LCA3cHgpOyB9XFxuXFxuLm1vcnBoQ2xvc2UgLmRvdDpudGgtb2YtdHlwZSgzKSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDMwcHgsIDBweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDMwcHgsIDBweCk7IH1cXG5cXG4ubW9ycGhDbG9zZSAuZG90Om50aC1vZi10eXBlKDQpIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoN3B4LCAyM3B4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoN3B4LCAyM3B4KTsgfVxcblxcbi5tb3JwaENsb3NlIC5kb3Q6bnRoLW9mLXR5cGUoNSkge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNXB4LCAxNXB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTVweCwgMTVweCk7IH1cXG5cXG4ubW9ycGhDbG9zZSAuZG90Om50aC1vZi10eXBlKDYpIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjNweCwgN3B4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjNweCwgN3B4KTsgfVxcblxcbi5tb3JwaENsb3NlIC5kb3Q6bnRoLW9mLXR5cGUoNykge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDMwcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDMwcHgpOyB9XFxuXFxuLm1vcnBoQ2xvc2UgLmRvdDpudGgtb2YtdHlwZSg4KSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDIzcHgsIDIzcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyM3B4LCAyM3B4KTsgfVxcblxcbi5tb3JwaENsb3NlIC5kb3Q6bnRoLW9mLXR5cGUoOSkge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMHB4LCAzMHB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzBweCwgMzBweCk7IH1cXG5cXG4ubW9ycGhDbG9zZTpob3ZlciAuZG90IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7IH1cXG5cXG4ubW9ycGhDbG9zZTpob3ZlciAuZG90Om50aC1vZi10eXBlKDEpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtM3B4LCAtM3B4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtM3B4LCAtM3B4KTsgfVxcblxcbi5tb3JwaENsb3NlOmhvdmVyIC5kb3Q6bnRoLW9mLXR5cGUoMikge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDZweCwgNnB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg2cHgsIDZweCk7IH1cXG5cXG4ubW9ycGhDbG9zZTpob3ZlciAuZG90Om50aC1vZi10eXBlKDMpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgzM3B4LCAtM3B4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzM3B4LCAtM3B4KTsgfVxcblxcbi5tb3JwaENsb3NlOmhvdmVyIC5kb3Q6bnRoLW9mLXR5cGUoNCkge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDZweCwgMjRweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNnB4LCAyNHB4KTsgfVxcblxcbi5tb3JwaENsb3NlOmhvdmVyIC5kb3Q6bnRoLW9mLXR5cGUoNSkge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDE1cHgsIDE1cHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE1cHgsIDE1cHgpOyB9XFxuXFxuLm1vcnBoQ2xvc2U6aG92ZXIgLmRvdDpudGgtb2YtdHlwZSg2KSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjRweCwgNnB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNHB4LCA2cHgpOyB9XFxuXFxuLm1vcnBoQ2xvc2U6aG92ZXIgLmRvdDpudGgtb2YtdHlwZSg3KSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTNweCwgMzNweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTNweCwgMzNweCk7IH1cXG5cXG4ubW9ycGhDbG9zZTpob3ZlciAuZG90Om50aC1vZi10eXBlKDgpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNHB4LCAyNHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNHB4LCAyNHB4KTsgfVxcblxcbi5tb3JwaENsb3NlOmhvdmVyIC5kb3Q6bnRoLW9mLXR5cGUoOSkge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDMzcHgsIDMzcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDMzcHgsIDMzcHgpOyB9XFxuXFxuLm1vcnBoT3BlbiAuZG90Om50aC1vZi10eXBlKDEpIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7IH1cXG5cXG4ubW9ycGhPcGVuIC5kb3Q6bnRoLW9mLXR5cGUoMikge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNXB4LCAwcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNXB4LCAwcHgpOyB9XFxuXFxuLm1vcnBoT3BlbiAuZG90Om50aC1vZi10eXBlKDMpIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzBweCwgMHB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzBweCwgMHB4KTsgfVxcblxcbi5tb3JwaE9wZW4gLmRvdDpudGgtb2YtdHlwZSg0KSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMTVweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMTVweCk7IH1cXG5cXG4ubW9ycGhPcGVuIC5kb3Q6bnRoLW9mLXR5cGUoNSkge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNXB4LCAxNXB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTVweCwgMTVweCk7IH1cXG5cXG4ubW9ycGhPcGVuIC5kb3Q6bnRoLW9mLXR5cGUoNikge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMHB4LCAxNXB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzBweCwgMTVweCk7IH1cXG5cXG4ubW9ycGhPcGVuIC5kb3Q6bnRoLW9mLXR5cGUoNykge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDMwcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDMwcHgpOyB9XFxuXFxuLm1vcnBoT3BlbiAuZG90Om50aC1vZi10eXBlKDgpIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTVweCwgMzBweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE1cHgsIDMwcHgpOyB9XFxuXFxuLm1vcnBoT3BlbiAuZG90Om50aC1vZi10eXBlKDkpIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzBweCwgMzBweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDMwcHgsIDMwcHgpOyB9XFxuXFxuLm1vcnBoT3Blbjpob3ZlciAuZG90IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7IH1cXG5cXG4ubW9ycGhPcGVuOmhvdmVyIC5kb3Q6bnRoLW9mLXR5cGUoMSkge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIC0zcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIC0zcHgpOyB9XFxuXFxuLm1vcnBoT3Blbjpob3ZlciAuZG90Om50aC1vZi10eXBlKDIpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNXB4LCAwcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE1cHgsIDBweCk7IH1cXG5cXG4ubW9ycGhPcGVuOmhvdmVyIC5kb3Q6bnRoLW9mLXR5cGUoMykge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDMzcHgsIC0zcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDMzcHgsIC0zcHgpOyB9XFxuXFxuLm1vcnBoT3Blbjpob3ZlciAuZG90Om50aC1vZi10eXBlKDQpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDE1cHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMTVweCk7IH1cXG5cXG4ubW9ycGhPcGVuOmhvdmVyIC5kb3Q6bnRoLW9mLXR5cGUoNSkge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDE1cHgsIDE1cHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE1cHgsIDE1cHgpOyB9XFxuXFxuLm1vcnBoT3Blbjpob3ZlciAuZG90Om50aC1vZi10eXBlKDYpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMHB4LCAxNXB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMHB4LCAxNXB4KTsgfVxcblxcbi5tb3JwaE9wZW46aG92ZXIgLmRvdDpudGgtb2YtdHlwZSg3KSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTNweCwgMzNweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTNweCwgMzNweCk7IH1cXG5cXG4ubW9ycGhPcGVuOmhvdmVyIC5kb3Q6bnRoLW9mLXR5cGUoOCkge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDE1cHgsIDMwcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE1cHgsIDMwcHgpOyB9XFxuXFxuLm1vcnBoT3Blbjpob3ZlciAuZG90Om50aC1vZi10eXBlKDkpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgzM3B4LCAzM3B4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzM3B4LCAzM3B4KTsgfVxcblxcbi5tZW51IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMzBweDtcXG4gIHJpZ2h0OiAzMHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDQwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB6LWluZGV4OiAzOyB9XFxuXFxuLm1lbnUgLmRvdCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDVweDtcXG4gICAgaGVpZ2h0OiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDsgfVxcblwiIl19 */\n/*@ sourceURL=styles\\stylesheet.scss */");

__styledJsxDefaultExport.__hash = "12833793681";
__styledJsxDefaultExport.__scoped = "body[data-jsx-ext~=\"22833793681\"]{margin:0;padding:0;overflow-x:hidden}p[data-jsx-ext~=\"22833793681\"],h1[data-jsx-ext~=\"22833793681\"],h2[data-jsx-ext~=\"22833793681\"],h3[data-jsx-ext~=\"22833793681\"],h4[data-jsx-ext~=\"22833793681\"],h5[data-jsx-ext~=\"22833793681\"],h6[data-jsx-ext~=\"22833793681\"],a[data-jsx-ext~=\"22833793681\"]{font-family:'Raleway', sans-serif}*[data-jsx-ext~=\"22833793681\"],*[data-jsx-ext~=\"22833793681\"]:after,*[data-jsx-ext~=\"22833793681\"]:before{-webkit-box-sizing:border-box;box-sizing:border-box}.overlay[data-jsx-ext~=\"22833793681\"]{position:fixed;z-index:1;width:100%;height:100%;background:rgba(0, 0, 0, 0.3);opacity:0;-webkit-transition:opacity 0.3s, -webkit-transform 0s 0.3s;-webkit-transition:opacity 0.3s, -webkit--webkit-transform 0s 0.3s;-webkit-transition:opacity 0.3s, -webkit-transform 0s 0.3s;transition:opacity 0.3s, -webkit-transform 0s 0.3s;-webkit-transition:opacity 0.3s,-webkit-transform 0s 0.3s;-webkit-transition:opacity 0.3s, transform 0s 0.3s;transition:opacity 0.3s, transform 0s 0.3s;-webkit-transition:opacity 0.3s,-webkit-transform 0s 0.3s, -webkit--webkit-transform 0s 0.3s;-webkit-transition:opacity 0.3s, transform 0s 0.3s, -webkit-transform 0s 0.3s;transition:opacity 0.3s, transform 0s 0.3s, -webkit-transform 0s 0.3s}.morphClose[data-jsx-ext~=\"22833793681\"] .dot[data-jsx-ext~=\"22833793681\"]:nth-of-type(1){-webkit-transform:translate(0px, 0px);-webkit-transform:translate(0px, 0px);-ms-transform:translate(0px, 0px);transform:translate(0px, 0px)}.morphClose[data-jsx-ext~=\"22833793681\"] .dot[data-jsx-ext~=\"22833793681\"]:nth-of-type(2){-webkit-transform:translate(7px, 7px);-webkit-transform:translate(7px, 7px);-ms-transform:translate(7px, 7px);transform:translate(7px, 7px)}.morphClose[data-jsx-ext~=\"22833793681\"] .dot[data-jsx-ext~=\"22833793681\"]:nth-of-type(3){-webkit-transform:translate(30px, 0px);-webkit-transform:translate(30px, 0px);-ms-transform:translate(30px, 0px);transform:translate(30px, 0px)}.morphClose[data-jsx-ext~=\"22833793681\"] .dot[data-jsx-ext~=\"22833793681\"]:nth-of-type(4){-webkit-transform:translate(7px, 23px);-webkit-transform:translate(7px, 23px);-ms-transform:translate(7px, 23px);transform:translate(7px, 23px)}.morphClose[data-jsx-ext~=\"22833793681\"] .dot[data-jsx-ext~=\"22833793681\"]:nth-of-type(5){-webkit-transform:translate(15px, 15px);-webkit-transform:translate(15px, 15px);-ms-transform:translate(15px, 15px);transform:translate(15px, 15px)}.morphClose[data-jsx-ext~=\"22833793681\"] .dot[data-jsx-ext~=\"22833793681\"]:nth-of-type(6){-webkit-transform:translate(23px, 7px);-webkit-transform:translate(23px, 7px);-ms-transform:translate(23px, 7px);transform:translate(23px, 7px)}.morphClose[data-jsx-ext~=\"22833793681\"] .dot[data-jsx-ext~=\"22833793681\"]:nth-of-type(7){-webkit-transform:translate(0px, 30px);-webkit-transform:translate(0px, 30px);-ms-transform:translate(0px, 30px);transform:translate(0px, 30px)}.morphClose[data-jsx-ext~=\"22833793681\"] .dot[data-jsx-ext~=\"22833793681\"]:nth-of-type(8){-webkit-transform:translate(23px, 23px);-webkit-transform:translate(23px, 23px);-ms-transform:translate(23px, 23px);transform:translate(23px, 23px)}.morphClose[data-jsx-ext~=\"22833793681\"] .dot[data-jsx-ext~=\"22833793681\"]:nth-of-type(9){-webkit-transform:translate(30px, 30px);-webkit-transform:translate(30px, 30px);-ms-transform:translate(30px, 30px);transform:translate(30px, 30px)}.morphClose[data-jsx-ext~=\"22833793681\"]:hover .dot[data-jsx-ext~=\"22833793681\"]{background-color:#000}.morphClose[data-jsx-ext~=\"22833793681\"]:hover .dot[data-jsx-ext~=\"22833793681\"]:nth-of-type(1){-webkit-transform:translate(-3px, -3px);-webkit-transform:translate(-3px, -3px);-ms-transform:translate(-3px, -3px);transform:translate(-3px, -3px)}.morphClose[data-jsx-ext~=\"22833793681\"]:hover .dot[data-jsx-ext~=\"22833793681\"]:nth-of-type(2){-webkit-transform:translate(6px, 6px);-webkit-transform:translate(6px, 6px);-ms-transform:translate(6px, 6px);transform:translate(6px, 6px)}.morphClose[data-jsx-ext~=\"22833793681\"]:hover .dot[data-jsx-ext~=\"22833793681\"]:nth-of-type(3){-webkit-transform:translate(33px, -3px);-webkit-transform:translate(33px, -3px);-ms-transform:translate(33px, -3px);transform:translate(33px, -3px)}.morphClose[data-jsx-ext~=\"22833793681\"]:hover .dot[data-jsx-ext~=\"22833793681\"]:nth-of-type(4){-webkit-transform:translate(6px, 24px);-webkit-transform:translate(6px, 24px);-ms-transform:translate(6px, 24px);transform:translate(6px, 24px)}.morphClose[data-jsx-ext~=\"22833793681\"]:hover .dot[data-jsx-ext~=\"22833793681\"]:nth-of-type(5){-webkit-transform:translate(15px, 15px);-webkit-transform:translate(15px, 15px);-ms-transform:translate(15px, 15px);transform:translate(15px, 15px)}.morphClose[data-jsx-ext~=\"22833793681\"]:hover .dot[data-jsx-ext~=\"22833793681\"]:nth-of-type(6){-webkit-transform:translate(24px, 6px);-webkit-transform:translate(24px, 6px);-ms-transform:translate(24px, 6px);transform:translate(24px, 6px)}.morphClose[data-jsx-ext~=\"22833793681\"]:hover .dot[data-jsx-ext~=\"22833793681\"]:nth-of-type(7){-webkit-transform:translate(-3px, 33px);-webkit-transform:translate(-3px, 33px);-ms-transform:translate(-3px, 33px);transform:translate(-3px, 33px)}.morphClose[data-jsx-ext~=\"22833793681\"]:hover .dot[data-jsx-ext~=\"22833793681\"]:nth-of-type(8){-webkit-transform:translate(24px, 24px);-webkit-transform:translate(24px, 24px);-ms-transform:translate(24px, 24px);transform:translate(24px, 24px)}.morphClose[data-jsx-ext~=\"22833793681\"]:hover .dot[data-jsx-ext~=\"22833793681\"]:nth-of-type(9){-webkit-transform:translate(33px, 33px);-webkit-transform:translate(33px, 33px);-ms-transform:translate(33px, 33px);transform:translate(33px, 33px)}.morphOpen[data-jsx-ext~=\"22833793681\"] .dot[data-jsx-ext~=\"22833793681\"]:nth-of-type(1){-webkit-transform:translate(0px, 0px);-webkit-transform:translate(0px, 0px);-ms-transform:translate(0px, 0px);transform:translate(0px, 0px)}.morphOpen[data-jsx-ext~=\"22833793681\"] .dot[data-jsx-ext~=\"22833793681\"]:nth-of-type(2){-webkit-transform:translate(15px, 0px);-webkit-transform:translate(15px, 0px);-ms-transform:translate(15px, 0px);transform:translate(15px, 0px)}.morphOpen[data-jsx-ext~=\"22833793681\"] .dot[data-jsx-ext~=\"22833793681\"]:nth-of-type(3){-webkit-transform:translate(30px, 0px);-webkit-transform:translate(30px, 0px);-ms-transform:translate(30px, 0px);transform:translate(30px, 0px)}.morphOpen[data-jsx-ext~=\"22833793681\"] .dot[data-jsx-ext~=\"22833793681\"]:nth-of-type(4){-webkit-transform:translate(0px, 15px);-webkit-transform:translate(0px, 15px);-ms-transform:translate(0px, 15px);transform:translate(0px, 15px)}.morphOpen[data-jsx-ext~=\"22833793681\"] .dot[data-jsx-ext~=\"22833793681\"]:nth-of-type(5){-webkit-transform:translate(15px, 15px);-webkit-transform:translate(15px, 15px);-ms-transform:translate(15px, 15px);transform:translate(15px, 15px)}.morphOpen[data-jsx-ext~=\"22833793681\"] .dot[data-jsx-ext~=\"22833793681\"]:nth-of-type(6){-webkit-transform:translate(30px, 15px);-webkit-transform:translate(30px, 15px);-ms-transform:translate(30px, 15px);transform:translate(30px, 15px)}.morphOpen[data-jsx-ext~=\"22833793681\"] .dot[data-jsx-ext~=\"22833793681\"]:nth-of-type(7){-webkit-transform:translate(0px, 30px);-webkit-transform:translate(0px, 30px);-ms-transform:translate(0px, 30px);transform:translate(0px, 30px)}.morphOpen[data-jsx-ext~=\"22833793681\"] .dot[data-jsx-ext~=\"22833793681\"]:nth-of-type(8){-webkit-transform:translate(15px, 30px);-webkit-transform:translate(15px, 30px);-ms-transform:translate(15px, 30px);transform:translate(15px, 30px)}.morphOpen[data-jsx-ext~=\"22833793681\"] .dot[data-jsx-ext~=\"22833793681\"]:nth-of-type(9){-webkit-transform:translate(30px, 30px);-webkit-transform:translate(30px, 30px);-ms-transform:translate(30px, 30px);transform:translate(30px, 30px)}.morphOpen[data-jsx-ext~=\"22833793681\"]:hover .dot[data-jsx-ext~=\"22833793681\"]{background-color:#000}.morphOpen[data-jsx-ext~=\"22833793681\"]:hover .dot[data-jsx-ext~=\"22833793681\"]:nth-of-type(1){-webkit-transform:translate(-3px, -3px);-webkit-transform:translate(-3px, -3px);-ms-transform:translate(-3px, -3px);transform:translate(-3px, -3px)}.morphOpen[data-jsx-ext~=\"22833793681\"]:hover .dot[data-jsx-ext~=\"22833793681\"]:nth-of-type(2){-webkit-transform:translate(15px, 0px);-webkit-transform:translate(15px, 0px);-ms-transform:translate(15px, 0px);transform:translate(15px, 0px)}.morphOpen[data-jsx-ext~=\"22833793681\"]:hover .dot[data-jsx-ext~=\"22833793681\"]:nth-of-type(3){-webkit-transform:translate(33px, -3px);-webkit-transform:translate(33px, -3px);-ms-transform:translate(33px, -3px);transform:translate(33px, -3px)}.morphOpen[data-jsx-ext~=\"22833793681\"]:hover .dot[data-jsx-ext~=\"22833793681\"]:nth-of-type(4){-webkit-transform:translate(0px, 15px);-webkit-transform:translate(0px, 15px);-ms-transform:translate(0px, 15px);transform:translate(0px, 15px)}.morphOpen[data-jsx-ext~=\"22833793681\"]:hover .dot[data-jsx-ext~=\"22833793681\"]:nth-of-type(5){-webkit-transform:translate(15px, 15px);-webkit-transform:translate(15px, 15px);-ms-transform:translate(15px, 15px);transform:translate(15px, 15px)}.morphOpen[data-jsx-ext~=\"22833793681\"]:hover .dot[data-jsx-ext~=\"22833793681\"]:nth-of-type(6){-webkit-transform:translate(30px, 15px);-webkit-transform:translate(30px, 15px);-ms-transform:translate(30px, 15px);transform:translate(30px, 15px)}.morphOpen[data-jsx-ext~=\"22833793681\"]:hover .dot[data-jsx-ext~=\"22833793681\"]:nth-of-type(7){-webkit-transform:translate(-3px, 33px);-webkit-transform:translate(-3px, 33px);-ms-transform:translate(-3px, 33px);transform:translate(-3px, 33px)}.morphOpen[data-jsx-ext~=\"22833793681\"]:hover .dot[data-jsx-ext~=\"22833793681\"]:nth-of-type(8){-webkit-transform:translate(15px, 30px);-webkit-transform:translate(15px, 30px);-ms-transform:translate(15px, 30px);transform:translate(15px, 30px)}.morphOpen[data-jsx-ext~=\"22833793681\"]:hover .dot[data-jsx-ext~=\"22833793681\"]:nth-of-type(9){-webkit-transform:translate(33px, 33px);-webkit-transform:translate(33px, 33px);-ms-transform:translate(33px, 33px);transform:translate(33px, 33px)}.menu[data-jsx-ext~=\"22833793681\"]{position:fixed;top:30px;right:30px;height:40px;width:40px;cursor:pointer;z-index:3}.menu[data-jsx-ext~=\"22833793681\"] .dot[data-jsx-ext~=\"22833793681\"]{position:absolute;width:5px;height:5px;background-color:#555;-webkit-transition:0.2s ease-in-out;-webkit-transition:0.2s ease-in-out;transition:0.2s ease-in-out}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlc1xcc3R5bGVzaGVldC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEFBRVksQUFFeUIsQUFFSixBQUVmLEFBRXVCLEFBRUEsQUFFQyxBQUVBLEFBRUMsQUFFRCxBQUVBLEFBRUMsQUFFQSxBQUVsQixBQUVvQixBQUVGLEFBRUUsQUFFRCxBQUVDLEFBRUQsQUFFQyxBQUVBLEFBRUEsQUFFSixBQUVDLEFBRUEsQUFFQSxBQUVDLEFBRUEsQUFFRCxBQUVDLEFBRUEsQUFFbEIsQUFFb0IsQUFFRCxBQUVDLEFBRUQsQUFFQyxBQUVBLEFBRUEsQUFFQSxBQUVBLEFBRTNCLEFBRUssVUF0RkUsTUFNTSxBQThFRCxHQUVRLEVBdEZRLEVBMEJwQixBQXNDQSxHQW9Ca0IsQ0E5RUMsR0FnRlMsQ0FsRkksSUFGcEIsR0FrRnFCLENBOUVDLEFBRXNCLEFBRUEsQUFvQkksQUFnQkosQ0E5Q25DLEFBWXFDLEFBRUEsQUFJQSxBQUVBLEFBY0ksQUFJQSxBQVVKLEFBRUEsQUFFQSxBQU1BLEFBVUksQUFJQSxDQXhERixBQU1BLEFBRUEsQUFJSSxBQUlBLEFBSUEsQUFJQSxBQUVBLEFBRUEsQUFVSixBQUVBLEFBSUEsQUFFQSxBQUlJLEFBSUEsQUFJQSxBQUVBLEFBRUEsQUFFQSxBQUVBLENBSVQsU0FGUixDQTlFb0IsRUFGbEMsU0FnRmdDLEVBRStCLGNBRmxCLElBOUVFLE9BOEVELElBOUUrRCxRQWdGYiwwQ0E5RXhFLEFBRUEsQUFvQkksQUFnQkosSUFsQ0UsQUFFQSxBQUlBLEFBRUEsQUFjSSxBQUlBLEFBVUosQUFFQSxBQUVBLEFBTUEsQUFVSSxBQUlBLElBeERGLEFBTUEsQUFFQSxBQUlJLEFBSUEsQUFJQSxBQUlBLEFBRUEsQUFFQSxBQVVKLEFBRUEsQUFJQSxBQUVBLEFBSUksQUFJQSxBQUlBLEFBRUEsQUFFQSxBQUVBLEFBRUEsRUE1RW1JLGNBZ0ZsRSxzS0FoRmdILDJKQUF5RSxvUEFBQyIsImZpbGUiOiJzdHlsZXNcXHN0eWxlc2hlZXQuc2NzcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9Kb2hubnkvRGVza3RvcC9wZXJzb25hbC1wb3J0Zm9saW8iLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuOyB9XFxuXFxucCwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgYSB7XFxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmOyB9XFxuXFxuKiwgKjphZnRlciwgKjpiZWZvcmUge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbi5vdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDE7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIG9wYWNpdHk6IDA7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcywgLXdlYmtpdC10cmFuc2Zvcm0gMHMgMC4zcztcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcywgLXdlYmtpdC10cmFuc2Zvcm0gMHMgMC4zcztcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcywgdHJhbnNmb3JtIDBzIDAuM3M7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MsIHRyYW5zZm9ybSAwcyAwLjNzLCAtd2Via2l0LXRyYW5zZm9ybSAwcyAwLjNzOyB9XFxuXFxuLm1vcnBoQ2xvc2UgLmRvdDpudGgtb2YtdHlwZSgxKSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpOyB9XFxuXFxuLm1vcnBoQ2xvc2UgLmRvdDpudGgtb2YtdHlwZSgyKSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDdweCwgN3B4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoN3B4LCA3cHgpOyB9XFxuXFxuLm1vcnBoQ2xvc2UgLmRvdDpudGgtb2YtdHlwZSgzKSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDMwcHgsIDBweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDMwcHgsIDBweCk7IH1cXG5cXG4ubW9ycGhDbG9zZSAuZG90Om50aC1vZi10eXBlKDQpIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoN3B4LCAyM3B4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoN3B4LCAyM3B4KTsgfVxcblxcbi5tb3JwaENsb3NlIC5kb3Q6bnRoLW9mLXR5cGUoNSkge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNXB4LCAxNXB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTVweCwgMTVweCk7IH1cXG5cXG4ubW9ycGhDbG9zZSAuZG90Om50aC1vZi10eXBlKDYpIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjNweCwgN3B4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjNweCwgN3B4KTsgfVxcblxcbi5tb3JwaENsb3NlIC5kb3Q6bnRoLW9mLXR5cGUoNykge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDMwcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDMwcHgpOyB9XFxuXFxuLm1vcnBoQ2xvc2UgLmRvdDpudGgtb2YtdHlwZSg4KSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDIzcHgsIDIzcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyM3B4LCAyM3B4KTsgfVxcblxcbi5tb3JwaENsb3NlIC5kb3Q6bnRoLW9mLXR5cGUoOSkge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMHB4LCAzMHB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzBweCwgMzBweCk7IH1cXG5cXG4ubW9ycGhDbG9zZTpob3ZlciAuZG90IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7IH1cXG5cXG4ubW9ycGhDbG9zZTpob3ZlciAuZG90Om50aC1vZi10eXBlKDEpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtM3B4LCAtM3B4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtM3B4LCAtM3B4KTsgfVxcblxcbi5tb3JwaENsb3NlOmhvdmVyIC5kb3Q6bnRoLW9mLXR5cGUoMikge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDZweCwgNnB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg2cHgsIDZweCk7IH1cXG5cXG4ubW9ycGhDbG9zZTpob3ZlciAuZG90Om50aC1vZi10eXBlKDMpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgzM3B4LCAtM3B4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzM3B4LCAtM3B4KTsgfVxcblxcbi5tb3JwaENsb3NlOmhvdmVyIC5kb3Q6bnRoLW9mLXR5cGUoNCkge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDZweCwgMjRweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNnB4LCAyNHB4KTsgfVxcblxcbi5tb3JwaENsb3NlOmhvdmVyIC5kb3Q6bnRoLW9mLXR5cGUoNSkge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDE1cHgsIDE1cHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE1cHgsIDE1cHgpOyB9XFxuXFxuLm1vcnBoQ2xvc2U6aG92ZXIgLmRvdDpudGgtb2YtdHlwZSg2KSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjRweCwgNnB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNHB4LCA2cHgpOyB9XFxuXFxuLm1vcnBoQ2xvc2U6aG92ZXIgLmRvdDpudGgtb2YtdHlwZSg3KSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTNweCwgMzNweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTNweCwgMzNweCk7IH1cXG5cXG4ubW9ycGhDbG9zZTpob3ZlciAuZG90Om50aC1vZi10eXBlKDgpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNHB4LCAyNHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNHB4LCAyNHB4KTsgfVxcblxcbi5tb3JwaENsb3NlOmhvdmVyIC5kb3Q6bnRoLW9mLXR5cGUoOSkge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDMzcHgsIDMzcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDMzcHgsIDMzcHgpOyB9XFxuXFxuLm1vcnBoT3BlbiAuZG90Om50aC1vZi10eXBlKDEpIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7IH1cXG5cXG4ubW9ycGhPcGVuIC5kb3Q6bnRoLW9mLXR5cGUoMikge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNXB4LCAwcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNXB4LCAwcHgpOyB9XFxuXFxuLm1vcnBoT3BlbiAuZG90Om50aC1vZi10eXBlKDMpIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzBweCwgMHB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzBweCwgMHB4KTsgfVxcblxcbi5tb3JwaE9wZW4gLmRvdDpudGgtb2YtdHlwZSg0KSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMTVweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMTVweCk7IH1cXG5cXG4ubW9ycGhPcGVuIC5kb3Q6bnRoLW9mLXR5cGUoNSkge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNXB4LCAxNXB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTVweCwgMTVweCk7IH1cXG5cXG4ubW9ycGhPcGVuIC5kb3Q6bnRoLW9mLXR5cGUoNikge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMHB4LCAxNXB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzBweCwgMTVweCk7IH1cXG5cXG4ubW9ycGhPcGVuIC5kb3Q6bnRoLW9mLXR5cGUoNykge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDMwcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDMwcHgpOyB9XFxuXFxuLm1vcnBoT3BlbiAuZG90Om50aC1vZi10eXBlKDgpIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTVweCwgMzBweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE1cHgsIDMwcHgpOyB9XFxuXFxuLm1vcnBoT3BlbiAuZG90Om50aC1vZi10eXBlKDkpIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzBweCwgMzBweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDMwcHgsIDMwcHgpOyB9XFxuXFxuLm1vcnBoT3Blbjpob3ZlciAuZG90IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7IH1cXG5cXG4ubW9ycGhPcGVuOmhvdmVyIC5kb3Q6bnRoLW9mLXR5cGUoMSkge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIC0zcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIC0zcHgpOyB9XFxuXFxuLm1vcnBoT3Blbjpob3ZlciAuZG90Om50aC1vZi10eXBlKDIpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNXB4LCAwcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE1cHgsIDBweCk7IH1cXG5cXG4ubW9ycGhPcGVuOmhvdmVyIC5kb3Q6bnRoLW9mLXR5cGUoMykge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDMzcHgsIC0zcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDMzcHgsIC0zcHgpOyB9XFxuXFxuLm1vcnBoT3Blbjpob3ZlciAuZG90Om50aC1vZi10eXBlKDQpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDE1cHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMTVweCk7IH1cXG5cXG4ubW9ycGhPcGVuOmhvdmVyIC5kb3Q6bnRoLW9mLXR5cGUoNSkge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDE1cHgsIDE1cHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE1cHgsIDE1cHgpOyB9XFxuXFxuLm1vcnBoT3Blbjpob3ZlciAuZG90Om50aC1vZi10eXBlKDYpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMHB4LCAxNXB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMHB4LCAxNXB4KTsgfVxcblxcbi5tb3JwaE9wZW46aG92ZXIgLmRvdDpudGgtb2YtdHlwZSg3KSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTNweCwgMzNweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTNweCwgMzNweCk7IH1cXG5cXG4ubW9ycGhPcGVuOmhvdmVyIC5kb3Q6bnRoLW9mLXR5cGUoOCkge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDE1cHgsIDMwcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE1cHgsIDMwcHgpOyB9XFxuXFxuLm1vcnBoT3Blbjpob3ZlciAuZG90Om50aC1vZi10eXBlKDkpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgzM3B4LCAzM3B4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzM3B4LCAzM3B4KTsgfVxcblxcbi5tZW51IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMzBweDtcXG4gIHJpZ2h0OiAzMHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDQwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB6LWluZGV4OiAzOyB9XFxuXFxuLm1lbnUgLmRvdCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDVweDtcXG4gICAgaGVpZ2h0OiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDsgfVxcblwiIl19 */\n/*@ sourceURL=styles\\stylesheet.scss */";
__styledJsxDefaultExport.__scopedHash = "22833793681";
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

var _brushstroke = __webpack_require__(552);

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
    }, _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, _react2.default.createElement('title', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }, 'Johnny Bui | Front End Web Developer'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Raleway:200', rel: 'stylesheet', __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }), _react2.default.createElement('link', { href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', rel: 'stylesheet', __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }), _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _stylesheet2.default }, __source: {
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

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(547);

var _Header2 = _interopRequireDefault(_Header);

var _Social = __webpack_require__(550);

var _Social2 = _interopRequireDefault(_Social);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Johnny\\Desktop\\personal-portfolio\\components\\Layout.js';


var Layout = function Layout(props) {
    return _react2.default.createElement('div', { className: 'page-wrap', __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }, _react2.default.createElement(_Header2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }), props.children, _react2.default.createElement(_Social2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
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

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _Nav = __webpack_require__(555);

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Johnny\\Desktop\\personal-portfolio\\components\\Menu.js';


var _class = function (_Component) {
    (0, _inherits3.default)(_class, _Component);

    function _class(props) {
        (0, _classCallCheck3.default)(this, _class);

        var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

        _this.state = { menuOpen: false };
        return _this;
    }

    (0, _createClass3.default)(_class, [{
        key: 'handleCloseMenu',
        value: function handleCloseMenu() {
            this.setState({ menuOpen: false });
        }
    }, {
        key: 'handleToggleMenu',
        value: function handleToggleMenu() {
            this.setState({ menuOpen: !this.state.menuOpen });
        }
    }, {
        key: 'render',
        value: function render() {
            var menuIsOpen = this.state.menuOpen;
            var morph = menuIsOpen ? 'menu morphClose' : 'menu morphOpen';
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            }, _react2.default.createElement('div', { onClick: this.handleCloseMenu.bind(this), className: 'overlay', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }), _react2.default.createElement('div', { onClick: this.handleToggleMenu.bind(this), className: morph, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }, _react2.default.createElement('span', { className: 'dot', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }), _react2.default.createElement('span', { className: 'dot', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }), _react2.default.createElement('span', { className: 'dot', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }), _react2.default.createElement('span', { className: 'dot', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }), _react2.default.createElement('span', { className: 'dot', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }), _react2.default.createElement('span', { className: 'dot', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }), _react2.default.createElement('span', { className: 'dot', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }), _react2.default.createElement('span', { className: 'dot', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }), _react2.default.createElement('span', { className: 'dot', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            })), _react2.default.createElement(_Nav2.default, { isOpen: this.state.menuOpen, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }));
        }
    }]);

    return _class;
}(_react.Component);

exports.default = _class;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Johnny\\Desktop\\personal-portfolio\\components\\Menu.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Johnny\\Desktop\\personal-portfolio\\components\\Menu.js"); } } })();

/***/ }),

/***/ 550:
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
    }, "\n        .social {\n            position: fixed;\n            top: 50%;\n            transform: translateY(-50%);\n            z-index: 2;\n            margin: 0 30px;\n        }\n\n        .social ul {\n            margin: 0;\n            padding: 0;\n        }\n\n        .social li {\n            list-style-type: none;\n            padding: 10px;\n            margin: 30px 0;\n        }\n\n        .social img {\n            width: 25px;\n        }\n    "));
};

exports.default = Social;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Johnny\\Desktop\\personal-portfolio\\components\\Social.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Johnny\\Desktop\\personal-portfolio\\components\\Social.js"); } } })();

/***/ }),

/***/ 551:
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
        "data-jsx": 3805051813,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 4
        }
    }, _react2.default.createElement("div", { className: "title", "data-jsx": 3805051813,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }, _react2.default.createElement("h1", {
        "data-jsx": 3805051813,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, "Johnny Bui"), _react2.default.createElement("h2", {
        "data-jsx": 3805051813,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }, "Front End Web Developer")), _react2.default.createElement(_style2.default, {
        styleId: 3805051813,
        css: ".title[data-jsx=\"3805051813\"]{-webkit-text-align:center;text-align:center;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%, -50%);-ms-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}.title[data-jsx=\"3805051813\"] h1[data-jsx=\"3805051813\"]{margin:0 0 5px 0;-webkit-letter-spacing:5px;-moz-letter-spacing:5px;-ms-letter-spacing:5px;letter-spacing:5px}.title[data-jsx=\"3805051813\"] h2[data-jsx=\"3805051813\"]{margin:0;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;font-size:1.2em}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFRpdGxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFvQixBQUdtQyxBQUVELEFBQ1IsVUFBb0MsUUFEUSw0QkFGQSxtQkFBeUIsU0FBMEIsVUFBaUQsdUJBRzNFLFFBRFosU0FDeUIsdUVBSDJFIiwiZmlsZSI6ImNvbXBvbmVudHNcXFRpdGxlLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0pvaG5ueS9EZXNrdG9wL3BlcnNvbmFsLXBvcnRmb2xpbyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYW52YXMgZnJvbSAnLi9DYW52YXMnXHJcblxyXG5jb25zdCBUaXRsZSA9ICgpID0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICA8aDE+Sm9obm55IEJ1aTwvaDE+XHJcbiAgICAgICAgICAgIDxoMj5Gcm9udCBFbmQgV2ViIERldmVsb3BlcjwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnRpdGxlIGgxIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDVweCAwO1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGl0bGUgaDIge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGl0bGUiXX0= */\n/*@ sourceURL=components\\Title.js */"
    }));
};

exports.default = Title;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Johnny\\Desktop\\personal-portfolio\\components\\Title.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Johnny\\Desktop\\personal-portfolio\\components\\Title.js"); } } })();

/***/ }),

/***/ 552:
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

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(541);


/***/ }),

/***/ 555:
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

var _link = __webpack_require__(544);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Johnny\\Desktop\\personal-portfolio\\components\\Nav.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Johnny\\Desktop\\personal-portfolio\\components\\Nav.js"); } } })();

/***/ })

},[553]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/ZDY2YjdjMiIsIndlYnBhY2s6Ly8vc3R5bGVzL3N0eWxlc2hlZXQuc2Nzcz9kNjZiN2MyIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2FudmFzLmpzP2Q2NmI3YzIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanM/ZDY2YjdjMiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcz9kNjZiN2MyIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWVudS5qcz9kNjZiN2MyIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU29jaWFsLmpzP2Q2NmI3YzIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UaXRsZS5qcz9kNjZiN2MyIiwid2VicGFjazovLy8uL3V0aWxzL2JydXNoc3Ryb2tlLmpzP2Q2NmI3YzIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXYuanM/ZDY2YjdjMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xyXG5pbXBvcnQgVGl0bGUgZnJvbSAnLi4vY29tcG9uZW50cy9UaXRsZSdcclxuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9NZW51J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxyXG5cdDxkaXY+XHJcblx0XHQ8TWVudSAvPlxyXG5cdFx0PExheW91dD5cclxuXHRcdFx0PFRpdGxlIC8+XHJcblx0XHQ8L0xheW91dD5cclxuXHQ8L2Rpdj5cclxuKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwibW9kdWxlLmV4cG9ydHMgPSBcImJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjsgfVxcblxcbnAsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIGEge1xcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjsgfVxcblxcbiosICo6YWZ0ZXIsICo6YmVmb3JlIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG4ub3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBvcGFjaXR5OiAwO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MsIC13ZWJraXQtdHJhbnNmb3JtIDBzIDAuM3M7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MsIC13ZWJraXQtdHJhbnNmb3JtIDBzIDAuM3M7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MsIHRyYW5zZm9ybSAwcyAwLjNzO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzLCB0cmFuc2Zvcm0gMHMgMC4zcywgLXdlYmtpdC10cmFuc2Zvcm0gMHMgMC4zczsgfVxcblxcbi5tb3JwaENsb3NlIC5kb3Q6bnRoLW9mLXR5cGUoMSkge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTsgfVxcblxcbi5tb3JwaENsb3NlIC5kb3Q6bnRoLW9mLXR5cGUoMikge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSg3cHgsIDdweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDdweCwgN3B4KTsgfVxcblxcbi5tb3JwaENsb3NlIC5kb3Q6bnRoLW9mLXR5cGUoMykge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMHB4LCAwcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMHB4LCAwcHgpOyB9XFxuXFxuLm1vcnBoQ2xvc2UgLmRvdDpudGgtb2YtdHlwZSg0KSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDdweCwgMjNweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDdweCwgMjNweCk7IH1cXG5cXG4ubW9ycGhDbG9zZSAuZG90Om50aC1vZi10eXBlKDUpIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTVweCwgMTVweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE1cHgsIDE1cHgpOyB9XFxuXFxuLm1vcnBoQ2xvc2UgLmRvdDpudGgtb2YtdHlwZSg2KSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDIzcHgsIDdweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIzcHgsIDdweCk7IH1cXG5cXG4ubW9ycGhDbG9zZSAuZG90Om50aC1vZi10eXBlKDcpIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAzMHB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAzMHB4KTsgfVxcblxcbi5tb3JwaENsb3NlIC5kb3Q6bnRoLW9mLXR5cGUoOCkge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgyM3B4LCAyM3B4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjNweCwgMjNweCk7IH1cXG5cXG4ubW9ycGhDbG9zZSAuZG90Om50aC1vZi10eXBlKDkpIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzBweCwgMzBweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDMwcHgsIDMwcHgpOyB9XFxuXFxuLm1vcnBoQ2xvc2U6aG92ZXIgLmRvdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwOyB9XFxuXFxuLm1vcnBoQ2xvc2U6aG92ZXIgLmRvdDpudGgtb2YtdHlwZSgxKSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTNweCwgLTNweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTNweCwgLTNweCk7IH1cXG5cXG4ubW9ycGhDbG9zZTpob3ZlciAuZG90Om50aC1vZi10eXBlKDIpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSg2cHgsIDZweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNnB4LCA2cHgpOyB9XFxuXFxuLm1vcnBoQ2xvc2U6aG92ZXIgLmRvdDpudGgtb2YtdHlwZSgzKSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzNweCwgLTNweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzNweCwgLTNweCk7IH1cXG5cXG4ubW9ycGhDbG9zZTpob3ZlciAuZG90Om50aC1vZi10eXBlKDQpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSg2cHgsIDI0cHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDZweCwgMjRweCk7IH1cXG5cXG4ubW9ycGhDbG9zZTpob3ZlciAuZG90Om50aC1vZi10eXBlKDUpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNXB4LCAxNXB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNXB4LCAxNXB4KTsgfVxcblxcbi5tb3JwaENsb3NlOmhvdmVyIC5kb3Q6bnRoLW9mLXR5cGUoNikge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDI0cHgsIDZweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjRweCwgNnB4KTsgfVxcblxcbi5tb3JwaENsb3NlOmhvdmVyIC5kb3Q6bnRoLW9mLXR5cGUoNykge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIDMzcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIDMzcHgpOyB9XFxuXFxuLm1vcnBoQ2xvc2U6aG92ZXIgLmRvdDpudGgtb2YtdHlwZSg4KSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjRweCwgMjRweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjRweCwgMjRweCk7IH1cXG5cXG4ubW9ycGhDbG9zZTpob3ZlciAuZG90Om50aC1vZi10eXBlKDkpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgzM3B4LCAzM3B4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzM3B4LCAzM3B4KTsgfVxcblxcbi5tb3JwaE9wZW4gLmRvdDpudGgtb2YtdHlwZSgxKSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpOyB9XFxuXFxuLm1vcnBoT3BlbiAuZG90Om50aC1vZi10eXBlKDIpIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTVweCwgMHB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTVweCwgMHB4KTsgfVxcblxcbi5tb3JwaE9wZW4gLmRvdDpudGgtb2YtdHlwZSgzKSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDMwcHgsIDBweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDMwcHgsIDBweCk7IH1cXG5cXG4ubW9ycGhPcGVuIC5kb3Q6bnRoLW9mLXR5cGUoNCkge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDE1cHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDE1cHgpOyB9XFxuXFxuLm1vcnBoT3BlbiAuZG90Om50aC1vZi10eXBlKDUpIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTVweCwgMTVweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE1cHgsIDE1cHgpOyB9XFxuXFxuLm1vcnBoT3BlbiAuZG90Om50aC1vZi10eXBlKDYpIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzBweCwgMTVweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDMwcHgsIDE1cHgpOyB9XFxuXFxuLm1vcnBoT3BlbiAuZG90Om50aC1vZi10eXBlKDcpIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAzMHB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAzMHB4KTsgfVxcblxcbi5tb3JwaE9wZW4gLmRvdDpudGgtb2YtdHlwZSg4KSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDE1cHgsIDMwcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNXB4LCAzMHB4KTsgfVxcblxcbi5tb3JwaE9wZW4gLmRvdDpudGgtb2YtdHlwZSg5KSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDMwcHgsIDMwcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMHB4LCAzMHB4KTsgfVxcblxcbi5tb3JwaE9wZW46aG92ZXIgLmRvdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwOyB9XFxuXFxuLm1vcnBoT3Blbjpob3ZlciAuZG90Om50aC1vZi10eXBlKDEpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtM3B4LCAtM3B4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtM3B4LCAtM3B4KTsgfVxcblxcbi5tb3JwaE9wZW46aG92ZXIgLmRvdDpudGgtb2YtdHlwZSgyKSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTVweCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNXB4LCAwcHgpOyB9XFxuXFxuLm1vcnBoT3Blbjpob3ZlciAuZG90Om50aC1vZi10eXBlKDMpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgzM3B4LCAtM3B4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzM3B4LCAtM3B4KTsgfVxcblxcbi5tb3JwaE9wZW46aG92ZXIgLmRvdDpudGgtb2YtdHlwZSg0KSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAxNXB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDE1cHgpOyB9XFxuXFxuLm1vcnBoT3Blbjpob3ZlciAuZG90Om50aC1vZi10eXBlKDUpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNXB4LCAxNXB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNXB4LCAxNXB4KTsgfVxcblxcbi5tb3JwaE9wZW46aG92ZXIgLmRvdDpudGgtb2YtdHlwZSg2KSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzBweCwgMTVweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzBweCwgMTVweCk7IH1cXG5cXG4ubW9ycGhPcGVuOmhvdmVyIC5kb3Q6bnRoLW9mLXR5cGUoNykge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIDMzcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIDMzcHgpOyB9XFxuXFxuLm1vcnBoT3Blbjpob3ZlciAuZG90Om50aC1vZi10eXBlKDgpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNXB4LCAzMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNXB4LCAzMHB4KTsgfVxcblxcbi5tb3JwaE9wZW46aG92ZXIgLmRvdDpudGgtb2YtdHlwZSg5KSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzNweCwgMzNweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzNweCwgMzNweCk7IH1cXG5cXG4ubWVudSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDMwcHg7XFxuICByaWdodDogMzBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgei1pbmRleDogMzsgfVxcblxcbi5tZW51IC5kb3Qge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiA1cHg7XFxuICAgIGhlaWdodDogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7IH1cXG5cIlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzdHlsZXMvc3R5bGVzaGVldC5zY3NzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQnJ1c2hzdHJva2UgZnJvbSAnLi4vdXRpbHMvYnJ1c2hzdHJva2UnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IgKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcylcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0Y29uc3QgaGVpZ2h0ID0gMTUwO1xyXG5cdFx0Y29uc3Qgd2lkdGggPSA4MDA7XHJcblx0XHRjb25zdCBvcHRpb25zID0ge1xyXG5cdFx0XHR3aWR0aDogd2lkdGgsXHJcblx0XHRcdGhlaWdodDogaGVpZ2h0LFxyXG5cdFx0XHRjb2xvcjogJyMyMjInLFxyXG5cdFx0XHRhbmltYXRpb246ICdwb2ludHMnLFxyXG5cdFx0XHRkdXJhdGlvbjogNSxcclxuXHRcdCAgICBpbmtBbW91bnQ6IDQsXHJcblx0XHQgICAgc2l6ZTogMTUwLFxyXG5cdFx0ICAgIGZyYW1lczogNyxcclxuXHRcdCAgICBmcmFtZUFuaW1hdGlvbjogdHJ1ZSxcclxuXHRcdCAgICBzcGxhc2hpbmc6IGZhbHNlLFxyXG5cdFx0ICAgIHJlZHVjZU92ZXJmbG93OiAyMCxcclxuXHRcdH1cclxuXHRcdHZhciBicyA9IG5ldyBCcnVzaHN0cm9rZShvcHRpb25zKTtcclxuXHJcblx0XHRmdW5jdGlvbiBydW5BbmltYXRpb24oKSB7XHJcblx0XHQgICAgYnMuZHJhdyh7XHJcblx0XHQgICAgICAgIHBvaW50czogW3dpZHRoLzEuMzgsIGhlaWdodCAvIDIuMCxcclxuXHRcdCAgICAgICAgXHRcdHdpZHRoLzIsIGhlaWdodCAvIDEuOTUsXHJcblx0XHQgICAgICAgIFx0XHR3aWR0aC8zLjQsIGhlaWdodCAvIDEuODhdXHJcblx0XHQgICAgfSk7XHJcblx0XHR9XHJcblx0XHQvLyBTdGFydFxyXG5cdFx0cnVuQW5pbWF0aW9uKCk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIgKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHQ8Y2FudmFzIGNsYXNzTmFtZT1cImNhbnZhcy1icnVzaHN0cm9rZVwiLz5cclxuXHRcdFx0XHQ8c3R5bGUganN4PntgXHJcblx0XHQgICAgICAgIFx0LmNhbnZhcy1icnVzaHN0cm9rZSB7XHJcblx0XHQgICAgICAgIFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHQgICAgICAgIFx0XHR0b3A6IDUwJTtcclxuXHRcdCAgICAgICAgXHRcdGxlZnQ6IDUwJTtcclxuXHRcdCAgICAgICAgXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cdFx0ICAgICAgICBcdH1cclxuXHRcdCAgICAgICAgYH08L3N0eWxlPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHJcblx0fVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQ2FudmFzLmpzIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgc3R5bGVzaGVldCBmcm9tICcuLi9zdHlsZXMvc3R5bGVzaGVldC5zY3NzJ1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHRpdGxlPkpvaG5ueSBCdWkgfCBGcm9udCBFbmQgV2ViIERldmVsb3BlcjwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SYWxld2F5OjIwMFwiIHJlbD1cInN0eWxlc2hlZXRcIi8+XHJcbiAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxyXG4gICAgICAgICAgICA8c3R5bGUgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBzdHlsZXNoZWV0IH19IC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwiaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcidcclxuaW1wb3J0IFNvY2lhbCBmcm9tICcuL1NvY2lhbCdcclxuXHJcbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLXdyYXBcIj5cclxuICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDxTb2NpYWwgLz5cclxuICAgIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0xheW91dC5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IE5hdiBmcm9tICcuL05hdidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgbWVudU9wZW46IGZhbHNlIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDbG9zZU1lbnUoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1lbnVPcGVuOiBmYWxzZSB9KVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVRvZ2dsZU1lbnUoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1lbnVPcGVuOiAhdGhpcy5zdGF0ZS5tZW51T3BlbiB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgbWVudUlzT3BlbiA9IHRoaXMuc3RhdGUubWVudU9wZW47XHJcbiAgICAgICAgY29uc3QgbW9ycGggPSBtZW51SXNPcGVuID8gJ21lbnUgbW9ycGhDbG9zZScgOiAnbWVudSBtb3JwaE9wZW4nXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZU1lbnUuYmluZCh0aGlzKX0gY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMuaGFuZGxlVG9nZ2xlTWVudS5iaW5kKHRoaXMpfSBjbGFzc05hbWU9e21vcnBofT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb3RcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG90XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvdFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb3RcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG90XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvdFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb3RcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG90XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvdFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPE5hdiBpc09wZW49e3RoaXMuc3RhdGUubWVudU9wZW59Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9NZW51LmpzIiwiY29uc3QgU29jaWFsID0gKCkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsXCI+XHJcbiAgICA8dWw+XHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9qb2hubnlxYnVpXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJnaXRodWJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9naXRodWIucG5nXCIvPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2pvaG5ueXFidWkvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9saW5rZWRpbi5wbmdcIi8+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2pxYnVpL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW5zdGFncmFtLnBuZ1wiLz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vY29kZXBlbi5pby9qYnVpL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvY29kZXBlbi5wbmdcIi8+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgPC91bD5cclxuICAgIDxzdHlsZT57YFxyXG4gICAgICAgIC5zb2NpYWwge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAzMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNvY2lhbCB1bCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zb2NpYWwgbGkge1xyXG4gICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMzBweCAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNvY2lhbCBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbilcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTb2NpYWxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1NvY2lhbC5qcyIsImltcG9ydCBDYW52YXMgZnJvbSAnLi9DYW52YXMnXHJcblxyXG5jb25zdCBUaXRsZSA9ICgpID0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICA8aDE+Sm9obm55IEJ1aTwvaDE+XHJcbiAgICAgICAgICAgIDxoMj5Gcm9udCBFbmQgV2ViIERldmVsb3BlcjwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnRpdGxlIGgxIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDVweCAwO1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGl0bGUgaDIge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGl0bGVcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1RpdGxlLmpzIiwiKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XHJcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XHJcbiAgICAgICAgZGVmaW5lKFtdLCBmYWN0b3J5KTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcclxuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcm9vdC5CcnVzaHN0cm9rZSA9IGZhY3RvcnkoKTtcclxuICAgIH1cclxufSh0aGlzLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDdXJ2ZSBjYWxjIGZ1bmN0aW9uIGZvciBjYW52YXMgMi4zLjQgLSAoYykgRXBpc3RlbWV4IDIwMTMtMjAxNiAtIHd3dy5lcGlzdGVtZXguY29tIC0gTUlUIExpY2Vuc2VcclxuICAgICAqL1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsY3VsYXRlcyBhbiBhcnJheSBjb250YWluaW5nIHBvaW50cyByZXByZXNlbnRpbmcgYSBjYXJkaW5hbCBzcGxpbmUgdGhyb3VnaCBnaXZlbiBwb2ludCBhcnJheS5cclxuICAgICAqIFBvaW50cyBtdXN0IGJlIGFycmFuZ2VkIGFzOiBbeDEsIHkxLCB4MiwgeTIsIC4uLiwgeG4sIHluXS5cclxuICAgICAqXHJcbiAgICAgKiBUaGUgcG9pbnRzIGZvciB0aGUgY2FyZGluYWwgc3BsaW5lIGFyZSByZXR1cm5lZCBhcyBhIG5ldyBhcnJheS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBwb2ludHMgLSBwb2ludCBhcnJheVxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFt0ZW5zaW9uPTAuNV0gLSB0ZW5zaW9uLiBUeXBpY2FsbHkgYmV0d2VlbiBbMC4wLCAxLjBdIGJ1dCBjYW4gYmUgZXhjZWVkZWRcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbbnVtT2ZTZWc9MjVdIC0gbnVtYmVyIG9mIHNlZ21lbnRzIGJldHdlZW4gdHdvIHBvaW50cyAobGluZSByZXNvbHV0aW9uKVxyXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbY2xvc2U9ZmFsc2VdIC0gQ2xvc2UgdGhlIGVuZHMgbWFraW5nIHRoZSBsaW5lIGNvbnRpbnVvdXNcclxuICAgICAqIEByZXR1cm5zIHtGbG9hdDMyQXJyYXl9IE5ldyBhcnJheSB3aXRoIHRoZSBjYWxjdWxhdGVkIHBvaW50cyB0aGF0IHdhcyBhZGRlZCB0byB0aGUgcGF0aFxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBnZXRDdXJ2ZVBvaW50cyhwb2ludHMsIHRlbnNpb24sIG51bU9mU2VnLCBjbG9zZSkge1xyXG5cclxuICAgICAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgICAgIC8vIG9wdGlvbnMgb3IgZGVmYXVsdHNcclxuICAgICAgICB0ZW5zaW9uID0gKHR5cGVvZiB0ZW5zaW9uID09PSAnbnVtYmVyJykgPyB0ZW5zaW9uIDogMC41O1xyXG4gICAgICAgIG51bU9mU2VnID0gKHR5cGVvZiBudW1PZlNlZyA9PT0gJ251bWJlcicpID8gbnVtT2ZTZWcgOiAyNTtcclxuXHJcbiAgICAgICAgdmFyIHB0cyxcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBmb3IgY2xvbmluZyBwb2ludCBhcnJheVxyXG4gICAgICAgICAgICBpID0gMSxcclxuICAgICAgICAgICAgbCA9IHBvaW50cy5sZW5ndGgsXHJcbiAgICAgICAgICAgIHJQb3MgPSAwLFxyXG4gICAgICAgICAgICByTGVuID0gKGwtMikgKiBudW1PZlNlZyArIDIgKyAoY2xvc2UgPyAyICogbnVtT2ZTZWc6IDApLFxyXG4gICAgICAgICAgICByZXMgPSBuZXcgRmxvYXQzMkFycmF5KHJMZW4pLFxyXG4gICAgICAgICAgICBjYWNoZSA9IG5ldyBGbG9hdDMyQXJyYXkoKG51bU9mU2VnICsgMikgKiA0KSxcclxuICAgICAgICAgICAgY2FjaGVQdHIgPSA0O1xyXG5cclxuICAgICAgICBwdHMgPSBwb2ludHMuc2xpY2UoMCk7XHJcblxyXG4gICAgICAgIGlmIChjbG9zZSkge1xyXG4gICAgICAgICAgICBwdHMudW5zaGlmdChwb2ludHNbbCAtIDFdKTtcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGluc2VydCBlbmQgcG9pbnQgYXMgZmlyc3QgcG9pbnRcclxuICAgICAgICAgICAgcHRzLnVuc2hpZnQocG9pbnRzW2wgLSAyXSk7XHJcbiAgICAgICAgICAgIHB0cy5wdXNoKHBvaW50c1swXSwgcG9pbnRzWzFdKTsgXHRcdFx0XHRcdFx0XHRcdC8vIGZpcnN0IHBvaW50IGFzIGxhc3QgcG9pbnRcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHB0cy51bnNoaWZ0KHBvaW50c1sxXSk7XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGNvcHkgMS4gcG9pbnQgYW5kIGluc2VydCBhdCBiZWdpbm5pbmdcclxuICAgICAgICAgICAgcHRzLnVuc2hpZnQocG9pbnRzWzBdKTtcclxuICAgICAgICAgICAgcHRzLnB1c2gocG9pbnRzW2wgLSAyXSwgcG9pbnRzW2wgLSAxXSk7XHRcdFx0XHRcdFx0XHQvLyBkdXBsaWNhdGUgZW5kLXBvaW50c1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY2FjaGUgaW5uZXItbG9vcCBjYWxjdWxhdGlvbnMgYXMgdGhleSBhcmUgYmFzZWQgb24gdCBhbG9uZVxyXG4gICAgICAgIGNhY2hlWzBdID0gMTtcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gMSwwLDAsMFxyXG5cclxuICAgICAgICBmb3IgKDsgaSA8IG51bU9mU2VnOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBzdCA9IGkgLyBudW1PZlNlZyxcclxuICAgICAgICAgICAgICAgIHN0MiA9IHN0ICogc3QsXHJcbiAgICAgICAgICAgICAgICBzdDMgPSBzdDIgKiBzdCxcclxuICAgICAgICAgICAgICAgIHN0MjMgPSBzdDMgKiAyLFxyXG4gICAgICAgICAgICAgICAgc3QzMiA9IHN0MiAqIDM7XHJcblxyXG4gICAgICAgICAgICBjYWNoZVtjYWNoZVB0cisrXSA9XHRzdDIzIC0gc3QzMiArIDE7XHRcdFx0XHRcdFx0XHQvLyBjMVxyXG4gICAgICAgICAgICBjYWNoZVtjYWNoZVB0cisrXSA9XHRzdDMyIC0gc3QyMztcdFx0XHRcdFx0XHRcdFx0Ly8gYzJcclxuICAgICAgICAgICAgY2FjaGVbY2FjaGVQdHIrK10gPVx0c3QzIC0gMiAqIHN0MiArIHN0O1x0XHRcdFx0XHRcdFx0Ly8gYzNcclxuICAgICAgICAgICAgY2FjaGVbY2FjaGVQdHIrK10gPVx0c3QzIC0gc3QyO1x0XHRcdFx0XHRcdFx0XHRcdC8vIGM0XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYWNoZVsrK2NhY2hlUHRyXSA9IDE7XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gMCwxLDAsMFxyXG5cclxuICAgICAgICAvLyBjYWxjLiBwb2ludHNcclxuICAgICAgICBwYXJzZShwdHMsIGNhY2hlLCBsLCB0ZW5zaW9uKTtcclxuXHJcbiAgICAgICAgaWYgKGNsb3NlKSB7XHJcbiAgICAgICAgICAgIHB0cyA9IFtdO1xyXG4gICAgICAgICAgICBwdHMucHVzaChwb2ludHNbbCAtIDRdLCBwb2ludHNbbCAtIDNdLFxyXG4gICAgICAgICAgICAgICAgcG9pbnRzW2wgLSAyXSwgcG9pbnRzW2wgLSAxXSwgXHRcdFx0XHRcdFx0XHQvLyBzZWNvbmQgbGFzdCBhbmQgbGFzdFxyXG4gICAgICAgICAgICAgICAgcG9pbnRzWzBdLCBwb2ludHNbMV0sXHJcbiAgICAgICAgICAgICAgICBwb2ludHNbMl0sIHBvaW50c1szXSk7IFx0XHRcdFx0XHRcdFx0XHQvLyBmaXJzdCBhbmQgc2Vjb25kXHJcbiAgICAgICAgICAgIHBhcnNlKHB0cywgY2FjaGUsIDQsIHRlbnNpb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcGFyc2UocHRzLCBjYWNoZSwgbCwgdGVuc2lvbikge1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDIsIHQ7IGkgPCBsOyBpICs9IDIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcHQxID0gcHRzW2ldLFxyXG4gICAgICAgICAgICAgICAgICAgIHB0MiA9IHB0c1tpKzFdLFxyXG4gICAgICAgICAgICAgICAgICAgIHB0MyA9IHB0c1tpKzJdLFxyXG4gICAgICAgICAgICAgICAgICAgIHB0NCA9IHB0c1tpKzNdLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0MXggPSAocHQzIC0gcHRzW2ktMl0pICogdGVuc2lvbixcclxuICAgICAgICAgICAgICAgICAgICB0MXkgPSAocHQ0IC0gcHRzW2ktMV0pICogdGVuc2lvbixcclxuICAgICAgICAgICAgICAgICAgICB0MnggPSAocHRzW2krNF0gLSBwdDEpICogdGVuc2lvbixcclxuICAgICAgICAgICAgICAgICAgICB0MnkgPSAocHRzW2krNV0gLSBwdDIpICogdGVuc2lvbixcclxuICAgICAgICAgICAgICAgICAgICBjID0gMCwgYzEsIGMyLCBjMywgYzQ7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh0ID0gMDsgdCA8IG51bU9mU2VnOyB0KyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYzEgPSBjYWNoZVtjKytdO1xyXG4gICAgICAgICAgICAgICAgICAgIGMyID0gY2FjaGVbYysrXTtcclxuICAgICAgICAgICAgICAgICAgICBjMyA9IGNhY2hlW2MrK107XHJcbiAgICAgICAgICAgICAgICAgICAgYzQgPSBjYWNoZVtjKytdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXNbclBvcysrXSA9IGMxICogcHQxICsgYzIgKiBwdDMgKyBjMyAqIHQxeCArIGM0ICogdDJ4O1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc1tyUG9zKytdID0gYzEgKiBwdDIgKyBjMiAqIHB0NCArIGMzICogdDF5ICsgYzQgKiB0Mnk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGFkZCBsYXN0IHBvaW50XHJcbiAgICAgICAgbCA9IGNsb3NlID8gMCA6IHBvaW50cy5sZW5ndGggLSAyO1xyXG4gICAgICAgIHJlc1tyUG9zKytdID0gcG9pbnRzW2wrK107XHJcbiAgICAgICAgcmVzW3JQb3NdID0gcG9pbnRzW2xdO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEJydXNoIGJ5IEFraW1pdHN1IEhhbWFtdXJvIChodHRwOi8vY29kZXBlbi5pby9ha20yL3Blbi9Cb25JaCkgLSBNSVQgTGljZW5zZVxyXG4gICAgICovXHJcblxyXG4gICAgdmFyIEJydXNoID0gKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAgICAgKiBAcHVibGljXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gQnJ1c2goeCwgeSwgY29sb3IsIHNpemUsIGlua0Ftb3VudCwgYW5nbGUsIGRyaXBwaW5nLCBzcGxhc2hpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy54ID0geCB8fCAwO1xyXG4gICAgICAgICAgICB0aGlzLnkgPSB5IHx8IDA7XHJcbiAgICAgICAgICAgIGlmIChjb2xvciAhPT0gdW5kZWZpbmVkKSB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICAgICAgICAgIGlmIChzaXplICE9PSB1bmRlZmluZWQpIHRoaXMuc2l6ZSA9IHNpemU7XHJcbiAgICAgICAgICAgIGlmIChpbmtBbW91bnQgIT09IHVuZGVmaW5lZCkgdGhpcy5pbmtBbW91bnQgPSBpbmtBbW91bnQ7XHJcbiAgICAgICAgICAgIGlmIChhbmdsZSAhPT0gdW5kZWZpbmVkKSB0aGlzLmFuZ2xlID0gYW5nbGU7XHJcbiAgICAgICAgICAgIGlmIChkcmlwcGluZyAhPT0gdW5kZWZpbmVkKSB0aGlzLmRyaXBwaW5nID0gZHJpcHBpbmc7XHJcbiAgICAgICAgICAgIGlmIChzcGxhc2hpbmcgIT09IHVuZGVmaW5lZCkgdGhpcy5zcGxhc2hpbmcgPSBzcGxhc2hpbmc7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9kcm9wcyA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLl9yZXNldFRpcCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQnJ1c2gucHJvdG90eXBlID0ge1xyXG4gICAgICAgICAgICBfU1BMQVNISU5HX0JSVVNIX1NQRUVEOiA3NSxcclxuXHJcbiAgICAgICAgICAgIGFuZ2xlOiAgICAgIDE1MCxcclxuICAgICAgICAgICAgeDogICAgICAgICAgMCxcclxuICAgICAgICAgICAgeTogICAgICAgICAgMCxcclxuICAgICAgICAgICAgY29sb3I6ICAgICAgJyMwMDAnLFxyXG4gICAgICAgICAgICBzaXplOiAgICAgICAzNSxcclxuICAgICAgICAgICAgaW5rQW1vdW50OiAgNyxcclxuICAgICAgICAgICAgc3BsYXNoaW5nOiAgdHJ1ZSxcclxuICAgICAgICAgICAgZHJpcHBpbmc6ICAgdHJ1ZSxcclxuICAgICAgICAgICAgbWF4SGFpcnM6ICAgMTAwMCxcclxuICAgICAgICAgICAgX2xhdGVzdFBvczogbnVsbCxcclxuICAgICAgICAgICAgX3N0cm9rZUlkOiAgbnVsbCxcclxuICAgICAgICAgICAgX2Ryb3BzOiAgICAgbnVsbCxcclxuXHJcbiAgICAgICAgICAgIGlzU3Ryb2tlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBCb29sZWFuKHRoaXMuX3N0cm9rZUlkKTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIHN0YXJ0U3Ryb2tlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzU3Ryb2tlKCkpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXNldFRpcCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTA1MDM0L2hvdy10by1jcmVhdGUtYS1ndWlkLXV1aWQtaW4tamF2YXNjcmlwdFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3Ryb2tlSWQgPSAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uKGMpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgciwgdjtcclxuICAgICAgICAgICAgICAgICAgICByID0gTWF0aC5yYW5kb20oKSAqIDE2IHwgMDtcclxuICAgICAgICAgICAgICAgICAgICB2ID0gYyA9PT0gJ3gnID8gciA6IChyICYgMHgzIHwgMHg4KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdi50b1N0cmluZygxNik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGVuZFN0cm9rZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdHJva2VJZCA9IHRoaXMuX2xhdGVzdFBvcyA9IG51bGw7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICByZW5kZXI6IGZ1bmN0aW9uKGN0eCwgeCwgeSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGlzU3Ryb2tlID0gdGhpcy5pc1N0cm9rZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgIGR4LCBkeSxcclxuICAgICAgICAgICAgICAgICAgICBpLCBsZW47XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9sYXRlc3RQb3MpIHRoaXMuX2xhdGVzdFBvcyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbGF0ZXN0UG9zLnggPSB0aGlzLng7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sYXRlc3RQb3MueSA9IHRoaXMueTtcclxuICAgICAgICAgICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnkgPSB5O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9kcm9wcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZHJvcHMgID0gdGhpcy5fZHJvcHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyb3AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemVTcSA9IHRoaXMuc2l6ZSAqIHRoaXMuc2l6ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMCwgbGVuID0gZHJvcHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcCA9IGRyb3BzW2ldO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZHggPSB0aGlzLnggLSBkcm9wLng7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR5ID0gdGhpcy55IC0gZHJvcC55O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGlzU3Ryb2tlICYmIHNpemVTcSA+IGR4ICogZHggKyBkeSAqIGR5ICYmIHRoaXMuX3N0cm9rZUlkICE9PSBkcm9wLnN0cm9rZUlkKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcC5saWZlIDw9IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZW4tLTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGktLTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkcm9wLnJlbmRlcihjdHgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaXNTdHJva2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGlwID0gdGhpcy5fdGlwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VJZCA9IHRoaXMuX3N0cm9rZUlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXN0O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkeCA9IHRoaXMueCAtIHRoaXMuX2xhdGVzdFBvcy54O1xyXG4gICAgICAgICAgICAgICAgICAgIGR5ID0gdGhpcy55IC0gdGhpcy5fbGF0ZXN0UG9zLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzdCA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNwbGFzaGluZyAmJiBkaXN0ID4gdGhpcy5fU1BMQVNISU5HX0JSVVNIX1NQRUVEKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXhOdW0gPSAoZGlzdCAtIHRoaXMuX1NQTEFTSElOR19CUlVTSF9TUEVFRCkgKiAwLjMgfCAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgciwgYSwgc3IsIHN4LCBzeTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDAsIGxlbiA9IG1heE51bSAqIE1hdGgucmFuZG9tKCkgfCAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIgPSAoZGlzdCAtIDEpICogTWF0aC5yYW5kb20oKSArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhID0gTWF0aC5QSSAqIDIgKiBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3IgPSA1ICogTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4ID0gdGhpcy54ICsgciAqIE1hdGguc2luKGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3kgPSB0aGlzLnkgKyByICogTWF0aC5jb3MoYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHgubW92ZVRvKHN4ICsgc3IsIHN5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5hcmMoc3gsIHN5LCBzciwgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdHguZmlsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZHJpcHBpbmcgJiYgZGlzdCA8IHRoaXMuaW5rQW1vdW50ICogMiAmJiBNYXRoLnJhbmRvbSgpIDwgMC4wNSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9kcm9wcy5wdXNoKG5ldyBEcm9wKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy55LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuc2l6ZSArIHRoaXMuaW5rQW1vdW50KSAqIDAuNSAqICgoMC4yNSAtIDAuMSkgKiBNYXRoLnJhbmRvbSgpICsgMC4xKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdHJva2VJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDAsIGxlbiA9IHRpcC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXBbaV0ucmVuZGVyKGN0eCwgZHgsIGR5LCBkaXN0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBkaXNwb3NlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3RpcC5sZW5ndGggPSB0aGlzLl9kcm9wcy5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgX3Jlc2V0VGlwOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0aXAgPSB0aGlzLl90aXAgPSBbXSxcclxuICAgICAgICAgICAgICAgICAgICByYWQgPSB0aGlzLnNpemUgKiAwLjUsXHJcbiAgICAgICAgICAgICAgICAgICAgeDAsIHkwLCBhMCwgeDEsIHkxLCBhMSwgY3YsIHN2LFxyXG4gICAgICAgICAgICAgICAgICAgIGksIGxlbjtcclxuXHJcbiAgICAgICAgICAgICAgICBhMSAgPSBNYXRoLlBJICogMiAqIE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgICAgICBhMSAgPSB0aGlzLmFuZ2xlO1xyXG4gICAgICAgICAgICAgICAgbGVuID0gcmFkICogcmFkICogTWF0aC5QSSAvIHRoaXMuaW5rQW1vdW50IHwgMDtcclxuICAgICAgICAgICAgICAgIGlmIChsZW4gPCAxKSBsZW4gPSAxO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxlbiA+IHRoaXMubWF4SGFpcnMpIGxlbiA9IHRoaXMubWF4SGFpcnM7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeDAgPSByYWQgKiBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHkwID0geDAgKiAwLjU7XHJcbiAgICAgICAgICAgICAgICAgICAgYTAgPSBNYXRoLlBJICogMiAqIE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgeDEgPSB4MCAqIE1hdGguc2luKGEwKTtcclxuICAgICAgICAgICAgICAgICAgICB5MSA9IHkwICogTWF0aC5jb3MoYTApO1xyXG4gICAgICAgICAgICAgICAgICAgIGN2ID0gTWF0aC5jb3MoYTEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN2ID0gTWF0aC5zaW4oYTEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aXAucHVzaChuZXcgSGFpcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy54ICsgeDEgKiBjdiAtIHkxICogc3YsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueSArIHgxICogc3YgKyB5MSAqIGN2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlua0Ftb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2xvclxyXG4gICAgICAgICAgICAgICAgICAgICkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEhhaXJcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIEhhaXIoeCwgeSwgaW5rQW1vdW50LCBjb2xvcikge1xyXG4gICAgICAgICAgICB0aGlzLnggPSB4IHx8IDA7XHJcbiAgICAgICAgICAgIHRoaXMueSA9IHkgfHwgMDtcclxuICAgICAgICAgICAgdGhpcy5pbmtBbW91bnQgPSBpbmtBbW91bnQ7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2xhdGVzdFBvcyA9IHsgeDogdGhpcy54LCB5OiB0aGlzLnkgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEhhaXIucHJvdG90eXBlID0ge1xyXG4gICAgICAgICAgICB4OiAgICAgICAgICAwLFxyXG4gICAgICAgICAgICB5OiAgICAgICAgICAwLFxyXG4gICAgICAgICAgICBpbmtBbW91bnQ6ICA3LFxyXG4gICAgICAgICAgICBjb2xvcjogICAgICAnIzAwMCcsXHJcbiAgICAgICAgICAgIF9sYXRlc3RQb3M6IG51bGwsXHJcblxyXG4gICAgICAgICAgICByZW5kZXI6IGZ1bmN0aW9uKGN0eCwgb2Zmc2V0WCwgb2Zmc2V0WSwgb2Zmc2V0TGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sYXRlc3RQb3MueCA9IHRoaXMueDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xhdGVzdFBvcy55ID0gdGhpcy55O1xyXG4gICAgICAgICAgICAgICAgdGhpcy54ICs9IG9mZnNldFg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnkgKz0gb2Zmc2V0WTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcGVyID0gb2Zmc2V0TGVuZ3RoID8gdGhpcy5pbmtBbW91bnQgLyBvZmZzZXRMZW5ndGggOiAwO1xyXG4gICAgICAgICAgICAgICAgaWYgICAgICAocGVyID4gMSkgcGVyID0gMTtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBlciA8IDApIHBlciA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICAgICAgICAgIGN0eC5saW5lQ2FwID0gY3R4LmxpbmVKb2luID0gJ3JvdW5kJztcclxuICAgICAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3I7XHJcbiAgICAgICAgICAgICAgICBjdHgubGluZVdpZHRoID0gdGhpcy5pbmtBbW91bnQgKiBwZXI7XHJcbiAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgICAgICBjdHgubW92ZVRvKHRoaXMuX2xhdGVzdFBvcy54LCB0aGlzLl9sYXRlc3RQb3MueSk7XHJcbiAgICAgICAgICAgICAgICBjdHgubGluZVRvKHRoaXMueCwgdGhpcy55KTtcclxuICAgICAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRHJvcFxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gRHJvcCh4LCB5LCBzaXplLCBjb2xvciwgc3Ryb2tlSWQpIHtcclxuICAgICAgICAgICAgdGhpcy54ID0geCB8fCAwO1xyXG4gICAgICAgICAgICB0aGlzLnkgPSB5IHx8IDA7XHJcbiAgICAgICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgICAgICAgICAgdGhpcy5zdHJva2VJZCA9IHN0cm9rZUlkO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5saWZlID0gdGhpcy5zaXplICogMS41O1xyXG4gICAgICAgICAgICB0aGlzLl9sYXRlc3RQb3MgPSB7IHg6IHRoaXMueCwgeTogdGhpcy55IH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBEcm9wLnByb3RvdHlwZSA9IHtcclxuICAgICAgICAgICAgeDogICAgICAgICAgMCxcclxuICAgICAgICAgICAgeTogICAgICAgICAgMCxcclxuICAgICAgICAgICAgc2l6ZTogICAgICAgNyxcclxuICAgICAgICAgICAgY29sb3I6ICAgICAgJyMwMDAnLFxyXG4gICAgICAgICAgICBzdHJva2VJZDogICBudWxsLFxyXG4gICAgICAgICAgICBsaWZlOiAgICAgICAwLFxyXG4gICAgICAgICAgICBfbGF0ZXN0UG9zOiBudWxsLFxyXG4gICAgICAgICAgICBfeE9mZlJhdGlvOiAwLFxyXG5cclxuICAgICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbihjdHgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgMC4wMykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3hPZmZSYXRpbyArPSAwLjA2ICogTWF0aC5yYW5kb20oKSAtIDAuMDM7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKE1hdGgucmFuZG9tKCkgPCAwLjEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl94T2ZmUmF0aW8gKj0gMC4wMDM7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbGF0ZXN0UG9zLnggPSB0aGlzLng7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sYXRlc3RQb3MueSA9IHRoaXMueTtcclxuICAgICAgICAgICAgICAgIHRoaXMueCArPSB0aGlzLmxpZmUgKiB0aGlzLl94T2ZmUmF0aW87XHJcbiAgICAgICAgICAgICAgICB0aGlzLnkgKz0gKHRoaXMubGlmZSAqIDAuNSkgKiBNYXRoLnJhbmRvbSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMubGlmZSAtPSAoMC4wNSAtIDAuMDEpICogTWF0aC5yYW5kb20oKSArIDAuMDE7XHJcblxyXG4gICAgICAgICAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICAgICAgICAgIGN0eC5saW5lQ2FwID0gY3R4LmxpbmVKb2luID0gJ3JvdW5kJztcclxuICAgICAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3I7XHJcbiAgICAgICAgICAgICAgICBjdHgubGluZVdpZHRoID0gdGhpcy5zaXplICsgdGhpcy5saWZlICogMC4zO1xyXG4gICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLl9sYXRlc3RQb3MueCwgdGhpcy5fbGF0ZXN0UG9zLnkpO1xyXG4gICAgICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngsIHRoaXMueSk7XHJcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBCcnVzaDtcclxuXHJcbiAgICB9KSgpO1xyXG5cclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKipcclxuICAgICAqIEJydXNoc3Ryb2tlIHV0aWxzXHJcbiAgICAgKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4gICAgLy8gVHlwZSBvZiBlbGVtZW50cywgbW9zdCBmcm9tIGFuaW1lLmpzXHJcblxyXG4gICAgdmFyIGlzID0ge1xyXG4gICAgICAgIG9iajogZnVuY3Rpb24oYSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGEpLmluZGV4T2YoJ09iamVjdCcpID4gLTEgfSxcclxuICAgICAgICBudW06IGZ1bmN0aW9uKGEpIHsgcmV0dXJuIHR5cGVvZiBhID09PSAnbnVtYmVyJyB9LFxyXG4gICAgICAgIHN0cjogZnVuY3Rpb24oYSkgeyByZXR1cm4gdHlwZW9mIGEgPT09ICdzdHJpbmcnIH0sXHJcbiAgICAgICAgZm5jOiBmdW5jdGlvbihhKSB7IHJldHVybiB0eXBlb2YgYSA9PT0gJ2Z1bmN0aW9uJyB9LFxyXG4gICAgICAgIHVuZDogZnVuY3Rpb24oYSkgeyByZXR1cm4gdHlwZW9mIGEgPT09ICd1bmRlZmluZWQnIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gRnVuY3Rpb25zXHJcblxyXG4gICAgZnVuY3Rpb24gY2FsbEZ1bmN0aW9uKGZuLCBjb250ZXh0LCBwYXJhbXMpIHtcclxuICAgICAgICBpZiAoaXMuZm5jKGZuKSkgZm4uY2FsbChjb250ZXh0LCBwYXJhbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE9iamVjdHNcclxuXHJcbiAgICBmdW5jdGlvbiBleHRlbmRTaW5nbGUodGFyZ2V0LCBzb3VyY2UpIHtcclxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKVxyXG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xyXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZXh0ZW5kKHRhcmdldCwgc291cmNlKSB7XHJcbiAgICAgICAgaWYgKCF0YXJnZXQpIHRhcmdldCA9IHt9O1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICBleHRlbmRTaW5nbGUodGFyZ2V0LCBhcmd1bWVudHNbaV0pO1xyXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU3R5bGVzXHJcblxyXG4gICAgZnVuY3Rpb24gdmFsaWRQcm9wZXJ0eShwcm9wZXJ0eSwgdmFsdWUpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gIWlzLnVuZCh2YWx1ZSkgJiZcclxuICAgICAgICAgICAgICAgICFpcy5vYmoodmFsdWUpICYmXHJcbiAgICAgICAgICAgICAgICAhaXMuZm5jKHZhbHVlKSAmJlxyXG4gICAgICAgICAgICAgICAgdmFsdWUubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgdmFsdWUgIT0gcGFyc2VJbnQodmFsdWUpICYmXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSAhPSBwYXJzZUludChwcm9wZXJ0eSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldFN0eWxlKGVsKSB7XHJcbiAgICAgICAgdmFyIGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsKTtcclxuICAgICAgICB2YXIgc3R5bGUgPSAnJztcclxuICAgICAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBjb21wdXRlZFN0eWxlKSB7XHJcbiAgICAgICAgICAgIGlmICh2YWxpZFByb3BlcnR5KHByb3BlcnR5LCBjb21wdXRlZFN0eWxlW3Byb3BlcnR5XSkpIHtcclxuICAgICAgICAgICAgICAgIHN0eWxlICs9IHByb3BlcnR5ICsgJzonICsgY29tcHV0ZWRTdHlsZVtwcm9wZXJ0eV0gKyAnOyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWwuc3R5bGUuY3NzVGV4dCArPSBzdHlsZSArICc7dmlzaWJpbGl0eTp2aXNpYmxlOyc7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0U3R5bGVBbGwoZWwsIGxpc3QpIHtcclxuICAgICAgICB2YXIgY2hpbGRyZW4gPSBlbC5jaGlsZHJlbjtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICBzZXRTdHlsZUFsbChjaGlsZHJlbltpXSwgbGlzdCk7XHJcbiAgICAgICAgbGlzdC5wdXNoKHtlbDogZWwsIHN0eWxlOiBlbC5zdHlsZS5jc3NUZXh0fSk7XHJcbiAgICAgICAgc2V0U3R5bGUoZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlc3RvcmVTdHlsZUFsbChsaXN0KSB7XHJcbiAgICAgICAgdmFyIGN1cnJlbnQ7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnQgPSBsaXN0W2ldO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudC5zdHlsZSkge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudC5lbC5zdHlsZS5jc3NUZXh0ID0gY3VycmVudC5zdHlsZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnQuZWwucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldE91dGVySFRNTChlbCkge1xyXG4gICAgICAgIHZhciBsaXN0ID0gW107XHJcbiAgICAgICAgc2V0U3R5bGVBbGwoZWwsIGxpc3QpO1xyXG4gICAgICAgIHZhciBodG1sID0gZWwub3V0ZXJIVE1MO1xyXG4gICAgICAgIHJlc3RvcmVTdHlsZUFsbChsaXN0KTtcclxuICAgICAgICByZXR1cm4gaHRtbDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBmaXhSb290UG9zaXRpb24ocm9vdCkge1xyXG4gICAgICAgIHZhciBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUocm9vdCk7XHJcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgncG9zaXRpb24nKTtcclxuICAgICAgICBpZiAocG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XHJcbiAgICAgICAgICAgIHJvb3Quc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRQb3NpdGlvbihvKSB7XHJcbiAgICAgICAgdmFyIGVsUmVjdCA9IG8uZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgdmFyIHJvb3RSZWN0ID0gby5yb290LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIG8udG9wID0gZWxSZWN0LnRvcCAtIHJvb3RSZWN0LnRvcDtcclxuICAgICAgICBvLmxlZnQgPSBlbFJlY3QubGVmdCAtIHJvb3RSZWN0LmxlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHJvbWlzZXNcclxuXHJcbiAgICBmdW5jdGlvbiBkZWZlcnJlZCgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXNvbHZlID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5yZWplY3QgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNvbHZlID0gcmVzb2x2ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVqZWN0ID0gcmVqZWN0O1xyXG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0IHJhbmRvbSBwb2ludHMgaW4gYSAyZCBzcGFjZVxyXG5cclxuICAgIGZ1bmN0aW9uIHJhbmRvbWl6ZShudW0sIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICB2YXIgbnVtUG9pbnRzID0gbnVtIHx8IDEwO1xyXG4gICAgICAgIHZhciBwb2ludHMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVBvaW50czsgaSsrKSB7XHJcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgKHdpZHRoICogTWF0aC5yYW5kb20oKSAqIDAuOSArIHdpZHRoICogMC4wNSkgfCAwLFxyXG4gICAgICAgICAgICAgICAgKGhlaWdodCAqIE1hdGgucmFuZG9tKCkgKiAwLjkgKyBoZWlnaHQgKiAwLjA1KSB8IDBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBvaW50cztcclxuICAgIH1cclxuXHJcbiAgICAvLyBDYW52YXNcclxuXHJcbiAgICBmdW5jdGlvbiByZXNpemVJbWFnZShpbWcsIG8pIHtcclxuICAgICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2NhbnZhcycpWzBdO1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IG8ud2lkdGg7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IG8uaGVpZ2h0O1xyXG4gICAgICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIGlmIChvLnN0cmV0Y2gpIHtcclxuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIDAsIDAsIG8ud2lkdGgsIG8uaGVpZ2h0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgd2lkdGggPSBpbWcud2lkdGg7XHJcbiAgICAgICAgICAgIHZhciBoZWlnaHQgPSBpbWcuaGVpZ2h0O1xyXG4gICAgICAgICAgICB2YXIgbGVmdCA9IG8ud2lkdGggLyAyIC0gd2lkdGggLyAyO1xyXG4gICAgICAgICAgICB2YXIgdG9wID0gby5oZWlnaHQgLyAyIC0gaGVpZ2h0IC8gMjtcclxuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjYW52YXM7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdENhbnZhcyhvKSB7XHJcbiAgICAgICAgaWYgKG8uZWwpIHtcclxuICAgICAgICAgICAgby53aWR0aCA9IG8uZWwub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgICAgIG8uaGVpZ2h0ID0gby5lbC5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgICAgIHNldFBvc2l0aW9uKG8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2NhbnZhcycpWzBdO1xyXG4gICAgICAgIGNhbnZhcy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAgICAgY2FudmFzLnN0eWxlLnRvcCA9IG8udG9wICsgJ3B4JztcclxuICAgICAgICBjYW52YXMuc3R5bGUubGVmdCA9IG8ubGVmdCArICdweCc7XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gby53aWR0aDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gby5oZWlnaHQ7XHJcbiAgICAgICAgY2FudmFzLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICAgICAgICBvLmNhbnZhcyA9IGNhbnZhcztcclxuICAgICAgICBvLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIGZpeFJvb3RQb3NpdGlvbihvLnJvb3QpO1xyXG4gICAgICAgIC8vIG8ucm9vdC5hcHBlbmRDaGlsZChvLmNhbnZhcyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKioqKioqKioqKioqKlxyXG4gICAgICogQnJ1c2hzdHJva2VcclxuICAgICAqKioqKioqKioqKioqKi9cclxuXHJcbiAgICBmdW5jdGlvbiBCcnVzaHN0cm9rZShvcHRpb25zKSB7XHJcblxyXG4gICAgICAgIC8vIERlZmF1bHQgdmFsdWVzXHJcblxyXG4gICAgICAgIHRoaXMuZGVmYXVsdHMgPSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogJ3RvLWJvdHRvbScsXHJcbiAgICAgICAgICAgIHBhdGg6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgcG9pbnRzOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIGZyYW1lQW5pbWF0aW9uOiBmYWxzZSxcclxuICAgICAgICAgICAgZnJhbWVzOiAwLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMCxcclxuICAgICAgICAgICAgZGVsYXk6IDAsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnI2NjYycsXHJcbiAgICAgICAgICAgIHdpZHRoOiAzMDAsXHJcbiAgICAgICAgICAgIGhlaWdodDogMTIwLFxyXG4gICAgICAgICAgICBzaXplOiA0MCxcclxuICAgICAgICAgICAgaW5rQW1vdW50OiAxLFxyXG4gICAgICAgICAgICBsaWZ0aW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgZHJpcHBpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBzcGxhc2hpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDMwLFxyXG4gICAgICAgICAgICBvdmVybGFwOiAxMCxcclxuICAgICAgICAgICAgdGVuc2lvbjogMC41LFxyXG4gICAgICAgICAgICByZWR1Y2VPdmVyZmxvdzogMjAsXHJcbiAgICAgICAgICAgIHJvb3Q6IGRvY3VtZW50LmJvZHksXHJcbiAgICAgICAgICAgIGVsOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIGltYWdlOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIHJlcGVhdDogJ25vLXJlcGVhdCcsXHJcbiAgICAgICAgICAgIHN0cmV0Y2g6IGZhbHNlLFxyXG4gICAgICAgICAgICBjZW50ZXJlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHF1ZXVlOiBmYWxzZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdChvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBCcnVzaHN0cm9rZS5wcm90b3R5cGUgPSB7XHJcblxyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHZhciBvID0gZXh0ZW5kKHRoaXMuZGVmYXVsdHMsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICBpZiAoaXMuc3RyKG8ucm9vdCkpIG8ucm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioby5yb290KTtcclxuICAgICAgICAgICAgaWYgKGlzLnN0cihvLmVsKSkgby5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioby5lbCk7XHJcbiAgICAgICAgICAgIGluaXRDYW52YXMobyk7XHJcblxyXG4gICAgICAgICAgICB2YXIgZCA9IGRlZmVycmVkKCk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvbWlzZSA9IGQucHJvbWlzZTtcclxuICAgICAgICAgICAgZC5yZXNvbHZlKCk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcnVuOiBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBzdGFydCgpIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMuY2FudmFzLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5yZW5kZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LnJlbmRlcihvcHRpb25zKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbEZ1bmN0aW9uKHRoYXQuYW5pbWF0aW9uc1tvcHRpb25zLmFuaW1hdGlvbl0sIHRoYXQsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5jbGVhcikge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5jdHguY2xlYXJSZWN0KDAsIDAsIG9wdGlvbnMud2lkdGgsIG9wdGlvbnMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMuZC5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5lbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMucGF0dGVybikge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBodG1sID0gJzxzdHlsZT5ib2R5e21hcmdpbjowO308L3N0eWxlPicgKyBnZXRPdXRlckhUTUwob3B0aW9ucy5lbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmFzdGVyaXplSFRNTC5kcmF3SFRNTChodG1sLCBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiBzdWNjZXNzKHJlbmRlclJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZmlsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuY3R4LmRyYXdJbWFnZShyZW5kZXJSZXN1bHQuaW1hZ2UsIDAsIDAsIG9wdGlvbnMud2lkdGgsIG9wdGlvbnMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmQucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnBhdHRlcm4gPSBvcHRpb25zLmN0eC5jcmVhdGVQYXR0ZXJuKHJlbmRlclJlc3VsdC5pbWFnZSwgb3B0aW9ucy5yZXBlYXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyYXN0ZXJpemVIVE1MRXJyb3I6ICcgKyBlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5pbWFnZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICAgICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnN0cmV0Y2ggfHwgb3B0aW9ucy5jZW50ZXJlZCkgaW1nID0gcmVzaXplSW1hZ2UoaW1nLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5maWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuY3R4LmRyYXdJbWFnZShpbWcsIDAsIDAsIG9wdGlvbnMud2lkdGgsIG9wdGlvbnMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5kLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnBhdHRlcm4gPSBvcHRpb25zLmN0eC5jcmVhdGVQYXR0ZXJuKGltZywgb3B0aW9ucy5yZXBlYXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBpbWcuc3JjID0gb3B0aW9ucy5pbWFnZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBkcmF3OiBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgICAgIHZhciBvID0gZXh0ZW5kKHt9LCB0aGlzLmRlZmF1bHRzLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgdmFyIF9kcmF3ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGQgPSBkZWZlcnJlZCgpO1xyXG4gICAgICAgICAgICAgICAgdGhhdC5ydW4oZXh0ZW5kKG8sIHtkOiBkfSkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGQucHJvbWlzZTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaWYgKG8ucXVldWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvbWlzZSA9IHRoaXMucHJvbWlzZS50aGVuKF9kcmF3KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIF9kcmF3KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBlcmFzZTogZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgdGhpcy5kcmF3KGV4dGVuZCh7fSwgb3B0aW9ucywge2VyYXNlOiB0cnVlfSkpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGZpbGw6IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhdyhleHRlbmQoe30sIG9wdGlvbnMsIHtmaWxsOiB0cnVlfSkpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGNsZWFyOiBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgICAgICAgICB0aGlzLmRyYXcoZXh0ZW5kKHt9LCBvcHRpb25zLCB7Y2xlYXI6IHRydWV9KSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2V0UGF0aDogZnVuY3Rpb24gKG8pIHtcclxuICAgICAgICAgICAgdmFyIHBhdGggPSBvLnBhdGg7XHJcbiAgICAgICAgICAgIGlmIChpcy5zdHIocGF0aCkpIHtcclxuICAgICAgICAgICAgICAgIHBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3BhdGgnKTtcclxuICAgICAgICAgICAgICAgIHBhdGguc2V0QXR0cmlidXRlKCdkJywgby5wYXRoKTtcclxuICAgICAgICAgICAgICAgIG8ucGF0aCA9IHBhdGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgby5wYXRoTGVuZ2h0ID0gcGF0aC5nZXRUb3RhbExlbmd0aCgpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHBvaW50QXQ6IGZ1bmN0aW9uICh0LCBvKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoby5hbmltYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3BvaW50cyc6XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBvaW50cyA9IG8ucG9pbnRzO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBsZW5ndGggPSBwb2ludHMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpID0gTWF0aC5yb3VuZCgobGVuZ3RoICogdCkgLyAyKSAqIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPj0gbGVuZ3RoKSBpID0gbGVuZ3RoIC0gMjtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge3g6IHBvaW50c1tpXSwgeTogcG9pbnRzW2kgKyAxXX07XHJcbiAgICAgICAgICAgICAgICBjYXNlICdwYXRoJzpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gby5wYXRoLmdldFBvaW50QXRMZW5ndGgoby5wYXRoTGVuZ2h0ICogdCk7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2V0UG9zOiBmdW5jdGlvbiAobywgcG9zKSB7XHJcbiAgICAgICAgICAgIHZhciBmaXJzdCA9ICFwb3M7XHJcbiAgICAgICAgICAgIGlmIChmaXJzdCkgcG9zID0ge307XHJcbiAgICAgICAgICAgIHN3aXRjaCAoby5kaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2JvdHRvbSc6XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zLnN0YXJ0WSA9IGZpcnN0ID8gby5wYWRkaW5nIDogcG9zLnN0YXJ0WSArIG8uc2l6ZSAtIG8ub3ZlcmxhcDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFBvc0JvdHRvbVRvcChvLCBwb3MsIGZpcnN0KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3RvcCc6XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zLnN0YXJ0WSA9IGZpcnN0ID8gby5oZWlnaHQgLSBvLnBhZGRpbmcgOiBwb3Muc3RhcnRZIC0gby5zaXplICsgby5vdmVybGFwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0UG9zQm90dG9tVG9wKG8sIHBvcywgZmlyc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxyXG4gICAgICAgICAgICAgICAgICAgIHBvcy5zdGFydFggPSBmaXJzdCA/IG8ucGFkZGluZyA6IHBvcy5zdGFydFggKyBvLnNpemUgLSBvLm92ZXJsYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQb3NSaWdodExlZnQobywgcG9zLCBmaXJzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdsZWZ0JzpcclxuICAgICAgICAgICAgICAgICAgICBwb3Muc3RhcnRYID0gZmlyc3QgPyBvLndpZHRoIC0gby5wYWRkaW5nIDogcG9zLnN0YXJ0WCAtIG8uc2l6ZSArIG8ub3ZlcmxhcDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFBvc1JpZ2h0TGVmdChvLCBwb3MsIGZpcnN0KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcG9zO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHNldFBvc0JvdHRvbVRvcDogZnVuY3Rpb24gKG8sIHBvcywgZmlyc3QpIHtcclxuICAgICAgICAgICAgaWYgKGZpcnN0KSB7XHJcbiAgICAgICAgICAgICAgICBwb3MudmVydGljYWwgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIGF1eCA9IHBvcy5zdGFydFg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcG9zLnN0YXJ0WCA9IGZpcnN0ID8gby5wYWRkaW5nIDogcG9zLng7XHJcbiAgICAgICAgICAgIHBvcy54ID0gZmlyc3QgPyBvLndpZHRoIC0gby5wYWRkaW5nIDogYXV4O1xyXG4gICAgICAgICAgICBwb3MueSA9IHBvcy5zdGFydFk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2V0UG9zUmlnaHRMZWZ0OiBmdW5jdGlvbiAobywgcG9zLCBmaXJzdCkge1xyXG4gICAgICAgICAgICBpZiAoZmlyc3QpIHtcclxuICAgICAgICAgICAgICAgIHBvcy52ZXJ0aWNhbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIGF1eCA9IHBvcy5zdGFydFk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcG9zLnggPSBwb3Muc3RhcnRYO1xyXG4gICAgICAgICAgICBwb3Muc3RhcnRZID0gZmlyc3QgPyBvLnBhZGRpbmcgOiBwb3MueTtcclxuICAgICAgICAgICAgcG9zLnkgPSBmaXJzdCA/IG8uaGVpZ2h0IC0gby5wYWRkaW5nIDogYXV4O1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKG8pIHtcclxuICAgICAgICAgICAgaWYgKCFpcy51bmQoby5kdXJhdGlvbikgfHwgIWlzLnVuZChvLmZyYW1lcykpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoby5kZWxheSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWxheSA9IG8uZGVsYXk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG8uZGVsYXk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyKG8pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIGRlbGF5ICogMTAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChvLmVyYXNlKSBvLmN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24tb3V0JztcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZnJhbWUgPSAxLCBlbGFwc2VkLCB0aW1lLCB0LCBwb2ludCwgeCA9IDAsIHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0YXJ0VGltZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFpcy51bmQoby5zdGFydFgpKSB4ID0gby5zdGFydFg7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzLnVuZChvLnN0YXJ0WSkpIHkgPSBvLnN0YXJ0WTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgYnJ1c2ggPSBuZXcgQnJ1c2goeCwgeSwgby5wYXR0ZXJuIHx8IG8uY29sb3IsIG8uc2l6ZSwgby5pbmtBbW91bnQsIG8uYW5nbGUsIG8uZHJpcHBpbmcsIG8uc3BsYXNoaW5nKTtcclxuICAgICAgICAgICAgICAgIGJydXNoLnN0YXJ0U3Ryb2tlKHgsIHkpO1xyXG4gICAgICAgICAgICAgICAgY2FsbEZ1bmN0aW9uKG8uYmVnaW4pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChvLmZyYW1lQW5pbWF0aW9uICYmIG8uZHVyYXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIW8uZnJhbWVzKSBvLmZyYW1lcyA9IHBhcnNlRmxvYXQoby5kdXJhdGlvbikgKiA2MDtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgby5kdXJhdGlvbjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAoZnVuY3Rpb24gY2FsYygpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoby5kdXJhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGFwc2VkID0gKG5ldyBEYXRlKCkgLSBzdGFydFRpbWUpIC8gMTAwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZSA9IGVsYXBzZWQgLyBwYXJzZUZsb2F0KG8uZHVyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWUgPSBmcmFtZSAvIHBhcnNlRmxvYXQoby5mcmFtZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0ID0gdGltZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzLmZuYyhvLmVhc2luZykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdCA9IG8uZWFzaW5nKHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRpbWUgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnQgPSB0aGF0LnBvaW50QXQodCwgbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwb2ludCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IHggKyAoby54IC0geCkgKiB0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogeSArIChvLnkgLSB5KSAqIHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHggPSBwb2ludC54O1xyXG4gICAgICAgICAgICAgICAgICAgIHkgPSBwb2ludC55O1xyXG4gICAgICAgICAgICAgICAgICAgIGJydXNoLnJlbmRlcihvLmN0eCwgeCwgeSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aW1lID49IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJ1c2guZW5kU3Ryb2tlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvLmVyYXNlKSBvLmN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsRnVuY3Rpb24oby5lbmQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvLmQucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvLmR1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFtZSsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgby5mcmFtZUFuaW1hdGlvbiA/IHJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxjKSA6IGNhbGMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBhbmltYXRpb25zOiB7XHJcbiAgICAgICAgICAgICd0by1ib3R0b20nOiBmdW5jdGlvbihvKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsRnVuY3Rpb24odGhpcy5hbmltYXRpb25zLmJhc2ljLCB0aGlzLCBleHRlbmQobywge2RpcmVjdGlvbjogJ2JvdHRvbSd9KSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICd0by10b3AnOiBmdW5jdGlvbihvKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsRnVuY3Rpb24odGhpcy5hbmltYXRpb25zLmJhc2ljLCB0aGlzLCBleHRlbmQobywge2RpcmVjdGlvbjogJ3RvcCd9KSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICd0by1yaWdodCc6IGZ1bmN0aW9uKG8pIHtcclxuICAgICAgICAgICAgICAgIGNhbGxGdW5jdGlvbih0aGlzLmFuaW1hdGlvbnMuYmFzaWMsIHRoaXMsIGV4dGVuZChvLCB7ZGlyZWN0aW9uOiAncmlnaHQnfSkpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAndG8tbGVmdCc6IGZ1bmN0aW9uKG8pIHtcclxuICAgICAgICAgICAgICAgIGNhbGxGdW5jdGlvbih0aGlzLmFuaW1hdGlvbnMuYmFzaWMsIHRoaXMsIGV4dGVuZChvLCB7ZGlyZWN0aW9uOiAnbGVmdCd9KSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICdiYXNpYyc6IGZ1bmN0aW9uKG8pIHtcclxuICAgICAgICAgICAgICAgIHZhciBwb3MgPSB0aGlzLnNldFBvcyhvKTtcclxuICAgICAgICAgICAgICAgIHZhciBicnVzaHN0cm9rZXMgPSBNYXRoLmNlaWwoKChwb3MudmVydGljYWwgPyBvLmhlaWdodCA6IG8ud2lkdGgpICsgKG8uc2l6ZSAvIDIpIC0gKG8ucGFkZGluZyAqIDIpKSAvIChvLnNpemUgLSBvLm92ZXJsYXApKTtcclxuICAgICAgICAgICAgICAgIHZhciBhbmdsZSA9IHBvcy52ZXJ0aWNhbCA/IE1hdGguUEkgKiAwLjUgOiAwO1xyXG4gICAgICAgICAgICAgICAgdmFyIGR1cmF0aW9uID0gby5kdXJhdGlvbiAvIGJydXNoc3Ryb2tlcztcclxuICAgICAgICAgICAgICAgIHZhciBmcmFtZXMgPSBvLmZyYW1lcyAvIGJydXNoc3Ryb2tlcztcclxuICAgICAgICAgICAgICAgIHZhciBwb2ludHMgPSBbXTtcclxuICAgICAgICAgICAgICAgIHZhciBhbHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdmFyIG92ZXJmbG93ID0gby5yZWR1Y2VPdmVyZmxvdztcclxuICAgICAgICAgICAgICAgIHZhciBvcHRzLCBmaXJzdCwgbGFzdDtcclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBmaXhPdmVyZmxvdyhheGlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IDApIHBvc1theGlzXSA9IHBvc1theGlzXSAtIG92ZXJmbG93O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09PSAxKSBwb3NbYXhpc10gPSBwb3NbYXhpc10gKyBvdmVyZmxvdztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gYnJ1c2hzdHJva2VzIC0gMSkgcG9zW2F4aXNdID0gYWx0ID8gcG9zW2F4aXNdICsgb3ZlcmZsb3cgOiBwb3NbYXhpc10gLSBvdmVyZmxvdztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJydXNoc3Ryb2tlczsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG8ubGlmdGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdCA9IGkgPT09IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3QgPSBpID09PSBicnVzaHN0cm9rZXMgLSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRzID0gZXh0ZW5kKHt9LCBvLCBwb3MsIHtkdXJhdGlvbjogZHVyYXRpb24sIGZyYW1lczogZnJhbWVzLCBhbmdsZTogYW5nbGUsIHJlbmRlcjogdHJ1ZSwgcXVldWU6IHRydWV9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFmaXJzdCkgb3B0cy5iZWdpbiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbGFzdCkgb3B0cy5lbmQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXcob3B0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG92ZXJmbG93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3MudmVydGljYWwgPyBmaXhPdmVyZmxvdygneCcpIDogZml4T3ZlcmZsb3coJ3knKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludHMucHVzaChwb3Muc3RhcnRYLCBwb3Muc3RhcnRZLCBwb3MueCwgcG9zLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFBvcyhvLCBwb3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsdCA9ICFhbHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG8ubGlmdGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIG8uZC5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxGdW5jdGlvbih0aGlzLmFuaW1hdGlvbnMucG9pbnRzLCB0aGlzLCBleHRlbmQobywge2FuaW1hdGlvbjogJ3BvaW50cycsIHBvaW50czogcG9pbnRzLCBhbmdsZTogYW5nbGV9KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICdwYXRoJzogZnVuY3Rpb24obykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQYXRoKG8pO1xyXG4gICAgICAgICAgICAgICAgdmFyIHBvaW50ID0gdGhpcy5wb2ludEF0KDAsIG8pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXIoZXh0ZW5kKG8sIHtzdGFydFg6IHBvaW50LngsIHN0YXJ0WTogcG9pbnQueX0pKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ3BvaW50cyc6IGZ1bmN0aW9uKG8pIHtcclxuICAgICAgICAgICAgICAgIHZhciBwb2ludHMgPSBvLnBvaW50cyB8fCAwO1xyXG4gICAgICAgICAgICAgICAgcG9pbnRzID0gaXMubnVtKHBvaW50cykgPyByYW5kb21pemUocG9pbnRzLCBvLndpZHRoLCBvLmhlaWdodCkgOiBwb2ludHM7XHJcbiAgICAgICAgICAgICAgICBwb2ludHMgPSBnZXRDdXJ2ZVBvaW50cyhwb2ludHMsIG8udGVuc2lvbik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcihleHRlbmQobywge3BvaW50czogcG9pbnRzLCBzdGFydFg6IHBvaW50c1swXSwgc3RhcnRZOiBwb2ludHNbMV19KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBCcnVzaHN0cm9rZTtcclxuXHJcbn0pKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi91dGlscy9icnVzaHN0cm9rZS5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdHJlbmRlcigpIHtcclxuXHRcdGxldCBtZW51SXNPcGVuID0gdGhpcy5wcm9wcy5pc09wZW47XHJcblx0XHRjb25zdCByZW5kZXJNZW51ID0gbWVudUlzT3BlbiA/ICdzaWRlTWVudSBvcGVuTmF2JyA6ICdzaWRlTWVudSBjbG9zZU5hdidcclxuXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17cmVuZGVyTWVudX0+XHJcblx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cIm5hdlwiPlxyXG5cdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdCAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuXHRcdFx0XHQgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtzXCIgPkhvbWU8L2E+XHJcblx0XHRcdFx0ICAgICAgICA8L0xpbms+XHJcblx0XHRcdCAgICAgICAgPC9saT5cclxuXHRcdFx0ICAgIFx0PGxpPlxyXG5cdFx0XHRcdCAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtzXCIgaHJlZj1cIi9Qb3J0Zm9saW9cIj5cclxuXHRcdFx0XHQgICAgICAgICAgPGE+UG9ydGZvbGlvPC9hPlxyXG5cdFx0XHRcdCAgICAgICAgPC9MaW5rPlxyXG5cdFx0XHQgICAgICAgIDwvbGk+XHJcblx0XHRcdCAgICAgICAgPGxpPlxyXG5cdFx0XHRcdCAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtzXCIgaHJlZj1cIi9BYm91dFwiPlxyXG5cdFx0XHRcdCAgICAgICAgICA8YT5BYm91dDwvYT5cclxuXHRcdFx0XHQgICAgICAgIDwvTGluaz5cclxuXHRcdFx0XHQgICAgPC9saT5cclxuXHRcdFx0XHQgICAgPGxpPlxyXG5cdFx0XHRcdCAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtzXCIgaHJlZj1cIi9Db250YWN0XCI+XHJcblx0XHRcdFx0ICAgICAgICAgIDxhPkNvbnRhY3Q8L2E+XHJcblx0XHRcdFx0ICAgICAgICA8L0xpbms+XHJcblx0XHRcdCAgICAgICAgPC9saT5cclxuXHRcdCAgICAgICAgPC91bD5cclxuXHRcdCAgICAgICAgPHN0eWxlIGpzeD57YFxyXG5cdFx0ICAgICAgICBcdC5zaWRlTWVudSB7XHJcblx0XHQgICAgICAgIFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHQgICAgICAgIFx0XHRyaWdodDogMDtcclxuXHRcdCAgICAgICAgXHRcdGhlaWdodDogMTAwdmg7XHJcblx0XHQgICAgICAgIFx0XHR3aWR0aDogMzAwcHg7XHJcblx0XHQgICAgICAgIFx0XHRiYWNrZ3JvdW5kOiAjOTk5O1xyXG5cdFx0ICAgICAgICBcdFx0dHJhbnNpdGlvbjogLjVzO1xyXG5cdFx0ICAgICAgICBcdFx0ei1pbmRleDogMjtcclxuXHRcdCAgICAgICAgXHR9XHJcblx0XHQgICAgICAgIFx0Lm9wZW5OYXYge1xyXG5cdFx0ICAgICAgICBcdFx0cmlnaHQ6IDA7XHJcblx0XHQgICAgICAgIFx0fVxyXG5cdFx0ICAgICAgICBcdC5jbG9zZU5hdiB7XHJcblx0XHQgICAgICAgIFx0XHRyaWdodDogLTMwMHB4O1xyXG5cdFx0ICAgICAgICBcdH1cclxuXHRcdCAgICAgICAgICAgIC5uYXYge1xyXG5cdFx0ICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcblx0XHQgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG5cdFx0ICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuXHRcdCAgICAgICAgICAgICAgICB0b3A6IDExMHB4O1xyXG4gICAgXHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdCAgICAgICAgICAgIH1cclxuXHRcdCAgICAgICAgICAgIC5uYXYgbGkge1xyXG5cdFx0ICAgICAgICAgICAgXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcblx0XHQgICAgICAgICAgICB9XHJcblx0XHQgICAgICAgICAgICAubmF2IGxpOmZpcnN0LW9mLXR5cGUge1xyXG5cdFx0ICAgICAgICAgICAgXHRib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XHJcblx0XHQgICAgICAgICAgICB9XHJcblx0XHQgICAgICAgICAgICAubmF2IGEge1xyXG5cdFx0ICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRcdCAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcblx0XHQgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcblx0XHQgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuXHRcdCAgICAgICAgICAgIH1cclxuXHRcdCAgICAgICAgYH08L3N0eWxlPlxyXG5cdFx0ICAgIDwvZGl2PlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL05hdi5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBRUE7QUFDQTs7Ozs7OztBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7O0FBRUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUdBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVpBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUNBOzs7O0FBR0E7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTs7QUFEQTtBQWFBO0FBYkE7Ozs7O0FBcENBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFLQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTs7Ozs7QUFHQTtBQUFBOzs7O0FBSUE7QUFBQTs7OztBQUlBO0FBQUE7QUFDQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBR0E7QUFIQTs7Ozs7O0FBaENBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFHQTtBQUhBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBR0E7QUFIQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUdBO0FBSEE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFJQTtBQUpBO0FBSUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE0QkE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBQUE7QUFBQTtBQTJCQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFEQTtBQUdBO0FBRUE7QUFBQTtBQUNBO0FBS0E7Ozs7QUFZQTs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFFQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFHQTs7OztBQUFBO0FBQ0E7QUFLQTs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUVBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBbkJBO0FBb0JBO0FBU0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFJQTtBQXpKQTtBQUNBO0FBNEpBOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQTdCQTtBQUNBO0FBZ0NBOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFwQ0E7QUFDQTtBQXFDQTtBQUdBO0FBQ0E7QUFHQTs7OztBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQVBBO0FBQ0E7QUFRQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUFBO0FBREE7QUFTQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBREE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUdBOzs7O0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUE1QkE7QUFDQTtBQTJCQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUVBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUZBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUNBO0FBVEE7QUFVQTtBQUVBO0FBQ0E7QUFsQkE7QUFtQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBWkE7QUFlQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUVBOztBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUdBOztBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUVBO0FBRUE7QUFDQTtBQURBO0FBQ0E7O0FBRUE7QUFDQTtBQURBO0FBS0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFFQTtBQUZBO0FBSUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQW5FQTtBQTdPQTtBQUNBO0FBaVRBO0FBejVCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW5CQTtBQTZEQTtBQTdEQTs7Ozs7QUFOQTtBQUNBOzs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        