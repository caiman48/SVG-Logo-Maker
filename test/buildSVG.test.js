const BuildSVG = require('./buildSVG');

describe('BuildSVG', () => {
  test('should create an SVG content string with text and shape', () => {
    const textElement = '<text>Test</text>';
    const shapeElement = '<rect></rect>';
    const result = BuildSVG.buildSVG(textElement, shapeElement);
    expect(result).toContain(textElement);
    expect(result).toContain(shapeElement);
    expect(result).toContain('<svg width="300" height="200">');
  });
});