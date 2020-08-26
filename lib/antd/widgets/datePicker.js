"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DatePickerWidget = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _widget = require("../../model/widget");

var _sfItem = require("../sf-item");

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DatePickerWidget = function DatePickerWidget(props) {
  var widgetProperty = (0, _widget.useWidget)(props);
  var schema = widgetProperty.schema,
      ui = widgetProperty.ui,
      value = widgetProperty.value;

  var onChange = function onChange(date) {
    var val = date === null || date === void 0 ? void 0 : date.valueOf();
    widgetProperty.setValue(val);
    ui.onChange && ui.onChange(val);
  };

  var showValue = value ? (0, _moment.default)(value) : null;
  var showDefaultValue = schema.default ? (0, _moment.default)(schema.default) : undefined;
  return /*#__PURE__*/_react.default.createElement(_sfItem.SFItem, {
    widgetProperty: widgetProperty
  }, /*#__PURE__*/_react.default.createElement(_antd.DatePicker, {
    autoFocus: ui.autoFocus,
    value: showValue,
    defaultValue: showDefaultValue,
    disabled: ui.disabled,
    disabledTime: ui.disabledTime,
    onChange: onChange,
    style: ui.style,
    className: ui.className,
    allowClear: ui.allowClear,
    disabledDate: ui.disabledDate,
    dropdownClassName: ui.dropdownClassName,
    getPopupContainer: ui.getPopupContainer,
    locale: ui.locale,
    mode: ui.mode,
    open: ui.open,
    format: ui.format,
    showTime: ui.showTime,
    showToday: ui.showToday,
    onOk: ui.onOk,
    showNow: ui.showNow,
    renderExtraFooter: ui.renderExtraFooter,
    picker: ui.picker,
    placeholder: ui.placeholder,
    popupStyle: ui.popupStyle,
    suffixIcon: ui.suffixIcon,
    inputReadOnly: ui.inputReadOnly,
    onOpenChange: ui.onOpenChange,
    onPanelChange: ui.onPanelChange
  }));
};

exports.DatePickerWidget = DatePickerWidget;