const inquierer = require("inquirer");
const shapeSVG = require("./shape-svg.js");
const BuildSVG = require("./build-svg.js");
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
      },
    ];
  }
}
