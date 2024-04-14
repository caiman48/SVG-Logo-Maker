// Import the CLI class from a local file within the project structure

const CLI = require('./lib/cli.js');
// Create a new instance of the CLI class

const cli = new CLI();
// Call the 'run' method of the CLI instance to start the command line interface
cli.run();