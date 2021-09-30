"use strict";
(self["webpackChunkhappybirthday"] = self["webpackChunkhappybirthday"] || []).push([["src_Shared-Components_ColourBox_tsx"],{

/***/ "./src/Shared-Components/ColourBox.tsx":
/*!*********************************************!*\
  !*** ./src/Shared-Components/ColourBox.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ColorBox(_ref) {
  var red = _ref.red,
      green = _ref.green,
      blue = _ref.blue,
      width = _ref.width,
      height = _ref.height,
      index = _ref.index;
  //In this line I am calculating the radian for each colour in the array by dividing Two PI by the total number of colours.
  //Next step each colour will grab a specific radian using its index in the array.
  var angle = 2 * Math.PI / 32768 * index; //In this section I am calculating the position for each span to form spiral shapes around a circle.
  //In this approach I have to increment the radius of each spiral using sin/cos of the index of the colour in the array
  //that will return a number between -1 and 1. Then this number is multiplied by the desired radius of the circle.
  //This equation will form a Fibonacci sequence for the radius of the circle.

  var radius = 450 * Math.sin(index); //Next two lines I am calculating the exact position of the coloured element around a circle using a Parametric Equation.
  //As I have a dynamic radius in the Fibonacci sequence the spiral shape will form.

  var x = -50 + radius * Math.cos(angle) * 50;
  var y = -50 + radius * Math.sin(angle) * 50;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container_colorBox",
    style: {
      backgroundColor: "rgba(".concat(red, ", ").concat(green, ", ").concat(blue, ", 1)"),
      transform: "translate(".concat(x, "%,").concat(y, "%)"),
      width: "".concat(width / 5, "%"),
      height: "".concat(height / 5, "%")
    }
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorBox);

/***/ })

}]);
//# sourceMappingURL=src_Shared-Components_ColourBox_tsx.js.map