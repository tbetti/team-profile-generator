// Read in packages
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
// Read in other files
const questions = require('./src/questions')
const createCard = require('./src/htmlBody');
const generateHtml = require('./src/generateHtml');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');
// Define variables
const team = [];
const teamArr = [];
let id = 0;


// Create HTML
function writeToFile(fileName, data){
    return fs.writeFileSync(path.join('./dist/', fileName), data);
}

function fillCardContainer(team){
    team.forEach(member => {
        teamArr.push(createCard(member))
    });
}

// Prompt user for input and write to HTML file
function initInquire(){
    id++
    inquirer
    .prompt(questions.employeeQuestions)
    .then(data =>{
        // based on role, ask additional questions and read data
        checkRole(data);
    })
    .catch(err =>{
        console.log(err);
    })
}

// For each role, create object and push to team array
function checkRole(data){
    if(data.role === 'Manager'){
        inquirer
        .prompt(questions.managerQuestions)
        .then(additionalData=>{
            const manager = new Manager(data.name, id, data.email, additionalData.officeNumber);
            team.push(manager);
            askEndingQuestion();
        })
    }
    if(data.role === 'Engineer'){
        inquirer
        .prompt(questions.engineerQuestions)
        .then(additionalData=>{
            const engineer = new Engineer(data.name, id, data.email, additionalData.github);
            team.push(engineer);
            askEndingQuestion();
        })
    }
    if(data.role === 'Intern'){
        inquirer
        .prompt(questions.internQuestions)
        .then(additionalData=>{
            const intern = new Intern(data.name, id, data.email, additionalData.school);
            team.push(intern);
            askEndingQuestion();
        })
    }
    if(data.role === 'Other'){
        const other = new Employee(data.name, id, data.email);
        team.push(other);
        askEndingQuestion();
    }
}

function askEndingQuestion(){
    inquirer
    .prompt(questions.endingQuestion)
    .then(data =>{
        if(data.more === 'Yes'){
            initInquire();
        }else{
            fillCardContainer(team);
            writeToFile('/team-profile.html', generateHtml(teamArr.join('\n')));
            console.log('Done', teamArr);
        }
    })
}

initInquire();