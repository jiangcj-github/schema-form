"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createWidget = createWidget;
exports.widgetRegistry = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var WidgetRegistry = /*#__PURE__*/function () {
  function WidgetRegistry() {
    _classCallCheck(this, WidgetRegistry);

    this._memo = {};
    this._sf = {};
    this._view = "antd";
  }

  _createClass(WidgetRegistry, [{
    key: "register",
    value: function register(name, widget) {
      this._memo[name] = widget;
    }
  }, {
    key: "setDefault",
    value: function setDefault(widget) {
      this._default = widget;
    }
  }, {
    key: "setView",
    value: function setView(view) {
      this._view = view;
    }
  }, {
    key: "has",
    value: function has(name) {
      return this._memo.hasOwnProperty(name);
    }
  }, {
    key: "get",
    value: function get(name) {
      var _name = this._view + "." + name;

      if (this.has(_name)) {
        return this._memo[_name];
      }

      return this._default;
    }
  }, {
    key: "registrySF",
    value: function registrySF(name, sf) {
      this._sf[name] = sf;
    }
  }, {
    key: "getSF",
    value: function getSF(name) {
      var _name = this._view + "." + name;

      if (!this.hasSF(_name)) {
        throw Error("\u7EC4\u4EF6".concat(_name, "\u672A\u6CE8\u518C\uFF0C\u672A\u5F15\u5165\u76F8\u5173\u6587\u4EF6"));
      }

      return this._sf[_name];
    }
  }, {
    key: "hasSF",
    value: function hasSF(name) {
      return this._sf.hasOwnProperty(name);
    }
  }]);

  return WidgetRegistry;
}();

var widgetRegistry = new WidgetRegistry();
exports.widgetRegistry = widgetRegistry;

function createWidget(node, path, parentNode) {
  var _node$ui;

  var widgetType = ((_node$ui = node.ui) === null || _node$ui === void 0 ? void 0 : _node$ui.widget) || node.type || "";
  var Widget = widgetRegistry.get(widgetType);
  return Widget ? /*#__PURE__*/_react.default.createElement(Widget, {
    key: path,
    schema: node,
    path: path,
    parent: parentNode
  }) : null;
}