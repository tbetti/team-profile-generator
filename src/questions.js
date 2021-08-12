const questions = {
    employeeQuestions: [
        {
            type: 'input',
            name: 'name',
            message: 'Type your team member\'s name: ',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is this team member\'s email? ',
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
    },
    engineerQuestions: {
        type: 'input',
        name: 'github',
        message: 'Type the engineer\'s GitHub username: ',
    },
    internQuestions: {
        type: 'input',
        name: 'school',
        message: 'What school does the intern attend? ',
    },
}

module.exports = questions;