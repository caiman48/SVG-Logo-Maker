// Import the BuildSVG module from its location within the project structure
const BuildSVG = require('../lib/BuildSVG');

// Describe block defines a suite of tests for the BuildSVG class
describe('BuildSVG', () => {
  // 'test' function defines an individual test case
  test('should create an SVG content string with text and shape', () => {
    // Define sample text and shape elements to be used in the test
    const textElement = '<text>Test</text>';
    const shapeElement = '<rect></rect>';
    // Call the buildSVG static method of BuildSVG class with the text and shape elements
    const result = BuildSVG.buildSVG(textElement, shapeElement);
    // Check if the result contains the text element
    expect(result).toContain(textElement);
    // Check if the result contains the shape element
    expect(result).toContain(shapeElement);
    // Verify that the result string contains the expected SVG tag with specified dimensions
    expect(result).toContain('<svg width="300" height="200">');
  });
});