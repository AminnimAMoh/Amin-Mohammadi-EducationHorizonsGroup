"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function ColorBox({ red, green, blue, width, height }) {
    // console.log(width, height);
    return (react_1.default.createElement("span", { className: "container_colorBox", style: {
            backgroundColor: `rgba(${red}, ${green}, ${blue}, 1)`,
            width: `${width}%`,
            height: `${height}%`,
        } }));
}
exports.default = ColorBox;
//# sourceMappingURL=ColorBox.js.map