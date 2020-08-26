"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SFItem = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = _interopRequireDefault(require("lodash"));

var _gridProperty = require("../model/grid-property");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    className: (0, _classnames.default)({
      "ant-row": true,
      "ant-form-item": true,
      "ant-form-item-has-error": showError,
      "ant-form-item-with-help": showError
    })
  }, /*#__PURE__*/_react.default.createElement(_antd.Col, {
    className: "ant-form-item-label",
    span: grid.labelCol,
    style: _lodash.default.merge({
      width: grid.labelWidth || "auto",
      textAlign: grid.labelAlign || "right"
    }, grid.labelStyle)
  }, /*#__PURE__*/_react.default.createElement("label", {
    title: schema.title,
    className: (0, _classnames.default)({
      "ant-form-item-required": required
    })
  }, schema.title)), /*#__PURE__*/_react.default.createElement(_antd.Col, {
    className: "ant-form-item-control",
    span: grid.controlCol,
    offset: grid.controlOffset,
    style: _lodash.default.merge({
      width: grid.controlWidth || "auto"
    }, grid.controlStyle)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ant-form-item-control-input"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ant-form-item-control-input-content"
  }, props.children)), showError && /*#__PURE__*/_react.default.createElement("div", {
    className: "ant-form-item-explain"
  }, /*#__PURE__*/_react.default.createElement("div", null, error))));
};

exports.SFItem = SFItem;