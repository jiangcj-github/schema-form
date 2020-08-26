"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ = require("..");

Object.keys(_).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _[key];
    }
  });
});

var _boolean = require("./widgets/boolean");

var _checkGroup = require("./widgets/checkGroup");

var _checkbox = require("./widgets/checkbox");

var _custom = require("./widgets/custom");

var _number = require("./widgets/number");

var _object = require("./widgets/object");

var _select = require("./widgets/select");

var _string = require("./widgets/string");

var _textarea = require("./widgets/textarea");

var _search = require("./widgets/search");

var _password = require("./widgets/password");

var _radioGroup = require("./widgets/radioGroup");

var _datePicker = require("./widgets/datePicker");

var _rangePicker = require("./widgets/rangePicker");

var _slider = require("./widgets/slider");

var _form = require("./form");

_.widgetRegistry.register("boolean", _boolean.BooleanWidget);

_.widgetRegistry.register("checkgroup", _checkGroup.CheckGroupWidget);

_.widgetRegistry.register("checkbox", _checkbox.CheckBoxWidget);

_.widgetRegistry.register("custom", _custom.CustomWidget);

_.widgetRegistry.register("number", _number.NumberWidget);

_.widgetRegistry.register("object", _object.ObjectWidget);

_.widgetRegistry.register("select", _select.SelectWidget);

_.widgetRegistry.register("string", _string.StringWidget);

_.widgetRegistry.register("textarea", _textarea.TextAreaWidget);

_.widgetRegistry.register("search", _search.SearchWidget);

_.widgetRegistry.register("password", _password.PasswordWidget);

_.widgetRegistry.register("radiogroup", _radioGroup.RadioGroupWidget);

_.widgetRegistry.register("datepicker", _datePicker.DatePickerWidget);

_.widgetRegistry.register("rangepicker", _rangePicker.RangePickerWidget);

_.widgetRegistry.register("slider", _slider.SliderWidget);

_.widgetRegistry.setDefault(_string.StringWidget);

_.widgetRegistry.registrySF("form", _form.AntdForm);