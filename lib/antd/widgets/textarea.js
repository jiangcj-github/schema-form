"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextAreaWidget = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _ = require("../..");

var _sfItem = require("../sf-item");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextAreaWidget = function TextAreaWidget(props) {
  var widgetProperty = (0, _.useWidget)(props);
  var schema = widgetProperty.schema,
      ui = widgetProperty.ui,
      value = widgetProperty.value;

  var onChange = function onChange(event) {
    var val = event.target.value || undefined;
    widgetProperty.setValue(val);
    ui.onChange && ui.onChange(val);
  };

  return /*#__PURE__*/_react.default.createElement(_sfItem.SFItem, {
    widgetProperty: widgetProperty
  }, /*#__PURE__*/_react.default.createElement(_antd.Input.TextArea, {
    autoSize: ui.autoSize,
    value: value,
    disabled: ui.disabled,
    placeholder: ui.placeholder,
    defaultValue: schema.default,
    autoFocus: ui.autofocus,
    maxLength: schema.maxLength,
    minLength: schema.minLength,
    rows: ui.rows,
    cols: ui.cols,
    onChange: onChange,
    onPressEnter: ui.onEnter,
    onFocus: ui.onFocus,
    onBlur: ui.onBlur,
    onResize: ui.onResize,
    style: ui.style,
    className: ui.className
  }));
};

exports.TextAreaWidget = TextAreaWidget;