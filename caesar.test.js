// Write your tests here!
const {expect} = require("chai");
const {caesar} = require("../src/caesar");



describe("caesar shift function", () => {

    it ("should return false if the shift value is equal to 0, less than -25, greater than 25, or not present", () => {
    const shiftValues = [0, -26, 26, null, undefined];
    const actual = shiftValues.every((shift) => {
    return !caesar("bob", shift);
    });
    expect(actual).to.be.true;
    });

    it ("should ignore capital letters", () => {
    const expected = "b"
    const actual = caesar("A", 1);
    expect(actual).to.equal(expected)
    });

    it ("handles shifts that go past z", () => {
        const expected = "c";
        const actual = caesar("z", 3);
        expect(actual).to.equal(expected)
    });

    it ("handles shifts that go left past a", () => {
        const expected = "x";
        const actual = caesar("a", -3);
        expect(actual).to.equal(expected)
    });

    it ("maintains spaces and characters when encoding", () => {
        const expected = "b c!";
        const actual = caesar("a b!", 1);
        expect(actual).to.equal(expected)
    });

    it ("maintains spaces and characters when decoding", () => {
        const test = "b c!";
        const expected = "a b!"
        const actual = caesar(test, 1, false);
        expect(actual).to.equal(expected);
    });

});