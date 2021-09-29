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
exports.__esModule = true;
exports.ColorGenerator = void 0;
var ColorGenerator = /** @class */ (function () {
    function ColorGenerator(props) {
        var _this = this;
        this.calculateCellSize = function () {
            return "size=" + _this.dimensions.width + "x" + _this.dimensions.height;
        };
        this.constructColor = function () {
            var increment = Math.round(255 / 32);
            for (var r = 0; r < 255; r += increment) {
                for (var g = 0; g < 255; g += increment) {
                    for (var b = 0; b < 255; b += increment) {
                        var color = { red: Math.floor(r), green: g, blue: Math.round(b) };
                        _this.color.push(color);
                    }
                }
            }
            return __assign({}, _this.color);
        };
        this.dimensions = props.dimensions;
        this.color = [];
    }
    return ColorGenerator;
}());
exports.ColorGenerator = ColorGenerator;
module.exports.ColorGenerator = ColorGenerator;
//# sourceMappingURL=ColorGenerator.js.map