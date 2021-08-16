const questions = {
    employeeQuestions: [
        {
            type: 'input',
            name: 'name',
            message: 'Type your team member\'s name: ',
            validate: (answer) =>{
                if(answer != '')return true;
                else return 'Name is required';
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is this team member\'s email? ',
            validate: (answer) =>{
                const pass = answer.match(/^\S+@\S+$/);
                if(pass) return true;
                else return 'Please enter a valid email';
            }
        },
        {
            type: 'list',
            name: 'role',
            message: 'What is this team member\'s role? ',
            choices: ['Manager', 'Engineer', 'Intern', 'Other'],
        }
    ],
    managerQuestions: {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the manager\'s office number? ',
        validate: (answer) =>{
            const pass = answer.match(/^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/);
            if(pass) return true;
            else return 'Please enter a 10-digit phone number';
        }
    },
    engineerQuestions: {
        type: 'input',
        name: 'github',
        message: 'Type the engineer\'s GitHub username: ',
        validate: (answer) =>{
            if(answer != '') return true;
            else return 'Github username is required';
        }
    },
    internQuestions: {
        type: 'input',
        name: 'school',
        message: 'What school does the intern attend? ',
        validate: (answer) =>{
            if(answer != '') return true;
            else return 'School name is required';
        }
    },
    endingQuestion: {
        type: 'list',
        name: 'more',
        message: 'Do you have additional team members you would like to add? ',
        choices: ['Yes', 'No'],
    },
}

module.exports = questions;