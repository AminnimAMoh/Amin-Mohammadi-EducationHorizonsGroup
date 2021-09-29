"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortColorsArray = void 0;
const sortColorsArray = (colors) => {
    const sortedData = colors.sort((a, b) => a.average - b.average);
    return sortedData;
};
exports.sortColorsArray = sortColorsArray;
//# sourceMappingURL=SortColorArray.js.map