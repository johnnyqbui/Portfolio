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

var _brushstroke = require('../utils/brushstroke');

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