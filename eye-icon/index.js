"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var React = _interopRequireWildcard(require("react"));
require("./Eye.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var Eye = function Eye(_ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "grey" : _ref$color,
    width = _ref.width,
    height = _ref.height;
  return /*#__PURE__*/React.createElement("div", {
    className: "eye-icon",
    style: {
      width: width,
      height: height
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: 3,
    fill: "none",
    stroke: color,
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M2 12s3-8 10-8 10 8 10 8-3 8-10 8-10-8-10-8z"
  })));
};
var _default = exports["default"] = Eye;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./EyeOff.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var EyeOff = function EyeOff(_ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "grey" : _ref$color,
    width = _ref.width,
    height = _ref.height;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "eye-icon",
    style: {
      width: width,
      height: height
    }
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("line", {
    x1: "1",
    y1: "1",
    x2: "22",
    y2: "21",
    stroke: color,
    strokeWidth: "2"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "12",
    cy: "12",
    r: 3,
    fill: "none",
    stroke: color,
    strokeWidth: "2"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "path",
    strokeWidth: "2",
    d: "M2 12s3-8 10-8 10 8 10 8-3 8-10 8-10-8-10-8z"
  })));
};
var _default = exports["default"] = EyeOff;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Eye", {
  enumerable: true,
  get: function get() {
    return _Eye["default"];
  }
});
Object.defineProperty(exports, "EyeOff", {
  enumerable: true,
  get: function get() {
    return _EyeOff["default"];
  }
});
var _Eye = _interopRequireDefault(require("./component/Eye"));
var _EyeOff = _interopRequireDefault(require("./component/EyeOff"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
