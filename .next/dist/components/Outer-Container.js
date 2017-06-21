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

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Menu = require('./Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _Layout = require('./Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Social = require('./Social');

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