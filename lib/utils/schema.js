"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.schemaUtil = exports.SchemaError = void 0;

var _tool = require("./tool");

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var SchemaError = /*#__PURE__*/function (_Error) {
  _inherits(SchemaError, _Error);

  var _super = _createSuper(SchemaError);

  function SchemaError(schema) {
    var _this;

    _classCallCheck(this, SchemaError);

    _this = _super.call(this);
    _this.schema = schema;
    return _this;
  }

  return SchemaError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

exports.SchemaError = SchemaError;

var SchemaUtil = /*#__PURE__*/function () {
  function SchemaUtil() {
    _classCallCheck(this, SchemaUtil);
  }

  _createClass(SchemaUtil, [{
    key: "ignoreNode",
    value: function ignoreNode(key, node) {
      if (["ui"].includes(key)) {
        return true;
      }

      return false;
    }
  }, {
    key: "getSchema",
    value: function getSchema(schema, path) {
      path = path.replace(/\[/, ".[").replace(/\]/, "");
      return path.split(".").reduce(function (sc, p) {
        var _sc$items, _sc$properties;

        return p[0] === "[" ? sc === null || sc === void 0 ? void 0 : (_sc$items = sc.items) === null || _sc$items === void 0 ? void 0 : _sc$items[p.slice(1)] : sc === null || sc === void 0 ? void 0 : (_sc$properties = sc.properties) === null || _sc$properties === void 0 ? void 0 : _sc$properties[p];
      }, schema);
    }
  }, {
    key: "eliminateRef",
    value: function eliminateRef(schema) {
      var node = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : schema;

      if ((0, _tool._is)(node, ["object"])) {
        if (node.$ref) {
          var refNode = this.parseRef(schema, node.$ref);
          delete node.$ref;
          Object.assign(node, _lodash.default.merge(_lodash.default.cloneDeep(refNode), node));
        }

        for (var _i = 0, _Object$entries = Object.entries(node); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
              k = _Object$entries$_i[0],
              subNode = _Object$entries$_i[1];

          if (this.ignoreNode(k, subNode)) {
            continue;
          }

          this.eliminateRef(schema, subNode);
        }
      }

      if ((0, _tool._is)(node, ["array"])) {
        var _iterator = _createForOfIteratorHelper(node),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _subNode = _step.value;
            this.eliminateRef(schema, _subNode);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }
  }, {
    key: "parseRef",
    value: function parseRef(schema, ref) {
      var _ref = ref.match(/#([^/]*)(\/.*)?/) || [],
          _ref2 = _slicedToArray(_ref, 3),
          id = _ref2[1],
          refPath = _ref2[2];

      if (!id && !refPath) {
        console.error("invalid json schema $ref: ".concat(ref));
      }

      return id ? this.searchSchemaById(schema, "#".concat(id)) : this.searchSchemaByRef(schema, refPath);
    }
  }, {
    key: "searchSchemaByRef",
    value: function searchSchemaByRef(schema, refPath) {
      try {
        this.deepSearchByRef(schema, refPath);
      } catch (e) {
        return e.schema || {};
      }
    }
  }, {
    key: "searchSchemaById",
    value: function searchSchemaById(schema, id) {
      try {
        this.deepSearchById(schema, id);
      } catch (e) {
        return e.schema || {};
      }
    }
  }, {
    key: "deepSearchByRef",
    value: function deepSearchByRef(node, path) {
      var currentPath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      var normalPath = path.replace(/\/$/, "");

      if (normalPath === currentPath) {
        throw new SchemaError(node);
      }

      if ((0, _tool._is)(node, ["array", "object"])) {
        for (var _i2 = 0, _Object$entries2 = Object.entries(node); _i2 < _Object$entries2.length; _i2++) {
          var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
              k = _Object$entries2$_i[0],
              v = _Object$entries2$_i[1];

          if (this.ignoreNode(k, v)) {
            continue;
          }

          this.deepSearchByRef(v, path, currentPath + "/".concat(k));
        }
      }
    }
  }, {
    key: "deepSearchById",
    value: function deepSearchById(node, id) {
      if ((0, _tool._is)(node, ["array", "object"])) {
        if (node.$id === id) {
          throw new SchemaError(node);
        }

        for (var _i3 = 0, _Object$entries3 = Object.entries(node); _i3 < _Object$entries3.length; _i3++) {
          var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i3], 2),
              k = _Object$entries3$_i[0],
              v = _Object$entries3$_i[1];

          if (this.ignoreNode(k, v)) {
            continue;
          }

          this.deepSearchById(v, id);
        }
      }
    }
  }]);

  return SchemaUtil;
}();

var schemaUtil = new SchemaUtil();
exports.schemaUtil = schemaUtil;