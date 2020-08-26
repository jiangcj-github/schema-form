"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StringWidget = void 0;

var _react = _interopRequireDefault(require("react"));

var _input = _interopRequireDefault(require("kpc-react/components/input"));

var _widget = require("../../model/widget");

var _sfItem = require("../sf-item");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StringWidget = function StringWidget(props) {
  var widgetProperty = (0, _widget.useWidget)(props);
  var schema = widgetProperty.schema,
      ui = widgetProperty.ui,
      value = widgetProperty.value;

  var onChange = function onChange(_, val) {
    val = val || undefined;
    widgetProperty.setValue(val);
    ui.onChange && ui.onChange(val);
  };

  return /*#__PURE__*/_react.default.createElement(_sfItem.SFItem, {
    widgetProperty: widgetProperty
  }, /*#__PURE__*/_react.default.createElement(_input.default, {
    type: ui.type,
    value: value,
    placeholder: ui.placeholder,
    defaultValue: schema.default,
    disabled: ui.disabled,
    prefix: ui.prefix,
    suffix: ui.suffix,
    prepend: ui.addonBefore,
    append: ui.addonAfter,
    autoComplete: ui.autocomplete,
    "on$change-value": onChange,
    style: ui.style,
    className: ui.className
  }));
};

exports.StringWidget = StringWidget;