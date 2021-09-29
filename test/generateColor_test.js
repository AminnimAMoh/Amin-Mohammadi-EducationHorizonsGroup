const expect = require("chai").expect;
const GenerateColor = require("../JSsrc/Executives/GenerateColors").generateColors;
const calculateCellSize = require("../JSsrc/Executives/CalculateBoxSize").calculateBoxSize;

describe("GenerateColor>constructColor", () => {
  const testObject = GenerateColor();
  it("Should correctly report return array length is 32768 from generateColor class constructor function.", () => {
    expect(testObject.length).to.be.equal(32768);
  });
  it("Should correctly report return array second object blue value is 8", () => {
    expect(testObject[1].blue).to.be.equal(8);
  });
  it("Should correctly report return array is incremented by 8 by checking first 6 blue values to be equal [0, 8, 16, 24, 32, 40]", () => {
    const blues = [
      testObject[0].blue,
      testObject[1].blue,
      testObject[2].blue,
      testObject[3].blue,
      testObject[4].blue,
      testObject[5].blue,
    ];
    expect(blues).to.have.deep.members([0, 8, 16, 24, 32, 40]);
  });
  it("Should correctly report return array last blue key value is NOT 265 as it is out of scope", () => {
    const blues = testObject[32];
    //As the colors are between 0-255 the for loop will reset reaching 256.
    expect(blues).to.not.be.equal(0);
  });
});

describe("Calculate Box Size", () => {
  const args = {
      width:256,
      height: 128,
      cellNumber: 32768
  };
  it("Should correctly report function return is not 0.058 for 256px width and 0.0 for 128px height", () => {
    expect(calculateCellSize(args)).to.not.be.equal({width: 0.058, height: 0.0284});
  });
  it("Should correctly report function return is 0.390625 for 256px width and 0.1953125 for 128px height", () => {
    expect(calculateCellSize(args)).to.be.equal({width: 0.390625, height: 0.1953125});
  });
});
