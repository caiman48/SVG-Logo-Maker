// Import the TextSVG module from its specific location within the project structure

const TextSVG = require('../lib/textSVG'); 
// Describe block defines a suite of tests for the TextSVG class
  
describe('TextSVG', () => {
  // 'it' function defines an individual test case
  // This test verifies that the TextSVG class correctly generates an SVG text element
  it('should generate a text SVG element with specified text and color', () => {
    // Define test parameters: the text content and color
    const text = 'Hello, World!';// The text to be displayed in the SVG
    const color = 'blue';// The color of the text
        // Instantiate a new TextSVG object with the specified text and color

    const textSVG = new TextSVG(text, color);
    // Define the expected SVG output, which includes the attributes for positioning,
    // font size, text alignment, and fill color
    
    
    const expectedOutput = `<text x="150" y="125" font-size="35" text-anchor="middle" fill="${color}">${text}</text>`;

        // Assert that the generated SVG text element matches the expected output
    expect(textSVG.generateTextElement()).toBe(expectedOutput);
  });
});