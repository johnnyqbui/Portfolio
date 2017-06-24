'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _stylesheet = require('../styles/stylesheet.scss');

var _stylesheet2 = _interopRequireDefault(_stylesheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header() {
    return _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', null, 'Johnny Bui | Front End Web Developer'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Raleway:200,300,500', rel: 'stylesheet' }), _react2.default.createElement('link', { href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', rel: 'stylesheet' }), _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _stylesheet2.default } }));
};

exports.default = Header;