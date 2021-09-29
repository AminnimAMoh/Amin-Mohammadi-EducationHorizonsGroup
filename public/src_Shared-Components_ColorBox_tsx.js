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
  height,
  index
}) {
  const angle = 2 * Math.PI / 32768 * index;
  const radius = 100 * Math.sin(index);
  const x = radius * Math.cos(angle);
  const y = radius * Math.sin(angle);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "container_colorBox",
    style: {
      backgroundColor: `rgba(${red}, ${green}, ${blue}, 1)`,
      transform: `translate(${-50 + x * 100}%,${-50 + y * 100}%)`,
      width: `${width / 2}%`,
      height: `${height / 2}%`
    }
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorBox);

/***/ })

}]);
//# sourceMappingURL=src_Shared-Components_ColorBox_tsx.js.map