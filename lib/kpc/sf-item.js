"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SFItem = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = _interopRequireDefault(require("lodash"));

var _gridProperty = require("../model/grid-property");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
    kpc 不支持labelCol、controlCol、controlOffset
*/
var SFItem = function SFItem(props) {
  var gridProperty = _react.default.useContext(_gridProperty.GridContext);

  var _props$widgetProperty = props.widgetProperty,
      schema = _props$widgetProperty.schema,
      ui = _props$widgetProperty.ui,
      error = _props$widgetProperty.error,
      showError = _props$widgetProperty.showError,
      required = _props$widgetProperty.required;

  var grid = _lodash.default.merge({}, gridProperty.grid, ui.grid);

  return /*#__PURE__*/_react.default.createElement("div", {
    style: ui.style,
    className: (0, _classnames.default)(_defineProperty({
      "k-form-item": true,
      "k-invalid": showError
    }, ui.className || "", true))
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "k-label",
    style: _lodash.default.merge({
      width: grid.labelWidth || "auto",
      textAlign: grid.labelAlign || "right"
    }, grid.labelStyle)
  }, required && /*#__PURE__*/_react.default.createElement("span", {
    className: "k-star"
  }, "*"), schema.title), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-content",
    style: _lodash.default.merge({
      width: grid.controlWidth || "auto"
    }, grid.controlStyle)
  }, props.children, showError && /*#__PURE__*/_react.default.createElement("div", {
    className: "k-error"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "k-error-message c-ellipsis"
  }, error))));
};

exports.SFItem = SFItem;