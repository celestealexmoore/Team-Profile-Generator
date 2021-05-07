const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateHTML = require("./Develop/generateHTML");

const allQuestions = {

    managerQuestions: [
        {
            name: 'managerName',
            message: `What is the name of the Team's Manager?`,
            type: 'input',
        },
        {
            name: 'managerEmail',
            message: `What is the manager's Email Address?`,
            type: 'input',
        },

        {
            name: 'managerOfficeNum',
            message: `What is the manager's Office Number?`,
            type: 'input',
        },

        {
            name: 'managerID',
            message: `What is the manager's ID number?`,
            type: 'input',
        },
        {
            type: 'list',
            name: 'employeeType',
            message: 'Which type of team member would you like to add?',
            choices: ['Engineer', 'Intern', `I don't want to add any more team members.`],
        }, 
    ],


    engineerQuestions: [
        {
            name: 'engineerName',
            message: `What is the name of the Team's Manager?`,
            type: 'input',
        },

        {
            name: 'engineerID',
            message: `What is the engineer's ID number?`,
            type: 'input',
        },

        {
            name: 'engineerEmail',
            message: `What is the manager's Email Address?`,
            type: 'input',
        },

        {
            name: 'engineerGithub',
            message: `What is the engineer's Github username?`,
            type: 'input',
        },

        {
            type: 'list',
            name: 'employeeType',
            message: 'Which type of team member would you like to add?',
            choices: ['Engineer', 'Intern', `I don't want to add any more team members.`],
        }, 
    ],

    internQuestions: [
        {
            name: 'internName',
            message: `What is the name of the Team's Manager?`,
            type: 'input',
        },

        {
            name: 'internID',
            message: `What is the intern's ID number?`,
            type: 'input',
        },

        {
            name: 'internEmail',
            message: `What is the intern's Email Address?`,
            type: 'input',
        },

        {
            name: 'internSchool',
            message: `What is the name of the school which the intern is enrolled?`,
            type: 'input',
        },


        {
            type: 'list',
            name: 'employeeType',
            message: 'Which type of team member would you like to add?',
            choices: ['Engineer', 'Intern', `I don't want to add any more team members.`],
        }, 
    ]
};

module.exports = allQuestions;


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(allQuestions)
    .then((response) => {
        console.log('Generating Team Profile Now!');
        writeToFile('index.html', generateHTML({... response}))
    })
}

//the '...' is called the "Spread method." If you don't use it, the response would all be jumbled onto one line.


// Function call to initialize app
init();