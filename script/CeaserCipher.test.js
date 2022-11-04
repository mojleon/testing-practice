const CeaserCipher = require('./CeaserCipher');

describe('CeaserCipher', () => {
    it('should shift a string by a given number', () => {
        expect(CeaserCipher("hello", 1)).toBe("ifmmp");
    });
    it('should shift a string by a given number', () => {
        expect(CeaserCipher("hello", -1)).toBe("gdkkn");
    });
    it('should shift a string by a given number', () => {
        expect(CeaserCipher("hello", 26)).toBe("hello");
    });
    it('testing the test punctuations', () => {
        expect(CeaserCipher("hello, world!", 1)).toBe("ifmmp, xpsme!");
    });
});