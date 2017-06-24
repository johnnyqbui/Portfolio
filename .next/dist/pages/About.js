'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _OuterContainer = require('../components/Outer-Container');

var _OuterContainer2 = _interopRequireDefault(_OuterContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	return _react2.default.createElement(_OuterContainer2.default, null, _react2.default.createElement('h1', { className: 'about__header' }, 'About'), _react2.default.createElement('div', { className: 'about' }, _react2.default.createElement('div', { className: 'about__text' }, _react2.default.createElement('p', null, 'I am a freelance/contract ', _react2.default.createElement('strong', null, 'front end web developer'), ' with an affinity for ', _react2.default.createElement('strong', null, 'minimal design and interactivity'), '. I believe the user experience should be simple, intuitive, and interactive. I\'ve always admired creative and interactive designs, which would often get me inspired to challenge myself to develop my own creative apps using ', _react2.default.createElement('strong', null, 'cutting edge web technologies'), '. This allows me to improve on my creativity and learn new technologies at the same time. My focus is on intuitive UI development, interactivity, and maximizing performance for an amazing user experience.', _react2.default.createElement('br', null), _react2.default.createElement('br', null), 'When I\'m not dabbling with code, I enjoy ', _react2.default.createElement('strong', null, 'traveling and hiking'), ', exploring new cultures and foods, watching documentaries about the cosmos, and occasionally play games. I also like to snap some neat ', _react2.default.createElement('a', { href: 'https://www.instagram.com/jqbui/', target: '_blank' }, _react2.default.createElement('strong', null, 'photos')), ' during my travels.')), _react2.default.createElement('div', { className: 'about__img' }, _react2.default.createElement('img', { src: '/static/thatsme-withfilter.jpg' }))));
};