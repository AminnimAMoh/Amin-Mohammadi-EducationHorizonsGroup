const expect = require("chai").expect;
const GenerateColor = require("../JSsrc/ColorGenerator").ColorGenerator;
const args = {
  dimensions: {
    width: 1920,
    height: 933,
  },
};
describe("GenerateColor>constructColor", () => {
  const testObject = new GenerateColor(args).constructColor();
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

describe("GenerateColor>constructColor", () => {
  const testObject = new GenerateColor(args).calculateCellSize();
  it("Should correctly report return is expected cell size=1920x933 from generateColor class.", () => {
    expect(testObject).to.be.equal("size=1920x933");
  });
  it("Should correctly report return is not expected cell size=192x933 from generateColor class.", () => {
    expect(testObject).to.not.be.equal("size=192x933");
  });
});
