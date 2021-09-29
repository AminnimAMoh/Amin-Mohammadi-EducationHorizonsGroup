const calculateBoxSize = ({ width, height, cellNumber }) => {
    const w = (width / cellNumber) / 2;
    const h = (height / cellNumber) / 2;
    return w;
};
module.exports.calculateBoxSize = calculateBoxSize;
//# sourceMappingURL=CalculateBoxSize.js.map