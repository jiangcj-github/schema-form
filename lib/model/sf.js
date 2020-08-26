"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SF = void 0;

var _react = _interopRequireDefault(require("react"));

var _schema = require("../utils/schema");

var _formProperty = require("./form-property");

var _widgetFactory = require("./widget-factory");

var _gridProperty = require("./grid-property");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SchemaForm = function SchemaForm(props, ref) {
  var schema = props.schema;
  var ui = schema.ui || {};

  _schema.schemaUtil.eliminateRef(schema);

  var formProperty = _react.default.useRef(new _formProperty.FormProperty(props)).current;

  var gridProperty = _react.default.useRef(new _gridProperty.GridProperty(ui.grid)).current;

  _react.default.useImperativeHandle(ref, function () {
    return formProperty;
  });

  var children = Object.entries(schema.properties || {}).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        node = _ref2[1];

    var path = "".concat(key);
    return (0, _widgetFactory.createWidget)(node, path, schema);
  });

  var Form = _widgetFactory.widgetRegistry.getSF("form");

  return /*#__PURE__*/_react.default.createElement(_formProperty.SFContext.Provider, {
    value: formProperty
  }, /*#__PURE__*/_react.default.createElement(_gridProperty.GridContext.Provider, {
    value: gridProperty
  }, /*#__PURE__*/_react.default.createElement(Form, ui, children)));
};

var SF = /*#__PURE__*/_react.default.forwardRef(SchemaForm);

exports.SF = SF;