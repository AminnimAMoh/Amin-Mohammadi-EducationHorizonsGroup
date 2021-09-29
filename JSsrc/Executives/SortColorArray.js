"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortColorsArray = void 0;
// Sorting the colours array using the average of the red, gree, blue of the colour,
// from big to small (dark to bright).
const sortColorsArray = (colors) => {
    const sortedData = colors.sort((a, b) => a.average - b.average);
    return sortedData;
};
exports.sortColorsArray = sortColorsArray;
//# sourceMappingURL=SortColorArray.js.map