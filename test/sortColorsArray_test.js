const expect = require("chai").expect;
const sortColorsArray =
  require("../JSsrc/Executives/SortColorArray").sortColorsArray;

describe("Sort Colors Array", () => {
  const args = [
    {
      red: 8,
      green: 32,
      blue: 0,
      average: 13.33,
    },
    {
      red: 0,
      green: 128,
      blue: 16,
      average: 48,
    },
    {
      red: 16,
      green: 0,
      blue: 128,
      average: 48,
    },
  ];
  it("Should correctly report function return a sorted array described in responce.", () => {
    const responce = [
      {
        red: 0,
        green: 128,
        blue: 16,
        average: 48,
      },
      {
        red: 16,
        green: 0,
        blue: 128,
        average: 48,
      },
      {
        red: 8,
        green: 32,
        blue: 0,
        average: 13.33,
      },
    ];
    expect(sortColorsArray(args)).to.have.deep.members(responce);
  });
});
