"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _App = require("./App");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Global Store 
//subscribe
// //dispatches
_reactDom["default"].render({
  App: _App.App
}, document.getElementById('root'));