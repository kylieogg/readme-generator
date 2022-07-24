// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [];

// Array for user input
const promptInput = () => {
    console.log (``);

    return inquirer.prompt([
        {
            // Project Title
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },

        {
            // Description
            type: 'input',
            name: 'name',
            message: 'What is your name?'

        },

        {
            // Table of Contents
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },

        {
            // Installation
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },

        {
            // Usage
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },

        {
            // License Options
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },

        {
            // Contributing
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },

        {
            // Tests
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },

        {
            // Questions
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },

        {
            // GitHub Username (link to GitHub profile)
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },

        {
            // Email address (contained in Questions section)
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(promptInput)
}

// Function call to initialize app
init();
