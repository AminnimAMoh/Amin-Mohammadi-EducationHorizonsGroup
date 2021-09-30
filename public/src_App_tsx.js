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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



 //Lazy loading to separate the weight of the build bundle.

var ColourBox = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
  return __webpack_require__.e(/*! import() */ "src_Shared-Components_ColourBox_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ./Shared-Components/ColourBox */ "./src/Shared-Components/ColourBox.tsx"));
});

function App() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      colours = _useState2[0],
      setColours = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    width: 0,
    height: 0
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      canvasSize = _useState4[0],
      setCanvasSize = _useState4[1];

  var containerQuery = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null); //Using useEffect hook I am calling a class to generate the colours and return them in a sorted array;
  //useEffect helps to generate this class just once the first paint happens.

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    //Run functions handle the callback chain.
    setColours(new _Executives_GenerateColours__WEBPACK_IMPORTED_MODULE_1__.ColourGenerator().run());
  }, []); // To correctly calculate the size of each box you have to first calculate the surfacer of the canvas then divide it by the number of boxes.
  // So it will be 2c*2c=4c and to fit 6 boxes in this canvas you have to 4/6=0.666. So the width and height for perfect rectangles will be 0.666/2.

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var canvasWidth = 0;
    var canvasHeight = 0;

    if (colours && containerQuery.current) {
      canvasWidth = containerQuery.current.clientWidth;
      canvasHeight = containerQuery.current.clientHeight;
    }

    var args = {
      width: canvasWidth,
      height: canvasHeight,
      cellNumber: 32768
    };
    setCanvasSize((0,_Executives_CalculateBoxSize__WEBPACK_IMPORTED_MODULE_2__.calculateBoxSize)(args));
  }, [containerQuery.current]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container",
    ref: containerQuery
  }, canvasSize.width && (colours === null || colours === void 0 ? void 0 : colours.map(function (colour, index) {
    var props = _objectSpread(_objectSpread(_objectSpread({}, colour), canvasSize), {}, {
      index: index
    });

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
var calculateBoxSize = function calculateBoxSize(_ref) {
  var width = _ref.width,
      height = _ref.height,
      cellNumber = _ref.cellNumber;
  var w = width / cellNumber / 2;
  var h = height / cellNumber / 2; //I timed values to 100 to be used as percentages.

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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ColourGenerator = function ColourGenerator() {
  var _this = this;

  _classCallCheck(this, ColourGenerator);

  _defineProperty(this, "colors", []);

  _defineProperty(this, "run", function () {
    return _this.sortColours();
  });

  _defineProperty(this, "generateColours", function () {
    //This nested loop is my solution to avoid duplication in the array.
    //Because for each iteration at list one value will change we can make sure there will not be any duplications
    //in the array.
    //Considering that this nested loop just runs at the first page I think the time complexity is forgivable.
    var increment = Math.round(255 / 32);

    for (var r = 0; r < 255; r += increment) {
      for (var g = 0; g < 255; g += increment) {
        for (var b = 0; b < 255; b += increment) {
          //Calculating the average of the colour generated for soring.
          var average = (r + g + b) / 3;
          var color = {
            red: Math.round(r),
            green: Math.round(g),
            blue: Math.round(b),
            average: average
          };

          _this.colors.push(color);
        }
      }
    }

    return _this.colors;
  });

  _defineProperty(this, "sortColours", function () {
    var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    //In line 38 I have formed this condition as I wanted to send a controlled array of colours 
    //to this function and test it with a predicted response.
    //So line 38 is condition-based for unit testing.
    var colorsGenerated = args ? args : _this.generateColours();
    _this.colors = colorsGenerated.sort(function (a, b) {
      return a.average - b.average;
    });
    return _this.colors;
  });
};

/***/ })

}]);
//# sourceMappingURL=src_App_tsx.js.map