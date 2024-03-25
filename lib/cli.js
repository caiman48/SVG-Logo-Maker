const inquirer = require('inquirer');
const textSVG = require('./textSVG');
const shapeSVG = require('./shapeSVG');
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
      
      const textSVG = textSVGInstance.generateTextElement();
      const shapeSVG = shapeSVGInstance.generateShapeElement();
      
      const svgContent = BuildSVG.buildSVG({ content: answers.text, color: answers.textColor }, shapeSVG); // Adjusted for expected structure
      
      return writeFile(join(__dirname, '..', 'output', 'customLogo.svg'), svgContent);
    })
    .then(() => console.log('Custom logo successfully generated.'))
    .catch(error => console.error('Failed to generate logo:', error));
  }
}

module.exports = CLI;

