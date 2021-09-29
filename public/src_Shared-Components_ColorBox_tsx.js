"use strict";
(self["webpackChunkhappybirthday"] = self["webpackChunkhappybirthday"] || []).push([["src_Shared-Components_ColorBox_tsx"],{

/***/ "./src/Shared-Components/ColorBox.tsx":
/*!********************************************!*\
  !*** ./src/Shared-Components/ColorBox.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ColorBox({
  red,
  green,
  blue,
  width,
  height
}) {
  console.log(width, height);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "container_colorBox",
    style: {
      backgroundColor: `rgba(${red}, ${green}, ${blue}, 1)`,
      width: `${width}px`,
      height: `${height}px`
    }
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorBox);

/***/ })

}]);
//# sourceMappingURL=src_Shared-Components_ColorBox_tsx.js.map