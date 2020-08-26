"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckBoxWidget = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _widget = require("../../model/widget");

var _sfItem = require("../sf-item");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CheckBoxWidget = function CheckBoxWidget(props) {
  var widgetProperty = (0, _widget.useWidget)(props);
  var schema = widgetProperty.schema,
      ui = widgetProperty.ui,
      value = widgetProperty.value;

  var onChange = function onChange(event) {
    var val = event.target.checked;
    widgetProperty.setValue(val);
    ui.onChange && ui.onChange(val);
  };

  return /*#__PURE__*/_react.default.createElement(_sfItem.SFItem, {
    widgetProperty: widgetProperty
  }, /*#__PURE__*/_react.default.createElement(_antd.Checkbox, {
    autoFocus: ui.autoFocus,
    checked: value,
    disabled: ui.disabled,
    defaultChecked: schema.default,
    onChange: onChange,
    style: ui.style,
    className: ui.className
  }));
};

exports.CheckBoxWidget = CheckBoxWidget;