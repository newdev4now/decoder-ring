// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");


describe("substitution() tests", () => {
  describe("encoding a message", () => {
    it("should return false if alphabet is not exactly 26 characters", () => {
      const message = "abcdefghijk";
      const alphabet = "short";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });

    it("should correctly translate the given phrase", () => {
      const message = "whats wrong now";
      const alphabet = "qwertyuioplkjhgfdsazxcvbnm";
      const actual = substitution(message, alphabet);
      const expected = "viqza vsghu hgv";

      expect(actual).to.equal(expected);
    });

    it("should return false if any characters are duplicated in the given alphabet", () => {
      const message = "hello";
      const alphabet = "wxywxywxywxywxywxywxywxywx";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });

    it("should maintain spaces", () => {
      const message = "whats wrong now";
      const alphabet = ".,mnbvcxzasdfghjklpoiuytre";
      const actual = substitution(message, alphabet);
      const expected = "yx.op ylhgc ghy";

      expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
      const message = "Of course it does";
      const alphabet = "trewqgfdsabvcxzyuiophjklnm";
      const actual = substitution(message, alphabet);
      const expected = "zg ezhioq sp wzqo";

      expect(actual).to.equal(expected);
    })
  });


  describe("decoding a message", () => {
    it("should decode a message by using the given substitution alphabet", () => {
      const message = "jtaaqut";
      const alphabet = "qwertyuioplkjhgfdsazxcvbnm";
      const actual = substitution(message, alphabet, false);
      const expected = "message";

      expect(actual).to.equal(expected);
    });

    it("should maintain spaces", () => {
      const message = "yx.op ylhgc ghy";
      const alphabet = ".,mnbvcxzasdfghjklpoiuytre";
      const actual = substitution(message, alphabet, false);
      const expected = "whats wrong now";

      expect(actual).to.equal(expected);
    });
  });
});