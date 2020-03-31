// Require packages
const inquirer = require('inquirer');

// Require classes
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

// Create an empty array for the team members
const teamArray = [];

// Prompt user to build their team
// One manager and as many interns and engineers as desired
function runPrompts(){
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the name of the manager?",
                name: "name"
            },
            // {
            //     type: "input",
            //     message: "What is the ID of the manager?",
            //     name: "id"
            // },
            // {
            //     type: "input",
            //     message: "What is the email of the manager?",
            //     name: "email"
            // },
            // {
            //     type: "input",
            //     message: "What is the office number of the manager?",
            //     name: "officeNumber"
            // },
            {
                type: "rawlist",
                message: "Add another team member?",
                name: "choice",
                choices: ['Engineer', 'Intern', 'Done']
            }
        ])
        // .then(function({name, id, email, officeNumber, choice}) {
            .then(function({name, choice}) {
            const manager = new Manager(name, '1', 'email@example.com', '101')
            teamArray.push(manager);
            if (choice === 'Engineer'){
                newEngineerPrompt();
            }
            else if (choice === 'Intern'){
                newInternPrompt();
            }
            else {
                buildTeam()
            }
        })
}

// Get new engineer info function
function newEngineerPrompt(){
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the name of this engineer?",
                name: "name"
            },
            // {
            //     type: "input",
            //     message: "What is the ID of the engineer?",
            //     name: "id"
            // },
            // {
            //     type: "input",
            //     message: "What is the email of engineer?",
            //     name: "email"
            // },
            // {
            //     type: "input",
            //     message: "What is the github of engineer?",
            //     name: "github"
            // },
            {
                type: "rawlist",
                message: "Add another team member?",
                name: "choice",
                choices: ['Engineer', 'Intern', 'Done']
            }
        ])
        // .then(function({name, id, email, github, choice}) {
        .then(function({name, choice}) {
            const engineer = new Engineer(name, '2', 'email@example.com', 'github account')
            teamArray.push(engineer);
            if (choice === 'Engineer'){
                newEngineerPrompt();
            }
            else if (choice === 'Intern'){
                newInternPrompt();
            }
            else {
                buildTeam()
            }
        })
}

function newInternPrompt(){
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the name of this intern?",
                name: "name"
            },
            // {
            //     type: "input",
            //     message: "What is the ID of the intern?",
            //     name: "id"
            // },
            // {
            //     type: "input",
            //     message: "What is the email of intern?",
            //     name: "email"
            // },
            // {
            //     type: "input",
            //     message: "What is the school of intern?",
            //     name: "school"
            // },
            {
                type: "rawlist",
                message: "Add another team member?",
                name: "choice",
                choices: ['Engineer', 'Intern', 'Done']
            }
        ])
        // .then(function({name, id, email, school, choice}) {
        .then(function({name, choice}) {
            const intern = new Intern(name, '3', 'email@example.com', 'Stanford')
            teamArray.push(intern);
            if (choice === 'Engineer'){
                newEngineerPrompt();
            }
            else if (choice === 'Intern'){
                newInternPrompt();
            }
            else {
                buildTeam()
            }
        })
}

function buildTeam(){
    console.log(teamArray);
}

// Run
runPrompts();

// Create a team.html file with the users team