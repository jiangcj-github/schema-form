"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Action = void 0;

var _react = _interopRequireDefault(require("react"));

var _2 = require(".");

var _antd = require("antd");

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Action = function Action(props) {
  var context = _react.default.useContext(_2.SFContext);

  var onClick = function onClick() {
    var values = context.getValues();
    props.onClick && props.onClick.call(context, values);
  };

  return /*#__PURE__*/_react.default.createElement(_antd.Button, {
    type: props.type || "primary",
    shape: props.shape,
    loading: props.loading,
    icon: props.icon,
    disabled: props.disabled,
    style: _lodash.default.merge({
      marginRight: "12px"
    }, props.style),
    className: props.className,
    onClick: onClick
  }, props.text || "提交");
};

exports.Action = Action;