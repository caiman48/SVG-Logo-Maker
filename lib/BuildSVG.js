class BuildSVG {
  static buildSVG(text, shape) {
    const svgContent = `
        <svg width="300" height="200">
        ${shape}
        <text x="10" y="20" fill="${text.color} ">${text.content}</text>
        </svg>
        `;
        return svgContent;
  }
}

module.exports = BuildSVG;

