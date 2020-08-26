"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RangePickerWidget = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _widget = require("../../model/widget");

var _sfItem = require("../sf-item");

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RangePickerWidget = function RangePickerWidget(props) {
  var _schema$default;

  var widgetProperty = (0, _widget.useWidget)(props);
  var schema = widgetProperty.schema,
      ui = widgetProperty.ui,
      value = widgetProperty.value;

  var onChange = function onChange(date) {
    var val = date === null || date === void 0 ? void 0 : date.map(function (e) {
      return e === null || e === void 0 ? void 0 : e.valueOf();
    });
    widgetProperty.setValue(val);
    ui.onChange && ui.onChange(val);
  };

  var showValue = value === null || value === void 0 ? void 0 : value.map(function (e) {
    return e ? (0, _moment.default)(e) : null;
  });
  var showDefaultValue = (_schema$default = schema.default) === null || _schema$default === void 0 ? void 0 : _schema$default.map(function (e) {
    return e ? (0, _moment.default)(e) : null;
  });
  return /*#__PURE__*/_react.default.createElement(_sfItem.SFItem, {
    widgetProperty: widgetProperty
  }, /*#__PURE__*/_react.default.createElement(_antd.DatePicker.RangePicker, {
    autoFocus: ui.autoFocus,
    value: showValue,
    defaultValue: showDefaultValue,
    disabled: ui.disabled,
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
    onOk: ui.onOk,
    showNow: ui.showNow,
    renderExtraFooter: ui.renderExtraFooter,
    picker: ui.picker,
    placeholder: ui.placeholder,
    popupStyle: ui.popupStyle,
    suffixIcon: ui.suffixIcon,
    inputReadOnly: ui.inputReadOnly,
    onOpenChange: ui.onOpenChange,
    onPanelChange: ui.onPanelChange,
    allowEmpty: ui.allowEmpty,
    ranges: ui.ranges,
    separator: ui.separator
  }));
};

exports.RangePickerWidget = RangePickerWidget;