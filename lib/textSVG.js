// Define a class named TextSVG for creating SVG text elements
class TextSVG {
  // Constructor to initialize a new instance with text content and text color
  constructor(text, color) {
    this.text = text;// Store the text to be displayed in the SVG
    this.color = color;// Store the color of the text
  }
// Method to generate an SVG text element based on the stored text and color
  generateTextElement() {
    // Return an SVG text element as a string
    // Sets the position of the text to be centered at (150, 125)
    // Sets font size to 35 and anchors the text in the middle to align at the center
    // Applies the color specified in the constructor for the text fill
    return `<text x="150" y="125" font-size="35" text-anchor="middle" fill="${this.color}">${this.text}</text>`;
  }
}
// Export the TextSVG class so it can be imported and used in other files
module.exports = TextSVG;