"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WidgetProperty = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _tool = require("../utils/tool");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var WidgetProperty = /*#__PURE__*/function () {
  function WidgetProperty() {
    _classCallCheck(this, WidgetProperty);

    this.showError = false;
  }

  _createClass(WidgetProperty, [{
    key: "updateProperty",
    value: function updateProperty(props, formProperty, update) {
      var path = props.path,
          schema = props.schema,
          parent = props.parent;
      this._path = path;
      this._parent = parent;
      this.schema = schema;
      this.ui = schema.ui || {};
      this._formProperty = formProperty;
      update && (this.update = update);
      this.install();
    }
  }, {
    key: "install",
    value: function install() {
      for (var _i = 0, _Object$entries = Object.entries(this.ui); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        if ((0, _tool._is)(value, ["function"])) {
          Object.assign(this.ui, _defineProperty({}, key, value.bind(this)));
        }
      }

      this._formProperty.addProperty(this._path, this);
    }
  }, {
    key: "uninstall",
    value: function uninstall() {
      this._formProperty.removeProperty(this._path);
    }
  }, {
    key: "setValue",
    value: function setValue(val) {
      this._formProperty.setValue(this._path, val);

      this.update();
    }
  }, {
    key: "reset",
    value: function reset() {
      var _this$schema$default;

      var default0 = _lodash.default.get(this.formProperty.initValue, this._path);

      this.setValue((_this$schema$default = this.schema.default) !== null && _this$schema$default !== void 0 ? _this$schema$default : default0);
    }
  }, {
    key: "validate",
    value: function validate() {
      return this.ui.onValidate ? this.ui.onValidate(this._formProperty.getValues()) : true;
    }
  }, {
    key: "setKeywordError",
    value: function setKeywordError(keyword, error) {
      var _this$ui, _this$ui$errors;

      this.setError(((_this$ui = this.ui) === null || _this$ui === void 0 ? void 0 : (_this$ui$errors = _this$ui.errors) === null || _this$ui$errors === void 0 ? void 0 : _this$ui$errors[keyword]) || error);
    }
  }, {
    key: "setError",
    value: function setError(error) {
      this.error = error;
      this.showError = true;
      this.update();
    }
  }, {
    key: "resetError",
    value: function resetError() {
      if (this.showError) {
        this.error = "";
        this.showError = false;
        this.update();
      }
    }
  }, {
    key: "setSchema",
    value: function setSchema(schema) {
      _lodash.default.merge(this.schema, schema);

      this.update();
    }
  }, {
    key: "setUI",
    value: function setUI(ui) {
      _lodash.default.merge(this.ui, ui);

      this.update();
    }
  }, {
    key: "update",
    value: function update() {}
  }, {
    key: "value",
    get: function get() {
      return this._formProperty.getValue(this._path);
    }
  }, {
    key: "required",
    get: function get() {
      var _this$_parent, _this$_parent$require;

      return (_this$_parent = this._parent) === null || _this$_parent === void 0 ? void 0 : (_this$_parent$require = _this$_parent.required) === null || _this$_parent$require === void 0 ? void 0 : _this$_parent$require.includes(this.propertyName);
    }
  }, {
    key: "propertyName",
    get: function get() {
      return this._path.split(".").pop() || "";
    }
  }, {
    key: "formProperty",
    get: function get() {
      return this._formProperty;
    }
  }, {
    key: "path",
    get: function get() {
      return this._path;
    }
  }]);

  return WidgetProperty;
}();

exports.WidgetProperty = WidgetProperty;