"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const GenerateColor = require("../JSsrc/ColorGenerator").ColorGenerator;
function App() {
    const args = {
        dimensions: {
            width: 1920,
            height: 933,
        },
    };
    const test = new GenerateColor(args);
    console.log(test.constructColor());
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", null, "Hello")));
}
exports.default = App;
//# sourceMappingURL=App.js.map