"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorGenerator = void 0;
class ColorGenerator {
    constructor(props) {
        this.calculateCellSize = () => {
            return `size=${this.dimensions.width}x${this.dimensions.height}`;
        };
        this.constructColor = () => {
            const increment = Math.round(255 / 32);
            for (let r = 0; r < 255; r += increment) {
                for (let g = 0; g < 255; g += increment) {
                    for (let b = 0; b < 255; b += increment) {
                        const color = { red: Math.floor(r), green: g, blue: Math.round(b) };
                        this.color.push(color);
                    }
                }
            }
            return this.color;
        };
        this.dimensions = props.dimensions;
        this.color = [];
    }
}
exports.ColorGenerator = ColorGenerator;
module.exports.ColorGenerator = ColorGenerator;
//# sourceMappingURL=ColorGenerator.js.map