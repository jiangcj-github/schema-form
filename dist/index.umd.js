(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('lodash'), require('ajv'), require('antd'), require('classnames')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'lodash', 'ajv', 'antd', 'classnames'], factory) :
  (global = global || self, factory(global.ksSchemaForm = {}, global.React, global._, global.Ajv, global.antd, global.cln));
}(this, (function (exports, React, _, Ajv, antd, cln) { 'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;
  _ = _ && _.hasOwnProperty('default') ? _['default'] : _;
  Ajv = Ajv && Ajv.hasOwnProperty('default') ? Ajv['default'] : Ajv;
  cln = cln && cln.hasOwnProperty('default') ? cln['default'] : cln;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;

    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = o[Symbol.iterator]();
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  var ERRORDEFAULT = {
    'false schema': '布尔模式出错',
    $ref: "无法找到引用{ref}",
    additionalItems: '不允许超过{ref}',
    additionalProperties: '不允许有额外的属性',
    anyOf: '数据应为 anyOf 所指定的其中一个',
    dependencies: '应当拥有属性{property}的依赖属性{deps}',
    enum: '应当是预设定的枚举值之一',
    format: '应当匹配格式 "{format}"',
    type: '类型应当是 {type}',
    required: '必填项',
    maxLength: '至多 {limit} 个字符',
    minLength: '至少 {limit} 个字符以上',
    minimum: '必须 {comparison}{limit}',
    formatMinimum: '必须 {comparison}{limit}',
    maximum: '必须 {comparison}{limit}',
    formatMaximum: '必须 {comparison}{limit}',
    maxItems: '不应多于 {limit} 个项',
    minItems: '不应少于 {limit} 个项',
    maxProperties: '不应多于 {limit} 个属性',
    minProperties: '不应少于 {limit} 个属性',
    multipleOf: '应当是 {multipleOf} 的整数倍',
    not: '不应当匹配 "not" schema',
    oneOf: '只能匹配一个 "oneOf" 中的 schema',
    pattern: '数据格式不正确',
    uniqueItems: '不应当含有重复项 (第 {j} 项与第 {i} 项是重复的)',
    custom: '格式不正确',
    propertyNames: '属性名 "{propertyName}" 无效',
    patternRequired: '应当有属性匹配模式 {missingPattern}',
    switch: '由于 {caseIndex} 失败，未通过 "switch" 校验',
    const: '应当等于常量',
    contains: '应当包含一个有效项',
    formatExclusiveMaximum: 'formatExclusiveMaximum 应当是布尔值',
    formatExclusiveMinimum: 'formatExclusiveMinimum 应当是布尔值',
    if: '应当匹配模式 "{failingKeyword}"'
  };

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
        _.merge(this._values, values);

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
        _.set(this._values, path, val);

        this._validateOnChange && this.validates();
        this._onChange && this._onChange(this._values);
      }
    }, {
      key: "resetValues",
      value: function resetValues() {
        this._values = _.cloneDeep(this._initValues);

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

        var ajv = new Ajv({
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

                _.templateSettings.interpolate = /{([\s\S]+?)}/g;

                var ALLERRORS = _.merge({}, ERRORDEFAULT, (_this$schema$ui = this.schema.ui) === null || _this$schema$ui === void 0 ? void 0 : _this$schema$ui.errors);

                var errText = _.template(ALLERRORS[keyword])(params);

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
        return _.get(this._values, path);
      }
    }, {
      key: "schema",
      get: function get() {
        return this._schema;
      }
    }]);

    return FormProperty;
  }();
  var SFContext = React.createContext(new FormProperty());

  var GridProperty = /*#__PURE__*/function () {
    function GridProperty(grid) {
      _classCallCheck(this, GridProperty);

      this._grid = grid || {};
    }

    _createClass(GridProperty, [{
      key: "grid",
      get: function get() {
        return this._grid;
      }
    }]);

    return GridProperty;
  }();
  var GridContext = React.createContext(new GridProperty());

  var WidgetRegistry = /*#__PURE__*/function () {
    function WidgetRegistry() {
      _classCallCheck(this, WidgetRegistry);

      this._memo = {};
      this._sf = {};
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
      key: "has",
      value: function has(name) {
        return this._memo.hasOwnProperty(name);
      }
    }, {
      key: "get",
      value: function get(name) {
        if (this.has(name)) {
          return this._memo[name];
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
        if (!this.hasSF(name)) {
          throw Error("\u7EC4\u4EF6".concat(name, "\u672A\u6CE8\u518C\uFF0C\u672A\u5F15\u5165\u76F8\u5173\u6587\u4EF6"));
        }

        return this._sf[name];
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
  function createWidget(node, path, parentNode) {
    var _node$ui;

    var widgetType = ((_node$ui = node.ui) === null || _node$ui === void 0 ? void 0 : _node$ui.widget) || node.type || "";
    var Widget = widgetRegistry.get(widgetType);
    return Widget ? /*#__PURE__*/React.createElement(Widget, {
      key: path,
      schema: node,
      path: path,
      parent: parentNode
    }) : null;
  }

  var _is = function _is(o, types) {
    return types.includes(Object.prototype.toString.call(o).slice(8, -1).toLowerCase());
  };

  var WidgetProperty = /*#__PURE__*/function () {
    function WidgetProperty(props, formProperty, update) {
      _classCallCheck(this, WidgetProperty);

      this.showError = false;
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

    _createClass(WidgetProperty, [{
      key: "install",
      value: function install() {
        for (var _i = 0, _Object$entries = Object.entries(this.ui); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
              key = _Object$entries$_i[0],
              value = _Object$entries$_i[1];

          if (_is(value, ["function"])) {
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
        this.schema.default && this.setValue(this.schema.default);
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
        _.merge(this.schema, schema);

        this.update();
      }
    }, {
      key: "setUI",
      value: function setUI(ui) {
        _.merge(this.ui, ui);

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

  var Widget = /*#__PURE__*/function (_React$Component) {
    _inherits(Widget, _React$Component);

    var _super = _createSuper(Widget);

    function Widget(props, context) {
      var _this;

      _classCallCheck(this, Widget);

      _this = _super.call(this, props, context);

      _this.update = function () {
        _this.forceUpdate();
      };

      _this.widgetProperty = new WidgetProperty(props, context, _this.update);
      return _this;
    }

    _createClass(Widget, [{
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.widgetProperty.uninstall();
      }
    }]);

    return Widget;
  }(React.Component);
  Widget.contextType = SFContext;
  function useWidget(props) {
    var _React$useState = React.useState(),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        update = _React$useState2[1];

    var context = React.useContext(SFContext);
    var widgetProperty = React.useMemo(function () {
      return new WidgetProperty(props, context, function () {
        return update(Math.random());
      });
    }, []);
    React.useEffect(function () {
      return function () {
        widgetProperty.uninstall();
      };
    }, []);
    return widgetProperty;
  }

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

        if (_is(node, ["object"])) {
          if (node.$ref) {
            var refNode = this.parseRef(schema, node.$ref);
            delete node.$ref;
            Object.assign(node, _.merge(_.cloneDeep(refNode), node));
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

        if (_is(node, ["array"])) {
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

        if (_is(node, ["array", "object"])) {
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
        if (_is(node, ["array", "object"])) {
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

  var SchemaForm = function SchemaForm(props, ref) {
    var schema = props.schema;
    var ui = schema.ui || {};
    schemaUtil.eliminateRef(schema);
    var formProperty = React.useRef(new FormProperty(props)).current;
    var gridProperty = React.useRef(new GridProperty(ui.grid)).current;
    React.useImperativeHandle(ref, function () {
      return formProperty;
    });
    React.useEffect(function () {
      formProperty.resetValues();
    }, []);
    var children = Object.entries(schema.properties || {}).map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          node = _ref2[1];

      var path = "".concat(key);
      return createWidget(node, path, schema);
    });
    var Form = widgetRegistry.getSF("sf");
    return /*#__PURE__*/React.createElement(SFContext.Provider, {
      value: formProperty
    }, /*#__PURE__*/React.createElement(GridContext.Provider, {
      value: gridProperty
    }, /*#__PURE__*/React.createElement(Form, ui, children)));
  };

  var SF = React.forwardRef(SchemaForm);

  var AntdForm = function AntdForm(props) {
    var layout = props.layout,
        colon = props.colon,
        style = props.style,
        className = props.className;
    return /*#__PURE__*/React.createElement(antd.Form, {
      layout: layout,
      colon: colon,
      style: style,
      className: className
    }, props.children);
  };
  widgetRegistry.registrySF("sf", AntdForm);

  var SFItem = function SFItem(props) {
    var gridProperty = React.useContext(GridContext);
    var _props$widgetProperty = props.widgetProperty,
        schema = _props$widgetProperty.schema,
        ui = _props$widgetProperty.ui,
        error = _props$widgetProperty.error,
        showError = _props$widgetProperty.showError,
        required = _props$widgetProperty.required;

    var grid = _.merge({}, gridProperty.grid, ui.grid);

    return /*#__PURE__*/React.createElement("div", {
      style: ui.style,
      className: cln(_defineProperty({
        "ant-row": true,
        "ant-form-item": true,
        "ant-form-item-has-error": showError,
        "ant-form-item-with-help": showError
      }, ui.className || "", true))
    }, /*#__PURE__*/React.createElement(antd.Col, {
      className: "ant-form-item-label",
      span: grid.labelCol,
      style: _.merge({
        width: grid.labelWidth || "auto",
        textAlign: grid.labelAlign || "right"
      }, grid.labelStyle)
    }, /*#__PURE__*/React.createElement("label", {
      title: schema.title,
      className: cln({
        "ant-form-item-required": required
      })
    }, schema.title)), /*#__PURE__*/React.createElement(antd.Col, {
      className: "ant-form-item-control",
      span: grid.controlCol,
      offset: grid.controlOffset,
      style: _.merge({
        width: grid.labelWidth || "auto"
      }, grid.labelStyle)
    }, /*#__PURE__*/React.createElement("div", {
      className: "ant-form-item-control-input"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ant-form-item-control-input-content"
    }, props.children)), showError && /*#__PURE__*/React.createElement("div", {
      className: "ant-form-item-explain"
    }, /*#__PURE__*/React.createElement("div", null, error))));
  };

  var StringWidget = function StringWidget(props) {
    var widgetProperty = useWidget(props);
    var schema = widgetProperty.schema,
        ui = widgetProperty.ui,
        value = widgetProperty.value;

    var onChange = function onChange(event) {
      var val = event.target.value;
      widgetProperty.setValue(val);
      ui.onChange && ui.onChange(val);
    };

    return /*#__PURE__*/React.createElement(SFItem, {
      widgetProperty: widgetProperty
    }, /*#__PURE__*/React.createElement(antd.Input, {
      value: value,
      disabled: ui.disabled,
      maxLength: schema.maxLength,
      placeholder: ui.placeholder,
      defaultValue: schema.default,
      prefix: ui.prefix,
      suffix: ui.suffix,
      autoComplete: ui.autocomplete,
      autoFocus: ui.autofocus,
      addonBefore: ui.addonBefore,
      addonAfter: ui.addonAfter,
      onChange: onChange,
      onPressEnter: ui.onEnter,
      onFocus: ui.onFocus,
      onBlur: ui.onBlur,
      style: ui.style,
      className: ui.className
    }));
  };
  widgetRegistry.register("string", StringWidget);
  widgetRegistry.setDefault(StringWidget);

  var SelectWidget = /*#__PURE__*/function (_Widget) {
    _inherits(SelectWidget, _Widget);

    var _super = _createSuper(SelectWidget);

    function SelectWidget() {
      var _this;

      _classCallCheck(this, SelectWidget);

      _this = _super.apply(this, arguments);

      _this.onChange = function (val) {
        _this.widgetProperty.setValue(val);

        _this.widgetProperty.ui.onChange && _this.widgetProperty.ui.onChange(val);
      };

      return _this;
    }

    _createClass(SelectWidget, [{
      key: "render",
      value: function render() {
        var _this$widgetProperty = this.widgetProperty,
            schema = _this$widgetProperty.schema,
            ui = _this$widgetProperty.ui,
            value = _this$widgetProperty.value;
        return /*#__PURE__*/React.createElement(SFItem, {
          widgetProperty: this.widgetProperty
        }, /*#__PURE__*/React.createElement(antd.Select, {
          mode: ui.mode,
          value: value,
          allowClear: ui.allowClear || true,
          disabled: ui.disabled,
          placeholder: ui.placeholder,
          defaultValue: schema.default,
          showSearch: ui.showSearch,
          autoFocus: ui.autofocus,
          onChange: this.onChange,
          onFocus: ui.onFocus,
          onBlur: ui.onBlur,
          onSearch: ui.onSearch,
          options: ui.options,
          style: ui.style,
          className: ui.className
        }));
      }
    }]);

    return SelectWidget;
  }(Widget);
  widgetRegistry.register("select", SelectWidget);

  var ObjectWidget = function ObjectWidget(props) {
    var _ui$bordered;

    var _useWidget = useWidget(props),
        schema = _useWidget.schema,
        ui = _useWidget.ui;

    var gridProperty = React.useRef(new GridProperty()).current;
    var parentGridProperty = React.useContext(GridContext);

    _.merge(gridProperty.grid, parentGridProperty.grid, ui.grid);

    var children = Object.entries(schema.properties || {}).map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          node = _ref2[1];

      var path = "".concat(props.path, ".").concat(key);
      return createWidget(node, path, schema);
    });
    return /*#__PURE__*/React.createElement(GridContext.Provider, {
      value: gridProperty
    }, /*#__PURE__*/React.createElement("div", {
      className: "ant-form-item"
    }, /*#__PURE__*/React.createElement("div", {
      style: ui.style,
      className: cln(_defineProperty({
        "ant-card": true,
        "ant-card-bordered": (_ui$bordered = ui.bordered) !== null && _ui$bordered !== void 0 ? _ui$bordered : true,
        "ant-card-hoverable": ui.hoverable
      }, ui.className || "", true))
    }, schema.title && /*#__PURE__*/React.createElement("div", {
      className: "ant-card-head",
      style: _.merge({
        minHeight: 0,
        fontSize: "14px",
        padding: "0 18px"
      }, ui.headStyle)
    }, /*#__PURE__*/React.createElement("div", {
      className: "ant-card-head-wrapper"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ant-card-head-title",
      style: {
        padding: "8px 0"
      }
    }, schema.title))), /*#__PURE__*/React.createElement("div", {
      className: "ant-card-body",
      style: _.merge({
        paddingBottom: 0
      }, ui.bodyStyle)
    }, children))));
  };
  widgetRegistry.register("object", ObjectWidget);

  var CustomWidget = function CustomWidget(props) {
    var _ui$render;

    var widgetProperty = useWidget(props);
    var ui = widgetProperty.ui;
    return /*#__PURE__*/React.createElement(SFItem, {
      widgetProperty: widgetProperty
    }, (_ui$render = ui.render) === null || _ui$render === void 0 ? void 0 : _ui$render.call(ui, widgetProperty));
  };
  widgetRegistry.register("custom", CustomWidget);

  var NumberWidget = function NumberWidget(props) {
    var widgetProperty = useWidget(props);
    var schema = widgetProperty.schema,
        ui = widgetProperty.ui,
        value = widgetProperty.value;

    var onChange = function onChange(val) {
      widgetProperty.setValue(val);
      ui.onChange && ui.onChange(val);
    };

    return /*#__PURE__*/React.createElement(SFItem, {
      widgetProperty: widgetProperty
    }, /*#__PURE__*/React.createElement(antd.InputNumber, {
      value: value,
      disabled: ui.disabled,
      maxLength: schema.maxLength,
      min: schema.minimum,
      max: schema.maximum,
      formatter: ui.formatter,
      parser: ui.parser,
      precision: ui.precision,
      decimalSeparator: ui.decimalSeparator,
      step: ui.step,
      placeholder: ui.placeholder,
      defaultValue: schema.default,
      autoFocus: ui.autofocus,
      onChange: onChange,
      onPressEnter: ui.onEnter,
      style: ui.style,
      className: ui.className
    }));
  };
  widgetRegistry.register("number", NumberWidget);

  var BooleanWidget = function BooleanWidget(props) {
    var widgetProperty = useWidget(props);
    var schema = widgetProperty.schema,
        ui = widgetProperty.ui,
        value = widgetProperty.value;

    var onChange = function onChange(val) {
      widgetProperty.setValue(val);
      ui.onChange && ui.onChange(val);
    };

    return /*#__PURE__*/React.createElement(SFItem, {
      widgetProperty: widgetProperty
    }, /*#__PURE__*/React.createElement(antd.Switch, {
      autoFocus: ui.autoFocus,
      checked: value,
      disabled: ui.disabled,
      defaultChecked: schema.default,
      checkedChildren: ui.checkedChildren,
      unCheckedChildren: ui.unCheckedChildren,
      onChange: onChange,
      style: ui.style,
      className: ui.className
    }));
  };
  widgetRegistry.register("boolean", BooleanWidget);

  var CheckBoxWidget = function CheckBoxWidget(props) {
    var widgetProperty = useWidget(props);
    var schema = widgetProperty.schema,
        ui = widgetProperty.ui,
        value = widgetProperty.value;

    var onChange = function onChange(event) {
      var val = event.target.checked;
      widgetProperty.setValue(val);
      ui.onChange && ui.onChange(val);
    };

    return /*#__PURE__*/React.createElement(SFItem, {
      widgetProperty: widgetProperty
    }, /*#__PURE__*/React.createElement(antd.Checkbox, {
      autoFocus: ui.autoFocus,
      checked: value,
      disabled: ui.disabled,
      defaultChecked: schema.default,
      onChange: onChange,
      style: ui.style,
      className: ui.className
    }));
  };
  widgetRegistry.register("checkbox", CheckBoxWidget);

  var CheckBoxGroupWidget = function CheckBoxGroupWidget(props) {
    var widgetProperty = useWidget(props);
    var schema = widgetProperty.schema,
        ui = widgetProperty.ui,
        value = widgetProperty.value;

    var onChange = function onChange(val) {
      widgetProperty.setValue(val);
      ui.onChange && ui.onChange(val);
    };

    return /*#__PURE__*/React.createElement(SFItem, {
      widgetProperty: widgetProperty
    }, /*#__PURE__*/React.createElement(antd.Checkbox.Group, {
      value: value,
      disabled: ui.disabled,
      defaultValue: schema.default,
      onChange: onChange,
      options: ui.options,
      style: ui.style,
      className: ui.className
    }));
  };
  widgetRegistry.register("checkbox.group", CheckBoxGroupWidget);

  exports.AntdForm = AntdForm;
  exports.BooleanWidget = BooleanWidget;
  exports.CheckBoxGroupWidget = CheckBoxGroupWidget;
  exports.CheckBoxWidget = CheckBoxWidget;
  exports.CustomWidget = CustomWidget;
  exports.FormProperty = FormProperty;
  exports.GridContext = GridContext;
  exports.GridProperty = GridProperty;
  exports.NumberWidget = NumberWidget;
  exports.ObjectWidget = ObjectWidget;
  exports.SF = SF;
  exports.SFContext = SFContext;
  exports.SFItem = SFItem;
  exports.SchemaError = SchemaError;
  exports.SelectWidget = SelectWidget;
  exports.StringWidget = StringWidget;
  exports.Widget = Widget;
  exports.WidgetProperty = WidgetProperty;
  exports.createWidget = createWidget;
  exports.schemaUtil = schemaUtil;
  exports.useWidget = useWidget;
  exports.widgetRegistry = widgetRegistry;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
