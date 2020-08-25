"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AntdForm = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _widgetFactory = require("../model/widget-factory");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AntdForm = function AntdForm(props) {
  var layout = props.layout,
      colon = props.colon,
      style = props.style,
      className = props.className;
  return /*#__PURE__*/_react.default.createElement(_antd.Form, {
    layout: layout,
    colon: colon,
    style: style,
    className: className
  }, props.children);
};

exports.AntdForm = AntdForm;

_widgetFactory.widgetRegistry.registrySF("antd.form", AntdForm);