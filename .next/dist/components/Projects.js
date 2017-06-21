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