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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Social = require('./Social');

var _Social2 = _interopRequireDefault(_Social);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Johnny\\Desktop\\personal-portfolio\\components\\Layout.js';


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
			var pageScale = menuToggle ? 'pageWrap pageWrapActive' : 'pageWrap';
			return _react2.default.createElement('main', { className: pageScale, onClick: this.props.onCloseMenu.bind(this), __source: {
					fileName: _jsxFileName,
					lineNumber: 9
				}
			}, this.props.children, _react2.default.createElement(_Social2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 11
				}
			}));
		}
	}]);

	return _class;
}(_react.Component);

exports.default = _class;