const { describe, expect, it } = require('@jest/globals');
const Intern = require('../lib/Intern.js');

const name = 'Tiana';
const id = 2;
const email = 'intern@email.com';
const school = 'Columbia University';

describe('Intern class', () => {
    describe('initialization', () => {
        const intern = new Intern(name, id, email, school)
        it('should return an object extending the employee class with name', () => {
            expect(intern.name).toBe(name);
        })
        it('should return an object extending the employee class with id', () =>{
            expect(intern.id).toBe(id);
        })
        it('should return an object extending the employee class with email', () =>{
            expect(intern.email).toBe(email);
        })
        it('should return an object containing school', () =>{
            expect(intern.school).toBe(school);
        })
    })
    describe('getSchool function', () =>{
        it('should return "Columbia University"', () =>{
            const intern = new Intern(name, id, email, school);
            expect(intern.getSchool()).toEqual('Columbia University');
        })
    })
    describe('getRole function', () =>{
        it('should return "Intern"', () =>{
            const intern = new Intern(name, id, email, school);
            expect(intern.getRole()).toEqual('Intern');
        })
    })
})