"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorGenerator = void 0;
class ColorGenerator {
    constructor() {
        this.colors = [];
        this.run = () => {
            return this.sortColors();
        };
        this.generateColours = () => {
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
                        this.colors.push(color);
                    }
                }
            }
            return this.colors;
        };
        this.sortColors = (args = null) => {
            const colorsGenerated = args ? args : this.generateColours();
            this.colors = colorsGenerated.sort((a, b) => a.average - b.average);
            return this.colors;
        };
    }
}
exports.ColorGenerator = ColorGenerator;
//# sourceMappingURL=GenerateColors.js.map