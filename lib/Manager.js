const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = 'Manager';
    }
    getRole(){
        return this.role;
    }
    getOfficeNumber(){
        return `<a href='tel:${this.officeNumber}' target='_blank'>${this.officeNumber.match(/.{1,3}/g).join('-')}</a>`
    }
}

module.exports = Manager;