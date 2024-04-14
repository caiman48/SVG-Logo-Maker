// Import required modules
const inquirer = require('inquirer');// For command line interactions
const TextSVG = require('./textSVG');// Custom module to handle text in SVG
const ShapeSVG = require('./shapeSVG');// Custom module to handle shapes in SVG
const buildSVG = require('./buildSVG');// Custom module to assemble the SVG
const { join } = require('path');// Node.js path module to handle file paths
const { writeFile, mkdir } = require('fs/promises');// File system promises for writing files

// Define a class named CLI to handle the command line interface logic
class CLI {
  constructor() {
    // Define an array of questions to prompt the user
    this.questions = [
      {
        type: "input",
        name: "text",
        message: "Enter up to 3 characters for the logo text:",
        validate: (input) => {
         // Validate input to ensure it is 3 characters or less 
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
  // Method to execute the CLI application
  run() { 
    inquirer.prompt(this.questions).then(answers => {
      // Create instances for text and shape SVG components with user answers
      const textSVGInstance = new TextSVG(answers.text, answers.textColor);
      const shapeSVGInstance = new ShapeSVG(answers.shape, answers.shapeColor);
      // Generate SVG elements for text and shape
      const textElement = textSVGInstance.generateTextElement(); 
      const shapeElement = shapeSVGInstance.generateShapeElement(); 
      // Use the buildSVG module to combine the text and shape into one SVG content
      const svgContent = buildSVG.buildSVG(textElement, shapeElement); 
      // Write the SVG content to a file in the output directory
      return writeFile(join(__dirname, '..', 'output', 'customLogo.svg'), svgContent);
    })
    .then(() => console.log('Custom logo successfully generated.'))
    .catch(error => console.error('Failed to generate logo:', error));
  }
}
// Export the CLI class for use in other files
module.exports = CLI;