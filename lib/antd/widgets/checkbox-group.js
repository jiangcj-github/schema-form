"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckBoxGroupWidget = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _widget = require("../../model/widget");

var _widgetFactory = require("../../model/widget-factory");

var _sfItem = require("../sf-item");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CheckBoxGroupWidget = function CheckBoxGroupWidget(props) {
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
  }, /*#__PURE__*/_react.default.createElement(_antd.Checkbox.Group, {
    value: value,
    disabled: ui.disabled,
    defaultValue: schema.default,
    onChange: onChange,
    options: ui.options,
    style: ui.style,
    className: ui.className
  }));
};

exports.CheckBoxGroupWidget = CheckBoxGroupWidget;

_widgetFactory.widgetRegistry.register("checkbox.group", CheckBoxGroupWidget);