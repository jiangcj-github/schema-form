"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SFContext = exports.FormProperty = void 0;

var _react = _interopRequireDefault(require("react"));

var _lodash = _interopRequireDefault(require("lodash"));

var _ajv = _interopRequireDefault(require("ajv"));

var _errorDefault = require("./error-default");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FormProperty = /*#__PURE__*/function () {
  function FormProperty(props) {
    var _schema$ui;

    _classCallCheck(this, FormProperty);

    this._properties = {};
    this._values = {};
    this._initValues = {};
    this._validateOnChange = false;

    var _ref = props || {},
        schema = _ref.schema;

    this._schema = schema || {};
    this._initValues = (schema === null || schema === void 0 ? void 0 : schema.default) || {};
    this._onChange = schema === null || schema === void 0 ? void 0 : (_schema$ui = schema.ui) === null || _schema$ui === void 0 ? void 0 : _schema$ui.onChange;
  }

  _createClass(FormProperty, [{
    key: "addProperty",
    value: function addProperty(path, property) {
      this._properties[path] = property;
    }
  }, {
    key: "getProperty",
    value: function getProperty(path) {
      return this._properties[path];
    }
  }, {
    key: "removeProperty",
    value: function removeProperty(path) {
      delete this._properties[path];
    }
  }, {
    key: "getValues",
    value: function getValues() {
      return this._values;
    }
  }, {
    key: "setValues",
    value: function setValues(values) {
      _lodash.default.merge(this._values, values);

      for (var _i = 0, _Object$values = Object.values(this._properties); _i < _Object$values.length; _i++) {
        var property = _Object$values[_i];
        property.update();
      }

      this._validateOnChange && this.validates();
      this._onChange && this._onChange(this._values);
    }
  }, {
    key: "setValue",
    value: function setValue(path, val) {
      _lodash.default.set(this._values, path, val);

      this._validateOnChange && this.validates();
      this._onChange && this._onChange(this._values);
    }
  }, {
    key: "resetValues",
    value: function resetValues() {
      for (var _i2 = 0, _Object$values2 = Object.values(this._properties); _i2 < _Object$values2.length; _i2++) {
        var property = _Object$values2[_i2];
        property.reset();
      }

      this._onChange && this._onChange(this._values);
    }
  }, {
    key: "validates",
    value: function validates() {
      var _this$schema$ui2, _this$schema$ui3;

      for (var _i3 = 0, _Object$values3 = Object.values(this._properties); _i3 < _Object$values3.length; _i3++) {
        var property = _Object$values3[_i3];
        property.resetError();
      }

      var ajv = new _ajv.default({
        errorDataPath: "property",
        allErrors: true
      });
      var ajvValid = ajv.validate(this._schema, this._values);

      if (!ajvValid) {
        var _iterator = _createForOfIteratorHelper(ajv.errors || []),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var error = _step.value;
            var _error$dataPath = error.dataPath,
                dataPath = _error$dataPath === void 0 ? "" : _error$dataPath,
                _error$keyword = error.keyword,
                keyword = _error$keyword === void 0 ? "" : _error$keyword,
                params = error.params;

            var _property = this.getProperty(dataPath === null || dataPath === void 0 ? void 0 : dataPath.slice(1));

            if (_property) {
              var _this$schema$ui;

              _lodash.default.templateSettings.interpolate = /{([\s\S]+?)}/g;

              var ALLERRORS = _lodash.default.merge({}, _errorDefault.ERRORDEFAULT, (_this$schema$ui = this.schema.ui) === null || _this$schema$ui === void 0 ? void 0 : _this$schema$ui.errors);

              var errText = _lodash.default.template(ALLERRORS[keyword])(params);

              _property.setKeywordError(keyword, errText);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      var customsValid = Object.values(this._properties).map(function (e) {
        return e.validate();
      }).every(Boolean);
      var formCustomValid = ((_this$schema$ui2 = this.schema.ui) === null || _this$schema$ui2 === void 0 ? void 0 : _this$schema$ui2.onValidate) ? (_this$schema$ui3 = this.schema.ui) === null || _this$schema$ui3 === void 0 ? void 0 : _this$schema$ui3.onValidate(this._values) : true;
      var isValid = ajvValid && customsValid && formCustomValid;
      this._validateOnChange = !isValid;
      return isValid;
    }
  }, {
    key: "getValue",
    value: function getValue(path) {
      return _lodash.default.get(this._values, path);
    }
  }, {
    key: "schema",
    get: function get() {
      return this._schema;
    }
  }, {
    key: "initValue",
    get: function get() {
      return this._initValues;
    }
  }]);

  return FormProperty;
}();

exports.FormProperty = FormProperty;

var SFContext = /*#__PURE__*/_react.default.createContext(new FormProperty());

exports.SFContext = SFContext;