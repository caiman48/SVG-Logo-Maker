class ShapeSVG {
  constructor(shape, color) {
      this.shape = shape;
      this.color = color;
  }
  


generateShapeElement() {
      let shapeElement = '';

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
              console.error('Invalid shape:', this.shape);
              break;
      }

      return shapeElement;
  };
}

module.exports = ShapeSVG;