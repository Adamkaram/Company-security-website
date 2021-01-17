"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Home = _interopRequireDefault(require("../Components/Home/Home"));

var _auth = _interopRequireDefault(require("../Components/auth/auth"));

var _index = _interopRequireDefault(require("../Components/Blog/Home/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = [{
  title: 'Home',
  path: '/',
  exact: true,
  component: _Home["default"]
}, {
  title: 'Blog',
  path: '/blog',
  component: _index["default"]
}, {
  title: 'Singin',
  path: '/Singin',
  component: _auth["default"]
}];
var _default = routes;
exports["default"] = _default;