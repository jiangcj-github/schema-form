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

var _string = require("./widgets/string");

var _form = require("./form");

_.widgetRegistry.register("string", _string.StringWidget);

_.widgetRegistry.setDefault(_string.StringWidget);

_.widgetRegistry.registrySF("form", _form.KpcForm);