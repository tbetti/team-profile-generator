const { it } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

const name = 'Tiana';
const id = 1;
const email = 'email@email.com';

describe('Employee class', () =>{
    describe('initialization', () =>{
        const employee = new Employee(name, id, email)
        it('should return an object containing name', () => {
            expect(employee.name).toBe(name);
        })
        it('should return an object containing id', () =>{
            expect(employee.id).toBe(id);
        })
        it('should return an object conatining email', () => {
            expect(employee.email).toBe(email);
        })
    })
    describe('getName function', () =>{
        it('should return "Tiana"', () =>{
            const employee = new Employee(name, id, email);

            expect(employee.getName()).toEqual('Tiana');
        })
    })
    describe('getId function', () =>{
        it('should return 1', () =>{
            const employee = new Employee(name, id, email);

            expect(employee.getId()).toEqual(1);
        })
    })
    describe('getEmail function', () =>{
        it('should return the email@email.com', () =>{
            const employee = new Employee(name, id, email);

            expect(employee.getEmail()).toEqual('email@email.com');
        })
    })
    describe('getRole function', () =>{
        it('should return "Employee"', () =>{
            const employee = new Employee(name, id, email);

            expect(employee.getRole()).toEqual('Employee');
        })
    })
})