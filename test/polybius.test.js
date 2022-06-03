// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius function", () => {
  describe("encoding a message", () => {
    it("should translate the letters 'i' and 'j' to 42", () => {
      const message = "Junior Jilsen";
      const actual = polybius(message);
      const expected = "425433424324 424213345133";

      expect(actual).to.equal(expected);

    });

    it("should ignore capital letters", () => {
      const message = "This is a message";
      const actual = polybius(message);
      const expected = "44324234 4234 11 23513434112251";

      expect(actual).to.equal(expected);
    });

    it("should maintain spaces as is", () => {
      const message = "We have a winner";
      const actual = polybius(message);
      const expected = "2551 32111551 11 254233335124";

      expect(actual).to.equal(expected);
    });
  });


  describe("decoding a message", () => {
    it("should translate 42 to both 'i' and 'j'", () => {
      const message = "425433424324 424213345133";
      const actual = polybius(message, false);

      expect(actual).to.include("i");
      expect(actual).to.include("j");
    });

    it("should leave spaces as is", () => {
      const message = "25244244423322 44513444 4234 443251 43331345 251145 4443 2243";
      const actual = polybius(message, false);
      const expected = "wr(i/j)t(i/j)ng test (i/j)s the only way to go";

      expect(actual).to.equal(expected);
    });
  });
});