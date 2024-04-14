// Import the ShapeSVG module from its specific location within the project structure
const ShapeSVG = require('../lib/shapeSVG');
// Describe block defines a suite of tests for the ShapeSVG class
describe('ShapeSVG', () => {
  // 'it' function defines an individual test case
  // This test checks if the correct SVG for a square is generated
  it('should generate correct square SVG element', () => {
    // Instantiate a new ShapeSVG object with 'square' as shape and 'red' as color
    const square = new ShapeSVG('square', 'red');
    // Define the expected SVG output for a square
    const expectedOutput = `<rect x="75" y="35" width="150" height="150" fill="red" />`;
    // Assert that the generated SVG element matches the expected output
    expect(square.generateShapeElement()).toBe(expectedOutput);
  });
// This test checks if the correct SVG for a circle is generated
  it('should generate correct circle SVG element', () => {
    // Instantiate a new ShapeSVG object with 'circle' as shape and 'green' as color
    const circle = new ShapeSVG('circle', 'green');
    // Define the expected SVG output for a circle
    const expectedOutput = `<circle cx="150" cy="112" r="60" fill="green" />`;
    // Assert that the generated SVG element matches the expected output
    expect(circle.generateShapeElement()).toBe(expectedOutput);
  });
// This test checks if the correct SVG for a triangle is generated
  it('should generate correct triangle SVG element', () => {
    // Instantiate a new ShapeSVG object with 'triangle' as shape and '#0000FF' (blue) as color
    const triangle = new ShapeSVG('triangle', '#0000FF');
    // Define the expected SVG output for a triangle
    const expectedOutput = `<polygon points="150,40 75,160 225,160" fill="#0000FF" />`;
    // Assert that the generated SVG element matches the expected output
    expect(triangle.generateShapeElement()).toBe(expectedOutput);
  });
// This test checks if an unknown shape returns an empty string
  it('should return an empty string for an unknown shape', () => {
    // Instantiate a new ShapeSVG object with 'unknown' as shape and 'pink' as color
    const unknownShape = new ShapeSVG('unknown', 'pink');
    // Define the expected output for an unknown shape, which is an empty string
    const expectedOutput = '';
    // Assert that the generated SVG element for an unknown shape is an empty string
    expect(unknownShape.generateShapeElement()).toBe(expectedOutput);
  });
});