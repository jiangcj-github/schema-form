"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AntdForm = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _action = require("./action");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var AntdForm = function AntdForm(props) {
  var layout = props.layout,
      colon = props.colon,
      style = props.style,
      className = props.className,
      actions = props.actions;
  return /*#__PURE__*/_react.default.createElement(_antd.Form, {
    layout: layout,
    colon: colon,
    style: style,
    className: className
  }, props.children, /*#__PURE__*/_react.default.createElement(_antd.Form.Item, null, actions === null || actions === void 0 ? void 0 : actions.map(function (e, i) {
    return /*#__PURE__*/_react.default.createElement(_action.Action, _extends({}, e, {
      key: i
    }));
  })));
};

exports.AntdForm = AntdForm;