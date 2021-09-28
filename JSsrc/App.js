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
function App() {
    const [colors, setColors] = (0, react_1.useState)(null), l;
    const args = {
        dimensions: {
            width: 1920,
            height: 933,
        },
    };
    (0, react_1.useEffect)(() => {
        setColors(new GenerateColor(args).constructColor());
    });
    console.log(test);
    return (react_1.default.createElement("div", null, colors.map(({ red, blue, green }) => {
        react_1.default.createElement("div", { style: { backgroundColor: `rgba(${red}, ${green},${blue}, 1)` } });
    })));
}
exports.default = App;
//# sourceMappingURL=App.js.map