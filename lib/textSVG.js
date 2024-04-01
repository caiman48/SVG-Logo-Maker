class TextSVG {
  constructor(text, color) {
    this.text = text;
    this.color = color;
  }

  generateTextElement() {
    return `<text x="150" y="125" font-size="35" text-anchor="middle" fill="${this.color}">${this.text}</text>`;
  }
}

module.exports = TextSVG;
