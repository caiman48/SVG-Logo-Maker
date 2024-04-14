// Define a class named ShapeSVG for creating SVG shape elements
class ShapeSVG {
    // Constructor to initialize a new instance with a shape and color
  constructor(shape, color) {
      this.shape = shape;// Store the shape type (e.g., square, circle, triangle)
      this.color = color;// Store the color of the shape
  }
  

// Method to generate an SVG element based on the stored shape and color
generateShapeElement() {
      let shapeElement = '';// Initialize the shape element as an empty string

// Switch statement to handle different shape types
      switch (this.shape) {
          case 'square':
              shapeElement = `<rect x="75" y="35" width="150" height="150" fill="${this.color}" />`;
              break;
          case 'circle':
              shapeElement = `<circle cx="150" cy="112" r="60" fill="${this.color}" />`;
              break;
          case 'triangle':
              shapeElement = `<polygon points="150,40 75,160 225,160" fill="${this.color}" />`;
              break;
          default:
            shapeElement = '';
            break;
        }
// Return the generated SVG shape element
      return shapeElement;
  };
}
// Export the ShapeSVG class so it can be imported and used in other files
module.exports = ShapeSVG;