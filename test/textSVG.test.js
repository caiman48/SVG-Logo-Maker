const TextSVG = require('../lib/textSVG'); 

describe('TextSVG', () => {
  it('should generate a text SVG element with specified text and color', () => {
    
    const text = 'Hello, World!';
    const color = 'blue';
    const textSVG = new TextSVG(text, color);
    
    
    const expectedOutput = `<text x="150" y="125" font-size="35" text-anchor="middle" fill="${color}">${text}</text>`;

    
    expect(textSVG.generateTextElement()).toBe(expectedOutput);
  });
});