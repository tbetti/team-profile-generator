const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const questions = require('./src/questions')
const generateHtml = require('./src/generateHtml');

//Create HTML file in ./lib directory
function writeToFile(fileName, data){
    return fs.writeFileSync(path.join('./lib', fileName), data);
}

// Prompt user for input and write to HTML file
function initInquire(){
    inquirer
    .prompt(questions)
    .then(data =>{
        writeToFile('/team-profile.html', generateHtml(data));
        console.log(data);
    })
    .catch(err =>{
        console.log(err);
    })
}

initInquire();