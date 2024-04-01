const inquirer = require('inquirer');
const TextSVG = require('./textSVG');
const ShapeSVG = require('./shapeSVG');
const buildSVG = require('./buildSVG');
const { join } = require('path');
const { writeFile, mkdir } = require('fs/promises');

class CLI {
  constructor() {
    this.questions = [
      {
        type: "input",
        name: "text",
        message: "Enter up to 3 characters for the logo text:",
        validate: (input) => {
          if (input.length > 3) {
            return 'Please enter 3 characters or less.';
          }
          return true;
        },
      },
      {
        type: "input",
        name: "textColor",
        message: "Enter text color (name or hexadecimal value):",
      },
      {
        type: "list",
        name: "shape",
        message: "Choose a shape ",
        choices: ["square", "circle", "triangle"],
      },
      {
        type: "list",
        name: "shapeColor",
        message: "Enter shape color (name or hexadecimal value):",
        choices: [
          "red",
          "green",
          "blue",
          "yellow",
          "black",
          "white",
          "orange",
          "purple",
        ],
      },
    ];
  }
  run() { 
    inquirer.prompt(this.questions).then(answers => {
      const textSVGInstance = new TextSVG(answers.text, answers.textColor);
      const shapeSVGInstance = new ShapeSVG(answers.shape, answers.shapeColor);
      
      const textElement = textSVGInstance.generateTextElement(); 
      const shapeElement = shapeSVGInstance.generateShapeElement(); 
      
      const svgContent = buildSVG.buildSVG(textElement, shapeElement); 
      
      return writeFile(join(__dirname, '..', 'output', 'customLogo.svg'), svgContent);
    })
    .then(() => console.log('Custom logo successfully generated.'))
    .catch(error => console.error('Failed to generate logo:', error));
  }
}

module.exports = CLI;