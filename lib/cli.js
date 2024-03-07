const inquirer = require("inquirer");
const ShapeSVG = require("./shapeSVG.js");
const BuildSVG = require("./BuildSVG.js");
const { join } = require("path");
const { writeFile } = require("fs");

class CLI {
  constructor() {
    this.questions = [
      {
        type: "input",
        name: "text",
        message: "Enter up to 3 characters for the logo text:",
        validate: (input) =>
          input.length <= 3 || "Please enter 3 characters or less.",
      },
      {
        type: "input",
        name: "textColor",
        message: "Enter text color (name or hexadecimal value):",
      },
      {
        type: "input",
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
    inquirer.prompt(this.questions).then((answers) => {
      const svg = new BuildSVG(answers);
      const shape = new ShapeSVG(answers.shape, answers.shapeColor);
      const shapeElement = shape.generateShapeElement();
      const svgString = svg.toString() + shapeElement;
      const filePath = join(__dirname, "..", "output", "logo.svg");
      writeFile(filePath, svgString, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log(`Logo saved to ${filePath}`);
        }
      });
    });
  }
}

module.exports = CLI;
