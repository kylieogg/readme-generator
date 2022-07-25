// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [

        {
            // Project Title
            type: 'input',
            name: 'title',
            message: 'What is the title of the project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter a title for your project.');
                    return false;
                }
            }
        },

        {
            // Project description
            type: 'input',
            name: 'description',
            message: 'Enter a description of the project. (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please provide a description of the project.');
                    return false;
                }
            }

        },

        {
            // Installation
            type: 'input',
            name: 'installation',
            message: 'How do you install this application? (Required)',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please enter installation instructions.');
                    return false;
                }
            }
        },

        {
            // Usage
            type: 'input',
            name: 'usage',
            message: 'How is this application used? (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter application usage directions.');
                    return false;
                }
            }
        },

        {
            // License Options
            type: 'input',
            name: 'license',
            message: 'Choose a license for your application. (Required)',
            choices: ['Apache License 2.0', 'GNU General Public License', 'MIT License', 'Mozilla Public License 2.0', 'None'],
            validate: licenseInput => {
                if (licenseInput) {
                    return true;
                } else {
                    console.log('Please choose a license for the application.');
                    return false;
                }
            }
        },

        {
            // Contributing
            type: 'input',
            name: 'contribution',
            message: 'How can others contribute to this project?',
            validate: contributionInput => {
                if (contributionInput) {
                    return true;
                } else {
                    console.log('Please provide information on how to contribute to this project.');
                    return false;
                }
            }
        },

        {
            // Tests
            type: 'input',
            name: 'tests',
            message: 'How is this application tested? (Required)',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please explain how to test this application.');
                    return false;
                }
            }
        },

        {
            // GitHub Username (link to GitHub profile)
            type: 'input',
            name: 'github',
            message: 'Please enter your GitHub username. (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username.');
                    return false;
                }
            }
        },

        {
            // Email address (contained in Questions section)
            type: 'input',
            name: 'email',
            message: 'Would you like to enter an email address for this application?',
        },
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(promptInput)
}

// Function call to initialize app
init();
