const ShapeSVG = require('../lib/shapeSVG');

describe('ShapeSVG', () => {
  it('should generate correct square SVG element', () => {
    const square = new ShapeSVG('square', 'red');
    const expectedOutput = `<rect x="75" y="35" width="150" height="150" fill="red" />`;
    expect(square.generateShapeElement()).toBe(expectedOutput);
  });

  it('should generate correct circle SVG element', () => {
    const circle = new ShapeSVG('circle', 'green');
    const expectedOutput = `<circle cx="150" cy="112" r="60" fill="green" />`;
    expect(circle.generateShapeElement()).toBe(expectedOutput);
  });

  it('should generate correct triangle SVG element', () => {
    const triangle = new ShapeSVG('triangle', '#0000FF');
    const expectedOutput = `<polygon points="150,40 75,160 225,160" fill="#0000FF" />`;
    expect(triangle.generateShapeElement()).toBe(expectedOutput);
  });

  it('should return an empty string for an unknown shape', () => {
    const unknownShape = new ShapeSVG('unknown', 'pink');
    const expectedOutput = '';
    expect(unknownShape.generateShapeElement()).toBe(expectedOutput);
  });
});