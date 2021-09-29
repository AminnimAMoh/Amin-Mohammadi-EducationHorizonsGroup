"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateBoxSize = void 0;
const calculateBoxSize = ({ width, height, cellNumber }) => {
    const w = (width / cellNumber) / 2;
    const h = (height / cellNumber) / 2;
    return { width: w * 100, height: h * 100 };
};
exports.calculateBoxSize = calculateBoxSize;
//# sourceMappingURL=CalculateBoxSize.js.map