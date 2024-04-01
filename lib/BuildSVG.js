class BuildSVG {
  static buildSVG(textElement, shapeElement) {
    const svgContent = `
        <svg width="300" height="200">
        ${shapeElement}
        ${textElement}
        </svg>
        `;
    return svgContent;
  }
}

module.exports = BuildSVG;