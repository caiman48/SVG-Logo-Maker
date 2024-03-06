const inquiere = require('inquirer');
const fs = require('fs');
const {circle, Triangle, Square } = require('./shapeSVG.js');

class CLI {
    constructor() {
        this.options = [
            {
                type: 'list',
                name: 'shape',
                message: 'What shape would you like to create?',
                choices: ['circle', 'triangle', 'square']
            },
            {
                type: 'input',
                name: 'size',
                message: 'What size would you like the shape to be?'
            },
            {
                type: 'input',
                name: 'color',
                message: 'What color would you like the shape to be?'
            }
        ];  
    }