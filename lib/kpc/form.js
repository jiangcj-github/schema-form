"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KpcForm = void 0;

var _react = _interopRequireDefault(require("react"));

var _form = require("kpc-react/components/form");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KpcForm = function KpcForm(props) {
  var layout = props.layout,
      colon = props.colon,
      style = props.style,
      className = props.className;
  return /*#__PURE__*/_react.default.createElement(_form.Form, {
    layout: layout,
    colon: colon,
    style: style,
    className: className
  }, props.children);
};

exports.KpcForm = KpcForm;