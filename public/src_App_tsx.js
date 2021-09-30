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
/* harmony import */ var _Executives_GenerateColours__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Executives/GenerateColours */ "./src/Executives/GenerateColours.tsx");
/* harmony import */ var _Executives_CalculateBoxSize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Executives/CalculateBoxSize */ "./src/Executives/CalculateBoxSize.tsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



 //Lazy loading to separate the weight of the build bundle.

const ColourBox = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() */ "src_Shared-Components_ColourBox_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ./Shared-Components/ColourBox */ "./src/Shared-Components/ColourBox.tsx")));

function App() {
  const [colours, setColours] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [canvasSize, setCanvasSize] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    width: 0,
    height: 0
  });
  const containerQuery = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null); //Using useEffect hook I am calling a class to generate the colours and return them in a sorted array;
  //useEffect helps to generate this class just once the first paint happens.

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    //Run functions handle the callback chain.
    setColours(new _Executives_GenerateColours__WEBPACK_IMPORTED_MODULE_1__.ColourGenerator().run());
  }, []); // To correctly calculate the size of each box you have to first calculate the surfacer of the canvas then divide it by the number of boxes.
  // So it will be 2c*2c=4c and to fit 6 boxes in this canvas you have to 4/6=0.666. So the width and height for perfect rectangles will be 0.666/2.

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let canvasWidth = 0;
    let canvasHeight = 0;

    if (colours && containerQuery.current) {
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
  }, canvasSize.width && (colours === null || colours === void 0 ? void 0 : colours.map((colour, index) => {
    const props = { ...colour,
      ...canvasSize,
      index
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ColourBox, _extends({
      key: index
    }, props));
  })));
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
//I have generated this solution when I was cooking diner by drawing the problem on the stove. 😃
// this function helps to grasp the span elements size. 
// To correctly calculate the size of each box you have to first calculate the surfacer of the canvas then divide it by the number of boxes.
// So it will be 2c*2c=4c and to fit 6 boxes in this canvas you have to 4/6=0.666. So the width and height for perfect rectangles will be 0.666/2.
const calculateBoxSize = ({
  width,
  height,
  cellNumber
}) => {
  const w = width / cellNumber / 2;
  const h = height / cellNumber / 2; //I timed values to 100 to be used as percentages.

  return {
    width: w * 100,
    height: h * 100
  };
};

/***/ }),

/***/ "./src/Executives/GenerateColours.tsx":
/*!********************************************!*\
  !*** ./src/Executives/GenerateColours.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColourGenerator": () => (/* binding */ ColourGenerator)
/* harmony export */ });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class ColourGenerator {
  constructor() {
    _defineProperty(this, "colors", []);

    _defineProperty(this, "run", () => {
      return this.sortColours();
    });

    _defineProperty(this, "generateColours", () => {
      //This nested loop is my solution to avoid duplication in the array.
      //Because for each iteration at list one value will change we can make sure there will not be any duplications
      //in the array.
      //Considering that this nested loop just runs at the first page I think the time complexity is forgivable.
      const increment = Math.round(255 / 32);

      for (let r = 0; r < 255; r += increment) {
        for (let g = 0; g < 255; g += increment) {
          for (let b = 0; b < 255; b += increment) {
            //Calculating the average of the colour generated for soring.
            const average = (r + g + b) / 3;
            const color = {
              red: Math.round(r),
              green: Math.round(g),
              blue: Math.round(b),
              average: average
            };
            this.colors.push(color);
          }
        }
      }

      return this.colors;
    });

    _defineProperty(this, "sortColours", (args = null) => {
      //In line 38 I have formed this condition as I wanted to send a controlled array of colours 
      //to this function and test it with a predicted response.
      //So line 38 is condition-based for unit testing.
      const colorsGenerated = args ? args : this.generateColours();
      this.colors = colorsGenerated.sort((a, b) => a.average - b.average);
      return this.colors;
    });
  }

}

/***/ })

}]);
//# sourceMappingURL=src_App_tsx.js.map