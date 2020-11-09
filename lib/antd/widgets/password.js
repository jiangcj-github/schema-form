"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PasswordWidget = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _ = require("../..");

var _sfItem = require("../sf-item");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PasswordWidget = function PasswordWidget(props) {
  var _ui$allowClear;

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
  }, /*#__PURE__*/_react.default.createElement(_antd.Input.Password, {
    value: value,
    disabled: ui.disabled,
    maxLength: schema.maxLength,
    placeholder: ui.placeholder,
    allowClear: (_ui$allowClear = ui.allowClear) !== null && _ui$allowClear !== void 0 ? _ui$allowClear : true,
    defaultValue: schema.default,
    visibilityToggle: ui.visibilityToggle,
    iconRender: ui.iconRender,
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

exports.PasswordWidget = PasswordWidget;