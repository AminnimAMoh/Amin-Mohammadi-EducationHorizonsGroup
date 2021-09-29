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
  //In this line I am calculating the radian for each colour in the array by dividing Two PI by the total number of colours.
  //Next step each colour will grab a specific radian using its index in the array.
  const angle = 2 * Math.PI / 32768 * index; //In this section I am calculating the position for each span to form spiral shapes around a circle.
  //In this approach I have to increment the radius of each spiral using sin/cos of the index of the colour in the array
  //that will return a number between -1 and 1. Then this number is multiplied by the desired radius of the circle.
  //This equation will form a Fibonacci sequence for the radius of the circle.

  const radius = 300 * Math.sin(index); //Next two lines I am calculating the exact position of the coloured element around a circle using a Parametric Equation.
  //As I have a dynamic radius in the Fibonacci sequence the spiral shape will form.

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

}]);
//# sourceMappingURL=src_Shared-Components_ColorBox_tsx.js.map