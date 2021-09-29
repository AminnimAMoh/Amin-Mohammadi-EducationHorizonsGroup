"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const GenerateColor = require("../JSsrc/ColorGenerator").ColorGenerator;
const ColorBox = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require("./Shared-Components/ColorBox"))));
function App() {
    const [colors, setColors] = (0, react_1.useState)(null);
    const [canvasSize, setCanvasSize] = (0, react_1.useState)({ width: 0, height: 0 });
    const containerQuery = (0, react_1.useRef)(null);
    const args = {
        dimensions: {
            width: 1920,
            height: 933,
        },
    };
    // To correctly calculate the size of each box you have to first calculate the surfacer of the canvas then divide it by the number of boxes.
    // So it will be 2c*2c=4c and to fit 6 box in this canvas you have to 4/6=0.666. So the width and height for a perfect rect will be 0.666/2.
    (0, react_1.useEffect)(() => {
        setColors(new GenerateColor(args).constructColor());
    }, []);
    return (react_1.default.createElement("div", { className: "container", ref: containerQuery }, colors === null || colors === void 0 ? void 0 : colors.map((color, index) => {
        const props = Object.assign(Object.assign({}, color), canvasSize);
        return react_1.default.createElement(ColorBox, Object.assign({ key: index }, props));
    })));
}
exports.default = App;
//# sourceMappingURL=App.js.map