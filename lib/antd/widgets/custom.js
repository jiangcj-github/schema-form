"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomWidget = void 0;

var _react = _interopRequireDefault(require("react"));

var _widget = require("../../model/widget");

var _widgetFactory = require("../../model/widget-factory");

var _sfItem = require("../sf-item");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CustomWidget = function CustomWidget(props) {
  var _ui$render;

  var widgetProperty = (0, _widget.useWidget)(props);
  var ui = widgetProperty.ui;
  return /*#__PURE__*/_react.default.createElement(_sfItem.SFItem, {
    widgetProperty: widgetProperty
  }, (_ui$render = ui.render) === null || _ui$render === void 0 ? void 0 : _ui$render.call(ui, widgetProperty));
};

exports.CustomWidget = CustomWidget;

_widgetFactory.widgetRegistry.register("custom", CustomWidget);