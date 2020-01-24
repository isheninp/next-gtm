"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _head = _interopRequireDefault(require("next/head"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Gtm = function Gtm(params) {
  var gtm_id = params.id;
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_head["default"], null, _react["default"].createElement("script", {
    dangerouslySetInnerHTML: {
      __html: "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','".concat(gtm_id, "');")
    }
  })), _react["default"].createElement("noscript", {
    dangerouslySetInnerHTML: {
      __html: "<iframe src=\"https://www.googletagmanager.com/ns.html?id=".concat(gtm_id, "\" height=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"></iframe>")
    }
  }));
};

var _default = Gtm;
exports["default"] = _default;
