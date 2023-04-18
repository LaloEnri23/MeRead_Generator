// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateREADME = require('./utils/generateMarkdown');
const { error } = require('console');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your project:'
    },
    {
        type: 'input',
        name: 'projects information',
        message: 'Please provide usage instructions for your project:'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidelines for your project:'
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'Please provide your motivation for your project:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for your project:',
        choices: ['MIT', 'GPLv3', 'Apache', 'BSD', 'None']
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile("readme.md", data, (err) => {
        err ? console.log(err) : console.log('README.md file generated successfully!');

    });
}


// TODO: Create a function to initialize app

function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const readmeContent = generateREADME(answers);
          writeToFile(readmeContent);
        })
        .catch((error) => {
            console.error(error);
        });
}

// Function call to initialize app

init();


// Ask for the user input on the questions

// Get the user input and format a readme

//Write the file
