const twoexp = require('./twoexp');

describe('twoexp()', () => {
    it('should calc 2^0', ()=>{
        expect(twoexp(0)).toBe(1);
    });

    it('should calc 2^3', () => {
        expect(twoexp(3)).toBe(8);
    });

    it('should calc 2^1', () => {
        expect(twoexp(1)).toBe(2);
    });

    it('should calc 2^-1', () => {
        expect(twoexp(-1)).toBe(0.5);
    });

    it('should calc 2^-2', () => {
        expect(twoexp(-2)).toBe(0.25);
    });
});