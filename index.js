const inquirer = require('inquirer');
const questions = require('./src/questions')
//const createCard = require('./src/htmlBody');
const generateHtml = require('./src/generateHtml');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');
let id = 0;

const fs = require('fs');
const path = require('path');

// Create HTML
function writeToFile(fileName, data){
    return fs.writeFileSync(path.join('./lib/', fileName), data);
}

// Prompt user for input and write to HTML file
function initInquire(){
    writeToFile('/team-profile.html', generateHtml);
    id++
    inquirer
    .prompt(questions.employeeQuestions)
    .then(data =>{
        // export data to variables to be used outside of function
        // based on role, ask additional questions and read data
        const additionalInfo = checkRole(data);
    })
    .catch(err =>{
        console.log(err);
    })
}

function checkRole(data){
    if(data.role === 'Manager'){
        inquirer
        .prompt(questions.managerQuestions)
        .then(additionalData=>{
            const manager = new Manager(data.name, id, data.email, additionalData.officeNumber);
            console.log(manager);
            // Attach info to HTML
            //createCard(manager);
            askEndingQuestion();
        })
    }
    if(data.role === 'Engineer'){
        inquirer
        .prompt(questions.engineerQuestions)
        .then(additionalData=>{
            const engineer = new Engineer(data.name, id, data.email, additionalData.github);
            console.log(engineer);
            // Attach info to HTML
            askEndingQuestion();
        })
    }
    if(data.role === 'Intern'){
        inquirer
        .prompt(questions.internQuestions)
        .then(additionalData=>{
            const intern = new Intern(data.name, id, data.email, additionalData.school);
            console.log(intern);
            // Attach info to HTML
            askEndingQuestion();
        })
    }
    if(data.role === 'Other'){
        const other = new Employee(data.name, id, data.email);
        console.log(other);
        // Attach info to HTML
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
            console.log('Done');
            //generateHtml();
        }
    })
}

initInquire();