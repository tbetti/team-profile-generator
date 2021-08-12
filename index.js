const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const questions = require('./src/questions')
const generateHtml = require('./src/generateHtml');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
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
        // based on role, ask additional questions and read data
        const additionalInfo = checkRole(data);
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
            const manager = new Manager(data.name, data.id, data.email, additionalData.officeNumber);
            console.log(manager);
            askEndingQuestion();
        })
    }
    if(data.role === 'Engineer'){
        inquirer
        .prompt(questions.engineerQuestions)
        .then(additionalData=>{
            const engineer = new Engineer(data.name, data.id, data.email, additionalData.github);
            console.log(engineer);
            askEndingQuestion();
        })
    }
    if(data.role === 'Intern'){
        inquirer
        .prompt(questions.internQuestions)
        .then(additionalData=>{
            const intern = new Intern(data.name, data.id, data.email, additionalData.school);
            console.log(intern);
            askEndingQuestion();
        })
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