'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _projects = require('../data/projects.json');

var _projects2 = _interopRequireDefault(_projects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
		return _react2.default.createElement('div', { key: index, className: 'project' }, _react2.default.createElement('div', { className: 'project__img--container' }, _react2.default.createElement('img', { src: image, alt: altTag }), _react2.default.createElement('div', { className: 'project__image--overlay' })), _react2.default.createElement('div', { className: 'project__info' }, _react2.default.createElement('h2', null, title), _react2.default.createElement('p', null, skills), _react2.default.createElement('div', null, _react2.default.createElement('a', { href: github }, 'Github')), _react2.default.createElement('div', null, _react2.default.createElement('a', { href: url }, 'Site'))));
	});

	return _react2.default.createElement('div', { className: 'projects', 'data-jsx': 2117255362
	}, _react2.default.createElement('h1', {
		'data-jsx': 2117255362
	}, 'Portfolio'), _react2.default.createElement('div', { className: 'project__list', 'data-jsx': 2117255362
	}, projectList), _react2.default.createElement(_style2.default, {
		styleId: 2117255362,
		css: '.projects[data-jsx="2117255362"]{position:relative;top:12%}.projects[data-jsx="2117255362"] h1[data-jsx="2117255362"]{-webkit-text-align:center;text-align:center}'
	}));
};

exports.default = Projects;