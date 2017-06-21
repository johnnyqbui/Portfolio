
          window.__NEXT_REGISTER_PAGE('/Portfolio', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _OuterContainer = __webpack_require__(549);

var _OuterContainer2 = _interopRequireDefault(_OuterContainer);

var _Projects = __webpack_require__(559);

var _Projects2 = _interopRequireDefault(_Projects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Johnny\\Desktop\\personal-portfolio\\pages\\Portfolio.js?entry';

exports.default = function () {
	return _react2.default.createElement(_OuterContainer2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 5
		}
	}, _react2.default.createElement(_Projects2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 6
		}
	}));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Johnny\\Desktop\\personal-portfolio\\pages\\Portfolio.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Johnny\\Desktop\\personal-portfolio\\pages\\Portfolio.js"); } } })();
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
    })(module.exports.default || module.exports, "/Portfolio")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 544:
/***/ (function(module, exports) {

var __styledJsxDefaultExport = new String("body{margin:0;padding:0;overflow-x:hidden}p,h1,h2,h3,h4,h5,h6,a{font-family:'Raleway', sans-serif;font-weight:200;margin:0;padding:0}a{-webkit-text-decoration:none;text-decoration:none}*,*:after,*:before{-webkit-box-sizing:border-box;box-sizing:border-box}.pageWrap{-webkit-transform:translate3d(0, 0, 0) rotateY(0);-webkit-transform:translate3d(0, 0, 0) rotateY(0);-ms-transform:translate3d(0, 0, 0) rotateY(0);transform:translate3d(0, 0, 0) rotateY(0);-webkit-transform-style:preserve-3d;-webkit-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transition:0.5s;-webkit-transition:0.5s;transition:0.5s;overflow-x:hidden;height:100vh;background:#fff}.pageWrapActive{-webkit-transform:translate3d(-100px, 0px, -600px) rotateY(20deg);-webkit-transform:translate3d(-100px, 0px, -600px) rotateY(20deg);-ms-transform:translate3d(-100px, 0px, -600px) rotateY(20deg);transform:translate3d(-100px, 0px, -600px) rotateY(20deg);overflow:hidden}0%{z-index:2}100%{z-index:0}@-webkit-keyframes delayed{0%{z-index:2}100%{z-index:0}}@keyframes delayed{0%{z-index:2}100%{z-index:0}}.delayed-Z{-webkit-animation-name:delayed;-webkit-animation-name:delayed;animation-name:delayed;-webkit-animation-delay:.5s;-webkit-animation-delay:.5s;animation-delay:.5s;-webkit-animation-fill-mode:forwards;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.overlay{height:100%;width:100%;position:fixed;background:rgba(100, 100, 100, 0);-webkit-transition:.5s;-webkit-transition:.5s;transition:.5s;z-index:2}.overlay--active{background:rgba(100, 100, 100, 0.3)}.outerContainer{height:100%;-webkit-perspective:1500px;-webkit-perspective:1500px;-moz-perspective:1500px;-ms-perspective:1500px;perspective:1500px;-webkit-transition:0.5s;-webkit-transition:0.5s;transition:0.5s}.background__menu{position:fixed;z-index:0;width:100%;height:100%;background:-webkit-gradient(linear, left top, left bottom, color-stop(1%, rgba(121, 34, 34, 0.87)), to(#2f2f38));background:linear-gradient(to bottom, rgba(121, 34, 34, 0.87) 1%, #2f2f38 100%);opacity:1}.morphClose .dot:nth-of-type(1){-webkit-transform:translate(0px, 0px);-webkit-transform:translate(0px, 0px);-ms-transform:translate(0px, 0px);transform:translate(0px, 0px)}.morphClose .dot:nth-of-type(2){-webkit-transform:translate(7px, 7px);-webkit-transform:translate(7px, 7px);-ms-transform:translate(7px, 7px);transform:translate(7px, 7px)}.morphClose .dot:nth-of-type(3){-webkit-transform:translate(30px, 0px);-webkit-transform:translate(30px, 0px);-ms-transform:translate(30px, 0px);transform:translate(30px, 0px)}.morphClose .dot:nth-of-type(4){-webkit-transform:translate(7px, 23px);-webkit-transform:translate(7px, 23px);-ms-transform:translate(7px, 23px);transform:translate(7px, 23px)}.morphClose .dot:nth-of-type(5){-webkit-transform:translate(15px, 15px);-webkit-transform:translate(15px, 15px);-ms-transform:translate(15px, 15px);transform:translate(15px, 15px)}.morphClose .dot:nth-of-type(6){-webkit-transform:translate(23px, 7px);-webkit-transform:translate(23px, 7px);-ms-transform:translate(23px, 7px);transform:translate(23px, 7px)}.morphClose .dot:nth-of-type(7){-webkit-transform:translate(0px, 30px);-webkit-transform:translate(0px, 30px);-ms-transform:translate(0px, 30px);transform:translate(0px, 30px)}.morphClose .dot:nth-of-type(8){-webkit-transform:translate(23px, 23px);-webkit-transform:translate(23px, 23px);-ms-transform:translate(23px, 23px);transform:translate(23px, 23px)}.morphClose .dot:nth-of-type(9){-webkit-transform:translate(30px, 30px);-webkit-transform:translate(30px, 30px);-ms-transform:translate(30px, 30px);transform:translate(30px, 30px)}.morphClose:hover .dot{background-color:#222}.morphClose:hover .dot:nth-of-type(1){-webkit-transform:translate(-3px, -3px);-webkit-transform:translate(-3px, -3px);-ms-transform:translate(-3px, -3px);transform:translate(-3px, -3px)}.morphClose:hover .dot:nth-of-type(2){-webkit-transform:translate(6px, 6px);-webkit-transform:translate(6px, 6px);-ms-transform:translate(6px, 6px);transform:translate(6px, 6px)}.morphClose:hover .dot:nth-of-type(3){-webkit-transform:translate(33px, -3px);-webkit-transform:translate(33px, -3px);-ms-transform:translate(33px, -3px);transform:translate(33px, -3px)}.morphClose:hover .dot:nth-of-type(4){-webkit-transform:translate(6px, 24px);-webkit-transform:translate(6px, 24px);-ms-transform:translate(6px, 24px);transform:translate(6px, 24px)}.morphClose:hover .dot:nth-of-type(5){-webkit-transform:translate(15px, 15px);-webkit-transform:translate(15px, 15px);-ms-transform:translate(15px, 15px);transform:translate(15px, 15px)}.morphClose:hover .dot:nth-of-type(6){-webkit-transform:translate(24px, 6px);-webkit-transform:translate(24px, 6px);-ms-transform:translate(24px, 6px);transform:translate(24px, 6px)}.morphClose:hover .dot:nth-of-type(7){-webkit-transform:translate(-3px, 33px);-webkit-transform:translate(-3px, 33px);-ms-transform:translate(-3px, 33px);transform:translate(-3px, 33px)}.morphClose:hover .dot:nth-of-type(8){-webkit-transform:translate(24px, 24px);-webkit-transform:translate(24px, 24px);-ms-transform:translate(24px, 24px);transform:translate(24px, 24px)}.morphClose:hover .dot:nth-of-type(9){-webkit-transform:translate(33px, 33px);-webkit-transform:translate(33px, 33px);-ms-transform:translate(33px, 33px);transform:translate(33px, 33px)}.morphOpen .dot:nth-of-type(1){-webkit-transform:translate(0px, 0px);-webkit-transform:translate(0px, 0px);-ms-transform:translate(0px, 0px);transform:translate(0px, 0px)}.morphOpen .dot:nth-of-type(2){-webkit-transform:translate(15px, 0px);-webkit-transform:translate(15px, 0px);-ms-transform:translate(15px, 0px);transform:translate(15px, 0px)}.morphOpen .dot:nth-of-type(3){-webkit-transform:translate(30px, 0px);-webkit-transform:translate(30px, 0px);-ms-transform:translate(30px, 0px);transform:translate(30px, 0px)}.morphOpen .dot:nth-of-type(4){-webkit-transform:translate(0px, 15px);-webkit-transform:translate(0px, 15px);-ms-transform:translate(0px, 15px);transform:translate(0px, 15px)}.morphOpen .dot:nth-of-type(5){-webkit-transform:translate(15px, 15px);-webkit-transform:translate(15px, 15px);-ms-transform:translate(15px, 15px);transform:translate(15px, 15px)}.morphOpen .dot:nth-of-type(6){-webkit-transform:translate(30px, 15px);-webkit-transform:translate(30px, 15px);-ms-transform:translate(30px, 15px);transform:translate(30px, 15px)}.morphOpen .dot:nth-of-type(7){-webkit-transform:translate(0px, 30px);-webkit-transform:translate(0px, 30px);-ms-transform:translate(0px, 30px);transform:translate(0px, 30px)}.morphOpen .dot:nth-of-type(8){-webkit-transform:translate(15px, 30px);-webkit-transform:translate(15px, 30px);-ms-transform:translate(15px, 30px);transform:translate(15px, 30px)}.morphOpen .dot:nth-of-type(9){-webkit-transform:translate(30px, 30px);-webkit-transform:translate(30px, 30px);-ms-transform:translate(30px, 30px);transform:translate(30px, 30px)}.morphOpen:hover .dot{background-color:#222}.morphOpen:hover .dot:nth-of-type(1){-webkit-transform:translate(-3px, -3px);-webkit-transform:translate(-3px, -3px);-ms-transform:translate(-3px, -3px);transform:translate(-3px, -3px)}.morphOpen:hover .dot:nth-of-type(2){-webkit-transform:translate(15px, 0px);-webkit-transform:translate(15px, 0px);-ms-transform:translate(15px, 0px);transform:translate(15px, 0px)}.morphOpen:hover .dot:nth-of-type(3){-webkit-transform:translate(33px, -3px);-webkit-transform:translate(33px, -3px);-ms-transform:translate(33px, -3px);transform:translate(33px, -3px)}.morphOpen:hover .dot:nth-of-type(4){-webkit-transform:translate(0px, 15px);-webkit-transform:translate(0px, 15px);-ms-transform:translate(0px, 15px);transform:translate(0px, 15px)}.morphOpen:hover .dot:nth-of-type(5){-webkit-transform:translate(15px, 15px);-webkit-transform:translate(15px, 15px);-ms-transform:translate(15px, 15px);transform:translate(15px, 15px)}.morphOpen:hover .dot:nth-of-type(6){-webkit-transform:translate(30px, 15px);-webkit-transform:translate(30px, 15px);-ms-transform:translate(30px, 15px);transform:translate(30px, 15px)}.morphOpen:hover .dot:nth-of-type(7){-webkit-transform:translate(-3px, 33px);-webkit-transform:translate(-3px, 33px);-ms-transform:translate(-3px, 33px);transform:translate(-3px, 33px)}.morphOpen:hover .dot:nth-of-type(8){-webkit-transform:translate(15px, 30px);-webkit-transform:translate(15px, 30px);-ms-transform:translate(15px, 30px);transform:translate(15px, 30px)}.morphOpen:hover .dot:nth-of-type(9){-webkit-transform:translate(33px, 33px);-webkit-transform:translate(33px, 33px);-ms-transform:translate(33px, 33px);transform:translate(33px, 33px)}.menu{position:fixed;top:30px;right:30px;height:40px;width:40px;cursor:pointer;z-index:4}.menu .dot{position:absolute;width:5px;height:5px;background-color:#7d7d7d;-webkit-transition:0.2s ease-in-out;-webkit-transition:0.2s ease-in-out;transition:0.2s ease-in-out}.project__list{display:block;margin:50px auto;-webkit-text-align:center;text-align:center;max-width:800px}.project{max-width:350px;width:100%;margin:40px 25px;display:inline-block;-webkit-box-shadow:2px 5px 20px 10px rgba(46, 61, 73, 0.2);box-shadow:2px 5px 20px 10px rgba(46, 61, 73, 0.2);border-radius:2%;overflow:hidden;-webkit-transition:.5s;-webkit-transition:.5s;transition:.5s}.project .project__img--container{position:relative}.project .project__img--container img{width:100%}.project .project__img--container .project__image--overlay{position:absolute;top:0;left:0;width:100%;height:100%;-webkit-transition:.5s;-webkit-transition:.5s;transition:.5s}.project:hover{-webkit-box-shadow:2px 5px 20px 0 rgba(46, 61, 73, 0.2);box-shadow:2px 5px 20px 0 rgba(46, 61, 73, 0.2)}.project:hover .project__info a{color:#8e8e8e}.project:hover:nth-of-type(1){-webkit-transition:.5s;-webkit-transition:.5s;transition:.5s}.project:nth-of-type(1) .project__image--overlay{background:-webkit-gradient(linear, left top, left bottom, from(rgba(45, 229, 192, 0.5)), to(rgba(137, 255, 178, 0.8)));background:linear-gradient(to bottom, rgba(45, 229, 192, 0.5) 0%, rgba(137, 255, 178, 0.8) 100%)}.project:nth-of-type(1) .project__info div{border:1px solid rgba(137, 255, 178, 0.8)}.project:nth-of-type(2) .project__image--overlay{background:-webkit-gradient(linear, left top, left bottom, from(rgba(49, 102, 247, 0.5)), to(rgba(190, 133, 247, 0.7)));background:linear-gradient(to bottom, rgba(49, 102, 247, 0.5) 0%, rgba(190, 133, 247, 0.7) 100%)}.project:nth-of-type(2) .project__info div{border:1px solid rgba(190, 133, 247, 0.8)}.project:nth-of-type(3) .project__image--overlay{background:-webkit-gradient(linear, left top, left bottom, from(rgba(237, 47, 47, 0.5)), to(rgba(175, 96, 166, 0.8)));background:linear-gradient(to bottom, rgba(237, 47, 47, 0.5) 0%, rgba(175, 96, 166, 0.8) 100%)}.project:nth-of-type(3) .project__info div{border:1px solid rgba(175, 96, 166, 0.8)}.project:nth-of-type(4) .project__image--overlay{background:-webkit-gradient(linear, left top, left bottom, from(rgba(37, 94, 186, 0.4)), to(rgba(47, 53, 86, 0.8)));background:linear-gradient(to bottom, rgba(37, 94, 186, 0.4) 0%, rgba(47, 53, 86, 0.8) 100%)}.project:nth-of-type(4) .project__info div{border:1px solid rgba(37, 94, 186, 0.8)}.project:nth-of-type(5) .project__image--overlay{background:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 187, 50, 0.6)), to(rgba(255, 188, 137, 0.9)));background:linear-gradient(to bottom, rgba(255, 187, 50, 0.6) 0%, rgba(255, 188, 137, 0.9) 100%)}.project:nth-of-type(5) .project__info div{border:1px solid rgba(255, 188, 137, 0.9)}.project .project__info{-webkit-text-align:left;text-align:left;margin:35px 30px;font-size:14px}.project .project__info h2{font-weight:500;color:#555}.project .project__info p{font-weight:500;color:#777}.project .project__info a{display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;height:100%;color:#b1b1b1;font-weight:500;-webkit-transition:.5s;-webkit-transition:.5s;transition:.5s}.project .project__info div{width:135px;height:35px;margin:20px 5px 5px 5px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;background:#fff;-webkit-transition:.5s;-webkit-transition:.5s;transition:.5s}.social{position:absolute;top:400px;right:0;z-index:3;margin:0 30px;-webkit-transform:translate3d(512px, 0, 0) rotateY(0);-webkit-transform:translate3d(512px, 0, 0) rotateY(0);-ms-transform:translate3d(512px, 0, 0) rotateY(0);transform:translate3d(512px, 0, 0) rotateY(0);-webkit-transform-style:preserve-3d;-webkit-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transition:0.5s;-webkit-transition:0.5s;transition:0.5s;overflow:hidden}.socialActive{-webkit-transform:translate3d(0, 0, 0) rotateY(0);-webkit-transform:translate3d(0, 0, 0) rotateY(0);-ms-transform:translate3d(0, 0, 0) rotateY(0);transform:translate3d(0, 0, 0) rotateY(0)}.social ul{list-style-type:none;margin:0;padding:0}.social li{padding:10px;margin:5px}.social img{width:35px}@media (min-width:512px){.social{top:50%;-webkit-transform:translate3d(0, -50%, 0) rotateY(0);-webkit-transform:translate3d(0, -50%, 0) rotateY(0);-ms-transform:translate3d(0, -50%, 0) rotateY(0);transform:translate3d(0, -50%, 0) rotateY(0);-webkit-transform-style:preserve-3d;-webkit-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;right:auto}.socialActive{-webkit-transform:translate3d(-100px, -50%, -600px) rotateY(20deg);-webkit-transform:translate3d(-100px, -50%, -600px) rotateY(20deg);-ms-transform:translate3d(-100px, -50%, -600px) rotateY(20deg);transform:translate3d(-100px, -50%, -600px) rotateY(20deg)}.social li{padding:10px;margin:30px 0}.social img{width:25px}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlc1xcc3R5bGVzaGVldC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEFBRVksQUFFeUIsQUFFYixBQUVTLEFBRW9CLEFBRWdCLEFBR3RELEFBQ0EsQUFHQSxBQUNBLEFBRW1CLEFBRW5CLEFBRXdCLEFBRXhCLEFBRUcsQUFFdUIsQUFFQSxBQUVDLEFBRUEsQUFFQyxBQUVELEFBRUEsQUFFQyxBQUVBLEFBRWxCLEFBRW9CLEFBRUYsQUFFRSxBQUVELEFBRUMsQUFFRCxBQUVDLEFBRUEsQUFFQSxBQUVKLEFBRUMsQUFFQSxBQUVBLEFBRUMsQUFFQSxBQUVELEFBRUMsQUFFQSxBQUVsQixBQUVvQixBQUVELEFBRUMsQUFFRCxBQUVDLEFBRUEsQUFFQSxBQUVBLEFBRUEsQUFFM0IsQUFFSyxBQUVOLEFBRUUsQUFFSSxBQUVMLEFBRU8sQUFFb0MsQUFFeEMsQUFFTyxBQUVpRyxBQUU5RSxBQUU4RSxBQUU5RSxBQUU0RSxBQUU3RSxBQUUyRSxBQUU1RSxBQUVnRixBQUU5RSxBQUUxQixBQUVFLEFBRUEsQUFFSSxBQUVSLEFBRUUsQUFFZ0MsQUFFN0IsQUFFUixBQUVGLEFBR0QsQUFDMkQsQUFDdEQsQUFDRixTQUh1RCxDQXZLOUMsQ0FhVCxBQUNBLEFBR0EsQUFDQSxDQWtHRyxBQWdESixBQU1FLENBcEpZLEFBSWdCLEFBZ0lQLENBUVIsQUFPTyxDQTNEQSxBQVlmLENBOUZTLEFBOEVELENBTUcsQUFvQ1EsQUFFQSxFQTFDSCxBQU1kLEFBSWMsQUFzQ0osRUE1SlksQUF3SlEsQ0FRbEIsQ0FoSFYsQUFzQ0EsQ0FzQ3NCLENBdEdELENBb0ZILEFBWVEsQUFvQ2lCLEFBUXRDLENBdEljLEVBb0ZRLEFBb0NYLEFBRUEsQUFtQkosQ0E3RGdCLEFBZ0RULENBdEphLENBY1UsQUE0SW5CLENBbERTLENBUVksQ0FwSGQsRUFzQmhCLENBa0ZtQixDQTlFQyxBQUVzQixBQUVBLEFBb0JJLEFBZ0JKLEFBd0Z4QixDQTVKWCxBQWtDcUMsQUFFQSxBQUlBLEFBRUEsQUFjSSxBQUlBLEFBVUosQUFFQSxBQUVBLEFBTUEsQUFVSSxBQUlBLENBeEVKLEFBSVQsQUFZVyxBQU1BLEFBRUEsQUFJSSxBQUlBLEFBSUEsQUFJQSxBQUVBLEFBRUEsQUFVSixBQUVBLEFBSUEsQUFFQSxBQUlJLEFBSUEsQUFJQSxBQUVBLEFBRUEsQUFFQSxBQUVBLEFBb0M1QyxDQWhDc0MsQUE0QnJDLEFBVUosQUFNK0IsQ0F4QjFCLEFBSUEsQUFZQSxBQWdCRSxHQTFDdUMsQ0FOWixHQTRDRixDQXBKK0IsQUFrR2pDLEFBZ0Q4QixBQUlHLENBNUp0QyxBQUUzQyxBQXdCdUosRUF0QnJILEdBa0grRCxFQUZILENBNEJ4RCxFQWhKa0IsQ0F3R1UsQUE2RHNDLENBM0NoRixDQWdDbUYsRUFsSk0sQ0FrR2IsQUE0RG1CLENBeERMLElBOUd6RCxHQW9CNEIsQUE0SDlDLEdBeEN3QyxBQUkzQixBQTRDNEQsSUFwQ0ksR0FsRzFDLElBc0ZNLE1BSTNCLElBeEZrRCxLQXNGOEIsQ0FZbkMsQ0FrQ3lDLFFBdElsQyxFQXNIeUYsRUFKSSxDQWtCdEgsQUFJb0YsQ0E5QnNDLEFBSUEsQUFZQSxFQXhCckYsTUFOMkQsU0F0Rm5HLEVBSnVDLElBUTFELEFBRUEsQUFvQkksQUFnQkosQ0FvRnNELEdBdEhwRCxBQUVBLEFBSUEsQUFFQSxBQWNJLEFBSUEsQUFVSixBQUVBLEFBRUEsQUFNQSxBQVVJLEFBSUEsR0F4RXFELENBZ0J2RCxBQU1BLEFBRUEsQUFJSSxBQUlBLEFBSUEsQUFJQSxBQUVBLEFBRUEsQUFVSixBQUVBLEFBSUEsQUFFQSxBQUlJLEFBSUEsQUFJQSxBQUVBLEFBRUEsQUFFQSxBQUVBLFdBcEYrRSxBQU1qRCxHQUUwSSxDQTRIcEYsSUE1Q2hCLFVBSThELFdBeEc1RSxBQXNKdEMsT0E5Q3FJLEVBNUY5QixJQU14RixNQWdIa0csRUFnQmpDLEFBYWpCLEVBakNzRCxDQXRCMEMsR0FjdEMsQUFJQSxBQVlBLFVBdEk1QyxDQWtKaUMsVUExQ21FLE9BcEZaLEdBMkk3RCxJQWI0QixFQWhKbEYsRUFrQm9ILEVBNEloSSxPQXBKa0UsR0FvSUosR0E5SWpELEFBa0pzRSxPQTVDeUQsY0EwQzdDLEVBRkEsY0FJMkIsU0FKTyxTQWhKL0QscUJBK0pnQixJQS9KRyxRQStKRixrQ0EvSnVCLGNBb0oyQyxLQXBKM0IsRUFnSnlCLFlBaEpOLEFBZ0p5QixNQUlFLE9BSm1CLElBaEo3QyxXQWdKb0UsaUJBQThCLEdBSXJELGlCQUFDLElBSjBFLHdDQUFDIiwiZmlsZSI6InN0eWxlc1xcc3R5bGVzaGVldC5zY3NzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0pvaG5ueS9EZXNrdG9wL3BlcnNvbmFsLXBvcnRmb2xpbyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCJib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47IH1cXG5cXG5wLCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBhIHtcXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogMjAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDsgfVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuXFxuKiwgKjphZnRlciwgKjpiZWZvcmUge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbi5wYWdlV3JhcCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgcm90YXRlWSgwKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSByb3RhdGVZKDApO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmOyB9XFxuXFxuLnBhZ2VXcmFwQWN0aXZlIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwcHgsIDBweCwgLTYwMHB4KSByb3RhdGVZKDIwZGVnKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwcHgsIDBweCwgLTYwMHB4KSByb3RhdGVZKDIwZGVnKTtcXG4gIG92ZXJmbG93OiBoaWRkZW47IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZGVsYXllZCB7XFxuICAwJSB7XFxuICAgIHotaW5kZXg6IDI7IH1cXG4gIDEwMCUge1xcbiAgICB6LWluZGV4OiAwOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGRlbGF5ZWQge1xcbiAgMCUge1xcbiAgICB6LWluZGV4OiAyOyB9XFxuICAxMDAlIHtcXG4gICAgei1pbmRleDogMDsgfSB9XFxuXFxuLmRlbGF5ZWQtWiB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBkZWxheWVkO1xcbiAgICAgICAgICBhbmltYXRpb24tbmFtZTogZGVsYXllZDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAuNXM7XFxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLjVzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7IH1cXG5cXG4ub3ZlcmxheSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMTAwLCAxMDAsIDEwMCwgMCk7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IC41cztcXG4gIHRyYW5zaXRpb246IC41cztcXG4gIHotaW5kZXg6IDI7IH1cXG5cXG4ub3ZlcmxheS0tYWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMTAwLCAxMDAsIDEwMCwgMC4zKTsgfVxcblxcbi5vdXRlckNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxNTAwcHg7XFxuICAgICAgICAgIHBlcnNwZWN0aXZlOiAxNTAwcHg7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXM7XFxuICB0cmFuc2l0aW9uOiAwLjVzOyB9XFxuXFxuLmJhY2tncm91bmRfX21lbnUge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgxJSwgcmdiYSgxMjEsIDM0LCAzNCwgMC44NykpLCB0bygjMmYyZjM4KSk7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDEyMSwgMzQsIDM0LCAwLjg3KSAxJSwgIzJmMmYzOCAxMDAlKTtcXG4gIG9wYWNpdHk6IDE7IH1cXG5cXG4ubW9ycGhDbG9zZSAuZG90Om50aC1vZi10eXBlKDEpIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7IH1cXG5cXG4ubW9ycGhDbG9zZSAuZG90Om50aC1vZi10eXBlKDIpIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoN3B4LCA3cHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg3cHgsIDdweCk7IH1cXG5cXG4ubW9ycGhDbG9zZSAuZG90Om50aC1vZi10eXBlKDMpIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzBweCwgMHB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzBweCwgMHB4KTsgfVxcblxcbi5tb3JwaENsb3NlIC5kb3Q6bnRoLW9mLXR5cGUoNCkge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSg3cHgsIDIzcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg3cHgsIDIzcHgpOyB9XFxuXFxuLm1vcnBoQ2xvc2UgLmRvdDpudGgtb2YtdHlwZSg1KSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDE1cHgsIDE1cHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNXB4LCAxNXB4KTsgfVxcblxcbi5tb3JwaENsb3NlIC5kb3Q6bnRoLW9mLXR5cGUoNikge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgyM3B4LCA3cHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyM3B4LCA3cHgpOyB9XFxuXFxuLm1vcnBoQ2xvc2UgLmRvdDpudGgtb2YtdHlwZSg3KSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMzBweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMzBweCk7IH1cXG5cXG4ubW9ycGhDbG9zZSAuZG90Om50aC1vZi10eXBlKDgpIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjNweCwgMjNweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIzcHgsIDIzcHgpOyB9XFxuXFxuLm1vcnBoQ2xvc2UgLmRvdDpudGgtb2YtdHlwZSg5KSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDMwcHgsIDMwcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMHB4LCAzMHB4KTsgfVxcblxcbi5tb3JwaENsb3NlOmhvdmVyIC5kb3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjsgfVxcblxcbi5tb3JwaENsb3NlOmhvdmVyIC5kb3Q6bnRoLW9mLXR5cGUoMSkge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIC0zcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIC0zcHgpOyB9XFxuXFxuLm1vcnBoQ2xvc2U6aG92ZXIgLmRvdDpudGgtb2YtdHlwZSgyKSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoNnB4LCA2cHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDZweCwgNnB4KTsgfVxcblxcbi5tb3JwaENsb3NlOmhvdmVyIC5kb3Q6bnRoLW9mLXR5cGUoMykge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDMzcHgsIC0zcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDMzcHgsIC0zcHgpOyB9XFxuXFxuLm1vcnBoQ2xvc2U6aG92ZXIgLmRvdDpudGgtb2YtdHlwZSg0KSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoNnB4LCAyNHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg2cHgsIDI0cHgpOyB9XFxuXFxuLm1vcnBoQ2xvc2U6aG92ZXIgLmRvdDpudGgtb2YtdHlwZSg1KSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTVweCwgMTVweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTVweCwgMTVweCk7IH1cXG5cXG4ubW9ycGhDbG9zZTpob3ZlciAuZG90Om50aC1vZi10eXBlKDYpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNHB4LCA2cHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDI0cHgsIDZweCk7IH1cXG5cXG4ubW9ycGhDbG9zZTpob3ZlciAuZG90Om50aC1vZi10eXBlKDcpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtM3B4LCAzM3B4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtM3B4LCAzM3B4KTsgfVxcblxcbi5tb3JwaENsb3NlOmhvdmVyIC5kb3Q6bnRoLW9mLXR5cGUoOCkge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDI0cHgsIDI0cHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDI0cHgsIDI0cHgpOyB9XFxuXFxuLm1vcnBoQ2xvc2U6aG92ZXIgLmRvdDpudGgtb2YtdHlwZSg5KSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzNweCwgMzNweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzNweCwgMzNweCk7IH1cXG5cXG4ubW9ycGhPcGVuIC5kb3Q6bnRoLW9mLXR5cGUoMSkge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTsgfVxcblxcbi5tb3JwaE9wZW4gLmRvdDpudGgtb2YtdHlwZSgyKSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDE1cHgsIDBweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE1cHgsIDBweCk7IH1cXG5cXG4ubW9ycGhPcGVuIC5kb3Q6bnRoLW9mLXR5cGUoMykge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMHB4LCAwcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMHB4LCAwcHgpOyB9XFxuXFxuLm1vcnBoT3BlbiAuZG90Om50aC1vZi10eXBlKDQpIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAxNXB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAxNXB4KTsgfVxcblxcbi5tb3JwaE9wZW4gLmRvdDpudGgtb2YtdHlwZSg1KSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDE1cHgsIDE1cHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNXB4LCAxNXB4KTsgfVxcblxcbi5tb3JwaE9wZW4gLmRvdDpudGgtb2YtdHlwZSg2KSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDMwcHgsIDE1cHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMHB4LCAxNXB4KTsgfVxcblxcbi5tb3JwaE9wZW4gLmRvdDpudGgtb2YtdHlwZSg3KSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMzBweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMzBweCk7IH1cXG5cXG4ubW9ycGhPcGVuIC5kb3Q6bnRoLW9mLXR5cGUoOCkge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNXB4LCAzMHB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTVweCwgMzBweCk7IH1cXG5cXG4ubW9ycGhPcGVuIC5kb3Q6bnRoLW9mLXR5cGUoOSkge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMHB4LCAzMHB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzBweCwgMzBweCk7IH1cXG5cXG4ubW9ycGhPcGVuOmhvdmVyIC5kb3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjsgfVxcblxcbi5tb3JwaE9wZW46aG92ZXIgLmRvdDpudGgtb2YtdHlwZSgxKSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTNweCwgLTNweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTNweCwgLTNweCk7IH1cXG5cXG4ubW9ycGhPcGVuOmhvdmVyIC5kb3Q6bnRoLW9mLXR5cGUoMikge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDE1cHgsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTVweCwgMHB4KTsgfVxcblxcbi5tb3JwaE9wZW46aG92ZXIgLmRvdDpudGgtb2YtdHlwZSgzKSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzNweCwgLTNweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzNweCwgLTNweCk7IH1cXG5cXG4ubW9ycGhPcGVuOmhvdmVyIC5kb3Q6bnRoLW9mLXR5cGUoNCkge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMTVweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAxNXB4KTsgfVxcblxcbi5tb3JwaE9wZW46aG92ZXIgLmRvdDpudGgtb2YtdHlwZSg1KSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTVweCwgMTVweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTVweCwgMTVweCk7IH1cXG5cXG4ubW9ycGhPcGVuOmhvdmVyIC5kb3Q6bnRoLW9mLXR5cGUoNikge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDMwcHgsIDE1cHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDMwcHgsIDE1cHgpOyB9XFxuXFxuLm1vcnBoT3Blbjpob3ZlciAuZG90Om50aC1vZi10eXBlKDcpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtM3B4LCAzM3B4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtM3B4LCAzM3B4KTsgfVxcblxcbi5tb3JwaE9wZW46aG92ZXIgLmRvdDpudGgtb2YtdHlwZSg4KSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTVweCwgMzBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTVweCwgMzBweCk7IH1cXG5cXG4ubW9ycGhPcGVuOmhvdmVyIC5kb3Q6bnRoLW9mLXR5cGUoOSkge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDMzcHgsIDMzcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDMzcHgsIDMzcHgpOyB9XFxuXFxuLm1lbnUge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAzMHB4O1xcbiAgcmlnaHQ6IDMwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogNDBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHotaW5kZXg6IDQ7IH1cXG5cXG4ubWVudSAuZG90IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogNXB4O1xcbiAgICBoZWlnaHQ6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdkN2Q3ZDtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0OyB9XFxuXFxuLnByb2plY3RfX2xpc3Qge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDUwcHggYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1heC13aWR0aDogODAwcHg7IH1cXG5cXG4ucHJvamVjdCB7XFxuICBtYXgtd2lkdGg6IDM1MHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDQwcHggMjVweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDVweCAyMHB4IDEwcHggcmdiYSg0NiwgNjEsIDczLCAwLjIpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAycHggNXB4IDIwcHggMTBweCByZ2JhKDQ2LCA2MSwgNzMsIDAuMik7XFxuICBib3JkZXItcmFkaXVzOiAyJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICAtd2Via2l0LXRyYW5zaXRpb246IC41cztcXG4gIHRyYW5zaXRpb246IC41czsgfVxcblxcbi5wcm9qZWN0IC5wcm9qZWN0X19pbWctLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblxcbi5wcm9qZWN0IC5wcm9qZWN0X19pbWctLWNvbnRhaW5lciBpbWcge1xcbiAgICAgIHdpZHRoOiAxMDAlOyB9XFxuXFxuLnByb2plY3QgLnByb2plY3RfX2ltZy0tY29udGFpbmVyIC5wcm9qZWN0X19pbWFnZS0tb3ZlcmxheSB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IC41cztcXG4gICAgICB0cmFuc2l0aW9uOiAuNXM7IH1cXG5cXG4ucHJvamVjdDpob3ZlciB7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDVweCAyMHB4IDAgcmdiYSg0NiwgNjEsIDczLCAwLjIpO1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCA1cHggMjBweCAwIHJnYmEoNDYsIDYxLCA3MywgMC4yKTsgfVxcblxcbi5wcm9qZWN0OmhvdmVyIC5wcm9qZWN0X19pbmZvIGEge1xcbiAgICAgIGNvbG9yOiAjOGU4ZThlOyB9XFxuXFxuLnByb2plY3Q6aG92ZXI6bnRoLW9mLXR5cGUoMSkge1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC41cztcXG4gICAgdHJhbnNpdGlvbjogLjVzOyB9XFxuXFxuLnByb2plY3Q6bnRoLW9mLXR5cGUoMSkgLnByb2plY3RfX2ltYWdlLS1vdmVybGF5IHtcXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbShyZ2JhKDQ1LCAyMjksIDE5MiwgMC41KSksIHRvKHJnYmEoMTM3LCAyNTUsIDE3OCwgMC44KSkpO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDQ1LCAyMjksIDE5MiwgMC41KSAwJSwgcmdiYSgxMzcsIDI1NSwgMTc4LCAwLjgpIDEwMCUpOyB9XFxuXFxuLnByb2plY3Q6bnRoLW9mLXR5cGUoMSkgLnByb2plY3RfX2luZm8gZGl2IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMzcsIDI1NSwgMTc4LCAwLjgpOyB9XFxuXFxuLnByb2plY3Q6bnRoLW9mLXR5cGUoMikgLnByb2plY3RfX2ltYWdlLS1vdmVybGF5IHtcXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbShyZ2JhKDQ5LCAxMDIsIDI0NywgMC41KSksIHRvKHJnYmEoMTkwLCAxMzMsIDI0NywgMC43KSkpO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDQ5LCAxMDIsIDI0NywgMC41KSAwJSwgcmdiYSgxOTAsIDEzMywgMjQ3LCAwLjcpIDEwMCUpOyB9XFxuXFxuLnByb2plY3Q6bnRoLW9mLXR5cGUoMikgLnByb2plY3RfX2luZm8gZGl2IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxOTAsIDEzMywgMjQ3LCAwLjgpOyB9XFxuXFxuLnByb2plY3Q6bnRoLW9mLXR5cGUoMykgLnByb2plY3RfX2ltYWdlLS1vdmVybGF5IHtcXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbShyZ2JhKDIzNywgNDcsIDQ3LCAwLjUpKSwgdG8ocmdiYSgxNzUsIDk2LCAxNjYsIDAuOCkpKTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyMzcsIDQ3LCA0NywgMC41KSAwJSwgcmdiYSgxNzUsIDk2LCAxNjYsIDAuOCkgMTAwJSk7IH1cXG5cXG4ucHJvamVjdDpudGgtb2YtdHlwZSgzKSAucHJvamVjdF9faW5mbyBkaXYge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE3NSwgOTYsIDE2NiwgMC44KTsgfVxcblxcbi5wcm9qZWN0Om50aC1vZi10eXBlKDQpIC5wcm9qZWN0X19pbWFnZS0tb3ZlcmxheSB7XFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20ocmdiYSgzNywgOTQsIDE4NiwgMC40KSksIHRvKHJnYmEoNDcsIDUzLCA4NiwgMC44KSkpO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDM3LCA5NCwgMTg2LCAwLjQpIDAlLCByZ2JhKDQ3LCA1MywgODYsIDAuOCkgMTAwJSk7IH1cXG5cXG4ucHJvamVjdDpudGgtb2YtdHlwZSg0KSAucHJvamVjdF9faW5mbyBkaXYge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDM3LCA5NCwgMTg2LCAwLjgpOyB9XFxuXFxuLnByb2plY3Q6bnRoLW9mLXR5cGUoNSkgLnByb2plY3RfX2ltYWdlLS1vdmVybGF5IHtcXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbShyZ2JhKDI1NSwgMTg3LCA1MCwgMC42KSksIHRvKHJnYmEoMjU1LCAxODgsIDEzNywgMC45KSkpO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDI1NSwgMTg3LCA1MCwgMC42KSAwJSwgcmdiYSgyNTUsIDE4OCwgMTM3LCAwLjkpIDEwMCUpOyB9XFxuXFxuLnByb2plY3Q6bnRoLW9mLXR5cGUoNSkgLnByb2plY3RfX2luZm8gZGl2IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDE4OCwgMTM3LCAwLjkpOyB9XFxuXFxuLnByb2plY3QgLnByb2plY3RfX2luZm8ge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBtYXJnaW46IDM1cHggMzBweDtcXG4gICAgZm9udC1zaXplOiAxNHB4OyB9XFxuXFxuLnByb2plY3QgLnByb2plY3RfX2luZm8gaDIge1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgY29sb3I6ICM1NTU7IH1cXG5cXG4ucHJvamVjdCAucHJvamVjdF9faW5mbyBwIHtcXG4gICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICAgIGNvbG9yOiAjNzc3OyB9XFxuXFxuLnByb2plY3QgLnByb2plY3RfX2luZm8gYSB7XFxuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICBjb2xvcjogI2IxYjFiMTtcXG4gICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjVzO1xcbiAgICAgIHRyYW5zaXRpb246IC41czsgfVxcblxcbi5wcm9qZWN0IC5wcm9qZWN0X19pbmZvIGRpdiB7XFxuICAgICAgd2lkdGg6IDEzNXB4O1xcbiAgICAgIGhlaWdodDogMzVweDtcXG4gICAgICBtYXJnaW46IDIwcHggNXB4IDVweCA1cHg7XFxuICAgICAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xcbiAgICAgIGRpc3BsYXk6IC1tcy1pbmxpbmUtZmxleGJveDtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjVzO1xcbiAgICAgIHRyYW5zaXRpb246IC41czsgfVxcblxcbi5zb2NpYWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA0MDBweDtcXG4gIHJpZ2h0OiAwO1xcbiAgei1pbmRleDogMztcXG4gIG1hcmdpbjogMCAzMHB4O1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDUxMnB4LCAwLCAwKSByb3RhdGVZKDApO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDUxMnB4LCAwLCAwKSByb3RhdGVZKDApO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG4gIG92ZXJmbG93OiBoaWRkZW47IH1cXG5cXG4uc29jaWFsQWN0aXZlIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSByb3RhdGVZKDApO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApIHJvdGF0ZVkoMCk7IH1cXG5cXG4uc29jaWFsIHVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG4uc29jaWFsIGxpIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW46IDVweDsgfVxcblxcbi5zb2NpYWwgaW1nIHtcXG4gIHdpZHRoOiAzNXB4OyB9XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDUxMnB4KSB7XFxuICAuc29jaWFsIHtcXG4gICAgdG9wOiA1MCU7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNTAlLCAwKSByb3RhdGVZKDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTUwJSwgMCkgcm90YXRlWSgwKTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxuICAgIHJpZ2h0OiBhdXRvOyB9XFxuICAuc29jaWFsQWN0aXZlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDBweCwgLTUwJSwgLTYwMHB4KSByb3RhdGVZKDIwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDBweCwgLTUwJSwgLTYwMHB4KSByb3RhdGVZKDIwZGVnKTsgfVxcbiAgLnNvY2lhbCBsaSB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbjogMzBweCAwOyB9XFxuICAuc29jaWFsIGltZyB7XFxuICAgIHdpZHRoOiAyNXB4OyB9IH1cXG5cIiJdfQ== */\n/*@ sourceURL=styles\\stylesheet.scss */");

__styledJsxDefaultExport.__hash = "1607021874";
__styledJsxDefaultExport.__scoped = "body[data-jsx-ext~=\"2607021874\"]{margin:0;padding:0;overflow-x:hidden}p[data-jsx-ext~=\"2607021874\"],h1[data-jsx-ext~=\"2607021874\"],h2[data-jsx-ext~=\"2607021874\"],h3[data-jsx-ext~=\"2607021874\"],h4[data-jsx-ext~=\"2607021874\"],h5[data-jsx-ext~=\"2607021874\"],h6[data-jsx-ext~=\"2607021874\"],a[data-jsx-ext~=\"2607021874\"]{font-family:'Raleway', sans-serif;font-weight:200;margin:0;padding:0}a[data-jsx-ext~=\"2607021874\"]{-webkit-text-decoration:none;text-decoration:none}*[data-jsx-ext~=\"2607021874\"],*[data-jsx-ext~=\"2607021874\"]:after,*[data-jsx-ext~=\"2607021874\"]:before{-webkit-box-sizing:border-box;box-sizing:border-box}.pageWrap[data-jsx-ext~=\"2607021874\"]{-webkit-transform:translate3d(0, 0, 0) rotateY(0);-webkit-transform:translate3d(0, 0, 0) rotateY(0);-ms-transform:translate3d(0, 0, 0) rotateY(0);transform:translate3d(0, 0, 0) rotateY(0);-webkit-transform-style:preserve-3d;-webkit-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transition:0.5s;-webkit-transition:0.5s;transition:0.5s;overflow-x:hidden;height:100vh;background:#fff}.pageWrapActive[data-jsx-ext~=\"2607021874\"]{-webkit-transform:translate3d(-100px, 0px, -600px) rotateY(20deg);-webkit-transform:translate3d(-100px, 0px, -600px) rotateY(20deg);-ms-transform:translate3d(-100px, 0px, -600px) rotateY(20deg);transform:translate3d(-100px, 0px, -600px) rotateY(20deg);overflow:hidden}0%[data-jsx-ext~=\"2607021874\"]{z-index:2}100%[data-jsx-ext~=\"2607021874\"]{z-index:0}@-webkit-keyframes delayeddatajsxext2607021874{0%{z-index:2}100%{z-index:0}}@keyframes delayeddatajsxext2607021874{0%{z-index:2}100%{z-index:0}}.delayed-Z[data-jsx-ext~=\"2607021874\"]{-webkit-animation-name:delayed;-webkit-animation-name:delayeddatajsxext2607021874;animation-name:delayeddatajsxext2607021874;-webkit-animation-delay:.5s;-webkit-animation-delay:.5s;animation-delay:.5s;-webkit-animation-fill-mode:forwards;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.overlay[data-jsx-ext~=\"2607021874\"]{height:100%;width:100%;position:fixed;background:rgba(100, 100, 100, 0);-webkit-transition:.5s;-webkit-transition:.5s;transition:.5s;z-index:2}.overlay--active[data-jsx-ext~=\"2607021874\"]{background:rgba(100, 100, 100, 0.3)}.outerContainer[data-jsx-ext~=\"2607021874\"]{height:100%;-webkit-perspective:1500px;-webkit-perspective:1500px;-moz-perspective:1500px;-ms-perspective:1500px;perspective:1500px;-webkit-transition:0.5s;-webkit-transition:0.5s;transition:0.5s}.background__menu[data-jsx-ext~=\"2607021874\"]{position:fixed;z-index:0;width:100%;height:100%;background:-webkit-gradient(linear, left top, left bottom, color-stop(1%, rgba(121, 34, 34, 0.87)), to(#2f2f38));background:linear-gradient(to bottom, rgba(121, 34, 34, 0.87) 1%, #2f2f38 100%);opacity:1}.morphClose[data-jsx-ext~=\"2607021874\"] .dot[data-jsx-ext~=\"2607021874\"]:nth-of-type(1){-webkit-transform:translate(0px, 0px);-webkit-transform:translate(0px, 0px);-ms-transform:translate(0px, 0px);transform:translate(0px, 0px)}.morphClose[data-jsx-ext~=\"2607021874\"] .dot[data-jsx-ext~=\"2607021874\"]:nth-of-type(2){-webkit-transform:translate(7px, 7px);-webkit-transform:translate(7px, 7px);-ms-transform:translate(7px, 7px);transform:translate(7px, 7px)}.morphClose[data-jsx-ext~=\"2607021874\"] .dot[data-jsx-ext~=\"2607021874\"]:nth-of-type(3){-webkit-transform:translate(30px, 0px);-webkit-transform:translate(30px, 0px);-ms-transform:translate(30px, 0px);transform:translate(30px, 0px)}.morphClose[data-jsx-ext~=\"2607021874\"] .dot[data-jsx-ext~=\"2607021874\"]:nth-of-type(4){-webkit-transform:translate(7px, 23px);-webkit-transform:translate(7px, 23px);-ms-transform:translate(7px, 23px);transform:translate(7px, 23px)}.morphClose[data-jsx-ext~=\"2607021874\"] .dot[data-jsx-ext~=\"2607021874\"]:nth-of-type(5){-webkit-transform:translate(15px, 15px);-webkit-transform:translate(15px, 15px);-ms-transform:translate(15px, 15px);transform:translate(15px, 15px)}.morphClose[data-jsx-ext~=\"2607021874\"] .dot[data-jsx-ext~=\"2607021874\"]:nth-of-type(6){-webkit-transform:translate(23px, 7px);-webkit-transform:translate(23px, 7px);-ms-transform:translate(23px, 7px);transform:translate(23px, 7px)}.morphClose[data-jsx-ext~=\"2607021874\"] .dot[data-jsx-ext~=\"2607021874\"]:nth-of-type(7){-webkit-transform:translate(0px, 30px);-webkit-transform:translate(0px, 30px);-ms-transform:translate(0px, 30px);transform:translate(0px, 30px)}.morphClose[data-jsx-ext~=\"2607021874\"] .dot[data-jsx-ext~=\"2607021874\"]:nth-of-type(8){-webkit-transform:translate(23px, 23px);-webkit-transform:translate(23px, 23px);-ms-transform:translate(23px, 23px);transform:translate(23px, 23px)}.morphClose[data-jsx-ext~=\"2607021874\"] .dot[data-jsx-ext~=\"2607021874\"]:nth-of-type(9){-webkit-transform:translate(30px, 30px);-webkit-transform:translate(30px, 30px);-ms-transform:translate(30px, 30px);transform:translate(30px, 30px)}.morphClose[data-jsx-ext~=\"2607021874\"]:hover .dot[data-jsx-ext~=\"2607021874\"]{background-color:#222}.morphClose[data-jsx-ext~=\"2607021874\"]:hover .dot[data-jsx-ext~=\"2607021874\"]:nth-of-type(1){-webkit-transform:translate(-3px, -3px);-webkit-transform:translate(-3px, -3px);-ms-transform:translate(-3px, -3px);transform:translate(-3px, -3px)}.morphClose[data-jsx-ext~=\"2607021874\"]:hover .dot[data-jsx-ext~=\"2607021874\"]:nth-of-type(2){-webkit-transform:translate(6px, 6px);-webkit-transform:translate(6px, 6px);-ms-transform:translate(6px, 6px);transform:translate(6px, 6px)}.morphClose[data-jsx-ext~=\"2607021874\"]:hover .dot[data-jsx-ext~=\"2607021874\"]:nth-of-type(3){-webkit-transform:translate(33px, -3px);-webkit-transform:translate(33px, -3px);-ms-transform:translate(33px, -3px);transform:translate(33px, -3px)}.morphClose[data-jsx-ext~=\"2607021874\"]:hover .dot[data-jsx-ext~=\"2607021874\"]:nth-of-type(4){-webkit-transform:translate(6px, 24px);-webkit-transform:translate(6px, 24px);-ms-transform:translate(6px, 24px);transform:translate(6px, 24px)}.morphClose[data-jsx-ext~=\"2607021874\"]:hover .dot[data-jsx-ext~=\"2607021874\"]:nth-of-type(5){-webkit-transform:translate(15px, 15px);-webkit-transform:translate(15px, 15px);-ms-transform:translate(15px, 15px);transform:translate(15px, 15px)}.morphClose[data-jsx-ext~=\"2607021874\"]:hover .dot[data-jsx-ext~=\"2607021874\"]:nth-of-type(6){-webkit-transform:translate(24px, 6px);-webkit-transform:translate(24px, 6px);-ms-transform:translate(24px, 6px);transform:translate(24px, 6px)}.morphClose[data-jsx-ext~=\"2607021874\"]:hover .dot[data-jsx-ext~=\"2607021874\"]:nth-of-type(7){-webkit-transform:translate(-3px, 33px);-webkit-transform:translate(-3px, 33px);-ms-transform:translate(-3px, 33px);transform:translate(-3px, 33px)}.morphClose[data-jsx-ext~=\"2607021874\"]:hover .dot[data-jsx-ext~=\"2607021874\"]:nth-of-type(8){-webkit-transform:translate(24px, 24px);-webkit-transform:translate(24px, 24px);-ms-transform:translate(24px, 24px);transform:translate(24px, 24px)}.morphClose[data-jsx-ext~=\"2607021874\"]:hover .dot[data-jsx-ext~=\"2607021874\"]:nth-of-type(9){-webkit-transform:translate(33px, 33px);-webkit-transform:translate(33px, 33px);-ms-transform:translate(33px, 33px);transform:translate(33px, 33px)}.morphOpen[data-jsx-ext~=\"2607021874\"] .dot[data-jsx-ext~=\"2607021874\"]:nth-of-type(1){-webkit-transform:translate(0px, 0px);-webkit-transform:translate(0px, 0px);-ms-transform:translate(0px, 0px);transform:translate(0px, 0px)}.morphOpen[data-jsx-ext~=\"2607021874\"] .dot[data-jsx-ext~=\"2607021874\"]:nth-of-type(2){-webkit-transform:translate(15px, 0px);-webkit-transform:translate(15px, 0px);-ms-transform:translate(15px, 0px);transform:translate(15px, 0px)}.morphOpen[data-jsx-ext~=\"2607021874\"] .dot[data-jsx-ext~=\"2607021874\"]:nth-of-type(3){-webkit-transform:translate(30px, 0px);-webkit-transform:translate(30px, 0px);-ms-transform:translate(30px, 0px);transform:translate(30px, 0px)}.morphOpen[data-jsx-ext~=\"2607021874\"] .dot[data-jsx-ext~=\"2607021874\"]:nth-of-type(4){-webkit-transform:translate(0px, 15px);-webkit-transform:translate(0px, 15px);-ms-transform:translate(0px, 15px);transform:translate(0px, 15px)}.morphOpen[data-jsx-ext~=\"2607021874\"] .dot[data-jsx-ext~=\"2607021874\"]:nth-of-type(5){-webkit-transform:translate(15px, 15px);-webkit-transform:translate(15px, 15px);-ms-transform:translate(15px, 15px);transform:translate(15px, 15px)}.morphOpen[data-jsx-ext~=\"2607021874\"] .dot[data-jsx-ext~=\"2607021874\"]:nth-of-type(6){-webkit-transform:translate(30px, 15px);-webkit-transform:translate(30px, 15px);-ms-transform:translate(30px, 15px);transform:translate(30px, 15px)}.morphOpen[data-jsx-ext~=\"2607021874\"] .dot[data-jsx-ext~=\"2607021874\"]:nth-of-type(7){-webkit-transform:translate(0px, 30px);-webkit-transform:translate(0px, 30px);-ms-transform:translate(0px, 30px);transform:translate(0px, 30px)}.morphOpen[data-jsx-ext~=\"2607021874\"] .dot[data-jsx-ext~=\"2607021874\"]:nth-of-type(8){-webkit-transform:translate(15px, 30px);-webkit-transform:translate(15px, 30px);-ms-transform:translate(15px, 30px);transform:translate(15px, 30px)}.morphOpen[data-jsx-ext~=\"2607021874\"] .dot[data-jsx-ext~=\"2607021874\"]:nth-of-type(9){-webkit-transform:translate(30px, 30px);-webkit-transform:translate(30px, 30px);-ms-transform:translate(30px, 30px);transform:translate(30px, 30px)}.morphOpen[data-jsx-ext~=\"2607021874\"]:hover .dot[data-jsx-ext~=\"2607021874\"]{background-color:#222}.morphOpen[data-jsx-ext~=\"2607021874\"]:hover .dot[data-jsx-ext~=\"2607021874\"]:nth-of-type(1){-webkit-transform:translate(-3px, -3px);-webkit-transform:translate(-3px, -3px);-ms-transform:translate(-3px, -3px);transform:translate(-3px, -3px)}.morphOpen[data-jsx-ext~=\"2607021874\"]:hover .dot[data-jsx-ext~=\"2607021874\"]:nth-of-type(2){-webkit-transform:translate(15px, 0px);-webkit-transform:translate(15px, 0px);-ms-transform:translate(15px, 0px);transform:translate(15px, 0px)}.morphOpen[data-jsx-ext~=\"2607021874\"]:hover .dot[data-jsx-ext~=\"2607021874\"]:nth-of-type(3){-webkit-transform:translate(33px, -3px);-webkit-transform:translate(33px, -3px);-ms-transform:translate(33px, -3px);transform:translate(33px, -3px)}.morphOpen[data-jsx-ext~=\"2607021874\"]:hover .dot[data-jsx-ext~=\"2607021874\"]:nth-of-type(4){-webkit-transform:translate(0px, 15px);-webkit-transform:translate(0px, 15px);-ms-transform:translate(0px, 15px);transform:translate(0px, 15px)}.morphOpen[data-jsx-ext~=\"2607021874\"]:hover .dot[data-jsx-ext~=\"2607021874\"]:nth-of-type(5){-webkit-transform:translate(15px, 15px);-webkit-transform:translate(15px, 15px);-ms-transform:translate(15px, 15px);transform:translate(15px, 15px)}.morphOpen[data-jsx-ext~=\"2607021874\"]:hover .dot[data-jsx-ext~=\"2607021874\"]:nth-of-type(6){-webkit-transform:translate(30px, 15px);-webkit-transform:translate(30px, 15px);-ms-transform:translate(30px, 15px);transform:translate(30px, 15px)}.morphOpen[data-jsx-ext~=\"2607021874\"]:hover .dot[data-jsx-ext~=\"2607021874\"]:nth-of-type(7){-webkit-transform:translate(-3px, 33px);-webkit-transform:translate(-3px, 33px);-ms-transform:translate(-3px, 33px);transform:translate(-3px, 33px)}.morphOpen[data-jsx-ext~=\"2607021874\"]:hover .dot[data-jsx-ext~=\"2607021874\"]:nth-of-type(8){-webkit-transform:translate(15px, 30px);-webkit-transform:translate(15px, 30px);-ms-transform:translate(15px, 30px);transform:translate(15px, 30px)}.morphOpen[data-jsx-ext~=\"2607021874\"]:hover .dot[data-jsx-ext~=\"2607021874\"]:nth-of-type(9){-webkit-transform:translate(33px, 33px);-webkit-transform:translate(33px, 33px);-ms-transform:translate(33px, 33px);transform:translate(33px, 33px)}.menu[data-jsx-ext~=\"2607021874\"]{position:fixed;top:30px;right:30px;height:40px;width:40px;cursor:pointer;z-index:4}.menu[data-jsx-ext~=\"2607021874\"] .dot[data-jsx-ext~=\"2607021874\"]{position:absolute;width:5px;height:5px;background-color:#7d7d7d;-webkit-transition:0.2s ease-in-out;-webkit-transition:0.2s ease-in-out;transition:0.2s ease-in-out}.project__list[data-jsx-ext~=\"2607021874\"]{display:block;margin:50px auto;-webkit-text-align:center;text-align:center;max-width:800px}.project[data-jsx-ext~=\"2607021874\"]{max-width:350px;width:100%;margin:40px 25px;display:inline-block;-webkit-box-shadow:2px 5px 20px 10px rgba(46, 61, 73, 0.2);box-shadow:2px 5px 20px 10px rgba(46, 61, 73, 0.2);border-radius:2%;overflow:hidden;-webkit-transition:.5s;-webkit-transition:.5s;transition:.5s}.project[data-jsx-ext~=\"2607021874\"] .project__img--container[data-jsx-ext~=\"2607021874\"]{position:relative}.project[data-jsx-ext~=\"2607021874\"] .project__img--container[data-jsx-ext~=\"2607021874\"] img[data-jsx-ext~=\"2607021874\"]{width:100%}.project[data-jsx-ext~=\"2607021874\"] .project__img--container[data-jsx-ext~=\"2607021874\"] .project__image--overlay[data-jsx-ext~=\"2607021874\"]{position:absolute;top:0;left:0;width:100%;height:100%;-webkit-transition:.5s;-webkit-transition:.5s;transition:.5s}.project[data-jsx-ext~=\"2607021874\"]:hover{-webkit-box-shadow:2px 5px 20px 0 rgba(46, 61, 73, 0.2);box-shadow:2px 5px 20px 0 rgba(46, 61, 73, 0.2)}.project[data-jsx-ext~=\"2607021874\"]:hover .project__info[data-jsx-ext~=\"2607021874\"] a[data-jsx-ext~=\"2607021874\"]{color:#8e8e8e}.project[data-jsx-ext~=\"2607021874\"]:hover[data-jsx-ext~=\"2607021874\"]:nth-of-type(1){-webkit-transition:.5s;-webkit-transition:.5s;transition:.5s}.project[data-jsx-ext~=\"2607021874\"]:nth-of-type(1) .project__image--overlay[data-jsx-ext~=\"2607021874\"]{background:-webkit-gradient(linear, left top, left bottom, from(rgba(45, 229, 192, 0.5)), to(rgba(137, 255, 178, 0.8)));background:linear-gradient(to bottom, rgba(45, 229, 192, 0.5) 0%, rgba(137, 255, 178, 0.8) 100%)}.project[data-jsx-ext~=\"2607021874\"]:nth-of-type(1) .project__info[data-jsx-ext~=\"2607021874\"] div[data-jsx-ext~=\"2607021874\"]{border:1px solid rgba(137, 255, 178, 0.8)}.project[data-jsx-ext~=\"2607021874\"]:nth-of-type(2) .project__image--overlay[data-jsx-ext~=\"2607021874\"]{background:-webkit-gradient(linear, left top, left bottom, from(rgba(49, 102, 247, 0.5)), to(rgba(190, 133, 247, 0.7)));background:linear-gradient(to bottom, rgba(49, 102, 247, 0.5) 0%, rgba(190, 133, 247, 0.7) 100%)}.project[data-jsx-ext~=\"2607021874\"]:nth-of-type(2) .project__info[data-jsx-ext~=\"2607021874\"] div[data-jsx-ext~=\"2607021874\"]{border:1px solid rgba(190, 133, 247, 0.8)}.project[data-jsx-ext~=\"2607021874\"]:nth-of-type(3) .project__image--overlay[data-jsx-ext~=\"2607021874\"]{background:-webkit-gradient(linear, left top, left bottom, from(rgba(237, 47, 47, 0.5)), to(rgba(175, 96, 166, 0.8)));background:linear-gradient(to bottom, rgba(237, 47, 47, 0.5) 0%, rgba(175, 96, 166, 0.8) 100%)}.project[data-jsx-ext~=\"2607021874\"]:nth-of-type(3) .project__info[data-jsx-ext~=\"2607021874\"] div[data-jsx-ext~=\"2607021874\"]{border:1px solid rgba(175, 96, 166, 0.8)}.project[data-jsx-ext~=\"2607021874\"]:nth-of-type(4) .project__image--overlay[data-jsx-ext~=\"2607021874\"]{background:-webkit-gradient(linear, left top, left bottom, from(rgba(37, 94, 186, 0.4)), to(rgba(47, 53, 86, 0.8)));background:linear-gradient(to bottom, rgba(37, 94, 186, 0.4) 0%, rgba(47, 53, 86, 0.8) 100%)}.project[data-jsx-ext~=\"2607021874\"]:nth-of-type(4) .project__info[data-jsx-ext~=\"2607021874\"] div[data-jsx-ext~=\"2607021874\"]{border:1px solid rgba(37, 94, 186, 0.8)}.project[data-jsx-ext~=\"2607021874\"]:nth-of-type(5) .project__image--overlay[data-jsx-ext~=\"2607021874\"]{background:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 187, 50, 0.6)), to(rgba(255, 188, 137, 0.9)));background:linear-gradient(to bottom, rgba(255, 187, 50, 0.6) 0%, rgba(255, 188, 137, 0.9) 100%)}.project[data-jsx-ext~=\"2607021874\"]:nth-of-type(5) .project__info[data-jsx-ext~=\"2607021874\"] div[data-jsx-ext~=\"2607021874\"]{border:1px solid rgba(255, 188, 137, 0.9)}.project[data-jsx-ext~=\"2607021874\"] .project__info[data-jsx-ext~=\"2607021874\"]{-webkit-text-align:left;text-align:left;margin:35px 30px;font-size:14px}.project[data-jsx-ext~=\"2607021874\"] .project__info[data-jsx-ext~=\"2607021874\"] h2[data-jsx-ext~=\"2607021874\"]{font-weight:500;color:#555}.project[data-jsx-ext~=\"2607021874\"] .project__info[data-jsx-ext~=\"2607021874\"] p[data-jsx-ext~=\"2607021874\"]{font-weight:500;color:#777}.project[data-jsx-ext~=\"2607021874\"] .project__info[data-jsx-ext~=\"2607021874\"] a[data-jsx-ext~=\"2607021874\"]{display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;height:100%;color:#b1b1b1;font-weight:500;-webkit-transition:.5s;-webkit-transition:.5s;transition:.5s}.project[data-jsx-ext~=\"2607021874\"] .project__info[data-jsx-ext~=\"2607021874\"] div[data-jsx-ext~=\"2607021874\"]{width:135px;height:35px;margin:20px 5px 5px 5px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;background:#fff;-webkit-transition:.5s;-webkit-transition:.5s;transition:.5s}.social[data-jsx-ext~=\"2607021874\"]{position:absolute;top:400px;right:0;z-index:3;margin:0 30px;-webkit-transform:translate3d(512px, 0, 0) rotateY(0);-webkit-transform:translate3d(512px, 0, 0) rotateY(0);-ms-transform:translate3d(512px, 0, 0) rotateY(0);transform:translate3d(512px, 0, 0) rotateY(0);-webkit-transform-style:preserve-3d;-webkit-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transition:0.5s;-webkit-transition:0.5s;transition:0.5s;overflow:hidden}.socialActive[data-jsx-ext~=\"2607021874\"]{-webkit-transform:translate3d(0, 0, 0) rotateY(0);-webkit-transform:translate3d(0, 0, 0) rotateY(0);-ms-transform:translate3d(0, 0, 0) rotateY(0);transform:translate3d(0, 0, 0) rotateY(0)}.social[data-jsx-ext~=\"2607021874\"] ul[data-jsx-ext~=\"2607021874\"]{list-style-type:none;margin:0;padding:0}.social[data-jsx-ext~=\"2607021874\"] li[data-jsx-ext~=\"2607021874\"]{padding:10px;margin:5px}.social[data-jsx-ext~=\"2607021874\"] img[data-jsx-ext~=\"2607021874\"]{width:35px}@media (min-width:512px){.social[data-jsx-ext~=\"2607021874\"]{top:50%;-webkit-transform:translate3d(0, -50%, 0) rotateY(0);-webkit-transform:translate3d(0, -50%, 0) rotateY(0);-ms-transform:translate3d(0, -50%, 0) rotateY(0);transform:translate3d(0, -50%, 0) rotateY(0);-webkit-transform-style:preserve-3d;-webkit-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;right:auto}.socialActive[data-jsx-ext~=\"2607021874\"]{-webkit-transform:translate3d(-100px, -50%, -600px) rotateY(20deg);-webkit-transform:translate3d(-100px, -50%, -600px) rotateY(20deg);-ms-transform:translate3d(-100px, -50%, -600px) rotateY(20deg);transform:translate3d(-100px, -50%, -600px) rotateY(20deg)}.social[data-jsx-ext~=\"2607021874\"] li[data-jsx-ext~=\"2607021874\"]{padding:10px;margin:30px 0}.social[data-jsx-ext~=\"2607021874\"] img[data-jsx-ext~=\"2607021874\"]{width:25px}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlc1xcc3R5bGVzaGVldC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEFBRVksQUFFeUIsQUFFYixBQUVTLEFBRW9CLEFBRWdCLEFBR3RELEFBQ0EsQUFHQSxBQUNBLEFBRW1CLEFBRW5CLEFBRXdCLEFBRXhCLEFBRUcsQUFFdUIsQUFFQSxBQUVDLEFBRUEsQUFFQyxBQUVELEFBRUEsQUFFQyxBQUVBLEFBRWxCLEFBRW9CLEFBRUYsQUFFRSxBQUVELEFBRUMsQUFFRCxBQUVDLEFBRUEsQUFFQSxBQUVKLEFBRUMsQUFFQSxBQUVBLEFBRUMsQUFFQSxBQUVELEFBRUMsQUFFQSxBQUVsQixBQUVvQixBQUVELEFBRUMsQUFFRCxBQUVDLEFBRUEsQUFFQSxBQUVBLEFBRUEsQUFFM0IsQUFFSyxBQUVOLEFBRUUsQUFFSSxBQUVMLEFBRU8sQUFFb0MsQUFFeEMsQUFFTyxBQUVpRyxBQUU5RSxBQUU4RSxBQUU5RSxBQUU0RSxBQUU3RSxBQUUyRSxBQUU1RSxBQUVnRixBQUU5RSxBQUUxQixBQUVFLEFBRUEsQUFFSSxBQUVSLEFBRUUsQUFFZ0MsQUFFN0IsQUFFUixBQUVGLEFBR0QsQUFDMkQsQUFDdEQsQUFDRixTQUh1RCxDQXZLOUMsQ0FhVCxBQUNBLEFBR0EsQUFDQSxDQWtHRyxBQWdESixBQU1FLENBcEpZLEFBSWdCLEFBZ0lQLENBUVIsQUFPTyxDQTNEQSxBQVlmLENBOUZTLEFBOEVELENBTUcsQUFvQ1EsQUFFQSxFQTFDSCxBQU1kLEFBSWMsQUFzQ0osRUE1SlksQUF3SlEsQ0FRbEIsQ0FoSFYsQUFzQ0EsQ0FzQ3NCLENBdEdELENBb0ZILEFBWVEsQUFvQ2lCLEFBUXRDLENBdEljLEVBb0ZRLEFBb0NYLEFBRUEsQUFtQkosQ0E3RGdCLEFBZ0RULENBdEphLENBY1UsQUE0SW5CLENBbERTLENBUVksQ0FwSGQsRUFzQmhCLENBa0ZtQixDQTlFQyxBQUVzQixBQUVBLEFBb0JJLEFBZ0JKLEFBd0Z4QixDQTVKWCxBQWtDcUMsQUFFQSxBQUlBLEFBRUEsQUFjSSxBQUlBLEFBVUosQUFFQSxBQUVBLEFBTUEsQUFVSSxBQUlBLENBeEVKLEFBSVQsQUFZVyxBQU1BLEFBRUEsQUFJSSxBQUlBLEFBSUEsQUFJQSxBQUVBLEFBRUEsQUFVSixBQUVBLEFBSUEsQUFFQSxBQUlJLEFBSUEsQUFJQSxBQUVBLEFBRUEsQUFFQSxBQUVBLEFBb0M1QyxDQWhDc0MsQUE0QnJDLEFBVUosQUFNK0IsQ0F4QjFCLEFBSUEsQUFZQSxBQWdCRSxHQTFDdUMsQ0FOWixHQTRDRixDQXBKK0IsQUFrR2pDLEFBZ0Q4QixBQUlHLENBNUp0QyxBQUUzQyxBQXdCdUosRUF0QnJILEdBa0grRCxFQUZILENBNEJ4RCxFQWhKa0IsQ0F3R1UsQUE2RHNDLENBM0NoRixDQWdDbUYsRUFsSk0sQ0FrR2IsQUE0RG1CLENBeERMLElBOUd6RCxHQW9CNEIsQUE0SDlDLEdBeEN3QyxBQUkzQixBQTRDNEQsSUFwQ0ksR0FsRzFDLElBc0ZNLE1BSTNCLElBeEZrRCxLQXNGOEIsQ0FZbkMsQ0FrQ3lDLFFBdElsQyxFQXNIeUYsRUFKSSxDQWtCdEgsQUFJb0YsQ0E5QnNDLEFBSUEsQUFZQSxFQXhCckYsR0FsRzNDLEdBNEZzRyxTQXRGbkcsRUFKdUMsSUFRMUQsQUFFQSxBQW9CSSxBQWdCSixDQW9Gc0QsR0F0SHBELEFBRUEsQUFJQSxBQUVBLEFBY0ksQUFJQSxBQVVKLEFBRUEsQUFFQSxBQU1BLEFBVUksQUFJQSxHQXhFcUQsQ0FnQnZELEFBTUEsQUFFQSxBQUlJLEFBSUEsQUFJQSxBQUlBLEFBRUEsQUFFQSxBQVVKLEFBRUEsQUFJQSxBQUVBLEFBSUksQUFJQSxBQUlBLEFBRUEsQUFFQSxBQUVBLEFBRUEsR0FwRnVDLFFBQXdDLEFBTWpELEdBRTBJLENBNEhwRixJQTVDaEIsVUFJOEQsV0F4RzVFLEFBc0p0QyxPQTlDcUksRUE1RjlCLEVBQXhDLEVBTWhELE1BZ0hrRyxFQWdCakMsQUFhakIsRUFqQ3NELENBdEIwQyxHQWN0QyxBQUlBLEFBWUEsVUF0STVDLENBa0ppQyxVQTFDbUUsQ0E1RjFFLE1BUThELEdBMkk3RCxJQWI0QixFQWhKbEYsRUFrQm9ILEVBNEloSSxPQXBKa0UsR0FvSUosR0E5SWpELEFBa0pzRSxPQTVDeUQsY0EwQzdDLEVBRkEsV0FwSTdCLEdBd0l3RCxTQUpPLFNBaEovRCxxQkErSmdCLElBL0pHLFFBK0pGLGtDQS9KdUIsY0FvSjJDLEtBcEozQixFQWdKeUIsWUFoSk4sQUFnSnlCLE1BSUUsT0FKbUIsSUFoSjdDLFdBZ0pvRSxpQkFBOEIsR0FJckQsaUJBQUMsSUFKMEUsd0NBQUMiLCJmaWxlIjoic3R5bGVzXFxzdHlsZXNoZWV0LnNjc3MiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvSm9obm55L0Rlc2t0b3AvcGVyc29uYWwtcG9ydGZvbGlvIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcImJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjsgfVxcblxcbnAsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIGEge1xcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwOyB9XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG5cXG4qLCAqOmFmdGVyLCAqOmJlZm9yZSB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXFxuLnBhZ2VXcmFwIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSByb3RhdGVZKDApO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApIHJvdGF0ZVkoMCk7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxuICAgICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXM7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7IH1cXG5cXG4ucGFnZVdyYXBBY3RpdmUge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDBweCwgMHB4LCAtNjAwcHgpIHJvdGF0ZVkoMjBkZWcpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDBweCwgMHB4LCAtNjAwcHgpIHJvdGF0ZVkoMjBkZWcpO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBkZWxheWVkIHtcXG4gIDAlIHtcXG4gICAgei1pbmRleDogMjsgfVxcbiAgMTAwJSB7XFxuICAgIHotaW5kZXg6IDA7IH0gfVxcblxcbkBrZXlmcmFtZXMgZGVsYXllZCB7XFxuICAwJSB7XFxuICAgIHotaW5kZXg6IDI7IH1cXG4gIDEwMCUge1xcbiAgICB6LWluZGV4OiAwOyB9IH1cXG5cXG4uZGVsYXllZC1aIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGRlbGF5ZWQ7XFxuICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBkZWxheWVkO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC41cztcXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAuNXM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkczsgfVxcblxcbi5vdmVybGF5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYmFja2dyb3VuZDogcmdiYSgxMDAsIDEwMCwgMTAwLCAwKTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjVzO1xcbiAgdHJhbnNpdGlvbjogLjVzO1xcbiAgei1pbmRleDogMjsgfVxcblxcbi5vdmVybGF5LS1hY3RpdmUge1xcbiAgYmFja2dyb3VuZDogcmdiYSgxMDAsIDEwMCwgMTAwLCAwLjMpOyB9XFxuXFxuLm91dGVyQ29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6IDE1MDBweDtcXG4gICAgICAgICAgcGVyc3BlY3RpdmU6IDE1MDBweDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cztcXG4gIHRyYW5zaXRpb246IDAuNXM7IH1cXG5cXG4uYmFja2dyb3VuZF9fbWVudSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDElLCByZ2JhKDEyMSwgMzQsIDM0LCAwLjg3KSksIHRvKCMyZjJmMzgpKTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMTIxLCAzNCwgMzQsIDAuODcpIDElLCAjMmYyZjM4IDEwMCUpO1xcbiAgb3BhY2l0eTogMTsgfVxcblxcbi5tb3JwaENsb3NlIC5kb3Q6bnRoLW9mLXR5cGUoMSkge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTsgfVxcblxcbi5tb3JwaENsb3NlIC5kb3Q6bnRoLW9mLXR5cGUoMikge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSg3cHgsIDdweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDdweCwgN3B4KTsgfVxcblxcbi5tb3JwaENsb3NlIC5kb3Q6bnRoLW9mLXR5cGUoMykge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMHB4LCAwcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMHB4LCAwcHgpOyB9XFxuXFxuLm1vcnBoQ2xvc2UgLmRvdDpudGgtb2YtdHlwZSg0KSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDdweCwgMjNweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDdweCwgMjNweCk7IH1cXG5cXG4ubW9ycGhDbG9zZSAuZG90Om50aC1vZi10eXBlKDUpIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTVweCwgMTVweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE1cHgsIDE1cHgpOyB9XFxuXFxuLm1vcnBoQ2xvc2UgLmRvdDpudGgtb2YtdHlwZSg2KSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDIzcHgsIDdweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIzcHgsIDdweCk7IH1cXG5cXG4ubW9ycGhDbG9zZSAuZG90Om50aC1vZi10eXBlKDcpIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAzMHB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAzMHB4KTsgfVxcblxcbi5tb3JwaENsb3NlIC5kb3Q6bnRoLW9mLXR5cGUoOCkge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgyM3B4LCAyM3B4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjNweCwgMjNweCk7IH1cXG5cXG4ubW9ycGhDbG9zZSAuZG90Om50aC1vZi10eXBlKDkpIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzBweCwgMzBweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDMwcHgsIDMwcHgpOyB9XFxuXFxuLm1vcnBoQ2xvc2U6aG92ZXIgLmRvdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyOyB9XFxuXFxuLm1vcnBoQ2xvc2U6aG92ZXIgLmRvdDpudGgtb2YtdHlwZSgxKSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTNweCwgLTNweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTNweCwgLTNweCk7IH1cXG5cXG4ubW9ycGhDbG9zZTpob3ZlciAuZG90Om50aC1vZi10eXBlKDIpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSg2cHgsIDZweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNnB4LCA2cHgpOyB9XFxuXFxuLm1vcnBoQ2xvc2U6aG92ZXIgLmRvdDpudGgtb2YtdHlwZSgzKSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzNweCwgLTNweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzNweCwgLTNweCk7IH1cXG5cXG4ubW9ycGhDbG9zZTpob3ZlciAuZG90Om50aC1vZi10eXBlKDQpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSg2cHgsIDI0cHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDZweCwgMjRweCk7IH1cXG5cXG4ubW9ycGhDbG9zZTpob3ZlciAuZG90Om50aC1vZi10eXBlKDUpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNXB4LCAxNXB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNXB4LCAxNXB4KTsgfVxcblxcbi5tb3JwaENsb3NlOmhvdmVyIC5kb3Q6bnRoLW9mLXR5cGUoNikge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDI0cHgsIDZweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjRweCwgNnB4KTsgfVxcblxcbi5tb3JwaENsb3NlOmhvdmVyIC5kb3Q6bnRoLW9mLXR5cGUoNykge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIDMzcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIDMzcHgpOyB9XFxuXFxuLm1vcnBoQ2xvc2U6aG92ZXIgLmRvdDpudGgtb2YtdHlwZSg4KSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjRweCwgMjRweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjRweCwgMjRweCk7IH1cXG5cXG4ubW9ycGhDbG9zZTpob3ZlciAuZG90Om50aC1vZi10eXBlKDkpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgzM3B4LCAzM3B4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzM3B4LCAzM3B4KTsgfVxcblxcbi5tb3JwaE9wZW4gLmRvdDpudGgtb2YtdHlwZSgxKSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpOyB9XFxuXFxuLm1vcnBoT3BlbiAuZG90Om50aC1vZi10eXBlKDIpIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTVweCwgMHB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTVweCwgMHB4KTsgfVxcblxcbi5tb3JwaE9wZW4gLmRvdDpudGgtb2YtdHlwZSgzKSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDMwcHgsIDBweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDMwcHgsIDBweCk7IH1cXG5cXG4ubW9ycGhPcGVuIC5kb3Q6bnRoLW9mLXR5cGUoNCkge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDE1cHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDE1cHgpOyB9XFxuXFxuLm1vcnBoT3BlbiAuZG90Om50aC1vZi10eXBlKDUpIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTVweCwgMTVweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE1cHgsIDE1cHgpOyB9XFxuXFxuLm1vcnBoT3BlbiAuZG90Om50aC1vZi10eXBlKDYpIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzBweCwgMTVweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDMwcHgsIDE1cHgpOyB9XFxuXFxuLm1vcnBoT3BlbiAuZG90Om50aC1vZi10eXBlKDcpIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAzMHB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAzMHB4KTsgfVxcblxcbi5tb3JwaE9wZW4gLmRvdDpudGgtb2YtdHlwZSg4KSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDE1cHgsIDMwcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNXB4LCAzMHB4KTsgfVxcblxcbi5tb3JwaE9wZW4gLmRvdDpudGgtb2YtdHlwZSg5KSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDMwcHgsIDMwcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMHB4LCAzMHB4KTsgfVxcblxcbi5tb3JwaE9wZW46aG92ZXIgLmRvdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyOyB9XFxuXFxuLm1vcnBoT3Blbjpob3ZlciAuZG90Om50aC1vZi10eXBlKDEpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtM3B4LCAtM3B4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtM3B4LCAtM3B4KTsgfVxcblxcbi5tb3JwaE9wZW46aG92ZXIgLmRvdDpudGgtb2YtdHlwZSgyKSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTVweCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNXB4LCAwcHgpOyB9XFxuXFxuLm1vcnBoT3Blbjpob3ZlciAuZG90Om50aC1vZi10eXBlKDMpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgzM3B4LCAtM3B4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzM3B4LCAtM3B4KTsgfVxcblxcbi5tb3JwaE9wZW46aG92ZXIgLmRvdDpudGgtb2YtdHlwZSg0KSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAxNXB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDE1cHgpOyB9XFxuXFxuLm1vcnBoT3Blbjpob3ZlciAuZG90Om50aC1vZi10eXBlKDUpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNXB4LCAxNXB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNXB4LCAxNXB4KTsgfVxcblxcbi5tb3JwaE9wZW46aG92ZXIgLmRvdDpudGgtb2YtdHlwZSg2KSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzBweCwgMTVweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzBweCwgMTVweCk7IH1cXG5cXG4ubW9ycGhPcGVuOmhvdmVyIC5kb3Q6bnRoLW9mLXR5cGUoNykge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIDMzcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIDMzcHgpOyB9XFxuXFxuLm1vcnBoT3Blbjpob3ZlciAuZG90Om50aC1vZi10eXBlKDgpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNXB4LCAzMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNXB4LCAzMHB4KTsgfVxcblxcbi5tb3JwaE9wZW46aG92ZXIgLmRvdDpudGgtb2YtdHlwZSg5KSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzNweCwgMzNweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzNweCwgMzNweCk7IH1cXG5cXG4ubWVudSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDMwcHg7XFxuICByaWdodDogMzBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgei1pbmRleDogNDsgfVxcblxcbi5tZW51IC5kb3Qge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiA1cHg7XFxuICAgIGhlaWdodDogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2Q3ZDdkO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7IH1cXG5cXG4ucHJvamVjdF9fbGlzdCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogNTBweCBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWF4LXdpZHRoOiA4MDBweDsgfVxcblxcbi5wcm9qZWN0IHtcXG4gIG1heC13aWR0aDogMzUwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogNDBweCAyNXB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggNXB4IDIwcHggMTBweCByZ2JhKDQ2LCA2MSwgNzMsIDAuMik7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDJweCA1cHggMjBweCAxMHB4IHJnYmEoNDYsIDYxLCA3MywgMC4yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDIlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjVzO1xcbiAgdHJhbnNpdGlvbjogLjVzOyB9XFxuXFxuLnByb2plY3QgLnByb2plY3RfX2ltZy0tY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLnByb2plY3QgLnByb2plY3RfX2ltZy0tY29udGFpbmVyIGltZyB7XFxuICAgICAgd2lkdGg6IDEwMCU7IH1cXG5cXG4ucHJvamVjdCAucHJvamVjdF9faW1nLS1jb250YWluZXIgLnByb2plY3RfX2ltYWdlLS1vdmVybGF5IHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjVzO1xcbiAgICAgIHRyYW5zaXRpb246IC41czsgfVxcblxcbi5wcm9qZWN0OmhvdmVyIHtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggNXB4IDIwcHggMCByZ2JhKDQ2LCA2MSwgNzMsIDAuMik7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDVweCAyMHB4IDAgcmdiYSg0NiwgNjEsIDczLCAwLjIpOyB9XFxuXFxuLnByb2plY3Q6aG92ZXIgLnByb2plY3RfX2luZm8gYSB7XFxuICAgICAgY29sb3I6ICM4ZThlOGU7IH1cXG5cXG4ucHJvamVjdDpob3ZlcjpudGgtb2YtdHlwZSgxKSB7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjVzO1xcbiAgICB0cmFuc2l0aW9uOiAuNXM7IH1cXG5cXG4ucHJvamVjdDpudGgtb2YtdHlwZSgxKSAucHJvamVjdF9faW1hZ2UtLW92ZXJsYXkge1xcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKHJnYmEoNDUsIDIyOSwgMTkyLCAwLjUpKSwgdG8ocmdiYSgxMzcsIDI1NSwgMTc4LCAwLjgpKSk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoNDUsIDIyOSwgMTkyLCAwLjUpIDAlLCByZ2JhKDEzNywgMjU1LCAxNzgsIDAuOCkgMTAwJSk7IH1cXG5cXG4ucHJvamVjdDpudGgtb2YtdHlwZSgxKSAucHJvamVjdF9faW5mbyBkaXYge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEzNywgMjU1LCAxNzgsIDAuOCk7IH1cXG5cXG4ucHJvamVjdDpudGgtb2YtdHlwZSgyKSAucHJvamVjdF9faW1hZ2UtLW92ZXJsYXkge1xcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKHJnYmEoNDksIDEwMiwgMjQ3LCAwLjUpKSwgdG8ocmdiYSgxOTAsIDEzMywgMjQ3LCAwLjcpKSk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoNDksIDEwMiwgMjQ3LCAwLjUpIDAlLCByZ2JhKDE5MCwgMTMzLCAyNDcsIDAuNykgMTAwJSk7IH1cXG5cXG4ucHJvamVjdDpudGgtb2YtdHlwZSgyKSAucHJvamVjdF9faW5mbyBkaXYge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE5MCwgMTMzLCAyNDcsIDAuOCk7IH1cXG5cXG4ucHJvamVjdDpudGgtb2YtdHlwZSgzKSAucHJvamVjdF9faW1hZ2UtLW92ZXJsYXkge1xcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKHJnYmEoMjM3LCA0NywgNDcsIDAuNSkpLCB0byhyZ2JhKDE3NSwgOTYsIDE2NiwgMC44KSkpO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDIzNywgNDcsIDQ3LCAwLjUpIDAlLCByZ2JhKDE3NSwgOTYsIDE2NiwgMC44KSAxMDAlKTsgfVxcblxcbi5wcm9qZWN0Om50aC1vZi10eXBlKDMpIC5wcm9qZWN0X19pbmZvIGRpdiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTc1LCA5NiwgMTY2LCAwLjgpOyB9XFxuXFxuLnByb2plY3Q6bnRoLW9mLXR5cGUoNCkgLnByb2plY3RfX2ltYWdlLS1vdmVybGF5IHtcXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbShyZ2JhKDM3LCA5NCwgMTg2LCAwLjQpKSwgdG8ocmdiYSg0NywgNTMsIDg2LCAwLjgpKSk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMzcsIDk0LCAxODYsIDAuNCkgMCUsIHJnYmEoNDcsIDUzLCA4NiwgMC44KSAxMDAlKTsgfVxcblxcbi5wcm9qZWN0Om50aC1vZi10eXBlKDQpIC5wcm9qZWN0X19pbmZvIGRpdiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMzcsIDk0LCAxODYsIDAuOCk7IH1cXG5cXG4ucHJvamVjdDpudGgtb2YtdHlwZSg1KSAucHJvamVjdF9faW1hZ2UtLW92ZXJsYXkge1xcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKHJnYmEoMjU1LCAxODcsIDUwLCAwLjYpKSwgdG8ocmdiYSgyNTUsIDE4OCwgMTM3LCAwLjkpKSk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LCAxODcsIDUwLCAwLjYpIDAlLCByZ2JhKDI1NSwgMTg4LCAxMzcsIDAuOSkgMTAwJSk7IH1cXG5cXG4ucHJvamVjdDpudGgtb2YtdHlwZSg1KSAucHJvamVjdF9faW5mbyBkaXYge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMTg4LCAxMzcsIDAuOSk7IH1cXG5cXG4ucHJvamVjdCAucHJvamVjdF9faW5mbyB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIG1hcmdpbjogMzVweCAzMHB4O1xcbiAgICBmb250LXNpemU6IDE0cHg7IH1cXG5cXG4ucHJvamVjdCAucHJvamVjdF9faW5mbyBoMiB7XFxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgICBjb2xvcjogIzU1NTsgfVxcblxcbi5wcm9qZWN0IC5wcm9qZWN0X19pbmZvIHAge1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgY29sb3I6ICM3Nzc7IH1cXG5cXG4ucHJvamVjdCAucHJvamVjdF9faW5mbyBhIHtcXG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgIGNvbG9yOiAjYjFiMWIxO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNXM7XFxuICAgICAgdHJhbnNpdGlvbjogLjVzOyB9XFxuXFxuLnByb2plY3QgLnByb2plY3RfX2luZm8gZGl2IHtcXG4gICAgICB3aWR0aDogMTM1cHg7XFxuICAgICAgaGVpZ2h0OiAzNXB4O1xcbiAgICAgIG1hcmdpbjogMjBweCA1cHggNXB4IDVweDtcXG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1ib3g7XFxuICAgICAgZGlzcGxheTogLW1zLWlubGluZS1mbGV4Ym94O1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNXM7XFxuICAgICAgdHJhbnNpdGlvbjogLjVzOyB9XFxuXFxuLnNvY2lhbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDQwMHB4O1xcbiAgcmlnaHQ6IDA7XFxuICB6LWluZGV4OiAzO1xcbiAgbWFyZ2luOiAwIDMwcHg7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNTEycHgsIDAsIDApIHJvdGF0ZVkoMCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNTEycHgsIDAsIDApIHJvdGF0ZVkoMCk7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxuICAgICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXM7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcblxcbi5zb2NpYWxBY3RpdmUge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApIHJvdGF0ZVkoMCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgcm90YXRlWSgwKTsgfVxcblxcbi5zb2NpYWwgdWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDsgfVxcblxcbi5zb2NpYWwgbGkge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbjogNXB4OyB9XFxuXFxuLnNvY2lhbCBpbWcge1xcbiAgd2lkdGg6IDM1cHg7IH1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNTEycHgpIHtcXG4gIC5zb2NpYWwge1xcbiAgICB0b3A6IDUwJTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC01MCUsIDApIHJvdGF0ZVkoMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNTAlLCAwKSByb3RhdGVZKDApO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxuICAgICAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG4gICAgcmlnaHQ6IGF1dG87IH1cXG4gIC5zb2NpYWxBY3RpdmUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMHB4LCAtNTAlLCAtNjAwcHgpIHJvdGF0ZVkoMjBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMHB4LCAtNTAlLCAtNjAwcHgpIHJvdGF0ZVkoMjBkZWcpOyB9XFxuICAuc29jaWFsIGxpIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luOiAzMHB4IDA7IH1cXG4gIC5zb2NpYWwgaW1nIHtcXG4gICAgd2lkdGg6IDI1cHg7IH0gfVxcblwiIl19 */\n/*@ sourceURL=styles\\stylesheet.scss */";
__styledJsxDefaultExport.__scopedHash = "2607021874";
module.exports = __styledJsxDefaultExport;

/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(194);

var _head2 = _interopRequireDefault(_head);

var _stylesheet = __webpack_require__(544);

var _stylesheet2 = _interopRequireDefault(_stylesheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Johnny\\Desktop\\personal-portfolio\\components\\Header.js';


var Header = function Header() {
    return _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }, _react2.default.createElement('title', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, 'Johnny Bui | Front End Web Developer'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Raleway:200,500', rel: 'stylesheet', __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }), _react2.default.createElement('link', { href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', rel: 'stylesheet', __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }), _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _stylesheet2.default }, __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }));
};

