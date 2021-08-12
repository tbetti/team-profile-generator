const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const questions = require('./src/questions')
const generateHtml = require('./src/generateHtml');
const { info } = require('console');

//Create HTML file in ./lib directory
function writeToFile(fileName, data){
    return fs.writeFileSync(path.join('./lib', fileName), data);
}

// Prompt user for input and write to HTML file
function initInquire(){
    inquirer
    .prompt(questions.employeeQuestions)
    .then(data =>{
        // export data to variables to be used outside of function
        const additionalInfo = checkRole(data);
        // based on role, ask additional questions and read data
        //writeToFile('/team-profile.html', generateHtml(data, additionalInfo));
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
            console.log(data, additionalData);
        })
    }
    if(data.role === 'Engineer'){
        inquirer
        .prompt(questions.engineerQuestions)
        .then(additionalData=>{
            console.log(data, additionalData);
        })
    }
    if(data.role === 'Intern'){
        inquirer
        .prompt(questions.internQuestions)
        .then(additionalData=>{
            console.log(data, additionalData);
        })
    }
}

initInquire();