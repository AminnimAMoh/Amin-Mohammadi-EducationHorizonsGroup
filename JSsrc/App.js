"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
var react_1 = __importStar(require("react"));
var GenerateColors_1 = require("./Executives/GenerateColors");
var CalculateBoxSize_1 = require("./Executives/CalculateBoxSize");
var ColorBox = (0, react_1.lazy)(function () { return Promise.resolve().then(function () { return __importStar(require("./Shared-Components/ColorBox")); }); });
function App() {
    var _a = (0, react_1.useState)(null), colors = _a[0], setColors = _a[1];
    var _b = (0, react_1.useState)({
        width: 0,
        height: 0
    }), canvasSize = _b[0], setCanvasSize = _b[1];
    var containerQuery = (0, react_1.useRef)(null);
    // To correctly calculate the size of each box you have to first calculate the surfacer of the canvas then divide it by the number of boxes.
    // So it will be 2c*2c=4c and to fit 6 box in this canvas you have to 4/6=0.666. So the width and height for a perfect rect will be 0.666/2.
    (0, react_1.useEffect)(function () {
        setColors((0, GenerateColors_1.generateColors)());
    }, []);
    (0, react_1.useEffect)(function () {
        var canvasWidth = 0;
        var canvasHeight = 0;
        if (colors && containerQuery.current) {
            canvasWidth = containerQuery.current.clientWidth;
            canvasHeight = containerQuery.current.clientHeight;
        }
        var args = {
            width: canvasWidth,
            height: canvasHeight,
            cellNumber: 32768
        };
        setCanvasSize((0, CalculateBoxSize_1.calculateBoxSize)(args));
    }, [containerQuery.current]);
    return (react_1["default"].createElement("div", { className: "container", ref: containerQuery }, canvasSize.width && (colors === null || colors === void 0 ? void 0 : colors.map(function (color, index) {
        var props = __assign(__assign({}, color), canvasSize);
        return react_1["default"].createElement(ColorBox, __assign({ key: index }, props));
    }))));
}
exports["default"] = App;
//# sourceMappingURL=App.js.map