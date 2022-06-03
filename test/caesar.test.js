// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");



describe("caesar shift function", () => {

    it ("should return false if the shift value is equal to 0, less than -25, greater than 25, or not present", () => {
    const shiftValues = [0, -26, 26, null, undefined];
    const actual = shiftValues.every((shift) => {
    return !caesar("bob", shift);
    });
    expect(actual).to.be.true;
    });

    it ("should ignore capital letters", () => {
    const input = "I wonder NOW";
    const actual = caesar(input, 6);
    const expected = "o cutjkx tuc";
    expect(actual).to.equal(expected)
    });

    it ("handles shifts that go past z", () => {

        const input = "Zebra Magazine";
        const actual = caesar(input, 3);
        const expected = "cheud pdjdclqh";

        expect(actual).to.equal(expected);
    });

    it ("handles shifts that go left past a", () => {
        const input = "a";
        const actual = caesar(input, -3);
        const expected = "x";

        expect(actual).to.equal(expected)
    });

    it ("maintains spaces and characters when encoding", () => {
        const input = "b c!";
        const actual = caesar(input, 1);
        const expected = "c d!";

        expect(actual).to.equal(expected)
    });

    it ("maintains spaces and characters when decoding", () => {
        const input = "b c!";
        const actual = caesar(input, 1, false);
        const expected = "a b!";

        expect(actual).to.equal(expected);
    });

});