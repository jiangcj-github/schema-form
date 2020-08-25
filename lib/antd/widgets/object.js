"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ObjectWidget = void 0;

var _react = _interopRequireDefault(require("react"));

var _widget = require("../../model/widget");

var _widgetFactory = require("../../model/widget-factory");

var _gridProperty = require("../../model/grid-property");

var _lodash = _interopRequireDefault(require("lodash"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ObjectWidget = function ObjectWidget(props) {
  var _ui$bordered;

  var _useWidget = (0, _widget.useWidget)(props),
      schema = _useWidget.schema,
      ui = _useWidget.ui;

  var gridProperty = _react.default.useRef(new _gridProperty.GridProperty()).current;

  var parentGridProperty = _react.default.useContext(_gridProperty.GridContext);

  _lodash.default.merge(gridProperty.grid, parentGridProperty.grid, ui.grid);

  var children = Object.entries(schema.properties || {}).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        node = _ref2[1];

    var path = "".concat(props.path, ".").concat(key);
    return (0, _widgetFactory.createWidget)(node, path, schema);
  });
  return /*#__PURE__*/_react.default.createElement(_gridProperty.GridContext.Provider, {
    value: gridProperty
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ant-form-item"
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: ui.style,
    className: (0, _classnames.default)(_defineProperty({
      "ant-card": true,
      "ant-card-bordered": (_ui$bordered = ui.bordered) !== null && _ui$bordered !== void 0 ? _ui$bordered : true,
      "ant-card-hoverable": ui.hoverable
    }, ui.className || "", true))
  }, schema.title && /*#__PURE__*/_react.default.createElement("div", {
    className: "ant-card-head",
    style: _lodash.default.merge({
      minHeight: 0,
      fontSize: "14px",
      padding: "0 18px"
    }, ui.headStyle)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ant-card-head-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ant-card-head-title",
    style: {
      padding: "8px 0"
    }
  }, schema.title))), /*#__PURE__*/_react.default.createElement("div", {
    className: "ant-card-body",
    style: _lodash.default.merge({
      paddingBottom: 0
    }, ui.bodyStyle)
  }, children))));
};

exports.ObjectWidget = ObjectWidget;

_widgetFactory.widgetRegistry.register("antd.object", ObjectWidget);