exports.default = Header;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Johnny\\Desktop\\personal-portfolio\\components\\Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Johnny\\Desktop\\personal-portfolio\\components\\Header.js"); } } })();

/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Johnny\\Desktop\\personal-portfolio\\components\\Layout.js';

var Layout = function Layout(_ref) {
	var menuOpen = _ref.menuOpen,
	    children = _ref.children;

	var pageScale = menuOpen ? 'pageWrap pageWrapActive' : 'pageWrap';
	return _react2.default.createElement('div', { className: pageScale, __source: {
			fileName: _jsxFileName,
			lineNumber: 4
		}
	}, children);
};

exports.default = Layout;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Johnny\\Desktop\\personal-portfolio\\components\\Layout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Johnny\\Desktop\\personal-portfolio\\components\\Layout.js"); } } })();

/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _Nav = __webpack_require__(548);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Johnny\\Desktop\\personal-portfolio\\components\\Menu.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Johnny\\Desktop\\personal-portfolio\\components\\Menu.js"); } } })();

/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _style = __webpack_require__(551);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(543);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Johnny\\Desktop\\personal-portfolio\\components\\Nav.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Johnny\\Desktop\\personal-portfolio\\components\\Nav.js"); } } })();

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

var _Header = __webpack_require__(545);

var _Header2 = _interopRequireDefault(_Header);

