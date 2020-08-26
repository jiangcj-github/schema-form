"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumberWidget = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _widget = require("../../model/widget");

var _sfItem = require("../sf-item");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NumberWidget = function NumberWidget(props) {
  var widgetProperty = (0, _widget.useWidget)(props);
  var schema = widgetProperty.schema,
      ui = widgetProperty.ui,
      value = widgetProperty.value;

  var onChange = function onChange(val) {
    widgetProperty.setValue(val);
    ui.onChange && ui.onChange(val);
  };

  return /*#__PURE__*/_react.default.createElement(_sfItem.SFItem, {
    widgetProperty: widgetProperty
  }, /*#__PURE__*/_react.default.createElement(_antd.InputNumber, {
    value: value,
    disabled: ui.disabled,
    maxLength: schema.maxLength,
    min: schema.minimum,
    max: schema.maximum,
    formatter: ui.formatter,
    parser: ui.parser,
    precision: ui.precision,
    decimalSeparator: ui.decimalSeparator,
    step: ui.step,
    placeholder: ui.placeholder,
    defaultValue: schema.default,
    autoFocus: ui.autofocus,
    onChange: onChange,
    onPressEnter: ui.onEnter,
    style: ui.style,
    className: ui.className
  }));
};

exports.NumberWidget = NumberWidget;