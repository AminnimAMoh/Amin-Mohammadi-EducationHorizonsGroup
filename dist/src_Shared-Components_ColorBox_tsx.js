"use strict";
exports.id = "src_Shared-Components_ColorBox_tsx";
exports.ids = ["src_Shared-Components_ColorBox_tsx"];
exports.modules = {

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
  const radius = 300 * Math.sin(index);
  const x = radius * Math.cos(angle);
  const y = radius * Math.sin(angle);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container_colorBox",
    style: {
      backgroundColor: `rgba(${red}, ${green}, ${blue}, 1)`,
      transform: `translate(${-50 + x * 50}%,${-50 + y * 50}%)`,
      width: `${width / 5}%`,
      height: `${height / 5}%`
    }
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorBox);

/***/ })

};
;
//# sourceMappingURL=src_Shared-Components_ColorBox_tsx.js.map