var _Menu = __webpack_require__(547);

var _Menu2 = _interopRequireDefault(_Menu);

var _Layout = __webpack_require__(546);

var _Layout2 = _interopRequireDefault(_Layout);

var _Social = __webpack_require__(550);

var _Social2 = _interopRequireDefault(_Social);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Johnny\\Desktop\\personal-portfolio\\components\\Outer-Container.js';


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
            var menuToggle = this.state.menuOpen;
            return _react2.default.createElement('div', { className: 'outerContainer', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            }, _react2.default.createElement(_Header2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }), _react2.default.createElement(_Menu2.default, { menuOpen: menuToggle, onToggleMenu: this.handleToggleMenu.bind(this), onCloseMenu: this.handleCloseMenu.bind(this), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }), _react2.default.createElement(_Layout2.default, { menuOpen: menuToggle, onCloseMenu: this.handleCloseMenu.bind(this), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }, this.props.children), _react2.default.createElement(_Social2.default, { menuOpen: menuToggle, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }));
        }
    }]);

    return _class;
}(_react.Component);

exports.default = _class;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Johnny\\Desktop\\personal-portfolio\\components\\Outer-Container.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Johnny\\Desktop\\personal-portfolio\\components\\Outer-Container.js"); } } })();

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Johnny\\Desktop\\personal-portfolio\\components\\Social.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Johnny\\Desktop\\personal-portfolio\\components\\Social.js"); } } })();

