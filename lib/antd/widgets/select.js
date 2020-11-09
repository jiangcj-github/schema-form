"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectWidget = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _widget = require("../../model/widget");

var _sfItem = require("../sf-item");

var _pinyinMatch = require("pinyin-match");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

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

    _this.filterOption = function (input, option) {
      var _this$widgetProperty$, _this$widgetProperty;

      var filterOption = (_this$widgetProperty$ = (_this$widgetProperty = _this.widgetProperty) === null || _this$widgetProperty === void 0 ? void 0 : _this$widgetProperty.ui.filterOption) !== null && _this$widgetProperty$ !== void 0 ? _this$widgetProperty$ : true;
      return filterOption ? !!(0, _pinyinMatch.match)(option.label, input) : true;
    };

    return _this;
  }

  _createClass(SelectWidget, [{
    key: "render",
    value: function render() {
      var _ui$allowClear, _ui$showSearch;

      var _this$widgetProperty2 = this.widgetProperty,
          schema = _this$widgetProperty2.schema,
          ui = _this$widgetProperty2.ui,
          value = _this$widgetProperty2.value;
      return /*#__PURE__*/_react.default.createElement(_sfItem.SFItem, {
        widgetProperty: this.widgetProperty
      }, /*#__PURE__*/_react.default.createElement(_antd.Select, {
        mode: ui.mode,
        value: value,
        allowClear: (_ui$allowClear = ui.allowClear) !== null && _ui$allowClear !== void 0 ? _ui$allowClear : true,
        disabled: ui.disabled,
        placeholder: ui.placeholder,
        filterOption: this.filterOption,
        defaultValue: schema.default,
        showSearch: (_ui$showSearch = ui.showSearch) !== null && _ui$showSearch !== void 0 ? _ui$showSearch : true,
        autoFocus: ui.autofocus,
        maxTagPlaceholder: ui.maxTagPlaceholder,
        dropdownClassName: ui.dropdownClassName,
        dropdownRender: ui.dropdownRender,
        dropdownStyle: ui.dropdownStyle,
        getPopupContainer: ui.getPopupContainer,
        listHeight: ui.listHeight,
        maxTagCount: ui.maxTagCount,
        maxTagTextLength: ui.maxTagTextLength,
        notFoundContent: ui.notFoundContent,
        showArrow: ui.showArrow,
        suffixIcon: ui.suffixIcon,
        removeIcon: ui.removeIcon,
        clearIcon: ui.clearIcon,
        menuItemSelectedIcon: ui.menuItemSelectedIcon,
        tokenSeparators: ui.tokenSeparators,
        virtual: ui.virtual,
        defaultOpen: ui.defaultOpen,
        open: ui.open,
        loading: ui.loading,
        onDropdownVisibleChange: ui.onDropdownVisibleChange,
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
}(_widget.Widget);

exports.SelectWidget = SelectWidget;