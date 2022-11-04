const ReverseString = require("./ReverseString")

describe("ReverseString", () => {
    it("should reverse a string", () => {
        expect(ReverseString("hello")).toBe("olleh");
    });
});