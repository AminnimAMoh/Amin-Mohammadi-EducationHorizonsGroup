"use strict";
exports.__esModule = true;
exports.generateColors = void 0;
var colors = [];
var generateColors = function () {
    var increment = Math.round(255 / 32);
    for (var r = 0; r < 255; r += increment) {
        for (var g = 0; g < 255; g += increment) {
            for (var b = 0; b < 255; b += increment) {
                var color = { red: Math.round(r), green: Math.round(g), blue: Math.round(b) };
                colors.push(color);
            }
        }
    }
    return colors;
};
exports.generateColors = generateColors;
//# sourceMappingURL=GenerateColors.js.map