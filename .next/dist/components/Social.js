"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

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