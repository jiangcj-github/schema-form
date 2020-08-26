"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioGroupWidget = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _widget = require("../../model/widget");

var _sfItem = require("../sf-item");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RadioGroupWidget = function RadioGroupWidget(props) {
  var widgetProperty = (0, _widget.useWidget)(props);
  var schema = widgetProperty.schema,
      ui = widgetProperty.ui,
      value = widgetProperty.value;

  var onChange = function onChange(event) {
    var val = event.target.value;
    widgetProperty.setValue(val);
    ui.onChange && ui.onChange(val);
  };

  return /*#__PURE__*/_react.default.createElement(_sfItem.SFItem, {
    widgetProperty: widgetProperty
  }, /*#__PURE__*/_react.default.createElement(_antd.Radio.Group, {
    value: value,
    disabled: ui.disabled,
    defaultValue: schema.default,
    optionType: ui.optionType,
    buttonStyle: ui.buttonStyle,
    options: ui.options,
    onChange: onChange,
    style: ui.style,
    className: ui.className
  }));
};

exports.RadioGroupWidget = RadioGroupWidget;