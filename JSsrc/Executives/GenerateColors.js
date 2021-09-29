"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateColors = void 0;
let colors = [];
const generateColors = () => {
    const increment = Math.round(255 / 32);
    for (let r = 0; r < 255; r += increment) {
        for (let g = 0; g < 255; g += increment) {
            for (let b = 0; b < 255; b += increment) {
                const average = (r + g + b) / 3;
                const color = {
                    red: Math.round(r),
                    green: Math.round(g),
                    blue: Math.round(b),
                    average: average,
                };
                colors.push(color);
            }
        }
    }
    return colors;
};
exports.generateColors = generateColors;
//# sourceMappingURL=GenerateColors.js.map