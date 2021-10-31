const { expect } = require('chai');
const { rgbToHexColor } = require('./rgbToHex');

describe('RGB Check Color Test', () => {
    it('Check is valid type', () => {
        expect(rgbToHexColor(-1,0,0)).to.equals(undefined);
    })
    it('Check is valid type', () => {
        expect(rgbToHexColor(0,-1,0)).to.equals(undefined);
    })
    it('Check is valid type', () => {
        expect(rgbToHexColor(0,0,-1)).to.equals(undefined);
    })
    it('Check is valid type', () => {
        expect(rgbToHexColor(256,0,0)).to.equals(undefined);
    })
    it('Check black color', () => {
        expect(rgbToHexColor(0,0,0)).to.equals('#000000');
    })
    it('Check white color', () => {
        expect(rgbToHexColor(255,255,255)).to.equals('#FFFFFF');
    })
    it('Check red color', () => {
        expect(rgbToHexColor(255,0,0)).to.equals('#FF0000');
    })
    it('Check blue color', () => {
        expect(rgbToHexColor(0,0,255)).to.equals('#0000FF');
    })
})