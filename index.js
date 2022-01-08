// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    data = []
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'title',
            message: 'What is the project title? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter a title!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a project description.'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter steps for installation. Provide a step-by-step description of how to get the development enviroment running.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use. Include screenshots as needed.'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'List your collaborators, if any, with links to their GitHub profiles.'
        },
        {
            type: 'checkbox',
            name: 'licenses',
            message: 'Please choose all license that apply.',
            choices: ['MIT', 'Apache', "GNU", 'ISC', 'OBCD', 'None']
        },
        {
            type: 'input',
            name: 'tests',
            message: 'List some tests for your applications'
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username? (Required)',
            validate: userinput => {
                if (userinput) {
                    return true;
                } else {
                    console.log('Please enter a GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        }
    ])
};


// TODO: Create a function to write README file
const writeToFile = pageMD => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', pageMD, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

questions()
.then(data => {
    return generateMarkdown(data);
})
.then(pageMD => {
    return writeToFile(pageMD)
})
.then(writeFileResponse => {
    console.log(writeFileResponse.message)
})
.catch(err => {
    console.log(err);
});
