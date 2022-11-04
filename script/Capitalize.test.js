const capitalize = require('./Capitalize');

describe('Capitalize', () => {
    it('should capitalize the first letter of a string', () => {
        expect(capitalize('hello')).toBe('Hello');
    });
});