/***/ }),

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(540);


/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _style = __webpack_require__(551);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _projects = __webpack_require__(560);

var _projects2 = _interopRequireDefault(_projects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Johnny\\Desktop\\personal-portfolio\\components\\Projects.js';


var Projects = function Projects() {
	var projectList = _projects2.default.map(function (project, index) {
		var title = project.title;
		var altTag = project.title.toLowerCase() + ' screenshot';
		var dates = project.dates;
		var description = project.description;
		var skills = project.skills;
		var image = project.image;
		var github = project.github;
		var url = project.url;
		return _react2.default.createElement('div', { key: index, className: 'project', __source: {
				fileName: _jsxFileName,
				lineNumber: 14
			}
		}, _react2.default.createElement('div', { className: 'project__img--container', __source: {
				fileName: _jsxFileName,
				lineNumber: 15
			}
		}, _react2.default.createElement('img', { src: image, alt: altTag, __source: {
				fileName: _jsxFileName,
				lineNumber: 16
			}
		}), _react2.default.createElement('div', { className: 'project__image--overlay', __source: {
				fileName: _jsxFileName,
				lineNumber: 17
			}
		})), _react2.default.createElement('div', { className: 'project__info', __source: {
				fileName: _jsxFileName,
				lineNumber: 19
			}
		}, _react2.default.createElement('h2', {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 20
			}
		}, title), _react2.default.createElement('p', {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 21
			}
		}, skills), _react2.default.createElement('div', {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 22
			}
		}, _react2.default.createElement('a', { href: github, __source: {
				fileName: _jsxFileName,
				lineNumber: 23
			}
		}, 'Github')), _react2.default.createElement('div', {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 25
			}
		}, _react2.default.createElement('a', { href: url, __source: {
				fileName: _jsxFileName,
				lineNumber: 26
			}
		}, 'Site'))));
	});

	return _react2.default.createElement('div', { className: 'projects', 'data-jsx': 2117255362,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 34
		}
	}, _react2.default.createElement('h1', {
		'data-jsx': 2117255362,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 35
		}
	}, 'Portfolio'), _react2.default.createElement('div', { className: 'project__list', 'data-jsx': 2117255362,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 36
		}
	}, projectList), _react2.default.createElement(_style2.default, {
		styleId: 2117255362,
		css: '.projects[data-jsx="2117255362"]{position:relative;top:12%}.projects[data-jsx="2117255362"] h1[data-jsx="2117255362"]{-webkit-text-align:center;text-align:center}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFByb2plY3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDZSxBQUdpQyxBQUVBLG1CQUZpQixTQUFjLGtCQUVqQiIsImZpbGUiOiJjb21wb25lbnRzXFxQcm9qZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9Kb2hubnkvRGVza3RvcC9wZXJzb25hbC1wb3J0Zm9saW8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvamVjdERhdGEgZnJvbSAnLi4vZGF0YS9wcm9qZWN0cy5qc29uJ1xyXG5cclxuY29uc3QgUHJvamVjdHMgPSAoKSA9PiB7XHJcblx0Y29uc3QgcHJvamVjdExpc3QgPSBQcm9qZWN0RGF0YS5tYXAoZnVuY3Rpb24ocHJvamVjdCwgaW5kZXgpIHtcclxuXHRcdGxldCB0aXRsZSA9IHByb2plY3QudGl0bGU7XHJcblx0XHRsZXQgYWx0VGFnID0gcHJvamVjdC50aXRsZS50b0xvd2VyQ2FzZSgpICsgJyBzY3JlZW5zaG90JztcclxuXHRcdGxldCBkYXRlcyA9IHByb2plY3QuZGF0ZXM7XHJcblx0XHRsZXQgZGVzY3JpcHRpb24gPSBwcm9qZWN0LmRlc2NyaXB0aW9uO1xyXG5cdFx0bGV0IHNraWxscyA9IHByb2plY3Quc2tpbGxzO1xyXG5cdFx0bGV0IGltYWdlID0gcHJvamVjdC5pbWFnZTtcclxuXHRcdGxldCBnaXRodWIgPSBwcm9qZWN0LmdpdGh1YjtcclxuXHRcdGxldCB1cmwgPSBwcm9qZWN0LnVybDtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwicHJvamVjdFwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcm9qZWN0X19pbWctLWNvbnRhaW5lcic+XHJcblx0XHRcdFx0XHQ8aW1nIHNyYz17aW1hZ2V9IGFsdD17YWx0VGFnfS8+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvamVjdF9faW1hZ2UtLW92ZXJsYXknPjwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdF9faW5mb1wiPlxyXG5cdFx0XHRcdFx0PGgyPnt0aXRsZX08L2gyPlxyXG5cdFx0XHRcdFx0PHA+e3NraWxsc308L3A+XHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0PGEgaHJlZj17Z2l0aHVifT5HaXRodWI8L2E+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHQ8YSBocmVmPXt1cmx9PlNpdGU8L2E+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fSlcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdwcm9qZWN0cyc+XHJcblx0XHRcdDxoMT5Qb3J0Zm9saW88L2gxPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvamVjdF9fbGlzdCc+XHJcblx0XHRcdFx0e3Byb2plY3RMaXN0fVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PHN0eWxlIGpzeD57YFxyXG5cdCAgICAgICAgICAgIC5wcm9qZWN0cyB7XHJcblx0ICAgICAgICAgICAgXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0ICAgIHRvcDogMTIlO1xyXG5cdCAgICAgICAgICAgIH1cclxuXHJcblx0ICAgICAgICAgICAgLnByb2plY3RzIGgxIHtcclxuXHQgICAgICAgICAgICBcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHQgICAgICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgYH08L3N0eWxlPlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHMiXX0= */\n/*@ sourceURL=components\\Projects.js */'
	}));
};

