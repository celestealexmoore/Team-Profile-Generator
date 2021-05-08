const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./generateHTML");
const employeeArray = [];

const Employee = require("./lib/employee.js");
const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");

function writeToFile(fileName, htmlText) {
    console.log("Let's Build Your Team:");
    fs.writeFile(fileName, htmlText, (err) =>
        err ? console.error(err) : console.log('Success!'));
}


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


//asks the questions & generates the html
const askQuestions = (questions) => {
    inquirer
        .prompt(questions)
        .then((answers) => {
            //card process making begins
            if (employeeArray.length === 0) {
                const Manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNum);
                employeeArray.push(Manager);
            } else { //Determine whether current answers are Engineer's or Intern's and create/add appropriate object to employee array
                if (answers.engineerGithub) { // Engineer
                    const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
                    employeeArray.push(engineer);
                } else if (answers.school) { // Intern
                    const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
                    employeeArray.push(intern);
                }
            } //if engineer/intern are hit, render those questions else make html
            if (answers.employeeType === "Engineer") {
                askQuestions(engineerQuestions);
            } else if (answers.employeeType === "Intern") {
                askQuestions(internQuestions)
            } else { //its done, make the html
                writeToFile('./index.html', generateHTML(employeeArray));
            }
        })

        .catch(error => {
            if (error.isTtyError) {
                console.log("You need to use a different terminal to access this program.");
            } else {
                console.log("An error occurred.");
            }
        });
}

askQuestions(allQuestions);