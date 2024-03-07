class TextSVG {
  constructor(text, color) {
    this.text = text;
    this.color = color;
  }

  generateTextElement() {
    return `<text x="0" y="0" fill="${this.color}">${this.text}</text>`;
  }
}

module.exports = BuildSVG;
