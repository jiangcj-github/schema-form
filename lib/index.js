"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {};
exports.default = void 0;

var _widgetFactory = require("./model/widget-factory");

Object.keys(_widgetFactory).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _widgetFactory[key];
    }
  });
});

var _formProperty = require("./model/form-property");

Object.keys(_formProperty).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _formProperty[key];
    }
  });
});

var _gridProperty = require("./model/grid-property");

Object.keys(_gridProperty).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _gridProperty[key];
    }
  });
});

var _widgetProperty = require("./model/widget-property");

Object.keys(_widgetProperty).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _widgetProperty[key];
    }
  });
});

var _widget = require("./model/widget");

Object.keys(_widget).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _widget[key];
    }
  });
});

var _sf = require("./model/sf");

Object.keys(_sf).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _sf[key];
    }
  });
});

var _schema = require("./utils/schema");

Object.keys(_schema).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _schema[key];
    }
  });
});

var _antd = require("./antd");

Object.keys(_antd).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _antd[key];
    }
  });
});

var _kpc = require("./kpc");

Object.keys(_kpc).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _kpc[key];
    }
  });
});
var _default = {
  use: function use(view) {
    _widgetFactory.widgetRegistry.setView(view);
  }
};
exports.default = _default;