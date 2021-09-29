"use strict";
(self["webpackChunkhappybirthday"] = self["webpackChunkhappybirthday"] || []).push([["src_App_tsx"],{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Executives_GenerateColors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Executives/GenerateColors */ "./src/Executives/GenerateColors.tsx");
/* harmony import */ var _Executives_CalculateBoxSize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Executives/CalculateBoxSize */ "./src/Executives/CalculateBoxSize.tsx");
/* harmony import */ var _Executives_SortColorArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Executives/SortColorArray */ "./src/Executives/SortColorArray.tsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const ColorBox = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() */ "src_Shared-Components_ColorBox_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ./Shared-Components/ColorBox */ "./src/Shared-Components/ColorBox.tsx")));

function App() {
  const [colors, setColors] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [sortedColors, setSortedColors] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [canvasSize, setCanvasSize] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    width: 0,
    height: 0
  });
  const containerQuery = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null); // To correctly calculate the size of each box you have to first calculate the surfacer of the canvas then divide it by the number of boxes.
  // So it will be 2c*2c=4c and to fit 6 box in this canvas you have to 4/6=0.666. So the width and height for a perfect rect will be 0.666/2.

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setColors((0,_Executives_GenerateColors__WEBPACK_IMPORTED_MODULE_1__.generateColors)());
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (colors) setSortedColors((0,_Executives_SortColorArray__WEBPACK_IMPORTED_MODULE_3__.sortColorsArray)(colors));
  }, [colors]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let canvasWidth = 0;
    let canvasHeight = 0;

    if (colors && containerQuery.current) {
      canvasWidth = containerQuery.current.clientWidth;
      canvasHeight = containerQuery.current.clientHeight;
    }

    const args = {
      width: canvasWidth,
      height: canvasHeight,
      cellNumber: 32768
    };
    setCanvasSize((0,_Executives_CalculateBoxSize__WEBPACK_IMPORTED_MODULE_2__.calculateBoxSize)(args));
  }, [containerQuery.current]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container",
    ref: containerQuery
  }, canvasSize.width && (sortedColors === null || sortedColors === void 0 ? void 0 : sortedColors.map((color, index) => {
    const props = { ...color,
      ...canvasSize,
      index
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ColorBox, _extends({
      key: index
    }, props));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", null, "Spiral Shape"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", null, "Color Grid"));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/Executives/CalculateBoxSize.tsx":
/*!*********************************************!*\
  !*** ./src/Executives/CalculateBoxSize.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculateBoxSize": () => (/* binding */ calculateBoxSize)
/* harmony export */ });
const calculateBoxSize = ({
  width,
  height,
  cellNumber
}) => {
  const w = width / cellNumber / 2;
  const h = height / cellNumber / 2;
  return {
    width: w * 100,
    height: h * 100
  };
};

/***/ }),

/***/ "./src/Executives/GenerateColors.tsx":
/*!*******************************************!*\
  !*** ./src/Executives/GenerateColors.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateColors": () => (/* binding */ generateColors)
/* harmony export */ });
let colors = [];
const generateColors = () => {
  const increment = Math.round(255 / 32);

  for (let r = 0; r < 255; r += increment) {
    for (let g = 0; g < 255; g += increment) {
      for (let b = 0; b < 255; b += increment) {
        const average = (r + g + b) / 3;
        const color = {
          red: Math.round(r),
          green: Math.round(g),
          blue: Math.round(b),
          average: average
        };
        colors.push(color);
      }
    }
  }

  return colors;
};

/***/ }),

/***/ "./src/Executives/SortColorArray.tsx":
/*!*******************************************!*\
  !*** ./src/Executives/SortColorArray.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sortColorsArray": () => (/* binding */ sortColorsArray)
/* harmony export */ });
// Sorting the colors array using the average of the red, gree, blue of the color,
// from big to small.
const sortColorsArray = colors => {
  const sortedData = colors.sort((a, b) => a.average - b.average);
  return sortedData;
};

/***/ })

}]);
//# sourceMappingURL=src_App_tsx.js.map