"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
function ColorBox(_a) {
    var red = _a.red, green = _a.green, blue = _a.blue, width = _a.width, height = _a.height;
    // console.log(width, height);
    return (react_1["default"].createElement("span", { className: "container_colorBox", style: {
            backgroundColor: "rgba(" + red + ", " + green + ", " + blue + ", 1)",
            width: width + "%",
            height: height + "%"
        } }));
}
exports["default"] = ColorBox;
//# sourceMappingURL=ColorBox.js.map