exports.default = Projects;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Johnny\\Desktop\\personal-portfolio\\components\\Projects.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Johnny\\Desktop\\personal-portfolio\\components\\Projects.js"); } } })();

/***/ }),

/***/ 560:
/***/ (function(module, exports) {

module.exports = [
	{
		"title": "Todo Application",
		"dates": "December 2016",
		"description": "Todo application using local storage to persist data",
		"skills": "React, Redux, Webpack, Express, SASS",
		"image": "static/react-todo.jpg",
		"github": "https://github.com/johnnyqbui/React-Todo",
		"url": "http://thawing-garden-56451.herokuapp.com/"
	},
	{
		"title": "Twitch Streamers",
		"dates": "November 2016",
		"description": "Display list of Twitch streamers and their status",
		"skills": "React, Webpack, Express, SASS",
		"image": "static/twitch-streamers.jpg",
		"github": "https://github.com/johnnyqbui/twitch-streamers",
		"url": "https://johnnyqbui.github.io/twitch-streamers/"
	},
	{
		"title": "Wikipedia Viewer",
		"dates": "October 2016",
		"description": "Search for wikipedia articles by input or random.",
		"skills": "Angular 1, Webpack, SASS",
		"image": "static/wiki-viewer.jpg",
		"github": "https://github.com/johnnyqbui/wiki-viewer",
		"url": "https://johnnyqbui.github.io/wiki-viewer/"
	},
	{
		"title": "Neighborhood Map",
		"dates": "July 2016",
		"description": "App that show suggested locations in Seattle, WA.",
		"skills": "Knockout, Gulp, jQuery",
		"image": "static/neighborhood-map.jpg",
		"github": "https://github.com/johnnyqbui/Project-Neighborhood-Map",
		"url": "https://johnnyqbui.github.io/Project-Neighborhood-Map/"
	},
	{
		"title": "Arcade Game",
		"dates": "May 2016",
		"description": "Inspired by frogger game, created HTML5 canvas game with use of Object Oriented JavaScript",
		"skills": "HTML5 Canvas, Vanilla JS",
		"image": "static/arcade-game.jpg",
		"github": "https://github.com/johnnyqbui/Arcade-Game-Frogger-Clone",
		"url": "http://johnnyqbui.github.io/Arcade-Game-Frogger-Clone"
	}
];

/***/ })

},[552]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXFBvcnRmb2xpby5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL1BvcnRmb2xpby5qcz8zMzAxNWY0Iiwid2VicGFjazovLy9zdHlsZXMvc3R5bGVzaGVldC5zY3NzPzMzMDE1ZjQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanM/MzMwMTVmNCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcz8zMzAxNWY0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWVudS5qcz8zMzAxNWY0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2LmpzPzMzMDE1ZjQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9PdXRlci1Db250YWluZXIuanM/MzMwMTVmNCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NvY2lhbC5qcz8zMzAxNWY0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvamVjdHMuanM/MzMwMTVmNCIsIndlYnBhY2s6Ly8vLi9kYXRhL3Byb2plY3RzLmpzb24/MzMwMTVmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgT3V0ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9PdXRlci1Db250YWluZXInXHJcbmltcG9ydCBQcm9qZWN0cyBmcm9tICcuLi9jb21wb25lbnRzL1Byb2plY3RzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxyXG5cdDxPdXRlcj5cclxuXHRcdDxQcm9qZWN0cyAvPlxyXG5cdDwvT3V0ZXI+XHJcbilcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9Qb3J0Zm9saW8uanM/ZW50cnkiLCJtb2R1bGUuZXhwb3J0cyA9IFwiYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuOyB9XFxuXFxucCwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgYSB7XFxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxcblxcbiosICo6YWZ0ZXIsICo6YmVmb3JlIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG4ucGFnZVdyYXAge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApIHJvdGF0ZVkoMCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgcm90YXRlWSgwKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG4gICAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cztcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZDogI2ZmZjsgfVxcblxcbi5wYWdlV3JhcEFjdGl2ZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMHB4LCAwcHgsIC02MDBweCkgcm90YXRlWSgyMGRlZyk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMHB4LCAwcHgsIC02MDBweCkgcm90YXRlWSgyMGRlZyk7XFxuICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGRlbGF5ZWQge1xcbiAgMCUge1xcbiAgICB6LWluZGV4OiAyOyB9XFxuICAxMDAlIHtcXG4gICAgei1pbmRleDogMDsgfSB9XFxuXFxuQGtleWZyYW1lcyBkZWxheWVkIHtcXG4gIDAlIHtcXG4gICAgei1pbmRleDogMjsgfVxcbiAgMTAwJSB7XFxuICAgIHotaW5kZXg6IDA7IH0gfVxcblxcbi5kZWxheWVkLVoge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZGVsYXllZDtcXG4gICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGRlbGF5ZWQ7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLjVzO1xcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC41cztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzOyB9XFxuXFxuLm92ZXJsYXkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDEwMCwgMTAwLCAxMDAsIDApO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNXM7XFxuICB0cmFuc2l0aW9uOiAuNXM7XFxuICB6LWluZGV4OiAyOyB9XFxuXFxuLm92ZXJsYXktLWFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDEwMCwgMTAwLCAxMDAsIDAuMyk7IH1cXG5cXG4ub3V0ZXJDb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTUwMHB4O1xcbiAgICAgICAgICBwZXJzcGVjdGl2ZTogMTUwMHB4O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzO1xcbiAgdHJhbnNpdGlvbjogMC41czsgfVxcblxcbi5iYWNrZ3JvdW5kX19tZW51IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMSUsIHJnYmEoMTIxLCAzNCwgMzQsIDAuODcpKSwgdG8oIzJmMmYzOCkpO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgxMjEsIDM0LCAzNCwgMC44NykgMSUsICMyZjJmMzggMTAwJSk7XFxuICBvcGFjaXR5OiAxOyB9XFxuXFxuLm1vcnBoQ2xvc2UgLmRvdDpudGgtb2YtdHlwZSgxKSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpOyB9XFxuXFxuLm1vcnBoQ2xvc2UgLmRvdDpudGgtb2YtdHlwZSgyKSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDdweCwgN3B4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoN3B4LCA3cHgpOyB9XFxuXFxuLm1vcnBoQ2xvc2UgLmRvdDpudGgtb2YtdHlwZSgzKSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDMwcHgsIDBweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDMwcHgsIDBweCk7IH1cXG5cXG4ubW9ycGhDbG9zZSAuZG90Om50aC1vZi10eXBlKDQpIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoN3B4LCAyM3B4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoN3B4LCAyM3B4KTsgfVxcblxcbi5tb3JwaENsb3NlIC5kb3Q6bnRoLW9mLXR5cGUoNSkge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNXB4LCAxNXB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTVweCwgMTVweCk7IH1cXG5cXG4ubW9ycGhDbG9zZSAuZG90Om50aC1vZi10eXBlKDYpIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjNweCwgN3B4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjNweCwgN3B4KTsgfVxcblxcbi5tb3JwaENsb3NlIC5kb3Q6bnRoLW9mLXR5cGUoNykge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDMwcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDMwcHgpOyB9XFxuXFxuLm1vcnBoQ2xvc2UgLmRvdDpudGgtb2YtdHlwZSg4KSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDIzcHgsIDIzcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyM3B4LCAyM3B4KTsgfVxcblxcbi5tb3JwaENsb3NlIC5kb3Q6bnRoLW9mLXR5cGUoOSkge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMHB4LCAzMHB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzBweCwgMzBweCk7IH1cXG5cXG4ubW9ycGhDbG9zZTpob3ZlciAuZG90IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI7IH1cXG5cXG4ubW9ycGhDbG9zZTpob3ZlciAuZG90Om50aC1vZi10eXBlKDEpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtM3B4LCAtM3B4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtM3B4LCAtM3B4KTsgfVxcblxcbi5tb3JwaENsb3NlOmhvdmVyIC5kb3Q6bnRoLW9mLXR5cGUoMikge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDZweCwgNnB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg2cHgsIDZweCk7IH1cXG5cXG4ubW9ycGhDbG9zZTpob3ZlciAuZG90Om50aC1vZi10eXBlKDMpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgzM3B4LCAtM3B4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzM3B4LCAtM3B4KTsgfVxcblxcbi5tb3JwaENsb3NlOmhvdmVyIC5kb3Q6bnRoLW9mLXR5cGUoNCkge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDZweCwgMjRweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNnB4LCAyNHB4KTsgfVxcblxcbi5tb3JwaENsb3NlOmhvdmVyIC5kb3Q6bnRoLW9mLXR5cGUoNSkge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDE1cHgsIDE1cHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE1cHgsIDE1cHgpOyB9XFxuXFxuLm1vcnBoQ2xvc2U6aG92ZXIgLmRvdDpudGgtb2YtdHlwZSg2KSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjRweCwgNnB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNHB4LCA2cHgpOyB9XFxuXFxuLm1vcnBoQ2xvc2U6aG92ZXIgLmRvdDpudGgtb2YtdHlwZSg3KSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTNweCwgMzNweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTNweCwgMzNweCk7IH1cXG5cXG4ubW9ycGhDbG9zZTpob3ZlciAuZG90Om50aC1vZi10eXBlKDgpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNHB4LCAyNHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNHB4LCAyNHB4KTsgfVxcblxcbi5tb3JwaENsb3NlOmhvdmVyIC5kb3Q6bnRoLW9mLXR5cGUoOSkge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDMzcHgsIDMzcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDMzcHgsIDMzcHgpOyB9XFxuXFxuLm1vcnBoT3BlbiAuZG90Om50aC1vZi10eXBlKDEpIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7IH1cXG5cXG4ubW9ycGhPcGVuIC5kb3Q6bnRoLW9mLXR5cGUoMikge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNXB4LCAwcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNXB4LCAwcHgpOyB9XFxuXFxuLm1vcnBoT3BlbiAuZG90Om50aC1vZi10eXBlKDMpIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzBweCwgMHB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzBweCwgMHB4KTsgfVxcblxcbi5tb3JwaE9wZW4gLmRvdDpudGgtb2YtdHlwZSg0KSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMTVweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMTVweCk7IH1cXG5cXG4ubW9ycGhPcGVuIC5kb3Q6bnRoLW9mLXR5cGUoNSkge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNXB4LCAxNXB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTVweCwgMTVweCk7IH1cXG5cXG4ubW9ycGhPcGVuIC5kb3Q6bnRoLW9mLXR5cGUoNikge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMHB4LCAxNXB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzBweCwgMTVweCk7IH1cXG5cXG4ubW9ycGhPcGVuIC5kb3Q6bnRoLW9mLXR5cGUoNykge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDMwcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDMwcHgpOyB9XFxuXFxuLm1vcnBoT3BlbiAuZG90Om50aC1vZi10eXBlKDgpIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTVweCwgMzBweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE1cHgsIDMwcHgpOyB9XFxuXFxuLm1vcnBoT3BlbiAuZG90Om50aC1vZi10eXBlKDkpIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzBweCwgMzBweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDMwcHgsIDMwcHgpOyB9XFxuXFxuLm1vcnBoT3Blbjpob3ZlciAuZG90IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI7IH1cXG5cXG4ubW9ycGhPcGVuOmhvdmVyIC5kb3Q6bnRoLW9mLXR5cGUoMSkge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIC0zcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIC0zcHgpOyB9XFxuXFxuLm1vcnBoT3Blbjpob3ZlciAuZG90Om50aC1vZi10eXBlKDIpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNXB4LCAwcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE1cHgsIDBweCk7IH1cXG5cXG4ubW9ycGhPcGVuOmhvdmVyIC5kb3Q6bnRoLW9mLXR5cGUoMykge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDMzcHgsIC0zcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDMzcHgsIC0zcHgpOyB9XFxuXFxuLm1vcnBoT3Blbjpob3ZlciAuZG90Om50aC1vZi10eXBlKDQpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDE1cHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMTVweCk7IH1cXG5cXG4ubW9ycGhPcGVuOmhvdmVyIC5kb3Q6bnRoLW9mLXR5cGUoNSkge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDE1cHgsIDE1cHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE1cHgsIDE1cHgpOyB9XFxuXFxuLm1vcnBoT3Blbjpob3ZlciAuZG90Om50aC1vZi10eXBlKDYpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMHB4LCAxNXB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMHB4LCAxNXB4KTsgfVxcblxcbi5tb3JwaE9wZW46aG92ZXIgLmRvdDpudGgtb2YtdHlwZSg3KSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTNweCwgMzNweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTNweCwgMzNweCk7IH1cXG5cXG4ubW9ycGhPcGVuOmhvdmVyIC5kb3Q6bnRoLW9mLXR5cGUoOCkge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDE1cHgsIDMwcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE1cHgsIDMwcHgpOyB9XFxuXFxuLm1vcnBoT3Blbjpob3ZlciAuZG90Om50aC1vZi10eXBlKDkpIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgzM3B4LCAzM3B4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzM3B4LCAzM3B4KTsgfVxcblxcbi5tZW51IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMzBweDtcXG4gIHJpZ2h0OiAzMHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDQwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB6LWluZGV4OiA0OyB9XFxuXFxuLm1lbnUgLmRvdCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDVweDtcXG4gICAgaGVpZ2h0OiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3ZDdkN2Q7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDsgfVxcblxcbi5wcm9qZWN0X19saXN0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiA1MHB4IGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXgtd2lkdGg6IDgwMHB4OyB9XFxuXFxuLnByb2plY3Qge1xcbiAgbWF4LXdpZHRoOiAzNTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiA0MHB4IDI1cHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCA1cHggMjBweCAxMHB4IHJnYmEoNDYsIDYxLCA3MywgMC4yKTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMnB4IDVweCAyMHB4IDEwcHggcmdiYSg0NiwgNjEsIDczLCAwLjIpO1xcbiAgYm9yZGVyLXJhZGl1czogMiU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNXM7XFxuICB0cmFuc2l0aW9uOiAuNXM7IH1cXG5cXG4ucHJvamVjdCAucHJvamVjdF9faW1nLS1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4ucHJvamVjdCAucHJvamVjdF9faW1nLS1jb250YWluZXIgaW1nIHtcXG4gICAgICB3aWR0aDogMTAwJTsgfVxcblxcbi5wcm9qZWN0IC5wcm9qZWN0X19pbWctLWNvbnRhaW5lciAucHJvamVjdF9faW1hZ2UtLW92ZXJsYXkge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNXM7XFxuICAgICAgdHJhbnNpdGlvbjogLjVzOyB9XFxuXFxuLnByb2plY3Q6aG92ZXIge1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCA1cHggMjBweCAwIHJnYmEoNDYsIDYxLCA3MywgMC4yKTtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAycHggNXB4IDIwcHggMCByZ2JhKDQ2LCA2MSwgNzMsIDAuMik7IH1cXG5cXG4ucHJvamVjdDpob3ZlciAucHJvamVjdF9faW5mbyBhIHtcXG4gICAgICBjb2xvcjogIzhlOGU4ZTsgfVxcblxcbi5wcm9qZWN0OmhvdmVyOm50aC1vZi10eXBlKDEpIHtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNXM7XFxuICAgIHRyYW5zaXRpb246IC41czsgfVxcblxcbi5wcm9qZWN0Om50aC1vZi10eXBlKDEpIC5wcm9qZWN0X19pbWFnZS0tb3ZlcmxheSB7XFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20ocmdiYSg0NSwgMjI5LCAxOTIsIDAuNSkpLCB0byhyZ2JhKDEzNywgMjU1LCAxNzgsIDAuOCkpKTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSg0NSwgMjI5LCAxOTIsIDAuNSkgMCUsIHJnYmEoMTM3LCAyNTUsIDE3OCwgMC44KSAxMDAlKTsgfVxcblxcbi5wcm9qZWN0Om50aC1vZi10eXBlKDEpIC5wcm9qZWN0X19pbmZvIGRpdiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTM3LCAyNTUsIDE3OCwgMC44KTsgfVxcblxcbi5wcm9qZWN0Om50aC1vZi10eXBlKDIpIC5wcm9qZWN0X19pbWFnZS0tb3ZlcmxheSB7XFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20ocmdiYSg0OSwgMTAyLCAyNDcsIDAuNSkpLCB0byhyZ2JhKDE5MCwgMTMzLCAyNDcsIDAuNykpKTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSg0OSwgMTAyLCAyNDcsIDAuNSkgMCUsIHJnYmEoMTkwLCAxMzMsIDI0NywgMC43KSAxMDAlKTsgfVxcblxcbi5wcm9qZWN0Om50aC1vZi10eXBlKDIpIC5wcm9qZWN0X19pbmZvIGRpdiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTkwLCAxMzMsIDI0NywgMC44KTsgfVxcblxcbi5wcm9qZWN0Om50aC1vZi10eXBlKDMpIC5wcm9qZWN0X19pbWFnZS0tb3ZlcmxheSB7XFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20ocmdiYSgyMzcsIDQ3LCA0NywgMC41KSksIHRvKHJnYmEoMTc1LCA5NiwgMTY2LCAwLjgpKSk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjM3LCA0NywgNDcsIDAuNSkgMCUsIHJnYmEoMTc1LCA5NiwgMTY2LCAwLjgpIDEwMCUpOyB9XFxuXFxuLnByb2plY3Q6bnRoLW9mLXR5cGUoMykgLnByb2plY3RfX2luZm8gZGl2IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNzUsIDk2LCAxNjYsIDAuOCk7IH1cXG5cXG4ucHJvamVjdDpudGgtb2YtdHlwZSg0KSAucHJvamVjdF9faW1hZ2UtLW92ZXJsYXkge1xcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKHJnYmEoMzcsIDk0LCAxODYsIDAuNCkpLCB0byhyZ2JhKDQ3LCA1MywgODYsIDAuOCkpKTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgzNywgOTQsIDE4NiwgMC40KSAwJSwgcmdiYSg0NywgNTMsIDg2LCAwLjgpIDEwMCUpOyB9XFxuXFxuLnByb2plY3Q6bnRoLW9mLXR5cGUoNCkgLnByb2plY3RfX2luZm8gZGl2IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgzNywgOTQsIDE4NiwgMC44KTsgfVxcblxcbi5wcm9qZWN0Om50aC1vZi10eXBlKDUpIC5wcm9qZWN0X19pbWFnZS0tb3ZlcmxheSB7XFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20ocmdiYSgyNTUsIDE4NywgNTAsIDAuNikpLCB0byhyZ2JhKDI1NSwgMTg4LCAxMzcsIDAuOSkpKTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyNTUsIDE4NywgNTAsIDAuNikgMCUsIHJnYmEoMjU1LCAxODgsIDEzNywgMC45KSAxMDAlKTsgfVxcblxcbi5wcm9qZWN0Om50aC1vZi10eXBlKDUpIC5wcm9qZWN0X19pbmZvIGRpdiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAxODgsIDEzNywgMC45KTsgfVxcblxcbi5wcm9qZWN0IC5wcm9qZWN0X19pbmZvIHtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgbWFyZ2luOiAzNXB4IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDsgfVxcblxcbi5wcm9qZWN0IC5wcm9qZWN0X19pbmZvIGgyIHtcXG4gICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICAgIGNvbG9yOiAjNTU1OyB9XFxuXFxuLnByb2plY3QgLnByb2plY3RfX2luZm8gcCB7XFxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgICBjb2xvcjogIzc3NzsgfVxcblxcbi5wcm9qZWN0IC5wcm9qZWN0X19pbmZvIGEge1xcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgY29sb3I6ICNiMWIxYjE7XFxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IC41cztcXG4gICAgICB0cmFuc2l0aW9uOiAuNXM7IH1cXG5cXG4ucHJvamVjdCAucHJvamVjdF9faW5mbyBkaXYge1xcbiAgICAgIHdpZHRoOiAxMzVweDtcXG4gICAgICBoZWlnaHQ6IDM1cHg7XFxuICAgICAgbWFyZ2luOiAyMHB4IDVweCA1cHggNXB4O1xcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWJveDtcXG4gICAgICBkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXhib3g7XFxuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IC41cztcXG4gICAgICB0cmFuc2l0aW9uOiAuNXM7IH1cXG5cXG4uc29jaWFsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNDAwcHg7XFxuICByaWdodDogMDtcXG4gIHotaW5kZXg6IDM7XFxuICBtYXJnaW46IDAgMzBweDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg1MTJweCwgMCwgMCkgcm90YXRlWSgwKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg1MTJweCwgMCwgMCkgcm90YXRlWSgwKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG4gICAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cztcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxuICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuXFxuLnNvY2lhbEFjdGl2ZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgcm90YXRlWSgwKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSByb3RhdGVZKDApOyB9XFxuXFxuLnNvY2lhbCB1bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwOyB9XFxuXFxuLnNvY2lhbCBsaSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luOiA1cHg7IH1cXG5cXG4uc29jaWFsIGltZyB7XFxuICB3aWR0aDogMzVweDsgfVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA1MTJweCkge1xcbiAgLnNvY2lhbCB7XFxuICAgIHRvcDogNTAlO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTUwJSwgMCkgcm90YXRlWSgwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC01MCUsIDApIHJvdGF0ZVkoMCk7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG4gICAgICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgICByaWdodDogYXV0bzsgfVxcbiAgLnNvY2lhbEFjdGl2ZSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwcHgsIC01MCUsIC02MDBweCkgcm90YXRlWSgyMGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwcHgsIC01MCUsIC02MDBweCkgcm90YXRlWSgyMGRlZyk7IH1cXG4gIC5zb2NpYWwgbGkge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW46IDMwcHggMDsgfVxcbiAgLnNvY2lhbCBpbWcge1xcbiAgICB3aWR0aDogMjVweDsgfSB9XFxuXCJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3R5bGVzL3N0eWxlc2hlZXQuc2NzcyIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHN0eWxlc2hlZXQgZnJvbSAnLi4vc3R5bGVzL3N0eWxlc2hlZXQuc2NzcydcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IChcclxuICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Kb2hubnkgQnVpIHwgRnJvbnQgRW5kIFdlYiBEZXZlbG9wZXI8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJhbGV3YXk6MjAwLDUwMFwiIHJlbD1cInN0eWxlc2hlZXRcIi8+XHJcbiAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIi8+XHJcbiAgICAgICAgPHN0eWxlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogc3R5bGVzaGVldCB9fSAvPlxyXG4gICAgPC9IZWFkPlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0hlYWRlci5qcyIsImNvbnN0IExheW91dCA9ICh7bWVudU9wZW4sIGNoaWxkcmVufSkgPT4ge1xyXG5cdGNvbnN0IHBhZ2VTY2FsZSA9IG1lbnVPcGVuID8gJ3BhZ2VXcmFwIHBhZ2VXcmFwQWN0aXZlJyA6ICdwYWdlV3JhcCdcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e3BhZ2VTY2FsZX0+XHJcblx0ICAgICAgICB7Y2hpbGRyZW59XHJcblx0ICAgIDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJpbXBvcnQgTmF2IGZyb20gJy4vTmF2J1xyXG5cclxuY29uc3QgTWVudSA9ICh7bWVudU9wZW4sIG9uQ2xvc2VNZW51LCBvblRvZ2dsZU1lbnV9KSA9PiB7XHJcbiAgICBjb25zdCBtb3JwaCA9IG1lbnVPcGVuID8gJ21lbnUgbW9ycGhDbG9zZScgOiAnbWVudSBtb3JwaE9wZW4nO1xyXG4gICAgY29uc3Qgb3ZlcmxheSA9IG1lbnVPcGVuID8gJ292ZXJsYXkgb3ZlcmxheS0tYWN0aXZlJyA6ICdvdmVybGF5IGRlbGF5ZWQtWic7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyaWdodE1lbnUnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmFja2dyb3VuZF9fbWVudSc+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17b25DbG9zZU1lbnUuYmluZCh0aGlzKX0gY2xhc3NOYW1lPXtvdmVybGF5fT48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtvblRvZ2dsZU1lbnUuYmluZCh0aGlzKX0gY2xhc3NOYW1lPXttb3JwaH0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb3RcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb3RcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb3RcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb3RcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb3RcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb3RcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb3RcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb3RcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb3RcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8TmF2IG1lbnVPcGVuPXttZW51T3Blbn0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTWVudS5qcyIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNvbnN0IE5hdiA9ICh7bWVudU9wZW59KSA9PiB7XHJcblx0Y29uc3QgcmVuZGVyTWVudSA9IG1lbnVPcGVuID8gJ3NpZGVNZW51IGNsb3NlU2lkZU1lbnUnIDogJ3NpZGVNZW51J1xyXG5cdHJldHVybiAoXHJcblx0XHQ8bmF2IGNsYXNzTmFtZT17cmVuZGVyTWVudX0+XHJcblx0XHRcdDx1bCBjbGFzc05hbWU9J25hdic+XHJcblx0XHRcdFx0PGxpPlxyXG5cdFx0XHQgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcblx0XHRcdCAgICAgICAgICA8YSBjbGFzc05hbWU9J25hdi1saW5rcycgPkhPTUU8L2E+XHJcblx0XHRcdCAgICAgICAgPC9MaW5rPlxyXG5cdFx0ICAgICAgICA8L2xpPlxyXG5cdFx0ICAgIFx0PGxpPlxyXG5cdFx0XHQgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cIm5hdi1saW5rc1wiIGhyZWY9XCIvUG9ydGZvbGlvXCI+XHJcblx0XHRcdCAgICAgICAgICA8YT5QT1JURk9MSU88L2E+XHJcblx0XHRcdCAgICAgICAgPC9MaW5rPlxyXG5cdFx0ICAgICAgICA8L2xpPlxyXG5cdFx0ICAgICAgICA8bGk+XHJcblx0XHRcdCAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtzXCIgaHJlZj1cIi9BYm91dFwiPlxyXG5cdFx0XHQgICAgICAgICAgPGE+QUJPVVQ8L2E+XHJcblx0XHRcdCAgICAgICAgPC9MaW5rPlxyXG5cdFx0XHQgICAgPC9saT5cclxuXHRcdFx0ICAgIDxsaT5cclxuXHRcdFx0ICAgICAgICA8TGluayBjbGFzc05hbWU9XCJuYXYtbGlua3NcIiBocmVmPVwiL0NvbnRhY3RcIj5cclxuXHRcdFx0ICAgICAgICAgIDxhPkNPTlRBQ1Q8L2E+XHJcblx0XHRcdCAgICAgICAgPC9MaW5rPlxyXG5cdFx0ICAgICAgICA8L2xpPlxyXG5cdCAgICAgICAgPC91bD5cclxuXHQgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjcmVkaXRzJz5cclxuXHQgICAgICAgIFx0PHA+RGVzaWduZWQvRGV2ZWxvcGVkIGJ5IEpvaG5ueSBCdWksIDIwMTc8L3A+XHJcblx0ICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuXHQgICAgICAgIFx0LnNpZGVNZW51IHtcclxuXHQgICAgICAgIFx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRcdFx0ICAgIHJpZ2h0OiAwO1xyXG5cdFx0XHRcdCAgICB6LWluZGV4OiAzO1xyXG5cdFx0XHRcdCAgICB3aWR0aDogMzAwcHg7XHJcblx0XHRcdFx0ICAgIGhlaWdodDogMTAwJTtcclxuXHRcdFx0XHQgICAgdHJhbnNpdGlvbjogMC41cztcclxuXHRcdFx0XHQgICAgYmFja2dyb3VuZDogIzM0MzgzZTtcclxuXHRcdFx0XHQgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcclxuXHQgICAgICAgIFx0fVxyXG5cdCAgICAgICAgXHQuY2xvc2VTaWRlTWVudSB7XHJcblx0ICAgICAgICBcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuXHQgICAgICAgIFx0fVxyXG5cdCAgICAgICAgICAgIC5uYXYge1xyXG5cdCAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG5cdCAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcblx0ICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuXHQgICAgICAgICAgICAgICAgdG9wOiAxNDBweDtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHQgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgLm5hdiBsaSB7XHJcblx0ICAgICAgICAgICAgXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgzOSwgMzksIDM5LCAwLjUxKTtcclxuXHQgICAgICAgICAgICBcdHRyYW5zaXRpb246IC4zcztcclxuXHQgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgLm5hdiBsaTpmaXJzdC1vZi10eXBlIHtcclxuXHQgICAgICAgICAgICBcdGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDM5LCAzOSwgMzksIDAuNTEpO1xyXG5cdCAgICAgICAgICAgIH1cclxuXHJcblx0ICAgICAgICAgICAgLm5hdiBsaTpob3ZlciB7XHJcblx0ICAgICAgICAgICAgXHRiYWNrZ3JvdW5kOiByZ2JhKDQxLCA0MSwgNDEsIDAuNTEpO1xyXG5cdCAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgICAubmF2IGEge1xyXG5cdCAgICAgICAgICAgICAgICBjb2xvcjogI2FhYTtcclxuXHQgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAxOHB4IDM1cHg7XHJcblx0ICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuXHQgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLjVweDtcclxuXHQgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgLmNyZWRpdHMge1xyXG4gICAgICAgICAgICBcdCAgICBib3R0b206IDIwcHg7XHJcblx0XHRcdFx0ICAgIGNvbG9yOiAjYWFhO1xyXG5cdFx0XHRcdCAgICBsZWZ0OiAyMHB4O1xyXG5cdFx0XHRcdCAgICBmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdFx0ICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHR9XHJcblx0ICAgICAgICBgfTwvc3R5bGU+XHJcblx0ICAgIDwvbmF2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTmF2LmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJ1xyXG5pbXBvcnQgTWVudSBmcm9tICcuL01lbnUnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi9MYXlvdXQnXHJcbmltcG9ydCBTb2NpYWwgZnJvbSAnLi9Tb2NpYWwnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IG1lbnVPcGVuOiBmYWxzZSB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2xvc2VNZW51KCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZW51T3BlbjogZmFsc2UgfSlcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVUb2dnbGVNZW51KCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZW51T3BlbjogIXRoaXMuc3RhdGUubWVudU9wZW4gfSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IG1lbnVUb2dnbGUgPSB0aGlzLnN0YXRlLm1lbnVPcGVuO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdvdXRlckNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgICAgICA8TWVudSBtZW51T3Blbj17bWVudVRvZ2dsZX0gb25Ub2dnbGVNZW51PXt0aGlzLmhhbmRsZVRvZ2dsZU1lbnUuYmluZCh0aGlzKX0gb25DbG9zZU1lbnU9e3RoaXMuaGFuZGxlQ2xvc2VNZW51LmJpbmQodGhpcyl9Lz5cclxuICAgICAgICAgICAgICAgIDxMYXlvdXQgbWVudU9wZW49e21lbnVUb2dnbGV9IG9uQ2xvc2VNZW51PXt0aGlzLmhhbmRsZUNsb3NlTWVudS5iaW5kKHRoaXMpfT5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPFNvY2lhbCBtZW51T3Blbj17bWVudVRvZ2dsZX0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9PdXRlci1Db250YWluZXIuanMiLCJjb25zdCBTb2NpYWwgPSAoe21lbnVPcGVufSkgPT4ge1xyXG4gICAgY29uc3Qgc29jaWFsQWN0aXZlID0gbWVudU9wZW4gPyAnc29jaWFsIHNvY2lhbEFjdGl2ZScgOiAnc29jaWFsJztcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3NvY2lhbEFjdGl2ZX0+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vam9obm55cWJ1aVwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2dpdGh1Yi5wbmdcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vam9obm55cWJ1aS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9saW5rZWRpbi5wbmdcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2pxYnVpL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2luc3RhZ3JhbS5wbmdcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2NvZGVwZW4uaW8vamJ1aS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9jb2RlcGVuLnBuZ1wiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTb2NpYWxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1NvY2lhbC5qcyIsImltcG9ydCBQcm9qZWN0RGF0YSBmcm9tICcuLi9kYXRhL3Byb2plY3RzLmpzb24nXHJcblxyXG5jb25zdCBQcm9qZWN0cyA9ICgpID0+IHtcclxuXHRjb25zdCBwcm9qZWN0TGlzdCA9IFByb2plY3REYXRhLm1hcChmdW5jdGlvbihwcm9qZWN0LCBpbmRleCkge1xyXG5cdFx0bGV0IHRpdGxlID0gcHJvamVjdC50aXRsZTtcclxuXHRcdGxldCBhbHRUYWcgPSBwcm9qZWN0LnRpdGxlLnRvTG93ZXJDYXNlKCkgKyAnIHNjcmVlbnNob3QnO1xyXG5cdFx0bGV0IGRhdGVzID0gcHJvamVjdC5kYXRlcztcclxuXHRcdGxldCBkZXNjcmlwdGlvbiA9IHByb2plY3QuZGVzY3JpcHRpb247XHJcblx0XHRsZXQgc2tpbGxzID0gcHJvamVjdC5za2lsbHM7XHJcblx0XHRsZXQgaW1hZ2UgPSBwcm9qZWN0LmltYWdlO1xyXG5cdFx0bGV0IGdpdGh1YiA9IHByb2plY3QuZ2l0aHViO1xyXG5cdFx0bGV0IHVybCA9IHByb2plY3QudXJsO1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJwcm9qZWN0XCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Byb2plY3RfX2ltZy0tY29udGFpbmVyJz5cclxuXHRcdFx0XHRcdDxpbWcgc3JjPXtpbWFnZX0gYWx0PXthbHRUYWd9Lz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcm9qZWN0X19pbWFnZS0tb3ZlcmxheSc+PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0X19pbmZvXCI+XHJcblx0XHRcdFx0XHQ8aDI+e3RpdGxlfTwvaDI+XHJcblx0XHRcdFx0XHQ8cD57c2tpbGxzfTwvcD5cclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHQ8YSBocmVmPXtnaXRodWJ9PkdpdGh1YjwvYT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdDxhIGhyZWY9e3VybH0+U2l0ZTwvYT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9KVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J3Byb2plY3RzJz5cclxuXHRcdFx0PGgxPlBvcnRmb2xpbzwvaDE+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcm9qZWN0X19saXN0Jz5cclxuXHRcdFx0XHR7cHJvamVjdExpc3R9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8c3R5bGUganN4PntgXHJcblx0ICAgICAgICAgICAgLnByb2plY3RzIHtcclxuXHQgICAgICAgICAgICBcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHQgICAgdG9wOiAxMiU7XHJcblx0ICAgICAgICAgICAgfVxyXG5cclxuXHQgICAgICAgICAgICAucHJvamVjdHMgaDEge1xyXG5cdCAgICAgICAgICAgIFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdCAgICAgICAgICAgIH1cclxuXHJcblx0ICAgICAgICBgfTwvc3R5bGU+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0c1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvUHJvamVjdHMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IFtcblx0e1xuXHRcdFwidGl0bGVcIjogXCJUb2RvIEFwcGxpY2F0aW9uXCIsXG5cdFx0XCJkYXRlc1wiOiBcIkRlY2VtYmVyIDIwMTZcIixcblx0XHRcImRlc2NyaXB0aW9uXCI6IFwiVG9kbyBhcHBsaWNhdGlvbiB1c2luZyBsb2NhbCBzdG9yYWdlIHRvIHBlcnNpc3QgZGF0YVwiLFxuXHRcdFwic2tpbGxzXCI6IFwiUmVhY3QsIFJlZHV4LCBXZWJwYWNrLCBFeHByZXNzLCBTQVNTXCIsXG5cdFx0XCJpbWFnZVwiOiBcInN0YXRpYy9yZWFjdC10b2RvLmpwZ1wiLFxuXHRcdFwiZ2l0aHViXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2pvaG5ueXFidWkvUmVhY3QtVG9kb1wiLFxuXHRcdFwidXJsXCI6IFwiaHR0cDovL3RoYXdpbmctZ2FyZGVuLTU2NDUxLmhlcm9rdWFwcC5jb20vXCJcblx0fSxcblx0e1xuXHRcdFwidGl0bGVcIjogXCJUd2l0Y2ggU3RyZWFtZXJzXCIsXG5cdFx0XCJkYXRlc1wiOiBcIk5vdmVtYmVyIDIwMTZcIixcblx0XHRcImRlc2NyaXB0aW9uXCI6IFwiRGlzcGxheSBsaXN0IG9mIFR3aXRjaCBzdHJlYW1lcnMgYW5kIHRoZWlyIHN0YXR1c1wiLFxuXHRcdFwic2tpbGxzXCI6IFwiUmVhY3QsIFdlYnBhY2ssIEV4cHJlc3MsIFNBU1NcIixcblx0XHRcImltYWdlXCI6IFwic3RhdGljL3R3aXRjaC1zdHJlYW1lcnMuanBnXCIsXG5cdFx0XCJnaXRodWJcIjogXCJodHRwczovL2dpdGh1Yi5jb20vam9obm55cWJ1aS90d2l0Y2gtc3RyZWFtZXJzXCIsXG5cdFx0XCJ1cmxcIjogXCJodHRwczovL2pvaG5ueXFidWkuZ2l0aHViLmlvL3R3aXRjaC1zdHJlYW1lcnMvXCJcblx0fSxcblx0e1xuXHRcdFwidGl0bGVcIjogXCJXaWtpcGVkaWEgVmlld2VyXCIsXG5cdFx0XCJkYXRlc1wiOiBcIk9jdG9iZXIgMjAxNlwiLFxuXHRcdFwiZGVzY3JpcHRpb25cIjogXCJTZWFyY2ggZm9yIHdpa2lwZWRpYSBhcnRpY2xlcyBieSBpbnB1dCBvciByYW5kb20uXCIsXG5cdFx0XCJza2lsbHNcIjogXCJBbmd1bGFyIDEsIFdlYnBhY2ssIFNBU1NcIixcblx0XHRcImltYWdlXCI6IFwic3RhdGljL3dpa2ktdmlld2VyLmpwZ1wiLFxuXHRcdFwiZ2l0aHViXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2pvaG5ueXFidWkvd2lraS12aWV3ZXJcIixcblx0XHRcInVybFwiOiBcImh0dHBzOi8vam9obm55cWJ1aS5naXRodWIuaW8vd2lraS12aWV3ZXIvXCJcblx0fSxcblx0e1xuXHRcdFwidGl0bGVcIjogXCJOZWlnaGJvcmhvb2QgTWFwXCIsXG5cdFx0XCJkYXRlc1wiOiBcIkp1bHkgMjAxNlwiLFxuXHRcdFwiZGVzY3JpcHRpb25cIjogXCJBcHAgdGhhdCBzaG93IHN1Z2dlc3RlZCBsb2NhdGlvbnMgaW4gU2VhdHRsZSwgV0EuXCIsXG5cdFx0XCJza2lsbHNcIjogXCJLbm9ja291dCwgR3VscCwgalF1ZXJ5XCIsXG5cdFx0XCJpbWFnZVwiOiBcInN0YXRpYy9uZWlnaGJvcmhvb2QtbWFwLmpwZ1wiLFxuXHRcdFwiZ2l0aHViXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2pvaG5ueXFidWkvUHJvamVjdC1OZWlnaGJvcmhvb2QtTWFwXCIsXG5cdFx0XCJ1cmxcIjogXCJodHRwczovL2pvaG5ueXFidWkuZ2l0aHViLmlvL1Byb2plY3QtTmVpZ2hib3Job29kLU1hcC9cIlxuXHR9LFxuXHR7XG5cdFx0XCJ0aXRsZVwiOiBcIkFyY2FkZSBHYW1lXCIsXG5cdFx0XCJkYXRlc1wiOiBcIk1heSAyMDE2XCIsXG5cdFx0XCJkZXNjcmlwdGlvblwiOiBcIkluc3BpcmVkIGJ5IGZyb2dnZXIgZ2FtZSwgY3JlYXRlZCBIVE1MNSBjYW52YXMgZ2FtZSB3aXRoIHVzZSBvZiBPYmplY3QgT3JpZW50ZWQgSmF2YVNjcmlwdFwiLFxuXHRcdFwic2tpbGxzXCI6IFwiSFRNTDUgQ2FudmFzLCBWYW5pbGxhIEpTXCIsXG5cdFx0XCJpbWFnZVwiOiBcInN0YXRpYy9hcmNhZGUtZ2FtZS5qcGdcIixcblx0XHRcImdpdGh1YlwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9qb2hubnlxYnVpL0FyY2FkZS1HYW1lLUZyb2dnZXItQ2xvbmVcIixcblx0XHRcInVybFwiOiBcImh0dHA6Ly9qb2hubnlxYnVpLmdpdGh1Yi5pby9BcmNhZGUtR2FtZS1Gcm9nZ2VyLUNsb25lXCJcblx0fVxuXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2RhdGEvcHJvamVjdHMuanNvblxuLy8gbW9kdWxlIGlkID0gNTYwXG4vLyBtb2R1bGUgY2h1bmtzID0gNSJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBRUE7QUFDQTs7Ozs7OztBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFJQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQU1BO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUdBO0FBSEE7O0FBTUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSUE7QUFDQTtBQURBO0FBQ0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXhCQTtBQTRFQTtBQTVFQTtBQThFQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7O0FBRUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOzs7OztBQUdBO0FBQUE7Ozs7QUFJQTtBQUFBOzs7O0FBSUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFHQTtBQUhBOzs7Ozs7QUF2QkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFHQTtBQUhBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBR0E7QUFIQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUdBO0FBSEE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFNQTtBQU5BOztBQVNBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUtBO0FBRUE7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFGQTtBQW1CQTtBQW5CQTtBQXFCQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        