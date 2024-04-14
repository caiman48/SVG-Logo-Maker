// Define a class named BuildSVG
class BuildSVG {
    // A static method named buildSVG, which constructs an SVG with given text and shape elements
  static buildSVG(textElement, shapeElement) {
        // Create a template string that holds the SVG markup
    const svgContent = `
        <svg width="300" height="200">
        ${shapeElement}
        ${textElement}
        </svg>
        `;
        // Return the constructed SVG content as a string
    return svgContent;
  }
}
// Export the BuildSVG class to make it available for use in other files
module.exports = BuildSVG;