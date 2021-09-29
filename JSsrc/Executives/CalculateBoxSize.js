"use strict";
exports.__esModule = true;
exports.calculateBoxSize = void 0;
var calculateBoxSize = function (_a) {
    var width = _a.width, height = _a.height, cellNumber = _a.cellNumber;
    var w = (width / cellNumber) / 2;
    var h = (height / cellNumber) / 2;
    return { width: w * 100, height: h * 100 };
};
exports.calculateBoxSize = calculateBoxSize;
//# sourceMappingURL=CalculateBoxSize.js.map