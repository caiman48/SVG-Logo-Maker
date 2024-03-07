class ShapeSVG {
    constructor(shape, color) {
        this.shape = shape;
        this.color = color;
    }
    


generateShapeElement() {
        let shapeElement = '';

        switch (this.shape) {
            case 'square':
                shapeElement = `<rect width="100" height="100" fill="${this.color}" />`;
                break;
            case 'circle':
                shapeElement = `<circle cx="50" cy="50" r="50" fill="${this.color}" />`;
                break;
            case 'triangle':
                shapeElement = `<polygon points="50,0 100,100 0,100" fill="${this.color}" />`;
                break;
            default:
                console.error('Invalid shape:', this.shape);
                break;
        }

        return shapeElement;
    };
}

module.exports = ShapeSVG;

