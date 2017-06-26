'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _stylesheet = require('../styles/stylesheet.css');

var _stylesheet2 = _interopRequireDefault(_stylesheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header() {
    return _react2.default.createElement(_head2.default, null, _react2.default.createElement('meta', { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' }), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' }), _react2.default.createElement('meta', { name: 'description', content: 'Johnny Bui\'s Portolio, a Front End Web Developer looking to bring\r the next beautiful, creative, and functional web sites and apps to life.' }), _react2.default.createElement('meta', { name: 'author', content: 'Johnny Bui' }), _react2.default.createElement('title', null, 'Johnny Bui | Front End Web Developer Portfolio'), _react2.default.createElement('link', { rel: 'canonical', href: 'https://johnnyqbui.com' }), _react2.default.createElement('meta', { name: 'google-site-verification', content: '9rPONvBGFupjc1fXfLNbAPLC1-ka3UyFxw5pHzuwac4' }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Raleway:200,300,500', rel: 'stylesheet' }), _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _stylesheet2.default } }));
};

exports.default = Header;