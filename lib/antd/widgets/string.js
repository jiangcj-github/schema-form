"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StringWidget = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _widget = require("../../model/widget");

var _sfItem = require("../sf-item");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StringWidget = function StringWidget(props) {
  var widgetProperty = (0, _widget.useWidget)(props);
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
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
    value: value,
    disabled: ui.disabled,
    allowClear: ui.allowClear,
    maxLength: schema.maxLength,
    placeholder: ui.placeholder,
    defaultValue: schema.default,
    prefix: ui.prefix,
    suffix: ui.suffix,
    autoComplete: ui.autocomplete,
    autoFocus: ui.autofocus,
    addonBefore: ui.addonBefore,
    addonAfter: ui.addonAfter,
    onChange: onChange,
    onPressEnter: ui.onEnter,
    onFocus: ui.onFocus,
    onBlur: ui.onBlur,
    style: ui.style,
    className: ui.className
  }));
};

exports.StringWidget = StringWidget;