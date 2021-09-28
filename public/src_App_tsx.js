"use strict";
(self["webpackChunkhappybirthday"] = self["webpackChunkhappybirthday"] || []).push([["src_App_tsx"],{

/***/ "./JSsrc/ColorGenerator.js":
/*!*********************************!*\
  !*** ./JSsrc/ColorGenerator.js ***!
  \*********************************/
/***/ ((module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ColorGenerator = void 0;
class ColorGenerator {
    constructor(props) {
        this.calculateCellSize = () => {
            return `size=${this.dimensions.width}x${this.dimensions.height}`;
        };
        this.constructColor = () => {
            const increment = Math.round(255 / 32);
            for (let r = 0; r < 255; r += increment) {
                for (let g = 0; g < 255; g += increment) {
                    for (let b = 0; b < 255; b += increment) {
                        const color = { red: Math.floor(r), green: g, blue: Math.round(b) };
                        this.color.push(color);
                    }
                }
            }
            return this.color;
        };
        this.dimensions = props.dimensions;
        this.color = [];
    }
}
exports.ColorGenerator = ColorGenerator;
module.exports.ColorGenerator = ColorGenerator;
//# sourceMappingURL=ColorGenerator.js.map

/***/ }),

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
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const GenerateColor = __webpack_require__(/*! ../JSsrc/ColorGenerator */ "./JSsrc/ColorGenerator.js").ColorGenerator;

const ColorBox = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() */ "src_Shared-Components_ColorBox_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ./Shared-Components/ColorBox */ "./src/Shared-Components/ColorBox.tsx")));

function App() {
  const [colors, setColors] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const args = {
    dimensions: {
      width: 1920,
      height: 933
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setColors(new GenerateColor(args).constructColor());
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Hello"), colors === null || colors === void 0 ? void 0 : colors.map((colors, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ColorBox, _extends({
      key: index
    }, colors));
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ })

}]);
//# sourceMappingURL=src_App_tsx.js.map