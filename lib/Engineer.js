const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
        this.role = 'Engineer';
    }
    getGithub(){
        return `<a href='https://github.com/${this.github}' target='_blank'>github.com/${this.github}</a>`;
    }
    getRole(){
        return this.role;
    }
}
module.exports = Engineer;