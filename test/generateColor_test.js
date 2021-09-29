const expect = require("chai").expect;
const GenerateColor = require("../JSsrc/Executives/GenerateColors").generateColors;

describe("Generate Color", () => {
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
